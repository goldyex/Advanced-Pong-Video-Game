draw2Balls= function (locDiff){
    canvasContext.fillStyle= ballColor;
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY+locDiff,10,0, Math.PI*2, true);
    canvasContext.fill(); 
    
    canvasContext.fillStyle= ballColor;
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY-locDiff,10,0, Math.PI*2, true);
    canvasContext.fill();
}
