document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const victoryMessage = document.querySelector('.victory-message');
    const restartButton = document.getElementById('restart');

    const cardsArray = [
        { name: 'img1', img: 'img/img1.png', id: 1 },
        { name: 'img2', img: 'img/img2.png', id: 2 },
        { name: 'img3', img: 'img/img3.png', id: 3 },
        { name: 'img4', img: 'img/img4.png', id: 4 },
        { name: 'img5', img: 'img/img5.png', id: 5 },
        { name: 'img6', img: 'img/img6.png', id: 6 },
        { name: 'img1', img: 'img/img1.png', id: 7 },
        { name: 'img2', img: 'img/img2.png', id: 8 },
        { name: 'img3', img: 'img/img3.png', id: 9 },
        { name: 'img4', img: 'img/img4.png', id: 10 },
        { name: 'img5', img: 'img/img5.png', id: 11 },
        { name: 'img6', img: 'img/img6.png', id: 12 }
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        cardsArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.setAttribute('data-id', index);
            cardElement.classList.add('card');
            cardElement.addEventListener('click', flipCard);

            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', card.img);
            cardElement.appendChild(imgElement);

            grid.appendChild(cardElement);
        });
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [firstId, secondId] = cardsChosenId;

        if (cardsChosen[0] === cardsChosen[1]) {
            cards[firstId].removeEventListener('click', flipCard);
            cards[secondId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            setTimeout(() => {
                cards[firstId].classList.remove('flipped');
                cards[secondId].classList.remove('flipped');
            }, 500);
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardsArray.length / 2) {
            victoryMessage.classList.add('show');
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        if (!this.classList.contains('flipped')) {
            cardsChosen.push(cardsArray[cardId].name);
            cardsChosenId.push(cardId);
            this.classList.add('flipped');

            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 300);
            }
        }
    }

    restartButton.addEventListener('click', () => {
        grid.innerHTML = '';
        victoryMessage.classList.remove('show');
        cardsWon = [];
        cardsArray.sort(() => 0.5 - Math.random());
        createBoard();
    });

    createBoard();
});
