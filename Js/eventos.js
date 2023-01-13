
const divtodosEventos = document.getElementById("todos-eventos");

const getEvents = async () => {
  const events = await fetch(`${BASE_URL}/events`).then((result) =>
    result.json()
  );

  events
  // Copiando do index.js apenas retirando o sort()
    // .sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled)
    // .slice(0, 3)
    .forEach((event) => {
      const article = document.createElement("article");
      article.innerHTML = `
      <article class="evento card p-5 m-3">
        <h2>${event.name} - ${new Date(event.scheduled).toLocaleDateString(
        "pt-BR" /* pt-BR força mostrar a data no formato brasileiro*/
      )}</h2>
        <h4>${event.attractions.join(", ")}</h4>
        <p>
          ${event.description}
        </p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
      </article>`;

      divtodosEventos.appendChild(article);
    });
};

getEvents();