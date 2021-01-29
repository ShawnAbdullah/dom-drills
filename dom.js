let button = document.createElement("button");
let btnText = document.createTextNode("add square");
let div = document.createElement("div")

button.appendChild(btnText);
document.body.appendChild(button);
button.className = "click button";
let id = 0;
button.addEventListener("click", buttonClick);

document.body.appendChild(div)
div.style.display = "flex";
div.style.flexDirection = "row";
function buttonClick() {
  id++;
  let square = document.createElement("div");
  square.id = id;
  square.className = "blackSquare";
  square.style.backgroundColor = "black";
  square.style.height = "200px";
  square.style.width = "200px";
 
  div.appendChild(square);
  console.log(square);

  let h = document.createElement("span");
  let squareText = document.createTextNode(id);
  h.appendChild(squareText)
  square.appendChild(h)
  h.style.opacity = "0"
  square.addEventListener("mouseenter", hover);
  function hover() {
      h.style.opacity = "1";
      h.style.color = "white";
      square.style.textAlign = "center"
  }

//   let color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
//   function getRandomColor(){
//       let randomColor = color[Math.floor(Math.random()*color.length)];
//       return randomColor;
//   }

  square.addEventListener("click", function() {
      let randomnum = Math.floor(Math.random()*7);
      if (randomnum == 0) {
          square.style.backgroundColor = "red";
      } else if (randomnum == 1) {
          square.style.backgroundColor = "orange";
      } else if (randomnum == 2) {
        square.style.backgroundColor = "yellow";
     } else if (randomnum == 3) {
        square.style.backgroundColor = "green";
     } else if (randomnum == 4) {
        square.style.backgroundColor = "blue";
     }  else if (randomnum == 5) {
        square.style.backgroundColor = "indigo";
     }  else if (randomnum == 6) {
        square.style.backgroundColor = "purple";
     } 
  })

  square.addEventListener("dblclick", doubleClick) 
  function doubleClick() {
      if (square.id % 2 == 0) {
      let elementID = parseInt(square.id) + 1;
      let element = document.getElementById(elementID);
      if (element == null) {
          alert("square number " + elementID + " no longer exists")}
          else {
              element.parentNode.removeChild(element);
          }} else {
              let elementID = parseInt(square.id) - 1;
              let element = documentgetElement(elementID)
              if (element == null) {
                  alert("square with ID " + elementID + " no longer exists")
              } else {
                  element.parentNode.removeChild(element);
              }}}}


//function setDivHoverClass ()
