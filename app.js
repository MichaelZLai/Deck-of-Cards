//Using ES6 class to establish Card Class
class Card {
  constructor(num ,name, suit) {
    this.num = num;
    this.name = name;
    this.suit = suit;
  }
}

//Initiate Dealing Cards
function dealSon(){
  this.names = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  this.suits = ["♥","♠", "♦", "♣"];
  this.cards = [];

  for (var i = 0; i < this.suits.length; i++){
    for (var j = 0; j < this.names.length; j++){
      cards.push( new Card( j+1, this.names[j], this.suits[i]));
    }
  }

  console.log(cards)
  return createYourCard(cards)
}

//Creating the Cards
function createYourCard(cards){
  for (var i = 0; i < cards.length; i++){

    //Change Number for Face Card
    if (cards[i].num === 1){
      var num = "A"
    }
    else if(cards[i].num === 11){
      var num = "J"
    }
    else if(cards[i].num === 12){
      var num = "Q"
    }
    else if(cards[i].num === 13){
      var num = "K"
    }
    else{
      var num = cards[i].num
    }



    //Generate HTML Cards
    var card = document.createElement("div");
    card.className = "card";
    document.getElementById("table").appendChild(card);

    var top = document.createElement("p");
    top.className = "top";
    document.getElementsByClassName("card")[i].appendChild(top).innerHTML = num + "<br />" + cards[i].suit

    var middle = document.createElement("div");
    middle.className = "middle big";
    document.getElementsByClassName("card")[i].appendChild(middle).innerHTML = cards[i].suit;

    var bottom = document.createElement("p");
    bottom.className = "bottom";
    document.getElementsByClassName("card")[i].appendChild(bottom).innerHTML = num + "<br />" + cards[i].suit

    //Changes color for hearts and diamonds to red
    //changeColor();
  }

}

//Changes color for hearts and diamonds to red
// function changeColor(){
//   if (cards.suit.inclues( "♥" || "♦")){
//     var red = document.querySelectorAll("div.card");
//     red.style.color = "red";
//   }
// }
