function getPokemonsByType(typeName) {
    return Object.values(Pokemon.all_pokemon).filter(pokemon => pokemon.types[typeName])
}

function getPokemonsByAttack(attackName) {
    return Object.values(Pokemon.all_pokemon).filter(pokemon => pokemon.attacks[attackName])
}

function getAttacksByType(typeName) {
    return Object.values(Attack.all_attacks).filter(attack => attack.type === typeName)
}

function sortPokemonByName() {
    return Object.values(Pokemon.all_pokemon).sort()
}

function sortPokemonByStamina() {
    return Object.values(Pokemon.all_pokemon).sort((a, b) => a.base_stamina - b.base_stamina)
}

function getWeakestEnemies(attack) {
    return Object.values(Pokemon.all_pokemon).sort((a, b) => {
        let aWeaknesses = 1
        let bWeaknesses = 1

        Object.values(a.types).forEach(type => aWeaknesses *= type.type_effectiveness[attack])
        Object.values(b.types).forEach(type => aWeaknesses *= type.type_effectiveness[attack])

        return bWeaknesses - aWeaknesses
    })
}

function getStrongestEnemies(attack) {
    return Object.values(Pokemon.all_pokemon).sort((a, b) => a.base_stamina - b.base_stamina)
}

function getBestAttackForEnemy(name) {
    const types = Object.values(Pokemon.all_pokemon)
        .filter(pokemon => pokemon.name === name)
        .flatMap(pokemon => Object.values(pokemon.types))

    const effectiveness = Object.entries(types[0].type_effectiveness)
        .map(type=> [
            type[0],
            type[1] * types[1].type_effectiveness[type[0]]
        ]);

    const maxEffectiveness = effectiveness.map(i => i[1])
        .reduce((a, b) => Math.max(a, b));

    return effectiveness
        .filter(type => type[1] === maxEffectiveness)
        .map(type => Type.all_types[type[0]])
}


console.log(getWeakestEnemies('Poison'))
console.log(getBestAttackForEnemy("Bulbasaur"))
