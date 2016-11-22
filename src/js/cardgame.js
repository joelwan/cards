import { Table } from './table'
import { Action } from './action'

class CardGame {
  
  constructor(table) {
    this._table = table;
  }
  

  handlePlayerAction(action) {
    
  }
  
  handleDealerAction(action) {
    
  }

  dividePot(amount) {
    
  }
  
  table() {
    return this._table;
  }
  
  play() {
    
    //main game loop
    //to be implemented in each game type separately
        
  }
  
  
}

export { CardGame };