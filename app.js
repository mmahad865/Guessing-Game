'use strict';
console.log('Appc is running');

let User = prompt('Whats your name');
console.log(User);
if (User === null) {
  alert('You need a name');
  User = prompt('Please enter your name');

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



alert('You have 10 guesses. Guess 1-10');
let answer =5;
let guess = prompt('Whats your guess');


for (let i=0;i<10;i++) {
  if(answer == guess){
    alert('you are right');
    break;
  }else{
    guess= prompt('Give it another try');
  }

}let myAge = 19;
let userGuess=prompt('Whats my age');

for (let i=0;i<21;i++) {
  if(myAge==userGuess){
    alert('You right Im 19');
    break;
  }else{
    guess=prompt('Nope, try again');
  }
}

let numberOfGuesses=3;
let Activity = ['Baskeetball', 'Skydiving', 'Going to the gym'];
let myFavActivity= ['basketball', 'skydiving' , 'going to the gym'];
let userFavGuess=prompt('Whats My favorite Activity');
let isActivity = false;
while(numberOfGuesses >0){
  for (let i=0; i < myFavActivity.length;i++ ){
    if (userFavGuess.toLocaleLowerCase() === myFavActivity[i]){
      //isActivity = true;
      alert('You are right!!!');
      break;
    }
  }
    
    // eslint-disable-next-line indent
    alert('You guessed wronged, think about jumping out of planes and basketball');
   userFavGuess=prompt('Whats my favorite activity').toLocaleLowerCase();  
}
    
  // if ( isActivity === true){
  //   alert('You are right!!!');
  //   break;
  // }
    


alert('You have answered everything');






