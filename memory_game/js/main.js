console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];
let cardOne = cards[0];
let cardTwo = cards[2];
let cardsInPlay = [];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}