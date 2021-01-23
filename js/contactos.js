var entradas;
var errorMsg, listCity, otraCiudad,enviar;
var bandError=[0,0,0,1];
window.onload=function() {
    entradas=document.getElementsByTagName("input")
    errorMsg=document.getElementsByClassName("error")
    listCity=document.getElementsByTagName("select")[1]
    otraCiudad=document.getElementsByClassName("otraCiudad")
    enviar=document.getElementsByTagName("button")[0]
    // console.log(listCity)
    entradas[0].onkeypress=validarInName;
    entradas[1].onkeypress=validarInEmail;
    entradas[2].onkeypress=validarInNum;
    entradas[3].onkeypress=validarInNum;
   
    entradas[1].onblur=validarEmail;
    entradas[2].onblur=validarTel;
    entradas[3].onblur=validarCel;

    listCity.onblur=validarCity;
    
    // document.onclick=validarInfo;
    validarInfo()
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
    //    console.log("repetir")
        errorMsg[0].className="error act"
        bandError[0]=1;
      }
    else{
        // console.log(this.value)
        errorMsg[0].className="error inact"
        bandError[0]=0;
    }
    validarInfo()
}
function validarTel(){
    if(!(/^\d{7}$/.test(this.value))){
        errorMsg[1].className="error act"
        bandError[1]=1;
    }
    else{
        bandError[1]=0;
        errorMsg[1].className="error inact"
    }
    validarInfo()
}
function validarCel(){
    if(!(/^3+\d{9}$/.test(this.value))){
        errorMsg[2].className="error act"
        bandError[2]=1;
    }
    else{
        errorMsg[2].className="error inact"
        bandError[2]=0;

    }
    validarInfo()
}


function validarCity(){
    if(this.selectedIndex==0 ||this.selectedIndex==null){
        errorMsg[3].className="error act"
        bandError[3]=1;
    }
    else{
        errorMsg[3].className="error inact" 
        bandError[3]=0;
        
    }
    if(this.selectedIndex==6){
        for (i in otraCiudad){
            otraCiudad[i].className="otraCiudad act"
        }
    }
    else{
        for (i in otraCiudad){
            otraCiudad[i].className="otraCiudad inact"
        }
    }
    validarInfo()
   
}

function validarInfo(){
    // console.log(bandError)
    if(bandError.indexOf(1)!=-1){
        enviar.disabled=true;
    }
    else{
        enviar.disabled=false;
    }
}
