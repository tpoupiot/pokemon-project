document.addEventListener('DOMContentLoaded', function() {

    Object.values(Class_pokemon.all_pokemon).forEach(currentPokemon => {
        const stringifiedId = String(currentPokemon.getId).padStart(3, '0');
        const pokemonRow = document.createElement('tr');
        pokemonRow.classList.add('pokemon__row');

        const createTableCell = (className, content, datalabel=null) => {
            const cell = document.createElement('td');
            if (datalabel) {
                cell.setAttribute('data-label', datalabel);
            }
            cell.classList.add(className);
            cell.innerHTML = content;
            pokemonRow.appendChild(cell);
        };

        createTableCell('pokemon__row-id', "#" + stringifiedId, 'ID');
        createTableCell('pokemon__row-name', currentPokemon.getName, 'Nom');
        createTableCell('pokemon__row-image',
        currentPokemon.id < 810 ? `<img src="../webp/sprites/${stringifiedId}MS.webp" alt="${currentPokemon.name}"/>`
        : `<img src="../webp/sprites/${stringifiedId}.webp" alt="${currentPokemon.name}"/>`


        , 'Image');
        createTableCell('pokemon__row-generation', currentPokemon.getGeneration, 'Génération');
        createTableCell('pokemon__row-types',
            "<div>" + Object.values(currentPokemon.getTypes).map(type => `
                <span class="${type.type_name}">`
                + "<img class='type__image' src='../icons/" + type.type_name + ".svg' alt='icon" + type.type_name + "'/>"
                + "<span class='type__name'>" + type.type_name + "</span>"
                + "</span>").join('')
            + "</div>"
        , 'Types');
        createTableCell('pokemon__row-stamina', "<span>" + currentPokemon.getBaseStamina + "</span>", 'Stamina');
        createTableCell('pokemon__row-attack', "<span>" + currentPokemon.getBaseAttack + "</span>", 'Attaque');
        createTableCell('pokemon__row-defense', "<span>" + currentPokemon.getBaseDefense + "</span>", 'Défense');

        document.querySelector('.pokemon__table').appendChild(pokemonRow);
    });
});