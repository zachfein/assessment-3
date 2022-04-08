const favColor = (evt) => {
    evt.preventDefault();
    
    alert(`My favorite color is sky blue!`)
}

let colorBtn = document.querySelector(`#color`)
colorBtn.addEventListener(`click`, favColor)

const favPlace = (evt) => {
    evt.preventDefault();
    
    alert(`My favorite place is the beach!`)
}

let placeBtn = document.querySelector(`#place`)
placeBtn.addEventListener(`click`, favPlace)

const favRitual = (evt) => {
    evt.preventDefault();
    
    alert(`My favorite ritual is going on hikes on the weekend!`)
}

let ritBtn = document.querySelector(`#ritual`)
ritBtn.addEventListener(`click`, favRitual)

