function PopupFundo() {

    document.getElementById("containerPopup").style.display = "flex"

}

document.addEventListener("click", clicou)


function clicou(e) {
    console.log(e.composedPath())
    console.log(e.composedPath()[0].id)
    let flag = 'none'
    for (let i = 0; i < e.composedPath().length; i++) {
        if (e.composedPath()[i].id == 'botao-perfil') {
            flag = 'flex';
        }
      
    }
    document.getElementById("containerPopup").style.display = flag
   
}
