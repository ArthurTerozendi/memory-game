import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from './interfaces/card.entity';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  countFlippedCards: number = 0;

  private flippedCard = new BehaviorSubject<Card | undefined>(undefined);
  flippedCard$ = this.flippedCard.asObservable();
  
  private foundCard = new BehaviorSubject<Card[]>([]);
  foundCard$ = this.foundCard.asObservable();
  
  private flipCardToInitialState = new BehaviorSubject<boolean>(false);
  flipCardToInitialState$ = this.flipCardToInitialState.asObservable();
  
  emitFlippedCard(card: Card): void {
    this.flippedCard.next(card);
  }

  emitFoundCard(cards: Card[]): void {
    this.foundCard.next(cards);
  }

  emitflipCardToInitialState(): void {
    this.flipCardToInitialState.next(true);
  }
}


