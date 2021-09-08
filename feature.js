const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closing = document.querySelector('.closing-button')

button.addEventListener('click', e => {
    popup.style.display = 'block';
})


closing.addEventListener('click', e => {
    popup.style.display = 'none';
})

popup.addEventListener('click', e =>{
    if(e.target.classList[0]==="popup-wrapper"){
        popup.style.display='none';
    }
})