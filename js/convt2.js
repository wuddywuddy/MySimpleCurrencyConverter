const rates = [360,470]

function Currency(){
     let y = document.getElementById("converter").value;
        return y;
    }
 
function Calculate(){
    y = Currency();
 
    let x = document.getElementById("value1").value;
 
    if(x == ""){
        document.getElementById("value2").value = "";
    }else{
        switch(y){
            case "Dollar":
                document.getElementById("value2").value = x * 360;
            break;
 
            case "Pound":
                document.getElementById("value2").value = x * 475.408;
            break;
 
            case "Euro":
                document.getElementById("value2").value = x * 420.892;
            break;
 
        }
    }
}