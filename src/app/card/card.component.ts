import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CardsService} from '../shared/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() changeTitle = new EventEmitter<string>()
  constructor(public cardsService: CardsService) {
  }

  ngOnInit(): void {
  }

  setTitle(tag: string): void {
    this.changeTitle.emit(tag)
  }
}
