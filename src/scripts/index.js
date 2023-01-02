async function renderizaPokemons() {
    const mainList = document.querySelector('ul')
    
    const listaDePokemons = await consomePokeAPI()
    
    listaDePokemons.results.forEach(pokemon => {
        
        const numeroNaPokedex = pokemon.url.slice(34, -1)
        
        mainList.insertAdjacentHTML('beforeend', `
            <li class="lista">
                <img class="imgPersonagem" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3 class="nomePersonagem">${pokemon.name}</h3>
            </li>
        `)
       
        
    })
}

renderizaPokemons()