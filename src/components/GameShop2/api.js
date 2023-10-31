export function getAllGames() {
  return fetch(`http://localhost:8080/products`, { method: "GET" }).then(
    (response) => response.json()
  );
}

export function getGameById(id) {
  return fetch(`http://localhost:8080/products/${id}`, { method: "GET" }).then(
    (response) => response.json()
  );
}

export function purchaseGames(games) {
  const purchaseList = games.map((game) => {
    return {
      game: game,
      quantity: 1,
    };
  });
  return fetch(`http://localhost:8080/products/purchaselist`, {
    method: "POST",
    body: JSON.stringify(purchaseList),
  }).then((response) => response.json());
}

export function getAllPurchasedGames() {
  return fetch(`http://localhost:8080/products/purchase`, {
    method: "GET",
  }).then((response) => response.json());
}
