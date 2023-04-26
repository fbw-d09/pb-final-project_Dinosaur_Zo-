
//                                              !LETS PLAY!
//                                  (1 vs 1) = Winner vs Winner = (1 vs 1)
//                                      👑️ King of the Dinosaurs 👑️



//Class Dinosaur

class Dinosaur {

    constructor(name, diet, lp, energy) {
        this.name = name;
        this.diet = diet;
        this.lp = lp;
        this.energy = energy;
        this.skills = [];
    }

    learnSkill(skill) {
        this.skills.push(skill);
        return `${this.name} has learned ${skill.name} !`;
    }

    status() {
        return `${this.name} has got 🔋️LP: ${this.lp} and ✨️EP:${this.energy}`;

    }

    //target param = dino who gets attacked / skillindex = eine der erlernten attacken im skills array an pos.
    attack(target, skillIndex) {
        const selectedSkill = this.skills[skillIndex];

        if (selectedSkill && this.energy >= selectedSkill.energyLoss) {
            //ziel-lebenspunkte -= damage punkte bei selected skills array
            target.lp -= selectedSkill.damage;
            //energy d anwenders - attacken-enegerie-verlust
            this.energy -= selectedSkill.energyLoss;

            if (target.lp <= 0) {
                target.lp = 0;
                return ` ${this.name} attacks with ${selectedSkill.name} ${target.name} has been defeated! ${this.name} is the winner! 👑️ `
            }

            return `${this.name} attacks ${target.name} with ${selectedSkill.name}!`
        }


        else if (!selectedSkill) {
            // return `${this.name} doesn't know that attack!`
            return `${this.name} 🌀️ got distracted and failed to attack`
        }

        else {
            return `${this.name} doesn't have enough ✨️EP to use this attack!`
        }

    }

    regainEnergy() {

        if (this.diet === 'herbivor') {
            this.lp += 150;
            this.energy += 100;
            return `${this.name} regained 🔋️LP:${this.lp} and  ✨️EP:${this.energy} by eating some herbs🌿️🍀️`
        }


        else if (this.diet === 'carnivor') {
            this.lp += 100;
            this.energy += 80;
            return `${this.name} regained 🔋️LP:${this.lp} and  ✨️EP:${this.energy}  by eating some meat 🥩️🦤️`
        }

        else {
            this.lp += 130;
            this.energy += 90;
            return `${this.name} regained 🔋️LP:${this.lp} and  ✨️EP:${this.energy} by eating seafood 🦑️🦐️🦞️🦀️ !`
        }

    }
}



module.exports = Dinosaur;










