function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const take = document.querySelector('.change-color');
const span = document.querySelector('.color');
take.addEventListener('click', (event) => {
  event.preventDefault();
const colr = getRandomHexColor();
document.body.style.backgroundColor = colr;
span.textContent = colr;

});
