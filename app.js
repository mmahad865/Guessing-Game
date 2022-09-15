'use strict';
console.log('Appc is running');

let User = prompt('Whats your name');
console.log(User);
if (User === null) {
  alert('You need a name');
  User = prompt('Please enter your name');

}

let myHeight= 6;
let userGuessMyHeight=prompt('Im I 6 ft tall? Yes Or No');
if (userGuessMyHeight.toLocaleLowerCase()== 'yes'){
  alert('You are correct');
}else if (userGuessMyHeight.toLocaleLowerCase()== 'no'){
  alert('Wrong');
} else{
  alert ('Why didnt you answer');
}


// function myHeight(){
//   let userGuessMyHeight = yes;
// }

let MyFavShow = 'blacklist';
let userGuessMyShow = prompt('Is blacklist My favorite show? Yes or No');
if (userGuessMyShow.toLocaleLowerCase() == 'yes'){
  alert('Correct');
} else if (userGuessMyShow.toLocaleLowerCase() == 'no'){
  alert('wrong');
} else{
  alert('Havent guessed anything');
}
// alert('You have 10 guesses. Guess 1-10');
// let answer =5;
// let guess = prompt('Whats your guess');
function guessNum(){
  let number= Math.floor(Math.random() * 10) + 1;
  let guess = parseInt(prompt ('please type your favorite number'));
  while(guess !==number){
    guess = parseInt(prompt('Now guess from 1 to 10'));
  }
  if(guess == number){
    console.log('you guessed right');
  }
  // number == guess ? alert ('Right') : alert (`Wrong the number was ${number}`);
}
guessNum();

// for (let i=0;i<10;i++) {
//   if(answer == guess){
//     alert('you are right');
//     break;
//   }else{
//     guess= prompt('Give it another try');
//   }

let myAge = 19;
let userGuess=prompt('Whats my age 12-20');

for (let i=0;i<21;i++) {
  if(myAge==userGuess){
    alert('You right Im 19');
    break;
  }else{
    guess=prompt('Nope, try again');
  }
}

let numberOfGuesses=3;
//let Activity = ['Baskeetball', 'Skydiving', 'Going to the gym'];
let myFavActivity= ['basketball', 'skydiving' , 'going to the gym'];
//let userFavGuess=prompt('Whats My favorite Activity');
//let isActivity = false;
attempt: while(numberOfGuesses){
  let userFavGuess=prompt('Whats My favorite Activity');
  for (let i=0; i < myFavActivity.length;i++ ){
    if (userFavGuess.toLocaleLowerCase() === myFavActivity[i]){
      //isActivity = true;
      alert('You are right!!!');
      break attempt;
    }
  }
    alert('You guessed wronged, think about jumping out of planes and basketball');


  }

  if (!numberOfGuesses) {
    alert('Uh oh, you are out of attemps, please refresh the page');
  
}



let Videogames =prompt('whats your fav Game?');
Videogames = Videogames.toLocaleLowerCase;
switch (Videogames) {
case 'Call of duty':
  alert('I like that too');
  break;
case 'Fortnite':
  alert('overhyped');
  break;
case 'GTA':
  alert('A good one');
  break;
case 'Red dead Redemption':
  alert('Nice one');
  break;
default:
  alert('I dont know that one');
}

let color = prompt('Whats your fav color');
if (typeof(color) === 'string'){
  color =color.toLocaleUpperCase;
}
if (color === 'Blue') {
  alert('Thats my fav color too!');
} else if (color ==='red') {
  alert('great color');
}else if (color ==='black') {
  alert('Beautiful color');
}else if (color === 'Orange'){
  alert('Terrible color');
}else {
  alert('great color but its a no for me');
}




// eslint-disable-next-line indent
    //alert('You guessed wronged, think about jumping out of planes and basketball');

// if ( isActivity === true){
//   alert('You are right!!!');
//   break;
// }



alert('You have answered everything');






