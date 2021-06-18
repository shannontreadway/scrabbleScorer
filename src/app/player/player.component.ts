import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

const scrabblePoints = {a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  wordsWithPoints: WordPtObj[] = [];
  gameScore: number = 0;
  allTilesUsed: boolean = false;
  newWord: string = "";
  wordToScore: string = "";

  constructor() { }

  ngOnInit() {
  }

  scoreWord(wordToScore: string, allTilesUsed: boolean): number{
    let score = 0;
    for (const char of wordToScore.toLowerCase()) {
      score += scrabblePoints[char];
    };
    if(allTilesUsed){
      score += 75;
    };
    return score;
  };

  updateWordsAndScores() {
    const score: number = this.scoreWord(this.wordToScore, this.allTilesUsed);
    const wordObject = new WordPtObj(this.newWord, score, this.allTilesUsed);
    this.wordsWithPoints.unshift(wordObject);
    this.gameScore += score;
    this.allTilesUsed = false;
    this.newWord = "";
    this.wordToScore = "";
    return;
  };
  
};

class WordPtObj{
  word: string;
  pointValue: number;
  allTilesUsed: boolean;

  constructor(word: string, pointValue: number, allTilesUsed: boolean) {
    this.word = word;
    this.pointValue = pointValue;
    this.allTilesUsed = allTilesUsed;
  };
};


