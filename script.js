const container = document.getElementById("container");
const createDiv = document.createElement('div');
const clearButton = document.getElementById("clear-button");

createGrid();
//change box color
window.addEventListener('click', function(e) {
  console.log(e.target.id);
  if (e.target.id === "container" ) {
    return;
  }
  const box = document.getElementById(`${e.target.id}`);
  box.style.backgroundColor = "red";
});



function createGrid() {
  for (i = 0; i < 256; i++) {
    const createDiv = document.createElement('div');
    const container = document.getElementById("container");
    //add class to each box 
    createDiv.className = "box";
    //add id according to i
    createDiv.id = `${i}`;
    container.appendChild(createDiv);
    
  }
};