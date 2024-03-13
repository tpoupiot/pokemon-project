class Pokemon {
    static all_pokemon = {};
    constructor(id, name, attack, defense, stamina, generation, level, multiplier) {
        this.id = id;
        this.name = name;
        this.base_attack = attack;
        this.base_defense = defense;
        this.base_stamina = stamina;
        this.generation = generation;
        this.level = level;
        this.multiplier = multiplier;
    }

    toString() {
        return `${this.name} (ID: ${this.id})`;
    }

    static findGeneration(id) {
        for (const distinctGeneration in generation) {
            if (generation[distinctGeneration].find(pokemon => pokemon.id === id)) {
                return distinctGeneration;
            }
        }
        return 0;
    }

    static import_pokemon() {
        pokemon
        .filter(distinctPokemon => distinctPokemon.form === 'Normal')
        .forEach(distinctPokemon => {
            Pokemon.all_pokemon[p.pokemon_id] =
                new Pokemon(
                    distinctPokemon.pokemon_id,
                    distinctPokemon.pokemon_name,
                    distinctPokemon.base_attack,
                    distinctPokemon.base_defense,
                    distinctPokemon.base_stamina,
                    Pokemon.findGeneration(distinctPokemon.pokemon_id),
                    1,
                    0.09399999678134918
                );
        });
    }
}

console.log(Pokemon.all_pokemon);
Pokemon.import_pokemon();
console.log(Pokemon.all_pokemon);
