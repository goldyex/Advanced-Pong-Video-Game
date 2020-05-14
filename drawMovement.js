
        drawMovement= function(){
            ballX+=ballSpeedX;
            if (ballX > canvas.width-15){
                if (ballY > paddle2Y && ballY< paddle2Y+ paddleHeightLoc){
                    ballSpeedX= -ballSpeedX;
                    let deltaY= ballY- (paddle2Y+paddleHeightLoc/2)
                    ballSpeedY= deltaY*0.33
                    touchLast=2;
                }
                else{
                    resetBall();
                    p1Score++;

                }
            }
            if (ballX <25){
                if(ballY > paddle1Y && ballY< (paddle1Y+paddleHeightLoc)){
                    ballSpeedX= -ballSpeedX;
                    let deltaY= ballY- (paddle1Y+paddleHeightLoc/2)
                    ballSpeedY= deltaY*0.33
                    touchLast=1;
                }
                else{
                    resetBall();
                    p2Score++;

                }
            
            }

            ballY+=ballSpeedY;
            if (ballY > canvas.height){
                ballSpeedY= -ballSpeedY;
            }
            if (ballY <0){
                ballSpeedY= -ballSpeedY;
            }
        }