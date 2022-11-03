console.log('Prived!');
let x = document.elementFromPoint(100, 100);
console.log(x);
console.log('Drugoy Prived!');
// Следим за позицией курсора мыши
const block = document.querySelector('.block-for-mouse'); //- некий блок прямоугольник для исследований.
    block.addEventListener("mousemove", function(event) {
       block.innerHTML = `X : ${event.clientX} <br>Y : ${event.clientY}`; });