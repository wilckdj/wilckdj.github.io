const cardsJSON = "js/deck.json";

fetch(cardsJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const cards = jsonObject['cards'];
        for (let i = 0; i < cards.length; i++) {
        console.log(i)
        let deck = document.getElementById("deck")
        let card = document.createElement("div");
        let cardItem = document.createElement("div");
        let cardFront = document.createElement("div");
        let cardBack = document.createElement("div");
        let cardImg = document.createElement("img");
        let cardText = document.createElement("p");

        deck.appendChild(card);
        card.appendChild(cardItem);
        cardItem.appendChild(cardFront);
        cardItem.appendChild(cardBack);
        cardFront.appendChild(cardText);
        cardBack.appendChild(cardImg);
        
        card.id=cards[i].order;
        card.className = "card";
        cardItem.className= "cardItem";
        cardItem.classList.add("facedown");
        card.onclick= function() {cardAction(card.id)};
        cardFront.className= "cardFront";
        cardText.innerHTML= cards[i].name + " - " + cards[i].symbol;

        cardBack.className= "cardBack";
        cardImg.src = "/assets/CardBack.png";
        cardImg.alt = "Back of the Card";


        }
    });

function cardFlip(cardID) {
    //console.log("Work")
    let card = document.getElementById(cardID).childNodes[0]
    if(card.classList.contains("facedown")) {
        card.classList.remove("facedown");
    } else {
        card.classList.add("facedown");
    }
}

function discard(cardID) {
    //let deck = document.getElementById("deck")
    let discard = document.getElementById("discard")
    let card = document.getElementById(cardID)

    discard.appendChild(card)

    card = document.getElementById(cardID).childNodes[0]
    if(card.classList.contains("facedown")) {
        card.classList.remove("facedown");
    } 
}

function shuffle() {
    var container = document.getElementById("deck");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('card'));
    console.log("A")
      elementsArray.forEach(function(element){
      container.removeChild(element);
    })
    shuffleArray(elementsArray);
    console.log("B")
    elementsArray.forEach(function(element){
    container.appendChild(element);
  })
  }
  
  function shuffleArray(array) {
    console.log("C")
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      console.log("D")
      return array;
  }

function cardAction(cardID) {
    let action = document.getElementById("action").value;
    console.log(cardID + " " + action)
    switch (action){
        case "moveDiscard":
            discard(cardID);
        break;
        case "moveHand":

        break;
        case "flip":
            cardFlip(cardID);
        break;
        case "shuffle":
            shuffle()
        break;
    }
    
}

function list() {
    document.getElementById("cardlist").innerHTML = ""
    let deck = document.getElementById("deck")
    var i
    let card = deck.getElementsByClassName("card")

    for (let i = 0; i < card.length; i++) {
        document.getElementById("cardlist").innerHTML += (card[i].id +" "+ card[i].getElementsByTagName("p")[0].innerHTML + ",<br>");
    }
}