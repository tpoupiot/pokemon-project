class Class_pokemon {
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

    get getId() {
        return this.id;
    }
    get getName() {
        return this.name;
    }
    get getBaseAttack() {
        return this.base_attack;
    }
    get getBaseDefense() {
        return this.base_defense;
    }
    get getBaseStamina() {
        return this.base_stamina;
    }
    get getGeneration() {
        return this.generation;
    }
    get getLevel() {
        return this.level;
    }
    get getMultiplier() {
        return this.multiplier;
    }
    get getTypes() {
        return this.types;
    }
    get getAttacks() {
        return this.attacks;
    }

    set setId(id) {
        this.id = id;
    }
    set setName(name) {
        this.name = name;
    }
    set setBaseAttack(attack) {
        this.base_attack = attack;
    }
    set setBaseDefense(defense) {
        this.base_defense = defense;
    }
    set setBaseStamina(stamina) {
        this.base_stamina = stamina;
    }
    set setGeneration(generation) {
        this.generation = generation;
    }
    set setLevel(level) {
        this.level = level;
    }
    set setMultiplier(multiplier) {
        this.multiplier = multiplier;
    }
    set setTypes(types) {
        this.types = types;
    }
    set setAttacks(attacks) {
        this.attacks = attacks;
    }

    /*
    get getTypes() {
        return [...Object.values(Class_type.all_types)]
    }

    get getAttacks() {
        return [...Object.values(Class_attack.all_attacks)]
    }
     */

    static #findGeneration(id) {
        for (const distinctGeneration in generation) {
            if (generation[distinctGeneration].find(pokemon => pokemon.id === id)) {
                return distinctGeneration;
            }
        }
        return 0;
    }
    static #findTypes(id) {
        let types = {}

        pokemon_type
            .filter(pokemon => pokemon.pokemon_id === id && pokemon.form === 'Normal')
            .flatMap(pokemon => pokemon.type)
            .forEach(type => {
                types[type] = new Class_type(type);
            });

        return types;
    }
    static #findAttacks(id) {
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


    static import_pokemon() {
        pokemon
        .filter(currentPokemon => currentPokemon.form === 'Normal')
        .forEach(currentPokemon => {
            const currentTypes = Class_pokemon.#findTypes(currentPokemon.pokemon_id)
            const currentAttacks = Class_pokemon.#findAttacks(currentPokemon.pokemon_id)

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

            Class_pokemon.all_pokemon[currentPokemon.pokemon_id] =
                new Class_pokemon(
                    currentPokemon.pokemon_id,
                    currentPokemon.pokemon_name,
                    currentPokemon.base_attack,
                    currentPokemon.base_defense,
                    currentPokemon.base_stamina,
                    Class_pokemon.#findGeneration(currentPokemon.pokemon_id),
                    1,
                    cp_multiplier.find(multiplier => multiplier.level === 1).multiplier,
                    currentTypes,
                    currentAttacks
                );
        });
    }

}


Class_pokemon.import_pokemon();
