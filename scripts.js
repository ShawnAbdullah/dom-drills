document.addEventListener('DOMContentLoaded', function() {
    let div = document.createElement('div');
     div.ClassName = 'header-container'
    
     //create, modify, and append h1-h6
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('this is an h1');
    h1.className = 'h1';
    h1.appendChild(h1Text);
    div.appendChild(h1); 

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('this is an h2');
    h2.className = 'h2';
    h2.appendChild(h2Text);
    div.appendChild(h2); 

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('this is an h3');
    h3.className = 'h3';
    h3.appendChild(h3Text);
    div.appendChild(h3); 

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('this is an h4');
    h4.className = 'h4';
    h4.appendChild(h4Text);
    div.appendChild(h4); 

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('this is an h5');
    h5.className = 'h5';
    h5.appendChild(h5Text);
    div.appendChild(h5); 

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('this is an h6');
    h6.className = 'h6';
    h6.appendChild(h6Text);
    div.appendChild(h6); 

    document.body.appendChild(div);

//  array of colors

    let color = ['red', 'orange', 'yellow', 'blue', 'green', 'orange', 'indigo', 'black']
    //create a function to get a random color, then add event listener to change color upon clicking h1-h6
    function getRandomColor() {
    let randomColor = color[Math.floor(Math.random()*color.length)];
    return randomColor;
}
    h1.addEventListener("dblclick", function(){
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener("dblclick", function(){
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener("dblclick", function(){
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener("dblclick", function(){
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener("dblclick", function(){
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener("dblclick", function(){
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });


//create and append list
let ul = document.createElement('ul');
div.appendChild(ul);
let li = document.createElement('li');

//add and append list. add option to remove list upon double clicking
let l = 1;
function addToList(){
ul.appendChild(li);
let liText = document.createTextNode('this is list item ${(l)}');
li.appendChild(liText);
l = (l + 1);
console.log(li);
li.addEventListener("dblclick", function(){
this.remove();
})
};
// change color of list upon clicking once 
li.addEventListener('click', function (){
    let randomColor = getRandomColor();
    li.style.color = randomColor;
})
// create a button that adds to list when clicked
let button = document.createElement('button')
let btnText = document.createTextNode('add new list item here')
button.appendChild(btnText);
document.body.appendChild(button);
button.className = "click button"
button.addEventListener('click', addToList);

    //use dblclick
})
