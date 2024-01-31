const grid = document.querySelector('.grid');

for(let i = 0; i < 256; i++)
{
    const div = document.createElement('div');
    div.className = "block-item";
    //the amount of pixels is 320 / grid size
    //we want to change the amount of blocks and block size (not actually changing the grid size)
    div.style.height = "20px";
    div.style.width = "20px";
    grid.append(div);
}
const blocks = document.querySelectorAll('.block-item');
const colorPicker = document.getElementById('colorPicker');
blocks.forEach(function (block) {
    block.addEventListener('mouseover', () => {
        let selColor = colorPicker.value;
        block.style.backgroundColor = selColor;
    })
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    blocks.forEach(function (block) {
        block.style.backgroundColor = "white";
    });
})
colorPicker.addEventListener('click', () => {

})