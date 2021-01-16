var icoMenu, menu;
window.onload=function() {
    icoMenu=document.getElementById("icoMenu");
    menu=document.getElementsByTagName("nav")
    console.log(menu)
    // icoMenu.className="active"
    icoMenu.onmouseover=showMenu;
    icoMenu.onmouseleave=hideMenu;
    
}

function showMenu(){
    this.className="active"
}
function hideMenu(){
    this.className="inactive"
}