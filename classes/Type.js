class Type {
    static all_types = {};

    constructor(type_name) {
        this.type_name = type_name;
        this.type_effectiveness = type_effectivness[type_name];
    }

    toString() {
        return this.type_name;
    }
}
