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

    import_pokemon() {
        pokemon
            .filter(p => p.form === 'Normal')
            .forEach(p => {
                Object.values(generation).forEach(gen => {
                    const resultat = gen.find(pokegen => pokegen.id === p.pokemon_id);
                    const genActuel = Object.keys(generation).find(key => generation[key] === gen);
                    if(resultat) {
                        Pokemon.all_pokemon[p.pokemon_id] = new Pokemon(p.pokemon_id, p.pokemon_name, p.base_attack, p.base_defense, p.base_stamina, genActuel, 1, 0.09399999678134918);
                    }
                });
            });
    }
}


let a = new Pokemon();

a.import_pokemon();

console.log(Pokemon.all_pokemon);
