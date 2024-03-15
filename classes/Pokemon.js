class Pokemon {
    static all_pokemon = {};

    constructor(id, name, attack, defense, stamina, generation, level, multiplier, types, attacks) {
        this.id = id;
        this.name = name;
        this.base_attack = attack;
        this.base_defense = defense;
        this.base_stamina = stamina;
        this.generation = generation;
        this.level = level;
        this.multiplier = multiplier;
        this.types = types;
        this.attacks = attacks
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



    static findAttacks(id) {
        let attacks = {}

        pokemon_moves
            .filter(pokemon => pokemon.pokemon_id === id && pokemon.form === 'Normal')
            .forEach(move => {
                move.charged_moves.forEach(chargedMove => {
                    const currentMove = charged_moves.find(move => move.name === chargedMove);

                    if (currentMove) {
                        attacks[chargedMove] = new Attack(
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
                        attacks[fastMove] = new Attack(
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

    static import_pokemon() {
        pokemon
        .filter(currentPokemon => currentPokemon.form === 'Normal')
        .forEach(currentPokemon => {
            const currentTypes = Pokemon.findTypes(currentPokemon.pokemon_id)
            const currentAttacks = Pokemon.findAttacks(currentPokemon.pokemon_id)

            Object.entries(currentTypes).forEach(type => {
                if (!Type.all_types[type[1]]) {
                    Type.all_types[type[0]] = type[1];
                }
            });

            Object.entries(currentAttacks).forEach(attack => {
                if (!Attack.all_attacks[attack[1]['move_id']]) {
                    Attack.all_attacks[attack[1]['move_id']] = attack[1];
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
                    currentTypes,
                    currentAttacks
                );
        });
    }

    static getTypes() {
        return [...Object.values(Type.all_types)]
    }

    static getAttacks() {
        return [...Object.values(Attack.all_attacks)]
    }

    // ajouter getter setter

}


Pokemon.import_pokemon();
