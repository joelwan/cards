import { Card } from './card'
import { Dealer } from './dealer'
import { Deck } from './deck'
import { Table } from './table'
import { Player } from './player'
import { Poker } from './poker'
import { BlackJack } from './blackjack'


let dealer = new Dealer();
let dealer2 = new Dealer();

let player1 = new Player('John', 'Doe', 'johndoe');
let player2 = new Player('Jane', 'Doe', 'janedoe');
let player3 = new Player('Michael', 'White', 'michaelwhite');

let table1 = new Table(1, dealer, 5);
table1.playerJoin(player1, 0);

let table2 = new Table(2, dealer2, 5);
table2.playerJoin(player2, 2);
table2.playerJoin(player3, 4);


let game1 = new BlackJack(table1);
game1.play();

let game2 = new Poker(table2);
game2.play();