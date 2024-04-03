async function fetchData() {
    try {
        const inputPokemon = document.getElementById('inputPokemon').value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`);
        if (!res.ok) {
            throw new Error(`Pokemon ${inputPokemon} not found`);
        }
        const data = await res.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonimgDisplay = document.getElementById('pokemonSprite');
        const type = data.types.map(type => type.type.name);
        const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`);
        const statsString = stats.join('\n');
        const abilities = data.abilities.map(ability => ability.ability.name);
        const abilitiesString = abilities.join(', ');



        pokemonimgDisplay.src = pokemonSprite;
        pokemonimgDisplay.style.display = 'block';
        pokemonimgDisplay.style.margin = 'auto'; // Center the image horizontally
        pokemonName.innerText = 'Pokemon Name: ' + data.name;
        pokemonAbility.innerText = 'Abilities: ' + abilitiesString; //show only all ability
        pokemonStats.innerText = 'Stats: ' + statsString;
        pokemonType.innerText = 'Type: ' + type;



        console.log(data);
    } catch (error) {
        console.log(error);
    }
}