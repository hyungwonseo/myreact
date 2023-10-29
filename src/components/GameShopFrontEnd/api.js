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
