import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  words: string[] = [];
  wordScores: number[] = [];
  wordsWithPoints: WordPtObj[] = [];
  wordForObject: string = "";
  gameScore: number = 0;
  score: number = 0;
  scrabblePoints = {a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};

  constructor() { }

  ngOnInit() {
  }

  addWord(newWord: string){
    this.wordForObject = newWord;
    return this.words.unshift(newWord);
  }

  scoreWord(newWord: string){
    this.score = 0;
    newWord = newWord.toLowerCase();
    let newWordArray = newWord.split("");
    for (let i = 0; i < newWordArray.length; i++){
      this.score += this.scrabblePoints[newWordArray[i]];
    };
    return this.wordScores.unshift(this.score);
  }

  updateWordsAndScores(newWord: string) {
    this.addWord(newWord);
    this.scoreWord(newWord);
    let wordObject = new WordPtObj(this.wordForObject, this.score)
    this.wordsWithPoints.unshift(wordObject);
    this.gameScore += this.score;
    return;
  }
  
}

class WordPtObj{
  word: string;
  pointValue: number;

  constructor(word: string, pointValue: number) {
    this.word = word;
    this.pointValue = pointValue;
  }
}
