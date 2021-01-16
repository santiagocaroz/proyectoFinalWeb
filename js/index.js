var icoMenu, menu, opcMenu;
window.onload=function() {
    icoMenu=document.getElementById("icoMenu");
    menu=document.getElementsByTagName("nav")
    opcMenu=menu[0].getElementsByTagName("a")

    console.log(opcMenu)
    // icoMenu.className="active"
    icoMenu.onmouseover=showMenu;
    icoMenu.onmouseleave=hideMenu;
    menu[0].onmouseover=showMenu;
    menu[0].onmouseleave=hideMenu;

    for (i in opcMenu){
        opcMenu[i].onmouseover=resaltar;
        opcMenu[i].onmouseleave=function(){this.className=this.className.split("active").join("");}
    }
}

function showMenu(){
    icoMenu.className="active"
    menu[0].className="active"
}
function hideMenu(){
    icoMenu.className="inactive"
    menu[0].className="inactive"
}

function resaltar(){
    this.className=this.className +" active";
    
}