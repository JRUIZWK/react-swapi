const baseUrl = 'https://swapi.dev/api'

function getStarshipList() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}

function getDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}


export {
  getStarshipList,
  getDetails,
}