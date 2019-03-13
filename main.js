
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
            card.classList.add('card')
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
            square.appendChild(card)
            row.appendChild(square)
        }
        const gameBoard = document.querySelector('.game-container')
        gameBoard.appendChild(row);
    }

}
