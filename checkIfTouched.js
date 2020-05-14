checkIfTouched= function(){
    if((ballX<(pUpLocX+pUpRadius) && ballX>(pUpLocX-pUpRadius)) &&  (ballY<(pUpLocY+pUpRadius) && ballY>(pUpLocY-pUpRadius))){
        return true;
    }
}