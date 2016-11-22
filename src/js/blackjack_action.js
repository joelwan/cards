import { Action } from './action'


//some blackjack actions
const ACTION_DOUBLE = Symbol('Double');
const ACTION_HIT = Symbol('Hit');
const ACTION_INSURANCE = Symbol('Insurance');
const ACTION_SPLIT = Symbol('Split');
const ACTION_STAND = Symbol('Stand');



class BlackJackAction extends Action{
  
  constructor() {
    super();
  }

  
}

export { BlackJackAction };