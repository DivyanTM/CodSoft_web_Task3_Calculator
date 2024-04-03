const disp=Document.getElementById("display");

function appendText(s){
  display.value+=s;
}
function clr(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }
}

function del(){
    display.value=display.value.slice(0,-1);
}
