import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('400ms ease-out')),
      transition('inactive => active', animate('400ms ease-in')),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() backsideContent = '';
  @Input() frontsideContent = '';
  flippedCard = 'inactive';
  constructor() {}

  ngOnInit(): void {}

  flipCard() {
    this.flippedCard = this.flippedCard == 'inactive' ? 'active' : 'inactive';
  }
}
