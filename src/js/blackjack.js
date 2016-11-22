import { CardGame } from './cardgame'


class BlackJack extends CardGame {
  
  constructor(table) {
    super(table);
  }
  
  play() {
    console.log('table ' + this.table().getId() + ' is playing blackjack');
  }

  
}

export { BlackJack };