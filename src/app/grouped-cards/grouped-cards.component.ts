import { Component } from '@angular/core';
import {Card, CardsService} from '../shared/cards.service';

@Component({
  selector: 'app-grouped-cards',
  templateUrl: './grouped-cards.component.html',
  styleUrls: ['./grouped-cards.component.css']
})
export class GroupedCardsComponent{

  constructor(public cardsService: CardsService) {
  }

}
