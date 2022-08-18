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

let questions = [
  'What is my Favorite sport',
  'What is my Favorite outdoor activity',
  'What is My Favortie food',
  'What do I like to on your free time',
  'How old Im I',
  'Where do I live',

];

let answers = [
  'Basketball',
  'Skydiving',
  'Pizza',
  'Chill with my Fam',
  '19',
  'Seattle'
];
let response = answers;
let i = 0;

for (let i =0; i < questions.length; i++) {
  let response = prompt(questions[i]);

  if (typeof(answers[i]) !== 'string') {
    for (let answers of answers[i]) {
      if (response === answers) {
        alert('Correct!!!');
        break;
      }
    }
  }


}

if (response.toLocaleLowerCase === answers[i]) {
  alert('Correct!!!');
}else; {
  alert('Wrong!!!');
}




