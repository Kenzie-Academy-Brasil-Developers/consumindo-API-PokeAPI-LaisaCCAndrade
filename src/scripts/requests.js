async function consomePokeAPI() {
  
  const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon?')
  .then(
      
    res => res.json()
    
  )
  .catch(
      
    error => console.log(error)

  )
  
  return pokemonsDaAPI
}

async function getPokemonByName(pokemonName){

  const loading = document.querySelector('#loading')
  
  const pokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {

    method: 'GET',
    headers: {
      'Content-Type' : 'application/json'
    }
  })

  .then(res => {return res.json()})

  .then(res =>{
    return res
  })
 
  return pokemon

}

function renderSearch(){

  const searchInput = document.querySelector('input')
  const searchBtn = document.querySelector('#searchBtn')

  searchBtn.addEventListener('click', async () =>{
    
    renderPesq(await getPokemonByName(searchInput.value))

  })

}

async function renderPesq(resposta){

  const mainList = document.querySelector('ul')
  mainList.innerHTML = ''
  mainList.insertAdjacentHTML('beforeend', `
    <li class="lista">
      <img class="imgPersonagem" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${resposta.id}.png" alt=${resposta.name}>
      <h3 class="nomePersonagem">${resposta.name}</h3>
    </li>

  `)

}

renderSearch()
consomePokeAPI()