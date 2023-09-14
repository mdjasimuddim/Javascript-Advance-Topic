let numberOfWin = 0;
let numberofLost = 0;

for(let i = 1; i <= 5; i++)
{
    let takenNumber = parseInt(prompt("Enter the number between 0  and 5"));
    let randomNumber = Math.floor(Math.random()*5) + 1;

    if(takenNumber === randomNumber){
        console.log('you have won');
        numberOfWin++;
    }else{
        console.log('you have lost');
        numberofLost++;
    }
}


document.write("Number of win = "+numberOfWin);
document.write("Number of loss = "+numberofLost);