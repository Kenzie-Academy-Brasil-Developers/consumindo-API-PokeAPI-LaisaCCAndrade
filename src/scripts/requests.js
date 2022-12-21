// /* Monte a lógica das requisições aqui */

async function consomePokeAPI() {
  
  const loading = document.querySelector('#loading')
  
  const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
  .then(
      
    res => res.json()
    
  )
  .catch(
      
    error => console.log(error)

  )
  
  loading.classList.add('hidden')
  
  return pokemonsDaAPI
}

async function getPokemonByName(pokemonName){

  const loading = document.querySelector('#loading')
  loading.classList.remove('hidden')
  
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
  loading.classList.add('hidden')
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

  const ulTag = document.querySelector('ul')
  ulTag.innerHTML = ''
  ulTag.insertAdjacentHTML('beforeend', `
    <li class="lista">
      <img class="imgPersonagem" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${resposta.id}.png" alt=${resposta.name}>
      <h3 class="nomePersonagem">${resposta.name}</h3>
    </li>

  `)

}

renderSearch()
consomePokeAPI()