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
      front: 'front 1',
    },
    {
      front: 'front 2',
    },
    {
      front: 'front 3',
    },
  ];
}
