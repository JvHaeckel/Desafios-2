// Criando evento no botão Novo Evento
const btnEvento = document.getElementsByClassName("btn btn-primary");

// Transforma em JSON
const buscaEvento = async (evento) => {
    return await fetch(`${BASE_URL}/`).then((response) => {
        return response.json()
    });
};

// Funçao que dará um feedback visual ao clicar no botão Novo Evento ele vira Criando

const feedbackNovoEvento = (criando = true) => {
    btnEvento.disabled = criando;
    btnEvento.innerText = criando ? "Criando" : "Novo Evento";
}

