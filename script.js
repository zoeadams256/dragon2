var wrapper = document.body.querySelector(".wrapper");

// var hitnumber = Number(prompt("How many times do you want to hit the dragon?"));


  // if (hitnumber > 5) {
  //   for (var i = 0; i < 5; i++) {
  //     dragondamage = dragondamage + 1;
  //   } 
  //   for (var i = 0; i < 5; i++) {
  //     playerdamage = Math.floor((Math.random() * 2) + 1) + playerdamage;
  //   }
  // } else {
  //   for (var i = 0; i < 5; i++) {
  //     dragondamage = Math.floor((Math.random() * hitnumber) + 1) + dragondamage;
  //   }
  //   for (var i = 0; i < 5; i++) {
  //     playerdamage = Math.floor((Math.random() * 2) + 1) + playerdamage;
  //   }
  // }
var number = 0;
var userdamage = 0;
var dragondamage = 0;
var playerdamage = 0;
var hitnumber = Number(prompt("How many times do you want to hit the dragon?"));
while (number<hitnumber) {


  if (hitnumber > 5) {
    dragondamage = dragondamage+1;
    playerdamage = playerdamage+Math.floor((Math.random() * 2) + 1);
  } else {
    dragondamage = dragondamage + Math.floor((Math.random() * hitnumber) + 1);
    playerdamage = playerdamage + Math.floor((Math.random() * 2) + 1);
  }
}
  
  
if  (playerdamage == 5 && dragondamage < 10) {
     wrapper.innerHTML = ("Player damage = " + playerdamage ) + ("Dragon damage = " + dragondamage ) + ("The battle is over, User loses!");
  } else {
    wrapper.innerHTML = ("Player damage = " + playerdamage ) + ("Dragon damage = " + dragondamage ) + ("The battle is over, User Wins!");
  }


// var damage= Number(prompt("How much damage do you want to deal?"));
// for(var i=1; inputnumber>5; i++){

//   damage =damage+inputnumber
// }

// number=number+damage;
// var dragon= Number(prompt(Math.floor((Math.random()* 2) + 1)));
// Math.floor((Math.random()* 2) + 1);