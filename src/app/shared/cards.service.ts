import {Injectable} from '@angular/core';
import axios from 'axios';

export interface Card {
  id: string
  image_url: string
  tag: string
}

@Injectable({ providedIn: 'root' })

export class CardsService {
  public cards: Card[] = []
  public groupCards: Card[] = []
  loading = false

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
        else
          alert('По тегу ничего не найдено')
      })
      .catch(() => alert('Произошла http ошибка'))
      .finally(() => {
        this.loading = false
      })
  }
}
