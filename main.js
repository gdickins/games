var suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function makeCard(suit, value) {
  this.suit = suit;
  this.value = value;
}
function makeDeck() {
  var deck = [];
  for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            deck.push(new makeCard(values[j], suits[i]));
        }
    }
    return deck;
}

function rollDice() {
  this.value = Math.ceil((6*Math.random()));
}

function rollThem() {
  var results = [];
  for(var i = 0; i < 1000; i++) {
    results.push(new rollDice());
  }
  return results;
}
