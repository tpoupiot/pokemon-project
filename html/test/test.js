function getPokemonsByType(typeName) {
    return Object.values(Class_pokemon.all_pokemon).filter(pokemon => pokemon.types[typeName])
}

function getPokemonsByAttack(attackName) {
    return Object.values(Class_pokemon.all_pokemon).filter(pokemon => pokemon.attacks[attackName])
}

function getAttacksByType(typeName) {
    return Object.values(Class_attack.all_attacks).filter(attack => attack.type === typeName)
}

function sortPokemonByName() {
    return Object.values(Class_pokemon.all_pokemon).sort()
}

function sortPokemonByStamina() {
    return Object.values(Class_pokemon.all_pokemon).sort((a, b) => a.base_stamina - b.base_stamina)
}

function getWeakestEnemies(attack) {
    return Object.values(Class_pokemon.all_pokemon).sort((a, b) => {
        let aWeaknesses = 1
        let bWeaknesses = 1

        Object.values(a.types).forEach(type => aWeaknesses *= type.type_effectiveness[attack])
        Object.values(b.types).forEach(type => aWeaknesses *= type.type_effectiveness[attack])

        return bWeaknesses - aWeaknesses
    })
}

function getStrongestEnemies(attack) {
    return Object.values(Class_pokemon.all_pokemon).sort((a, b) => a.base_stamina - b.base_stamina)
}

function getBestAttackForEnemy(name) {
    // Récupère le ou les types du pokémon
    const currentTypes = Object.values(
        Object.values(Class_pokemon.all_pokemon)
        .find(pokemon => pokemon.name === name).types
    );

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
        .reduce((currentType, otherType) => Math.max(currentType, otherType));

    return effectiveTypes
        .filter(type => type[1] === mostEffectiveTypesCoef)
        .map(type => Class_type.all_types[type[0]])
}

console.log(Class_pokemon.all_pokemon)
console.log(getBestAttackForEnemy("Bulbasaur"))

console.table([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
