import {Injectable} from '@angular/core';
import axios from 'axios';

export interface Card {
  id: string
  image_url: string
  tag: string
}

export interface Modal {
  title: string
  vision: boolean
}
@Injectable({ providedIn: 'root' })

export class CardsService {
  cards: Card[] = []
  groupCards: Card[] = []

  loading = false
  modal: Modal = {
    title: '',
    vision: false
  }

  loadCard(tag: string): never | any {
    this.loading = true
    axios
      .get(`https://api.giphy.com/v1/gifs/random?api_key=OlVe1oxvriQoOPu8JORuUtSphtwPepbq&tag=${tag}`)
      .then(response => response.data)
      .then(response => {
        if (response.data.length !== 0) {
          this.cards.push({
            id: response.data.id,
            image_url: response.data.image_url,
            tag
          })
          this.groupCards.push({
            id: response.data.id,
            image_url: response.data.image_url,
            tag
          })
        }
        else {
          this.modal.vision = true
          this.modal.title = 'По тегу ничего не найдено'
        }
      })
      .catch(() => {
        this.modal.vision = true
        this.modal.title = 'Произошла http ошибка'
      })
      .finally(() => {
        this.loading = false
      })
  }
}
