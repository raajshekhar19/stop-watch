const currentTime = document.querySelector(".para");
//putting event listner on each of the button
//is not a good practice
//we know about the event bubbling
//once we click a button it bubble s to its nearest parent 
//then to ita granfd parent

//so instead of putting event listners on each of the button we will put
//it in its parent 

const buttonParent = document.querySelector(".btn-container");


let seconds =0;
let minutes = 0;
let hours =0;
let timerId= 0;

//funtion to show time decently
function dispalyTime(hours,minutes,seconds){
    currentTime.innerText=`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`: minutes}:${seconds<10?`0${seconds}`: seconds}`;
}

//function for button clicks
function handleButtonClick(event){
    //console.log(event.target);//console log event gives the object while the event.target gives the target button
    const clickedbtn = event.target.name;//gives the name of the clicked button
    if(clickedbtn==="Start"){
        timerId=setInterval(()=>{
            seconds++;
            if(seconds>58){
                seconds=0;
                minutes++;
                if(minutes>58){
                    minutes=0;
                    hours++;
                    if(hours===24){
                        hours=0;
                        minutes=0;
                        seconds=0;
                    }
                }
            }
            dispalyTime(hours,minutes,seconds);
       
        },1000);
        
    }

    if(clickedbtn==="Stop"){
        clearInterval(timerId);
    }
    if(clickedbtn==="Reset"){
        clearInterval(timerId);
        seconds=minutes=hours=0;
        dispalyTime(hours,minutes,seconds);
    }

}

//adding eventlistner to the buttonparent

buttonParent.addEventListener("click",handleButtonClick);