// function message1()
// {
//     const para1 = document.getElementById('para1');
//     para1.innerHTML = 'You have clicked in click1 button';
// }


// function messageTwo()
// {
//     const para2 = document.getElementById('para1');
//     para2.innerHTML = 'You have clicked in click2 button';
// }

// const img = document.querySelector('#imgId');

// function message1()
// {
//     img.src = 'img/review-3.jpg';
// }

// function message2()
// {
//     img.src = 'img/review-4.jpg';
// }


//creating html elements
var heading3 = document.createElement('h1');
var text = document.createTextNode('This is heading 3');
heading3.appendChild(text);

const myDiv = document.getElementById('my-div');
myDiv.appendChild(heading3);

var heading2 = document.getElementsByTagName('h1')[1];
myDiv.removeChild(heading2);

var heading0 = document.createElement('h1');
var text0 = document.createTextNode('This is heading0');
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName('h1')[0];
myDiv.insertBefore(heading0,heading1)