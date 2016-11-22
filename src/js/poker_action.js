import { Action } from './action'


//some poker actions
const ACTION_BET = Symbol('Bet');
const ACTION_CALL = Symbol('Call');
const ACTION_CHECK = Symbol('Check');
const ACTION_FOLD = Symbol('Fold');

class PokerAction extends Action {
  
  constructor() {
    super();
  }

  
}

export { PokerAction };