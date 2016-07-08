var suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var diceSums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
var ten = 0;
var eleven = 0;
var twelve = 0;

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

function rollIt() {
  var results = [];
  for(var i = 0; i < 1000; i++) {
    results.push(new rollDice());
  }
  return results;
}

function getProbabilities() {
  var die1 = rollIt();
  var die2 = rollIt();
  var added = [];
  var pResults = [];
  for(var i = 0; i < 1000; i++) {
    added.push(die1[i].value + die2[i].value);
  }
  for(var j = 0; j < 1000; j++) {
    if(added[j] === 2) {
      two++;
    } else if(added[j] === 3) {
      three++;
    } else if(added[j] === 4) {
      four++;
    } else if(added[j] === 5) {
      five++;
    } else if(added[j] === 6) {
      six++;
    } else if(added[j] === 7) {
      seven++;
    } else if(added[j] === 8) {
      eight++;
    } else if(added[j] === 9) {
      nine++;
    } else if(added[j] === 10) {
      ten++;
    } else if(added[j] === 11) {
      eleven++;
    } else if(added[j] === 12) {
      twelve++;
    }
  }
  return [two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];
}
