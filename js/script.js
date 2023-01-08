const pokemonNome = document.querySelector('.pokemon_nome');

const pokemonNúmero = document.querySelector('.pokemon_número');

const PokemonImagem = document.querySelector('.pokemon_image')

const form = document.querySelector('.form');

const input = document.querySelector('.input_search');

const buttonPrve = document.querySelector('.brt-prve');

const buttonNext = document.querySelector('.brt-next');

let searchPokemon = 1;

const fetchPokemon = async (Pokemon) => {

    const APIResponse = await fetch(` https://pokeapi.co/api/v2/pokemon/${Pokemon}`);

    if (APIResponse.status == 200) {

        const data = await APIResponse.json();

        return data;

      };

};

const renderPokemon = async (Pokemon) => {

    pokemonNome.innerHTML = 'Loading...';

    pokemonNúmero.innerHTML = '';

     const data = await fetchPokemon(Pokemon);

     if(data){

        PokemonImagem.style.display = 'block';

        pokemonNome.innerHTML = data.name;

        pokemonNúmero.innerHTML = data.id;

        PokemonImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';

        searchPokemon = data.id;
        
     }else{

        PokemonImagem.style.display = 'none';

        pokemonNome.innerHTML = 'Não eziste';

        pokemonNúmero.innerHTML = '';

     };
    
};

form.addEventListener('submit', (event) =>{

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());

});

buttonPrve.addEventListener('click', () => {

    if(searchPokemon > 1 ){

        searchPokemon -= 1;

        renderPokemon(searchPokemon);

    };

});

buttonNext.addEventListener('click', () =>{

    searchPokemon += 1;

    renderPokemon(searchPokemon);

})

renderPokemon(searchPokemon);



