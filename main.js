
document.addEventListener("DOMContentLoaded", (event) => {
    shuffleCards()
});

shuffleCards = () => {
    const pictures = ['./assets/images/aquarium.jpeg', './assets/images/art_inst.jpeg', './assets/images/bean.jpeg', './assets/images/goose_island.jpeg', './assets/images/mus_science.jpeg', './assets/images/polar_bear.jpeg', './assets/images/river_cruise.jpeg', './assets/images/skydeck.jpeg', './assets/images/wrigley.jpeg', './assets/images/theatre.jpeg', './assets/images/field.jpeg', './assets/images/gpark.jpeg']
    const tempCards = []
    //duplicating pictures so there are two of each
    for (let i = 0; i < pictures.length; i++) {
        tempCards.push.call(tempCards, pictures[i], pictures[i])
    }
    const shuffledCards = [];
    while (tempCards.length > 0) {
        let random_number = Math.floor(Math.random() * tempCards.length);
        let removedValue = tempCards[random_number];
        shuffledCards.push(removedValue);
        tempCards.splice(random_number, 1);

    }
    console.log(shuffledCards)
    createGameGrid(shuffledCards)

}
let first_card_clicked = null;
let second_card_clicked = null;
let total_possible_matches = 9;
let match_counter = 0;
let attempts = 0;
let accuracy = 0;
let games_played = 0;
let accuracyTrunkated = 0;

createGameGrid = (cards) => {
    const frontImg = './assets/images/mmile.jpeg'
    const newCards = [...cards]
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("div");
        row.classList.add('row')
        for (let j = 0; j < 6; j++) {
            const square = document.createElement("div")
            const card = document.createElement("div");
            square.classList.add('square')
            card.classList.add('card', `card${i}${j}`)
            // card.addEventListener('click', flipCard);
            const back = document.createElement('img')
            const front = document.createElement('img')
            back.classList.add('back-card');
            back.setAttribute("src", newCards[5 - j]);
            front.classList.add('front-card');
            front.setAttribute('src', frontImg)
            //We need to include [5-j] as a way to count backward in the loop. 
            //If we do not do this, we try to splice an image at index of 4,5 or 6 
            //when the lengh of our array is only 3, 2 or 1. Without this, we miss the last 3 images.
            newCards.splice((5 - j), 1)
            card.appendChild(back)
            card.appendChild(front)
            // square.appendChild(card)
            row.appendChild(card)
        }
        const gameBoard = document.querySelector('.game-container')
        gameBoard.appendChild(row);
    }
    applyHandlers()
}
// applyHandlers = () => {
//     debugger;
//     document.querySelectorAll('.card').addEventListener('click', cardClicked)
// // First we detect the click event
// document.getElementById('the-box').addEventListener('click', function () {
//     // Using an if statement to check the class
//     if (this.classList.contains('bad')) {
//       // The box that we clicked has a class of bad so let's remove it and add the good class
//      this.classList.remove('bad');
//      this.classList.add('good');
//     } else {
//       // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//       alert("You can proceed!");
//     }
//   });
// }
applyHandlers = () => {
    const cards = document.querySelectorAll('.card');
    // const images = document.querySelectorAll('front-card', 'back-card')
    flipCard = (e) => {
        e.currentTarget.classList.toggle('flip');
    }   
    // images.forEach(image => {image.addEventListener('click', function (e){e.stopPropagation()})})
    cards.forEach(card => card.addEventListener('click', flipCard));

}
cardClicked = (e) => {
    if (second_card_clicked !== null) {
        return;
    }
    if(first_card_clicked === this){
        return;
    }
//    if(e.target.classList.contains('front-card')){
//         document.querySelector('front-card')
//    }
    console.log(e.target)
}
