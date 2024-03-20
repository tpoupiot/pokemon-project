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
}
