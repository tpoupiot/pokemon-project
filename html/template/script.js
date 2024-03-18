document.addEventListener('DOMContentLoaded', function() {

    for (let i=1; i<100; i++) {
        const randomPokemon = Class_pokemon.all_pokemon[i];

        const pokemonRow = document.createElement('tr');
        pokemonRow.classList.add('pokemon__row');

        const pokemonId = document.createElement('td');
        pokemonId.classList.add('pokemon__row-id');
        const stringifiedId = String(randomPokemon.getId.toString().padStart(3, '0'));
        pokemonId.innerHTML = "#" + stringifiedId;

        const pokemonName = document.createElement('td');
        pokemonName.classList.add('pokemon__row-name');
        pokemonName.innerHTML = randomPokemon.getName;

        const pokemonImage = document.createElement('td');
        pokemonImage.classList.add('pokemon__row-image');
        pokemonImage.innerHTML = `<img src="../webp/sprites/${stringifiedId}MS.webp" alt="${randomPokemon.name}"/>`;

        const pokemonGeneration = document.createElement('td');
        pokemonGeneration.classList.add('pokemon__row-generation');
        pokemonGeneration.innerHTML = randomPokemon.getGeneration;

        const pokemonTypes = document.createElement('td');
        pokemonTypes.classList.add('pokemon__row-types');
        pokemonTypes.innerHTML = Object.values(randomPokemon.getTypes).map(type => `
            <span class="${type.type_name}">`
            + "<img src='../icons/" + type.type_name + ".svg' alt='" + type.type_name + "'/>"
            + type.type_name
            + "</span>").join('');

        const pokemonStamina = document.createElement('td');
        pokemonStamina.classList.add('pokemon__row-stamina');
        pokemonStamina.innerHTML = "<span>" + randomPokemon.getBaseStamina + "</span>";

        const pokemonAttack = document.createElement('td');
        pokemonAttack.classList.add('pokemon__row-attack');
        pokemonAttack.innerHTML = "<span>" + randomPokemon.getBaseAttack + "</span>";

        const pokemonDefense = document.createElement('td');
        pokemonDefense.classList.add('pokemon__row-defense');
        pokemonDefense.innerHTML = "<span>" + randomPokemon.getBaseDefense + "</span>";

        pokemonRow.appendChild(pokemonId);
        pokemonRow.appendChild(pokemonName);
        pokemonRow.appendChild(pokemonImage);
        pokemonRow.appendChild(pokemonGeneration);
        pokemonRow.appendChild(pokemonTypes);
        pokemonRow.appendChild(pokemonStamina);
        pokemonRow.appendChild(pokemonAttack);
        pokemonRow.appendChild(pokemonDefense);

        document.querySelector('.pokemon__table').appendChild(pokemonRow);
    }
});