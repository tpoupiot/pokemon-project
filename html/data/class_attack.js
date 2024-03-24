class Class_attack {
    static all_attacks = {}

    constructor(id, name, type, power, duration, energy_delta, stamina_loss_scaler, critical_chance, move_speed) {
        this.move_id = id;
        this.name = name;
        this.type = type;
        this.power = power;
        this.duration = duration;
        this.energy_delta = energy_delta;
        this.stamina_loss_scaler = stamina_loss_scaler;
        this.critical_chance = critical_chance;
        this.move_speed = move_speed;
    }

    toString() {
        return `Nom : ${this.name}, ID : ${this.move_id}`;
    }

    // Accesseurs
    get getId() {
        return this.move_id;
    }
    get getName() {
        return this.name;
    }
    get getType() {
        return this.type;
    }
    get getPower() {
        return this.power;
    }
    get getDuration() {
        return this.duration;
    }
    get getEnergyDelta() {
        return this.energy_delta;
    }
    get getStaminaLossScaler() {
        return this.stamina_loss_scaler;
    }
    get getCriticalChance() {
        return this.critical_chance;
    }
    get getMoveSpeed() {
        return this.move_speed;
    }

    set setId(id) {
        this.move_id = id;
    }
    set setName(name) {
        this.name = name;
    }
    set setType(type) {
        this.type = type;
    }
    set setPower(power) {
        this.power = power;
    }
    set setDuration(duration) {
        this.duration = duration;
    }
    set setEnergyDelta(energy_delta) {
        this.energy_delta = energy_delta;
    }
    set setStaminaLossScaler(stamina_loss_scaler) {
        this.stamina_loss_scaler = stamina_loss_scaler;
    }
    set setCriticalChance(critical_chance) {
        this.critical_chance = critical_chance;
    }
    set setMoveSpeed(move_speed) {
        this.move_speed = move_speed;
    }
}