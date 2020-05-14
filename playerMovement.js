let playerSpeed= 8;
function playerMovement(){
    if(timeToWait==0){
        if(upPressed){
            paddle2Y-=playerSpeed;
        }
        else if(downPressed){
            paddle2Y+=playerSpeed;
        }
    }
}