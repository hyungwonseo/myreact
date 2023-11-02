export function getAllGames() {
  return fetch(`http://localhost:8080/products`, {
    method: "GET",
  }).then((response) => response.json());
}

export function getGameById(id) {
  return fetch(`http://localhost:8080/products/${id}`, {
    method: "GET",
  }).then((response) => response.json());
}

export function purchaseGames(games) {
  const purchases = games.map((game) => ({
    game: game,
    quantity: 1, // 원하는 구매 수량을 여기에 설정
  }));
  return fetch(`http://localhost:8080/products/purchases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchases),
  }).then((response) => response.json());
}

export function getAllPurchasedGames() {
  return fetch(`http://localhost:8080/products/purchase`, {
    method: "GET",
  }).then((response) => response.json());
}

export function signUp(user) {
  return fetch(`http://localhost:8081/api/member/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}
