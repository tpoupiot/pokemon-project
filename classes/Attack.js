class Attack {
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
        this.move_speed = move_speed
    }

    toString() {
        return `Nom : ${this.name}, ID : ${this.move_id}`;
    }
}