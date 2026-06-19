import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {

getDatabase,

ref,

push

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig={

apiKey:"AIzaSyD6Z8Z7-J93wU3nh5703Mpinx3BkBG-SjM",

authDomain:"miracle-e40b7.firebaseapp.com",

databaseURL:"https://miracle-e40b7-default-rtdb.firebaseio.com",

projectId:"miracle-e40b7",

storageBucket:"miracle-e40b7.firebasestorage.app",

messagingSenderId:"689959535318",

appId:"1:689959535318:web:697431e937ceeac64e3f77"

};

const app=initializeApp(firebaseConfig);

const db=getDatabase(app);

let selectedVote="";

document.querySelectorAll(".vote-card")

.forEach(card=>{

card.onclick=()=>{

document.querySelectorAll(".vote-card")

.forEach(c=>c.classList.remove("selected"));

card.classList.add("selected");

selectedVote=card.dataset.vote;

};

});

document

.getElementById("predictionForm")

.addEventListener("submit",

async(e)=>{

e.preventDefault();

if(!selectedVote){

alert("Choose a prediction.");

return;

}

try{

await push(

ref(db,"predictions"),

{

vote:selectedVote,

name:document.getElementById("name").value,

message:document.getElementById("message").value,

timestamp:Date.now()

}

);

document.getElementById("successBox")

.innerHTML=

"✨ Thank you for being part of our little miracle 💛";

e.target.reset();

document.querySelectorAll(".vote-card")

.forEach(c=>c.classList.remove("selected"));

selectedVote="";

}

catch(err){

document.getElementById("successBox")

.innerHTML=

"Something went wrong.";

}

});
