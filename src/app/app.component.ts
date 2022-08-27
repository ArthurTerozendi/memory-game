import { Component } from '@angular/core';
import { Card } from './components/card/interfaces/card.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'memory-game';
  cards: Card[] = [
    {
      id: '1',
      content: '🤣',
      flipped: false,
      found: false,
    },
    {
      id: '2',
      content: '🤣',
      flipped: false,
      found: false,
    },
    {
      id: '3',
      content: '😍',
      flipped: false,
      found: false,
    },
    {
      id: '4',
      content: '😍',
      flipped: false,
      found: false,
    },
  ];
}
