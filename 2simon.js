
let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let h2 = document.querySelector("h2");


//Game start ho gaya [after any key press] 
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;


          
        levelUp();           //  phir function call hai 
    }
    
});

function gameFlash(btn){
    btn.classList.add("gameflash");

    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}



let btns = ["red","yellow","green","blue"];

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level:${level}`;

    let randIdx=Math.floor(Math.random()*4);    //random number generation          
    let randColor=btns[randIdx];           // random color generation from array  btn
    let randbtn=document.querySelector(`.${randColor}`)   //Generated color ka element
    console.log(randColor," :color generated as random");
    gameSeq.push(randColor);
    console.log(gameSeq);     //random color generate krne ke baad usko  gameSeq ke  array me push kr diye

     gameFlash(randbtn);    //game random btn ko flash kr rha hai
    
}


function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },350);
}

function checkSeq(idx){
    // let idx = level-1;  
    if(userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=` GameOver!! Your Score was: <B>${level}</B><br>,Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },200);
        ResetGame();

    }

}




function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor= btn.getAttribute("id");  // [color ka name = id name] same hai,  isliye 'id' ko get kiye yahan pe
    console.log(userColor);
    userSeq.push(userColor);           // user ke color ko userSeq array me push kr diye

    checkSeq(userSeq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress); 
}

function ResetGame(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
