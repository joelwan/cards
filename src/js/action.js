//some poker actions
const ACTION_BET = Symbol('Bet');
const ACTION_CALL = Symbol('Call');
const ACTION_CHECK = Symbol('Check');
const ACTION_FOLD = Symbol('Fold');

//some blackjack actions
const ACTION_DOUBLE = Symbol('Double');
const ACTION_HIT = Symbol('Hit');
const ACTION_INSURANCE = Symbol('Insurance');
const ACTION_SPLIT = Symbol('Split');
const ACTION_STAND = Symbol('Stand');



class Action {
  
  constructor() {
  }

  static isActionValid(action, player, amount) {
    
  }
  
}

export { Action };