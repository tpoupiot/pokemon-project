class Class_type {
    static all_types = {};

    constructor(type_name) {
        this.type_name = type_name;
        this.type_effectiveness = type_effectivness[type_name];
    }

    toString() {
        return `Type: ${this.type_name}`;
    }

    // Accesseurs
    get getTypeName() {
        return this.type_name;
    }
    get getTypeEffectiveness() {
        return this.type_effectiveness;
    }

    set setTypeName(type_name) {
        this.type_name = type_name;
    }
    set setTypeEffectiveness(type_effectiveness) {
        this.type_effectiveness = type_effectiveness;
    }
}
