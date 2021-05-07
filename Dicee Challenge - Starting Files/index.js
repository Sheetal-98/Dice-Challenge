var randomNumber1 = Math.random();
randomNumber1*=6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1+=1;

var imgName = "dice" + randomNumber1 + ".png";
var imgSource = "images/" +imgName;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imgSource);

var randomNumber2 = Math.random();
randomNumber2*=6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2+=1;

var imgName1 = "dice" + randomNumber2 + ".png";
var imgSource2 = "images/" + imgName1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imgSource2);

var heading = document.querySelector("h1");
 if(randomNumber1 > randomNumber2){
   heading.innerHTML = "🚩 Player 1 Wins";
 }
 else if(randomNumber1 < randomNumber2){
   heading.innerHTML = "Player 2 Wins 🚩";
 }
 else{
   heading.innerHTML = "Draw";
 }
