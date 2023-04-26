
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
        return `${this.name} has got LP: ${this.lp} and Energy:${this.energy}`;

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
                return `${target.name} has been defeated by ${this.name}! ${this.name} is the winner!`
            }

            return `${this.name} attacks ${target.name} with ${selectedSkill.name}!`
        }


        else if (!selectedSkill) {
            // return `${this.name} doesn't know that attack!`
            return `${this.name} got distracted and failed to attack`
        }

        else {
            return `${this.name} doesn't have enough EP to use this attack!`
        }

    }

    regainEnergy() {
        let regainedEP = this.energy + 50;
        if (this.diet === 'herbivore') {

            return `${this.name} regained `
        }
        else if (this.diet === 'carnivor') {

            return `${this.name} regained ${regainedEP} energyPoints by eating some flesh `
        }
        else {
            return `${this.name} catched a giant Meganeura and fully restored its energy !`
        }

    }
}








module.exports = Dinosaur;










