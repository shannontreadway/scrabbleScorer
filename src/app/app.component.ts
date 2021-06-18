import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scrabble Scorer';
  hidden: boolean = false;

  toggleDisplay() {
    this.hidden = true;
    return;
  }
}
