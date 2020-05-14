//Needed FOR REFERENCE
create = function(){ //wait for page to load
    //MAIN 
    
    canvas= document.getElementById("gameCanvas");
    canvasContext= canvas.getContext("2d");
    let fps= 60;
    setInterval(function(){
        if (p1Score==maxScore){
            canvasContext.font = "30px Arial";
            canvasContext.fillStyle= "yellow";
            canvasContext.fillText("The winner is:", 300, 300);
            canvasContext.fillText("Player 1", 350, 350);
            finishedGame=true;
            canvasContext.fillStyle= "white";
            canvasContext.font = "15px Arial";
            canvasContext.fillText("Click to reset game", 340, 496);
        }
        else if(p2Score==maxScore){
            canvasContext.font = "30px Arial";
            canvasContext.fillStyle= "yellow";
            canvasContext.fillText("The winner is:", 300, 300);
            canvasContext.fillText("Player 2", 350, 350);
            finishedGame=true;
            canvasContext.fillStyle= "white";
            canvasContext.font = "15px Arial";
            canvasContext.fillText("Click to reset game", 340, 496);
        }
        else{
            finishedGame=false;
            scoredPoint=false;
            drawMovement();
            drawEverything();  
        }
        
    }, 1000/fps)
    
    
        canvas.addEventListener("mousemove", function (evt) {
        var mousePos = getMousePosition(evt);
        if(timeToWait==0){
            paddle1Y= mousePos.y-paddleHeightLoc/2;
        }
        else{
            paddle1Y=paddle1Y; 
        }
    });
    
    document.getElementById("btn1").addEventListener("click", function(){
        x=1;
        console.log("1");
      });
    

    canvas.addEventListener("mousedown", handleMouseClick);
}