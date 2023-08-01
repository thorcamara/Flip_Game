const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".timer b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 20;
let timeLeft = maxTime;
let flips = 0;
let matchedCards = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer(){
  if(timeLeft <= 0){
    return clearInterval(timer);
  }
  timeLeft--;
  timeTag.innerText = timeLeft;
}

function flipCard({target: clickedCard}){
  if(!isPlaying){
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }
  if(clickedCard !== cardOne && !disableDeck && timeLeft > 0){
    flips++;
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");
    if(!cardOne){
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    let cardOneIcon = cardOne.querySelector(".back-view i").classList.value;
    cardTwoIcon = cardTwo.querySelector(".back-view i").classList.value;
    matchedCards(cardOneIcon, cardTwoIcon);
  }
}

function matchCards(icon1, icon2){
  if(icon1 === icon2){
    matchedCards++;
    if(matchedCards == 6 && timeLeft > 0){
      return clearInterval(timer);
    }
    cardOne.removeEventList("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return disableDeck = false;
  }

  setTimeout(() =>{
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() =>{
    cardOne.classList.remove("shake", "flip");
    cartTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}