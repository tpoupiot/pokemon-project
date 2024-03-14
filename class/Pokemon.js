class Pokemon {
    static all_pokemon = {};

    constructor(id, name, attack, defense, stamina, generation, level, multiplier, types = []) {
        this.id = id;
        this.name = name;
        this.base_attack = attack;
        this.base_defense = defense;
        this.base_stamina = stamina;
        this.generation = generation;
        this.level = level;
        this.multiplier = multiplier;
        this.types = types;
    }

    toString() {
        return `Nom : ${this.name}, ID : ${this.id}`;
    }

    static findGeneration(id) {
        for (const distinctGeneration in generation) {
            if (generation[distinctGeneration].find(pokemon => pokemon.id === id)) {
                return distinctGeneration;
            }
        }
        return 0;
    }

    static findTypes(id) {
        let types = {}

        pokemon_type
            .filter(pokemon => pokemon.pokemon_id === id && pokemon.form === 'Normal')
            .flatMap(pokemon => pokemon.type)
            .forEach(type => {
                types[type] = new Type(type);
            });

        return types;
    }

    static import_pokemon() {
        pokemon
        .filter(currentPokemon => currentPokemon.form === 'Normal')
        .forEach(currentPokemon => {
            const currentTypes = Pokemon.findTypes(currentPokemon.pokemon_id)

            Object.entries(currentTypes).forEach(type => {
                if (!Type.all_types[type[0]]) {
                    Type.all_types[type[0]] = type[1];
                }
            });

            Pokemon.all_pokemon[currentPokemon.pokemon_id] =
                new Pokemon(
                    currentPokemon.pokemon_id,
                    currentPokemon.pokemon_name,
                    currentPokemon.base_attack,
                    currentPokemon.base_defense,
                    currentPokemon.base_stamina,
                    Pokemon.findGeneration(currentPokemon.pokemon_id),
                    1,
                    cp_multiplier.find(multiplier => multiplier.level === 1).multiplier,
                    currentTypes
                );
        });
    }

    static getTypes() {
        return [...Object.values(Type.all_types)]
    }
}

Pokemon.import_pokemon();
console.log(Pokemon.all_pokemon);

console.log(Pokemon.getTypes());
