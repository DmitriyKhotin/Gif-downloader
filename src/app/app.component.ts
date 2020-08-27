import { Component } from '@angular/core';
import {Card, CardsService} from './shared/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public cardsService: CardsService) {
  }

  title = ''

  groupBtn: 'Разруппировать' | 'Группировать' = 'Группировать'

  loadCard(): void {
    if (this.title) {
      this.cardsService.loadCard(this.title)
    }
    else
      alert('Заполните поле')
  }

  deleteAll(): void {
    this.cardsService.cards = []
    this.cardsService.groupCards = []
    this.title = ''
  }

  changeTitle(title: string): void {
    this.title = title
  }

  groupByTag(): void {
    let cards: Card[] = []
    if (this.groupBtn === 'Группировать') {
      this.cardsService.cards = []

      this.cardsService.groupCards.forEach((card) => {
        if (this.cardsService.cards[card.tag])
          this.cardsService.cards[card.tag] = [...this.cardsService.cards[card.tag].filter(newCard => newCard.tag === card.tag), card]
        else
            this.cardsService.cards[card.tag] = [card]
      })
    }
    else {
      this.cardsService.cards = this.cardsService.groupCards.slice()
    }
    this.groupBtn === 'Группировать' ?  this.groupBtn = 'Разруппировать' : this.groupBtn = 'Группировать'
  }
}
