import { Player } from './player'
import { Dealer } from './dealer'
import { Deck } from './deck'
import { LinkedList } from './utils/linkedlist'

class Table {
  
  constructor(id, dealer, numSeats) {
    this._id = id;
    
    //set a 1-1 relation between dealer and table
    dealer.setTable(this);
  
    //Implement seat map using a one-way LinkedList
    this._players = new LinkedList();
  
  }

  getId() {
    return this._id;
  }
  
  getPotSize() {
    
  }
  
  playerJoin(player, seatNum) {
    //check if seat is available and if so allow player to join
    //add to linkedlist
    
  }
  
  playerLeave(player) {
    //mark seat as available
    
  }
  
  getNextPlayer() {
    
  }
  
  distributeCards(deck, numCardsPerPlayer){
    
  }
  
  //go around the table and record user actions
  playerRound() {
    
  }

  
}

export { Table };