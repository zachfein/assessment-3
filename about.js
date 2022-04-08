console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Form Submitted!`);
}

const compliment = (evt) => {
	alert(`You're awesome!`)
}


let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

let img = document.querySelector(`img`)
img.addEventListener(`mouseover`, compliment)