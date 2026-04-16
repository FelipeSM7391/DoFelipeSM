const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumb = document.querySelector('.pokemon_num');
const pokemonImg = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector(`.input_search`);

const fetchPokemon = async (pokemon)  => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status ==200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderpkmon = async (pokemon) => {

        pokemonName.innerHTML = `Loading...`
        pokemonNumb.innerHTML = ``

        const data = await fetchPokemon(pokemon);

        if (data) {
            pokemonName.innerHTML = data.name
            pokemonNumb.innerHTML = data.id
            pokemonImg.src = data[`sprites`][`versions`][`generation-v`][`black-white`][`animated`][`front_default`];
            input.value = ``;
        }else {
            pokemonName.innerHTML = `Not Found :/`
            pokemonNumb.innerHTML = `???`
            input.value = ``;
        }

}

form.addEventListener(`submit`, (event) => {

    event.preventDefault();

    renderpkmon(input.value.toLowerCase());
});
