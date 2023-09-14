// document.querySelector('button').addEventListener('click', myFunction);


// function myFunction()
// {
//     alert('hello')
// }


//adeventlistener with anonymous function

// document.querySelector('button').addEventListener('click', function(){
//     alert('Hello')
// })

// document.querySelector('h1').addEventListener('click', function(){
//     alert('hello everyone!!');
// })

for(let i = 0; i < 3; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        let text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + " have clicked";
    })
}