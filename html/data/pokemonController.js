function findGeneration(id) {
    for (const distinctGeneration in generation) {
        if (generation[distinctGeneration].find(pokemon => pokemon.id === id)) {
            return distinctGeneration;
        }
    }
    return 0;
}
function findTypes(id) {
    let types = {}

    pokemon_type
        .filter(pokemon => pokemon.pokemon_id === id && pokemon.form === 'Normal')
        .flatMap(pokemon => pokemon.type)
        .forEach(type => {
            types[type] = new Class_type(type);
        });

    return types;
}
function findAttacks(id) {
    let attacks = {}

    pokemon_moves
        .filter(pokemon => pokemon.pokemon_id === id && pokemon.form === 'Normal')
        .forEach(move => {
            move.charged_moves.forEach(chargedMove => {
                const currentMove = charged_moves.find(move => move.name === chargedMove);

                if (currentMove) {
                    attacks[chargedMove] = new Class_attack(
                        currentMove.move_id,
                        currentMove.name,
                        currentMove.type,
                        currentMove.power,
                        currentMove.duration,
                        currentMove.energy_delta,
                        currentMove.stamina_loss_scaler,
                        currentMove.critical_chance ?? 0,
                        "Charged move"
                    )
                }
            })

            move.fast_moves.forEach(fastMove => {
                const currentMove = fast_moves.find(move => move.name === fastMove);

                if (currentMove) {
                    attacks[fastMove] = new Class_attack(
                        currentMove.move_id,
                        currentMove.name,
                        currentMove.type,
                        currentMove.power,
                        currentMove.duration,
                        currentMove.energy_delta,
                        currentMove.stamina_loss_scaler,
                        0,
                        "Fast move"
                    )
                }
            })
        })

    return attacks
}
function import_pokemon() {
    pokemon
        .filter(currentPokemon => currentPokemon.form === 'Normal')
        .forEach(currentPokemon => {
            const currentTypes = findTypes(currentPokemon.pokemon_id)
            const currentAttacks = findAttacks(currentPokemon.pokemon_id)
            const currentGeneration = findGeneration(currentPokemon.pokemon_id);

            Object.entries(currentTypes).forEach(type => {
                if (!Class_type.all_types[type[1]]) {
                    Class_type.all_types[type[0]] = type[1];
                }
            });

            Object.entries(currentAttacks).forEach(attack => {
                if (!Class_attack.all_attacks[attack[1]['move_id']]) {
                    Class_attack.all_attacks[attack[1]['move_id']] = attack[1];
                }
            });

            if (generation[currentGeneration]) {
                Class_pokemon.all_pokemon[currentPokemon.pokemon_id] =
                    new Class_pokemon(
                        currentPokemon.pokemon_id,
                        currentPokemon.pokemon_name,
                        currentPokemon.base_attack,
                        currentPokemon.base_defense,
                        currentPokemon.base_stamina,
                        currentGeneration,
                        1,
                        cp_multiplier.find(multiplier => multiplier.level === 1).multiplier,
                        currentTypes,
                        currentAttacks
                    );
            }
        });
}

import_pokemon();