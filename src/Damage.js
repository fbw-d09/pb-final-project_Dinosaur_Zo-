

class Damage {
    constructor(name, lpLoss, lp) {
        this.name = name;
        this.lpLoss = lpLoss;
        this.lp = lp;
    }
    asteroidImpactDamage(dinosaur) {
      //  this.lpLoss -= 30;
        const asteroidDamage = dinosaur.lp-this.lpLoss;
        return `oh wow look at this! a 🎇️ ${this.name} 🎇️ crashed right next to the fighting dinos and caused ${asteroidDamage} damage on ${dinosaur.name}`
    }
    // vulcanicEruption(num) {
    //     if (num >= 0 && num <= 5) {
    //         this.lpLoss -= num;
    //         return `stunning! a 🌋️  ${this.name} 🌋️ ! the lava damaged the dinosaurs and caused ${this.lpLoss}`
    //     }


    // }


}

module.exports = Damage;

