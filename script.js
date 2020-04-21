const container = document.getElementById("container");
const createDiv = document.createElement('div');
const clearButton = document.getElementById("clear-button");
const colorButton = document.getElementById("color-button");
const randomButton = document.getElementById("random-button");
let useRandom = false;


clearButton.addEventListener('click', getDimension);
colorButton.addEventListener('click', function(e) {
  useRandom = false;
});
randomButton.addEventListener('click', function(e) {
  useRandom = true; 
});

createNewGrid(16, 16);

//get dimension for grid
function getDimension() {
  let dimension = prompt("how many squares each side? (max: 128)");
  let dimensionNum = parseInt(dimension);
  if (dimensionNum > 128 || isNaN(dimension)) {
    return getDimension();
  } else {
    createNewGrid(dimensionNum, dimensionNum);
  }
};
//create grid 
function createNewGrid(dimension1, dimension2) {
  dimension2 = dimension1;
  selectBox = container.querySelectorAll(".box");
  selectBox.forEach(e => e.parentNode.removeChild(e));
  let area = dimension1 * dimension2;
  for (i = 0; i < area; i++) {
    const createDiv = document.createElement('div');
    const container = document.getElementById("container");
    //add class to each box 
    createDiv.className = "box";
    //add id according to i
    createDiv.id = `${i}`;
    container.appendChild(createDiv);
    //change #container
    container.style = `grid-template-columns: repeat(${dimension1}, 1fr); grid-template-rows: repeat(${dimension1}, 1fr);`;
    //change height and width
    let heightSize = 480 / dimension1; 
    createDiv.style = `width:${heightSize}px; height:${heightSize}px`;
  }
}
//check if mouse is down to make dragging paint work
  container.onmousedown = function(e) { 
    if (isNaN(e.target.id)) {
      return;
    }
  mouseDown = true;}
  container.onmouseup = function(e) {
    if (isNaN(e.target.id)) {
      return;
    }
  mouseDown = false;}
//change box color
container.addEventListener('mousemove', function(e) {
  // e.target.id -> to identify each box by its id 
  //all box ids are numbers so if isNaN = true it can't be a box id
  if (isNaN(e.target.id)) {
    return;
  }
  if (mouseDown) {
  const box = document.getElementById(`${e.target.id}`);
    if (useRandom) {
      let randomColor = randomColorNumber();
      box.style.backgroundColor = `${randomColor}`;
      } else { 
      box.style.backgroundColor = colorButton.value;
    }
  console.log(e.target.style.backgroundColor);
} else {
  return;
}
});
//random color 
function randomColorNumber() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};