let chanceOfPowerUp=10000;
        //Basically refreshing all functions here:
        drawEverythingPlayer = function(){
        
            playerMovement();

            colorRect(0,0,canvas.width,canvas.height,"black");
            drawMidLines();

            //paddle left
            colorRect(5,paddle1Y,paddleThicc,paddleHeightLoc,paddleColor); //X+ goes right , Y+ goes down, length, height

            //paddle right 
            colorRect(canvas.width-15,paddle2Y,paddleThicc,paddleHeightLoc,"white"); //X+ goes right , Y+ goes down, length, height

            

            //ball
            canvasContext.fillStyle= ballColor;
            canvasContext.beginPath();
            canvasContext.arc(ballX, ballY,10,0, Math.PI*2, true);
            canvasContext.fill();

            //2 extra balls
            if (keepGoing){draw2Balls(35);}

            //order matters when drawing shape (the shape later in the code,  will overlaps the earlier coded shapes)
            canvasContext.fillStyle= "yellow";
            canvasContext.font = "15px Arial";
            canvasContext.fillText("Player 1:", 150, 100);
            canvasContext.fillText(p1Score, 170, 120);
            canvasContext.fillText("Player 2:", 600, 100);
            canvasContext.fillText(p2Score, 622, 120);

            //powerup
            
            let tempPowerAppear= Math.floor((Math.random() * chanceOfPowerUp) + 1); //random num 1 to 100
            chanceOfPowerUp-=10;
            //console.log(tempPowerAppear);
            if (tempPowerAppear==1){
                chanceOfPowerUp=10000;
                pUpAppear=true;
            }

            if (pUpAppear){
                powerUp();
            }
        }