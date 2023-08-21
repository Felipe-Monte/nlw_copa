const cards = document.querySelector('#cards')

function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="assets/icon-${player1}.svg" alt="time do ${player1}">
    <strong>${hour}</strong>
    <img src="assets/icon-${player2}.svg" alt="time do ${player2}">
  </li>
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date}<span>${day}</span></h2>

    <ul>
      ${games}
    </ul>
  </div>
  `
}

cards.innerHTML +=
  createCard("30/01", "Domingo",
    createGame("brazil", "13:00", "argentina") +
    createGame("cameroon", "13:00", "portugal") +
    createGame("uruguai", "13:00", "ghana")) +

  createCard("30/01", "Terça",
    createGame("belgium", "13:00", "serbia") +
    createGame("switzerland", "13:00", "portugal") +
    createGame("ghana", "13:00", "argentina")) +

  createCard("30/01", "Terça",
    createGame("belgium", "13:00", "serbia") +
    createGame("switzerland", "13:00", "portugal") +
    createGame("ghana", "13:00", "argentina"));


