import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  words: string[] = [];
  wordToScore: string = "";
  wordScores: number[] = [];
  wordsWithPoints: WordPtObj[] = [];
  wordForObject: string = "";
  gameScore: number = 0;
  score: number = 0;
  allTiles: boolean = false;
  scrabblePoints = {a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

  constructor() { }

  ngOnInit() {
  }

  addWord(newWord: string){
    this.wordForObject = newWord;
    return this.words.unshift(newWord);
  }

  bonusPoints() {
    this.allTiles = true;
    return;
  }

  scoreWord(wordToScore: string){
    this.score = 0;
    wordToScore = wordToScore.toLowerCase();
    let newWordArray = wordToScore.split("");
    for (let i = 0; i < newWordArray.length; i++){
      this.score += this.scrabblePoints[newWordArray[i]];
    };
    if(this.allTiles){
      this.score += 75;
    }
    return this.wordScores.unshift(this.score);
  }

  updateWordsAndScores(newWord: string, wordToScore: string) {
    this.addWord(newWord);
    this.scoreWord(wordToScore);
    let wordObject = new WordPtObj(this.wordForObject, this.score, this.allTiles);
    this.wordsWithPoints.unshift(wordObject);
    this.allTiles=false;
    this.gameScore += this.score;
    return;
  }
  
}

class WordPtObj{
  word: string;
  pointValue: number;
  allTilesUsed: boolean;

  constructor(word: string, pointValue: number, allTilesUsed: boolean) {
    this.word = word;
    this.pointValue = pointValue;
    this.allTilesUsed = allTilesUsed;
  }
}
