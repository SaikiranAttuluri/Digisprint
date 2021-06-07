var buttonInput = document.getElementById("buttonInput");
let gameResult = document.getElementById("gameResult");
buttons = document.querySelectorAll(".buttons");
var demoE1 = document.getElementById("demo");

for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        gameResult.value += buttonText;
        console.log(gameResult);
    })
}
function clearBtn(){
    gameResult.value = "";
    demoE1.textContent = "";
}
function equalsBtn(){
    var gameResultValue = eval(gameResult.value);
    console.log(gameResultValue);
    gameResult.value = gameResultValue;
    if (gameResultValue == undefined){
        demoE1.textContent = "Please enter a valid operation";
    }
}