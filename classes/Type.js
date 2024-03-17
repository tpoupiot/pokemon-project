class Type {
    static all_types = {};

    constructor(type_name) {
        this.type_name = type_name;
        this.type_effectiveness = type_effectivness[type_name];
    }

    toString() {
        return this.type_name;
    }

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
