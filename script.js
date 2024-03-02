var timer =60;
var hitrn;
var score= 0;
function makebubbles(){
    var numbers= "";
for (let index = 1; index <= 184; index++) {
 var rn= Math.floor(Math.random() *10);
 numbers += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML= numbers;
}

//timer function'

function maketimer(){
   var limit= setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent= timer;
        }else{
            clearInterval(limit);
            document.querySelector("#pbtm").innerHTML= ``;
            document.querySelector("body").innerHTML= `<div class="popup">
            <div class="game-over"><h1>Game Over</h1><h4>Score: ${score}</h4></div>
        </div>`
        }
    }, 1000);
   
}

//get new hits
function getNewHit(){
   hitrn= Math.floor(Math.random()*10);
   document.getElementById("Hits").textContent = hitrn;
}

//score function

function increaseScore(){
    score += 10;
    document.getElementById("scores").textContent= score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
var clickedNumber= Number(dets.target.textContent);

if(hitrn === clickedNumber){
    // alert("yo yo");
    getNewHit();
makebubbles();
increaseScore();
}else{
    // alert("chuppa marda");
}
});


getNewHit();
maketimer();
makebubbles();