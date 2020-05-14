        powerUp= function(){
            if(randTimes==0){
                pUpLocX= Math.floor((Math.random() * 650) + 50);
                pUpLocY= Math.floor((Math.random() * 450) + 50);
                console.log(pUpLocX+" "+pUpLocY);
            }
            randTimes++;
            canvasContext.fillStyle= "green"; 
            canvasContext.beginPath();
            canvasContext.arc(pUpLocX, pUpLocY,pUpRadius,0, Math.PI*2, true);
            canvasContext.fill();
            
            //if touched, 
            collision= checkIfTouched()
            if(collision){
                //do something 
                randPower= Math.floor((Math.random() * 2) + 1); //1 to 4
                initiatePowerUp(randPower);
                pUpAppear=false; 
                randTimes=0;
            }
            

    }