computerMovement= function(){
    if(timeToWaitComp!=0){
        //do nothing
    }
    else{
        var paddle2YCenter= paddle2Y+ paddleHeightLoc/2;
                    if(paddle2YCenter< ballY-35){
                        paddle2Y+=compSpeed;
                    }
                    else if( paddle2YCenter> ballY+35){
                        paddle2Y-=compSpeed;
                    }
    }
    
}