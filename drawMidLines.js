drawMidLines= function(){
    for (let i=0; i<=10; i++){
        //create barriers 
        canvasContext.fillStyle="white";
        canvasContext.fillRect(400,i*55+10,1.5,30); 
    }
} 