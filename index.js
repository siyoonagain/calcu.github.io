   var numRight = false;

   function add(char){
        const disPlay = document.getElementById("display");
        const result = document.getElementById("result");
        if(numRight == false){
            if(isNaN(char) == true){
            }else{
                disPlay.value += char;
                result.value = "";
            }
        }else{
            disPlay.value += char;
        }
        if(isNaN(char) == true){
            numRight = false;
        }else{
            numRight = true;
        }
    }
    function reset(){
        const disPlay = document.getElementById("display");
        const result = document.getElementById("result");
        disPlay.value = "";
        result.value = "";
        numRight = false;
    }
    function miPlu(){
        const disPlay = document.getElementById("display");
        disPlay.value *= -1;
    }
    function total(){
        const disPlay = document.getElementById("display");
        const result = document.getElementById("result");
        if(numRight == true){
        result.value += eval(disPlay.value);
        disPlay.value ="";
        }else if(numRight == false){
            disPlay.focus();
        }
    }