var entradas;
window.onload=function() {
    entradas=document.getElementsByTagName("input")
    entradas[0].onkeypress=validarInName;
    entradas[1].onkeypress=validarInEmail;
    entradas[2].onkeypress=validarInNum;
    entradas[3].onkeypress=validarInNum;
   
    entradas[1].onblur=validarEmail;
    entradas[2].onkeypress=validarInNum;
    entradas[3].onkeypress=validarInNum;
}

function validarInName(event){
    var p="abcdefghijklmnopqrstuvwxyz"
    var cod=event.charCode;
    var letra=String.fromCharCode(cod);
    // console.log(letra)
    var ok=p.indexOf(letra);
    return ok !=-1;
}
function validarInEmail(event){
    var p="-_+<>?¡¿!#$%&/()=^*][{}"
    var cod=event.charCode;
    var letra=String.fromCharCode(cod);
    // console.log(letra)
    var ok=p.indexOf(letra);
    return ok ==-1;
}
function validarInNum(event){
    var p="1234567890"
    var cod=event.charCode;
    var letra=String.fromCharCode(cod);
    // console.log(letra)
    var ok=p.indexOf(letra);
    return ok !=-1;
}
function validarEmail(){
    
    if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.value))) {
       console.log("repetir")
      }
    else{
        console.log(this.value)
    }
}