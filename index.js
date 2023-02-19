egScoreEl = document.getElementById("eg-score");
titanScoreEl = document.getElementById("titan-score");

leaderEg = document.getElementById("eg-leader-back");
leaderTitan = document.getElementById("titan-leader-back");

let egCount = 0;
let titanCount = 0;


//EG INCREMENTERS

function egIncrementByOne(){
       egCount++;
       egScoreEl.textContent= egCount;
       leaderTracker();
}

function egIncrementByTwo(){
       egCount+=2;
       egScoreEl.textContent= egCount;
       leaderTracker();
}

function egIncrementByThree(){
       egCount+=3;
       egScoreEl.textContent= egCount;
       leaderTracker();
}


//TITAN INCREMENTERS

function titanIncrementByOne(){
       titanCount++;
       titanScoreEl.textContent= titanCount;
       leaderTracker();
}

function titanIncrementByTwo(){
       titanCount+=2;
       titanScoreEl.textContent= titanCount;titan
       leaderTracker();
}


function titanIncrementByThree(){
       titanCount+=3;
       titanScoreEl.textContent= titanCount;
       leaderTracker();
}

//NEW GAME

function newGame(){
    egCount = 0;
    egScoreEl.textContent= 0;
    leaderEg.style.removeProperty("background-image");
    
    titanCount = 0;
    titanScoreEl.textContent= 0;
    leaderTitan.style.removeProperty("background-image");
}


//LEADER TRACKER

function leaderTracker(){

    if(egCount > titanCount){
        leaderEg.style.backgroundImage = "url('images/gif.webp')";
        leaderEg.style.backgroundSize = "50px 50px";
        leaderTitan.style.removeProperty("background-image");
    }
    else if(titanCount > egCount){
        leaderTitan.style.backgroundImage = "url('images/gif.webp')";
        leaderTitan.style.backgroundSize = "50px 50px";
        leaderEg.style.removeProperty("background-image");
    }
    
}


        