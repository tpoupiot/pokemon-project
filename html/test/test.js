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

        return bWeaknesses-aWeaknesses
    })
}

function getStrongestEnemies(attack) {
    return Object.values(Pokemon.all_pokemon).sort((a, b) => a.base_stamina - b.base_stamina)
}

function getBestAttackForEnemy(name) {

}

console.log(getWeakestEnemies('Poison'))
