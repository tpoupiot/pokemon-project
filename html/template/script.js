document.addEventListener('DOMContentLoaded', function() {
    const randomPokemon = Class_pokemon.all_pokemon[1];
    const stringifiedId = String(randomPokemon.getId).padStart(3, '0');
    const pokemonRow = document.createElement('tr');
    pokemonRow.classList.add('pokemon__row');

    // Fonction pour créer une cellule de tableau
    const createTableCell = (className, content, datalabel=null) => {
        const cell = document.createElement('td');
        cell.setAttribute('data-label', datalabel);
        cell.classList.add(className);
        cell.innerHTML = content;
        pokemonRow.appendChild(cell);
    };

    createTableCell('pokemon__row-id', "#" + stringifiedId, 'ID');
    createTableCell('pokemon__row-name', randomPokemon.getName, 'Nom');
    createTableCell('pokemon__row-image',
        `<img src="../webp/sprites/${stringifiedId}MS.webp" alt="${randomPokemon.name}"/>`
        , 'Image');
    createTableCell('pokemon__row-generation', randomPokemon.getGeneration, 'Génération');
    createTableCell('pokemon__row-types',
        "<div>" + Object.values(randomPokemon.getTypes).map(type => `
                <span class="${type.type_name}">`
            + "<img class='type__image' src='../icons/" + type.type_name + ".svg' alt='icon" + type.type_name + "'/>"
            + "<span class='type__name'>" + type.type_name + "</span>"
            + "</span>").join('')
        + "</div>"
        , 'Types');
    createTableCell('pokemon__row-stamina', "<span>" + randomPokemon.getBaseStamina + "</span>", 'Stamina');
    createTableCell('pokemon__row-attack', "<span>" + randomPokemon.getBaseAttack + "</span>", 'Attaque');
    createTableCell('pokemon__row-defense', "<span>" + randomPokemon.getBaseDefense + "</span>", 'Défense');

    document.querySelector('.pokemon__table').appendChild(pokemonRow);
});