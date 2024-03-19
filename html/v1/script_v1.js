document.addEventListener('DOMContentLoaded', function() {

    Object.values(Class_pokemon.all_pokemon).forEach(pokemon => {
        const pokemonRow = document.createElement('tr');
        pokemonRow.classList.add('pokemon__row');

        const pokemonId = document.createElement('td');
        pokemonId.classList.add('pokemon__row-id');
        const stringifiedId = String(pokemon.getId.toString().padStart(3, '0'));
        pokemonId.innerHTML = "#" + stringifiedId;

        const pokemonName = document.createElement('td');
        pokemonName.classList.add('pokemon__row-name');
        pokemonName.innerHTML = pokemon.getName;

        const pokemonImage = document.createElement('td');
        pokemonImage.classList.add('pokemon__row-image');
        if (pokemon.getId < 810) {
            pokemonImage.innerHTML = `<img src="../webp/sprites/${stringifiedId}MS.webp" alt="${pokemon.name}"/>`;
        } else {
            pokemonImage.innerHTML = `<img src="../webp/sprites/${pokemon.getId}.webp" alt="${pokemon.name}"/>`;
        }

        const pokemonGeneration = document.createElement('td');
        pokemonGeneration.classList.add('pokemon__row-generation');
        pokemonGeneration.innerHTML = pokemon.getGeneration;

        const pokemonTypes = document.createElement('td');
        pokemonTypes.classList.add('pokemon__row-types');
        pokemonTypes.innerHTML = "<div>" + Object.values(pokemon.getTypes).map(type => `
            <span class="${type.type_name}">`
            + "<img src='../icons/" + type.type_name + ".svg' alt='" + type.type_name + "'/>"
            + type.type_name
            + "</span>").join('')
            + "</div>";

        const pokemonStamina = document.createElement('td');
        pokemonStamina.classList.add('pokemon__row-stamina');
        pokemonStamina.innerHTML = "<span>" + pokemon.getBaseStamina + "</span>";

        const pokemonAttack = document.createElement('td');
        pokemonAttack.classList.add('pokemon__row-attack');
        pokemonAttack.innerHTML = "<span>" + pokemon.getBaseAttack + "</span>";

        const pokemonDefense = document.createElement('td');
        pokemonDefense.classList.add('pokemon__row-defense');
        pokemonDefense.innerHTML = "<span>" + pokemon.getBaseDefense + "</span>";

        pokemonRow.appendChild(pokemonId);
        pokemonRow.appendChild(pokemonName);
        pokemonRow.appendChild(pokemonImage);
        pokemonRow.appendChild(pokemonGeneration);
        pokemonRow.appendChild(pokemonTypes);
        pokemonRow.appendChild(pokemonStamina);
        pokemonRow.appendChild(pokemonAttack);
        pokemonRow.appendChild(pokemonDefense);

        document.querySelector('.pokemon__table').appendChild(pokemonRow);
    });
});