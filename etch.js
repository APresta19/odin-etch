const grid = document.querySelector('.grid');
let blockSize = 20;


const slider = document.getElementById('slider-picker');
const sliderText = document.getElementById('slider-text');
let block = document.querySelectorAll('.block');

let sliderValue = slider.value;

//set up the base grid
getGrid(16);

slider.addEventListener('mousemove', () =>
{
   clearGrid();
   sliderValue = slider.value;
   sliderText.textContent = sliderValue + " x " + sliderValue;
   getGrid(sliderValue);
});


let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => 
{
   let block = document.querySelectorAll('.block');
   block.forEach(function (e) {e.style.backgroundColor = 'white'})
});

function getGrid(val)
{
   for(let i = 0; i < val * val; i++)
   {
       const grid = document.querySelector('.grid');
       const div = document.createElement('div');
       let math = 320/sliderValue;
       div.style.height = math + 'px';
       div.style.width = math + 'px';
       div.className = 'block';
       grid.appendChild(div);
   }
   finalizeGrid();
}
function finalizeGrid()
{
   let block = document.querySelectorAll('.block');
   let colorButton = document.getElementById('colorPicker');
   block.forEach(function (element) {element.addEventListener('mouseover', () => 
   {
      let cB = colorButton.value;
      element.style.backgroundColor = cB;
   })});
}
function clearGrid()
{
   grid.innerHTML = '';
}
