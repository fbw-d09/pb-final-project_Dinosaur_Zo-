

class Damage {
    constructor(name, lpLoss) {
        this.name = name;
        this.lpLoss = lpLoss;
    }
    astroidImpactDamage() {
        this.lpLoss -= 30;  
        return `oh wow look at this! a ${this.name} crashed right next to the fighting dinos and caused LP: ${this.lpLoss}`
    }
    vulcanicEruption(num) {
        if (num >= 0 && num <= 5) {
            this.lpLoss -= num;
            return `stunning! a  ${this.name} ! the lava damaged the dinosaurs and caused ${this.lpLoss}`
        }


    }


}

module.exports = Damage;

