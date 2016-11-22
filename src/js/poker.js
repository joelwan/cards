import { CardGame } from './cardgame'
import { Deck } from './deck'


class Poker extends CardGame {
  
  constructor(table) {
    super(table);
    
    this._deck = null;
  }
  
  newHand() {
    this._deck = new Deck();
    let cards = this._deck.shuffle();
    return cards;
  }

  //main game loop
  play() {
    console.log('table ' + this.table().getId() + ' is playing poker');
    
    let cards = this.newHand();
    let table = this.table();
    table.distributeCards(cards, 2);
    
    this.preflop(function(){
      this.flop(function(){
        this.turn(function(){
          this.river(function(){
            this.showDown(function(){
            }.bind(this));  
          }.bind(this));
        }.bind(this)); 
      }.bind(this));
    }.bind(this));
    
    
  }
  
  preflop(callback) {
    console.log('performing preflop');
    callback();
  }
  
  flop(callback) {
    console.log('performing flop');
    callback();
  }
  
  turn(callback) {
    console.log('performing turn');
    callback();
  }
  
  river(callback) {
    console.log('performing river');
    callback();
  }
  
  showDown(callback) {
    console.log('performing showDown');
    callback();
  }
}

export { Poker };