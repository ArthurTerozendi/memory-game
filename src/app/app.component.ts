import { Component, OnInit } from '@angular/core';
import { CardService } from './components/card/card.service';
import { Card } from './components/card/interfaces/card.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'memory-game';
  cards: Card[] = [];
  flippedCard: Card | undefined = undefined;
  foundedCards: Card[] = [];
  currentPlayer: '1' | '2' = '1';
  score: { '1': number; '2': number } = { '1': 0, '2': 0 };
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.resetBoard();
    this.cardService.flippedCard$.subscribe((card) => {
      setTimeout(() => {
        if (card) {
          if (!this.flippedCard) {
            this.flippedCard = card;
          } else {
            if (this.flippedCard.content === card.content) {
              this.score[this.currentPlayer]++;
              this.foundedCards.push(this.flippedCard, card);
              this.cardService.emitFoundCard(this.foundedCards);
            } else {
              this.currentPlayer =
                this.currentPlayer == '1' ? '2' : '1';
              this.cardService.emitflipCardToInitialState();
            }
            this.cardService.countFlippedCards = 0;
            this.flippedCard = undefined;
          }
        }
      }, 1000);
    });
  }

  getCards(): Card[] {
    return [
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
      {
        id: '5',
        content: '😴',
        flipped: false,
        found: false,
      },
      {
        id: '6',
        content: '😴',
        flipped: false,
        found: false,
      },
      {
        id: '7',
        content: '🤨',
        flipped: false,
        found: false,
      },
      {
        id: '8',
        content: '🤨',
        flipped: false,
        found: false,
      },
      {
        id: '9',
        content: '🤩',
        flipped: false,
        found: false,
      },
      {
        id: '10',
        content: '🤩',
        flipped: false,
        found: false,
      },
      {
        id: '11',
        content: '😎',
        flipped: false,
        found: false,
      },
      {
        id: '12',
        content: '😎',
        flipped: false,
        found: false,
      },
      {
        id: '13',
        content: '🤮',
        flipped: false,
        found: false,
      },
      {
        id: '14',
        content: '🤮',
        flipped: false,
        found: false,
      },
      {
        id: '15',
        content: '😤',
        flipped: false,
        found: false,
      },
      {
        id: '16',
        content: '😤',
        flipped: false,
        found: false,
      },
      {
        id: '15',
        content: '🤯',
        flipped: false,
        found: false,
      },
      {
        id: '16',
        content: '🤯',
        flipped: false,
        found: false,
      },
    ];
  }

  resetBoard(): void {
    this.cards = this.getCards();
    this.shuffleCards();
    this.resetVariables();
  }

  resetVariables(): void {
    this.cardService.countFlippedCards = 0;
    this.score = { '1': 0, '2': 0 };
    this.flippedCard = undefined;
    this.currentPlayer = '1';
  }

  shuffleCards(): void {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
}
