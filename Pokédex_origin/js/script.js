const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumb = document.querySelector('.pokemon_num');
const pokemonImg = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');

const fetchPokemon = async (pokemon)  => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

    const renderpkmon = async (pokemon) => {

        const data = await fetchPokemon(pokemon);

        pokemonName.innerHTML = data.name
        pokemonNumb.innerHTML = data.id
        pokemonImg.src = data[`sprites`][`versions`][`generation-v`][`black-white`][`animated`][`front_default`];
}

//form.addEventListener(`submit`, funcao)
renderpkmon(376)
