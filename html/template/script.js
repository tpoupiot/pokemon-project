document.addEventListener('DOMContentLoaded', function() {
    const randomPokemon = Class_pokemon.all_pokemon[1];
    const stringifiedId = String(randomPokemon.getId).padStart(3, '0');

    const pokemonRow = document.createElement('tr');
    pokemonRow.classList.add('pokemon__row');

    const createTableCell = (className, content) => {
        const cell = document.createElement('td');
        cell.classList.add(className);
        cell.innerHTML = content;
        pokemonRow.appendChild(cell);
    };

    createTableCell('pokemon__row-id', "#" + stringifiedId);
    createTableCell('pokemon__row-name', randomPokemon.getName);
    createTableCell('pokemon__row-image',
        `<img src="../webp/sprites/${stringifiedId}MS.webp" alt="${randomPokemon.name}"/>`
    );
    createTableCell('pokemon__row-generation', randomPokemon.getGeneration);
    createTableCell('pokemon__row-types',
        "<div>" + Object.values(randomPokemon.getTypes).map(type => `
            <span class="${type.type_name}">`
            + "<img src='../icons/" + type.type_name + ".svg' alt='icon" + type.type_name + "'/>"
            + type.type_name
            + "</span>").join('')
        + "</div>"
    );
    createTableCell('pokemon__row-stamina', "<span>" + randomPokemon.getBaseStamina + "</span>");
    createTableCell('pokemon__row-attack', "<span>" + randomPokemon.getBaseAttack + "</span>");
    createTableCell('pokemon__row-defense', "<span>" + randomPokemon.getBaseDefense + "</span>");

    document.querySelector('.pokemon__table').appendChild(pokemonRow);
});