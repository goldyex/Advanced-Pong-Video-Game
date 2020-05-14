//let fps= 60;
runMyGamePlayer= function(){

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
            drawEverythingPlayer();  
        }
        
    }, 1000/fps)

}
