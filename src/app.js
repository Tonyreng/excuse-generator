import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'My brother', 'My sister', 'My cat'];
let action = ['eat', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let excuseWho = who[Math.floor(Math.random() * 7)];
let excuseAction = action[Math.floor(Math.random() * 4)];
let excuseWhat = what[Math.floor(Math.random() * 3)];
let excuseWhen = when[Math.floor(Math.random() * 5)];

let excuse = `${excuseWho} ${excuseAction} ${excuseWhat} ${excuseWhen}`;

let parrafo = document.getElementById('excuse');          
parrafo.innerHTML = excuse;
};
