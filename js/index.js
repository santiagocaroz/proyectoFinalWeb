var icoMenu, menu;
window.onload=function() {
    icoMenu=document.getElementById("icoMenu");
    menu=document.getElementsByTagName("nav")
    console.log(menu)
    // icoMenu.className="active"
    icoMenu.onmouseover=showMenu;
    icoMenu.onmouseleave=hideMenu;
    menu[0].onmouseover=showMenu;
    menu[0].onmouseleave=hideMenu;
}

function showMenu(){
    icoMenu.className="active"
    menu[0].className="active"
}
function hideMenu(){
    icoMenu.className="inactive"
    menu[0].className="inactive"
}