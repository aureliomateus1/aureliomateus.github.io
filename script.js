const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        temaBtn.textContent = "☀️";
    }else{
        temaBtn.textContent = "🌙";
    }
});

const form = document.getElementById("formContato");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");
    form.reset();
});

function abrirModal(){
    document.getElementById("modal").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}