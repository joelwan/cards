class Card {
  
  constructor(suit, value) {
    this._suit = suit;
    this._value = value;
    this._visible = false;
  }
  
  show() {
    //turn card face up
    this._visible = true;
  }
  
  hide() {
    this._visible = false;
  }
  
  getSuit() {
    return this._suit;
  }
  
  getValue() {
    return this._value;
  }
  
  static compare(a, b) {
    
  }
  
}

export { Card };