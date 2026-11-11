const mensagem = document.querySelector("#mensagem"); 
const contador = document.querySelector("#contador");
const formulario = document.querySelector("#form-contato");
const feedback = document.querySelector("#feedback");

mensagem.addEventListener("input", () => {
    const usado = mensagem.value.length;

    contador.textContent = `${usado}/500`;

    contador.classList.toggle("alerta", usado > 450);
});

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();

    if(nome.length < 5) {
        feedback.textContent = "O nome precisa de pelo menos 5 caracteres.";
        feedback.classList.add("erro");
        return;
    }

    feedback.classList.remove("erro");
    feedback.textContent = "Dados preenchidos corretamente!";

    formulario.reset();

    contador.textContent = "0/500";
    contador.classList.remove("alerta");
});
