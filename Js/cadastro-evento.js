const formCriarEvento = document.getElementById("criar-evento");
const inputNome = document.getElementById("nome");
const inputBanner = document.getElementById("banner");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const btnEnviar = document.getElementById("enviar");

// Serve para fazer o carregamento ?
const carregando = (loading = true) => {
    inputNome.disabled = loading;
    inputNome.disabled = loading;
    // inputBanner.disabled = loading;
    inputAtracoes.disabled = loading;
    inputDescricao.disabled = loading;
    inputData.disabled = loading;
    inputLotacao.disabled = loading;
    btnEnviar.disabled = loading;
};

// const { location: { search } } = window;
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

formCriarEvento.addEventListener("submit", (form) => {
  form.preventDefault();

  carregando();

  const body = {
    name: inputNome.value,
    // poster: inputBanner.value,
    attractions: inputAtracoes.value.split(","),
    description: inputDescricao.value,
    scheduled: inputData.value,
    number_tickets: inputLotacao.value,
  };

fetch(`${BASE_URL}/events/${id}`, {     /* Abriu um fetch colocou a CONST só não entendi esse id*/
    method:'POST',                       /* post - criar */
    headers: { "Content-type": "aplication/json"} , 
    body: JSON.stringify(body),

}).then((response) => {
    if(response.ok){
        alert("Sucesso no evento!!")  
    }else{
      alert("Falha no evento ")
    }
   
})

carregando(false);   /* Stopar o carregamento???*/
})

const obterEvento = async () => {
    carregando();
  
    const evento = await fetch(`${BASE_URL}/events/${id}`).then((result) =>
      result.json()
    );
  
    carregando(false);
  
    console.log(evento.scheduled);
  
    inputNome.value = evento.name;
    inputBanner.value = evento.poster;
    inputAtracoes.value = evento.attractions.join(", ");
    inputDescricao.value = evento.description;
    inputData.value = evento.scheduled.split(".")[0];
    inputLotacao.value = evento.number_tickets;
  };
  
  obterEvento();