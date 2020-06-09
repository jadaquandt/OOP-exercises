// ## Card
// Create a class Card. A card object will have 2 properties:
// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
//Add a getImageUrl method to card objects by adding it as a member method to your Card class. The method should return the URL path to the png image file for the card.
    getImageUrl() {
        return `/images/${this.point}_of_${this.suit}.png`
      }
  }

//A card will be created thus:
let myCard = new Card(5, 'diamonds');
let yourCard = new Card(10, 'clubs');
//And you can access the individual properties like:
console.log(myCard);
console.log(myCard.point);
console.log(myCard.suit);
// //Testing out image function
console.log(myCard.getImageUrl());
console.log(yourCard.getImageUrl());

//HAND CONSTRUCTOR//
//A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:
class Hand {
    constructor() {
//Initializing empty array to be filled with new Card objects
        this.cardsInHand = [];
    }
    addCard(card) {
//Pushing Card objects into empty array that we initialized above
        this.cardsInHand.push(card);
//Console log to make sure it worked
        console.log(this.cardsInHand)
      }
     getPoints() {
//Getting the total points. Initializing empty sum to run a map on.
        let sum = 0;
//Taking our now filled array and mapping over it to add up the total points
         this.cardsInHand.map((card) => {
             sum += card.point;
          })
//Returning sum because otherwise it comes back undefined
          return sum;
        }
  }

var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
//Testing function, works to return 18
console.log(myHand.getPoints())

//DECK CONSTRUCTOR//
// A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:

