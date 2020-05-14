initiatePowerUp= function(choice){
    console.log(choice)
    if (choice==1){
        //make paddle invisible
        paddleColor= "black";
        setTimeout(function(){
            paddleColor= "white";
        },4000)
    } else if (choice ==4){
        //faster ball 
        ballSpeedX=ballSpeedX*3;
        ballSpeedY=ballSpeedY*3;
        compSpeed=compSpeed*1.5
        ballColor="blue";
        setTimeout(function(){
            ballColor="red";
            ballSpeedX=ballSpeedX/3;
            ballSpeedY=ballSpeedY/3;
            compSpeed=5;
        },4000)
    }
    else if (choice ==3){
        //uanble to move for 4 sec
        if(touchLast==2){
            timeToWait=3;
            setTimeout(function(){timeToWait=0;},3000);
        }
        if(touchLast==1){
            timeToWaitComp=3;
            setTimeout(function(){timeToWaitComp=0;},3000);
        }
 
    }
    else if(choice ==2){
        //jump around balls
        keepGoing=true;
        setTimeout(function(){
            keepGoing=false;
        },4000);
        
    }

}