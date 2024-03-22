function getPokemonsByType(typeName) {
    return (filteredPokemons => filteredPokemons.length ? filteredPokemons : "Aucun pokémon trouvé")
    (Object.values(Class_pokemon.all_pokemon).filter(pokemon => pokemon.types[typeName]))
}


function getPokemonsByAttack(attackName) {
    return (filteredPokemons => filteredPokemons.length ? filteredPokemons : "Aucun pokémon trouvé")
    (Object.values(Class_pokemon.all_pokemon).filter(pokemon => pokemon.attacks[attackName]))
}

function getAttacksByType(typeName) {
    return (filteredAttacks => filteredAttacks.length ? filteredAttacks : "Aucune attaque trouvé")
    (Object.values(Class_attack.all_attacks).filter(attack => attack.type === typeName))
}

function sortPokemonByName() {
    return Object.values(Class_pokemon.all_pokemon).sort()
}

function sortPokemonByStamina() {
    return Object.values(Class_pokemon.all_pokemon).sort((a, b) => b.base_stamina - a.base_stamina)
}

function getWeakestEnemies(attack) {
    let attackType = "";
    try {
        attackType = Object.values(Class_attack.all_attacks)
            .find(currentAttack => currentAttack.name === attack).type
    } catch (e) {
        return "Aucune attaque de ce nom"
    }

    return Object.values(Class_pokemon.all_pokemon).filter(pokemon => {
       const pokTypeEffectiveness = Object.values(pokemon.types)
           .map(type => type.type_effectiveness[attackType])
           .reduce((acc, typeEffectiveness) => acc * typeEffectiveness, 1);

       return pokTypeEffectiveness < 1;
    });
}

function getBestAttackTypesForEnemy(name) {
    // Récupère le ou les types du pokémon
    try {
        const currentTypes = Object.values(
            Object.values(Class_pokemon.all_pokemon)
                .find(pokemon => pokemon.name === name).types
        );
    } catch (e) {
        return "Aucun pokémon de ce nom"
    }

    let effectiveTypes;

    if (currentTypes.length === 1) {
        effectiveTypes = Object.entries(currentTypes[0].type_effectiveness)
            .map(type => [ type[0], type[1] ]);
    } else {
        effectiveTypes = Object.entries(currentTypes[0].type_effectiveness)
            .map(type => [ type[0], type[1] * currentTypes[1].type_effectiveness[type[0]] ]);
    }

    const mostEffectiveTypesCoef = effectiveTypes
        .map(type => type[1])
        .reduce((currentType, otherType) => Math.min(currentType, otherType));

    return effectiveTypes
        .filter(type => type[1] === mostEffectiveTypesCoef)
        .map(type => Class_type.all_types[type[0]])
}
