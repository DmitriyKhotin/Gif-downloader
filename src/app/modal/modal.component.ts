import { Component } from '@angular/core';
import {CardsService} from '../shared/cards.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{

  constructor(public cardsService: CardsService) {
  }

}
