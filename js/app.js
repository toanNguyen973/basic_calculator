const displ = (val)=>{
    document.getElementById('ret').value += val;
}
const clr = () =>{
    document.getElementById('ret').value = "" ;
} 
function press(event){
    if (event.key >= '0' && event.key <= '9' ||( event.key == '+' )|| ( event.key == '-') || ( event.key == '*' )
    ||( event.key == '/' )) document.getElementById('ret').value += String(event.key);
    else if( event.key == 'c') clr();
    console.log(event.key);
}
var cal = document.getElementById('cal');
cal.onkeyup = function (event){
    if(event.keyCode === 13) ret();
}
function ret(){
    let x = document.getElementById('ret').value; // save value in screen into x
    let y = eval(x); // automatically change operand and number to calculator by eval() function
    document.getElementById('ret').value = y;
}