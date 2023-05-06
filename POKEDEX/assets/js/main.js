
function convertPokemon(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>

            <button class="maisdetalhes"><a class="det" href='datalhes.html'> Detalhes </a></button>
            
        </li>`
}



const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 150
const limit = 10
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemon).join('')
        pokemonList.innerHTML += newHtml
    })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})




// const pokemonList = document.getElementById('pokemonList')
// //interacao com a promisse
// pokeApi.getPokemons().then((pokemons = {}) => {
//     const newList = pokemons.map((pokemon =>  convertPokemon(pokemon)))
//     const newHTML = newList.join('')
//     pokemonList.innerHTML += newHTML
//     })
//     .catch((error) => console.log(error))
