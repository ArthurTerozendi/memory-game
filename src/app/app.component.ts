import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'memory-game';
  cards = [
    {
      back: 'back 1',
      front: 'front 1'
    },
    {
      back: 'back 2',
      front: 'front 2'
    },
    {
      back: 'back 3',
      front: 'front 3'
    },
  ];
}
