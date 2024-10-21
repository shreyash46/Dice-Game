var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomImmageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImmageSource)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png"

var randomImmageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImmageSource)

var answer = document.querySelector("h1")

if(randomNumber1 === randomNumber2){
    answer.innerHTML = "it's a Draw";
}
else if(randomNumber1 > randomNumber2){
    answer.innerHTML = "Player1 Wins";
}
else{
    answer.innerHTML = "Player2 Wins";
}