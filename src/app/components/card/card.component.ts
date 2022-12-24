import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Card } from './interfaces/card.entity';
import { CardService } from './card.service';

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
  @Input() card = new Card();
  
  flippedCard = this.card.flipped ? 'active' : 'inactive';

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.flipCardToInitialState$.subscribe(() => {
      if (!this.card.found) this.flippedCard = 'inactive';
    });
    this.cardService.foundCard$.subscribe((cards) => {
      cards.forEach((c) => {
        if (c.id === this.card.id) this.card.found = true;
      });
    });
  }

  flipCard() {
    if (this.flippedCard != 'active' && this.cardService.countFlippedCards < 2) {
      this.cardService.countFlippedCards++;
      this.flippedCard = 'active';
      this.cardService.emitFlippedCard(this.card);
    }
  }
}
