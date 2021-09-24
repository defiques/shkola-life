const menuVisibleBlock = document.querySelectorAll(".menuVisibleBlock");

for (let i = 0; i < menuVisibleBlock.length; i++) {
    menuVisibleBlock[i].addEventListener("click", function(e) {
        const menuArrow = menuVisibleBlock[i].querySelector(".menuVisibleArrow");
        console.log(menuArrow) 
        const menuHiddenBlock = menuVisibleBlock[i].nextSibling.nextSibling;
        console.log(menuHiddenBlock);
        if (menuHiddenBlock.classList.contains("dBlock")) {
            menuArrow.classList.toggle("arrowUp");
            menuHiddenBlock.classList.toggle("dBlock");  
        }
        else {
            menuArrow.classList.toggle("arrowUp");
            menuHiddenBlock.classList.toggle("dBlock");   
        }
    })
}