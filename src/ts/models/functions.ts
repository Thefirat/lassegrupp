const navMouse = document.getElementById("navMouse");

export function cursor (e:MouseEvent): void{
    if( navMouse){
        navMouse.style.top = e.pageY + "px";
        navMouse.style.left = e.pageX + "px";
        navMouse.classList.add("mouseHover");
    }
}


