const modoClaro = document.getElementById('modoClaro');
const body = document.body;

const setModoFundo = (modo) => {
    sessionStorage.setItem("modo",modo)  
}

const mudaModo = (modoAtual, modoNovo) => {
    setModoFundo(modoNovo)
    body.classList.remove(modoAtual)
    body.classList.add(modoNovo)
}

if(sessionStorage.getItem("modo")== "modoClaro"){
    mudaModo("modoEscuro","modoClaro")
    modoClaro.innerHTML="Modo Claro"
}else{
    mudaModo("modoClaro","modoEscuro")
    modoClaro.innerHTML = "Modo Escuro"
}

const mudaFundo = ehModoClaro => {
    if(ehModoClaro) {
        modoClaro.innerHTML = "Modo Escuro"
        mudaModo("modoClaro", "modoNovo")
    } else {
        modoClaro.innerHTML = "Modo Claro"
        mudaModo("modoEscuro","modoClaro")
    }
}

modoClaro.addEventListener('click', function() {
  //body.classList.toggle('modoClaro');
    body.style.transition ="0.4s"
    mudaFundo(body.classList.contains("modoClaro"))
});

