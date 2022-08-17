'use strict';
console.log('App is running');

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



