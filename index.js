document.addEventListener("DOMContentLoaded", () => {
  const filmList = document.getElementById("films");
  const poster = document.getElementById("poster");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const runtime = document.getElementById("runtime");
  const showtime = document.getElementById("showtime");
  const availableTickets = document.getElementById("available-tickets");
  const buyTicketButton = document.getElementById("buy-ticket");

  // Load films
  fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(films => {
      films.forEach(film => {
        const filmItem = document.createElement('li');
        filmItem.className = 'film item';
        filmItem.textContent = film.title;
        filmItem.addEventListener('click', () => {
          displayFilmDetails(film);
        });
        filmList.appendChild(filmItem);
      });
      displayFilmDetails(films[0]);
    });

  // Display film details here
  function displayFilmDetails(film) {
    poster.src = film.poster;
    title.textContent = film.title;
    description.textContent = film.description;
    runtime.textContent = film.runtime;
    showtime.textContent = film.showtime;
    availableTickets.textContent = film.capacity - film.tickets_sold;
    buyTicketButton.disabled = film.capacity - film.tickets_sold === 0;
    buyTicketButton.textContent = film.capacity - film.tickets_sold === 0 ? 'Sold Out' : 'Buy Ticket';
    buyTicketButton.onclick = () => {
      if (film.capacity - film.tickets_sold > 0) {
        film.tickets_sold++;
        availableTickets.textContent = film.capacity - film.tickets_sold;
        buyTicketButton.disabled = film.capacity - film.tickets_sold === 0;
        buyTicketButton.textContent = film.capacity - film.tickets_sold === 0 ? 'Sold Out' : 'Buy Ticket';
      }
    };
  }
});


// to update list of tickets sold
function updateTicketsSold(film) {
  fetch(`http://localhost:3000/films/${film.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tickets_sold: film.tickets_sold })
  });
}
