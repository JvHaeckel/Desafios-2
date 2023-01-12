
const formExcluirEvento = document.getElementById("editar-evento");
const inputNome = document.getElementById("nome");
const inputBanner = document.getElementById("banner");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const btnEnviar = document.getElementById("enviar");

const carregando = (loading = true) => {
  inputNome.disabled = loading;
  inputBanner.disabled = loading;
  inputAtracoes.disabled = loading;
  inputDescricao.disabled = loading;
  inputData.disabled = loading;
  inputLotacao.disabled = loading;
  btnEnviar.disabled = loading;
};


// const { location: { search } } = window;
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

formExcluirEvento.addEventListener("submit", (form) => {
  form.preventDefault();

  carregando();

//   const body = {
//     name: inputNome.value,
//     poster: inputBanner.value,
//     attractions: inputAtracoes.value.split(", "),
//     description: inputDescricao.value,
//     scheduled: inputData.value,
//     number_tickets: inputLotacao.value,
//   };

  fetch(`${BASE_URL}/events/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (response.ok) {
      alert("Evento apagado com sucesso!");
    } else {
      alert("Falha ao apagar evento!");
    }
  });

  carregando(false);
});