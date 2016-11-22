import { Action } from './action'

class Player {
  
  constructor(first, last, alias) {
    this._firstName = first;
    this._lastName = last;
    this._alias = alias;
  }
  
  getSessionStats() {
    //returns session stats about the user, win/lose ratio, etc.
  }
  
  performAction(action) {
    
  }
  
}

export { Player };