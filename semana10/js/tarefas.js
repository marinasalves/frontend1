const formTarefa = document.querySelector("#form-tarefa");
const campoNova = document.querySelector("#nova");
const tarefas = document.querySelector("#tarefas");

formTarefa.addEventListener("submit", (event) => {
    event.preventDefault();

    const texto = campoNova.value.trim();

    if (texto === "") {
        return;
    }

    const item = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;
    item.appendChild(textoTarefa);

     item.addEventListener("click", () => {
        item.classList.toggle("feita");
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    item.appendChild(botaoRemover);
    
    botaoRemover.addEventListener("click", (event) => {
    event.stopPropagation();
    item.remove();
    });

    tarefas.appendChild(item);

    formTarefa.reset();
    campoNova.focus();
})