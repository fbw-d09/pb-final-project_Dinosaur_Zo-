
//                                              !LETS PLAY!
//                                  (1 vs 1) = Winner vs Winner = (1 vs 1)
//                                      👑️ King of the Dinosaurs 👑️

class AttackSkill {

    name;
    damage; // +schaden beim gegner
    energyLoss; //-energy beim ausführenden dino

    constructor(name, damage, energyLoss) {
        this.name = name;
        this.damage = damage;
        this.energyLoss = energyLoss;
    }

}

//new attackSkill                      name       damage/energyLoss
const keulenschlag = new AttackSkill('Keulenschlag', 70, 30);
const stacheltornado = new AttackSkill('Stacheltornado', 120, 50);

const donnertritt = new AttackSkill('Donnertritt', 60, 20);
const schnabelstoss = new AttackSkill('Schabelstoß', 100, 40);

const klauenschnitt = new AttackSkill('Klauenschnitt', 50, 20);
const krallenwurf = new AttackSkill('Krallenwurf', 90, 30);

const schreckenbiss = new AttackSkill('Schreckensbiss', 80, 40);
const donnerzahn = new AttackSkill('Donnerzahn', 100, 60);



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
        return `${this.name} has learned ${skill.name} !`
    }

    status() {
        return `${this.name} has got LP: ${this.lp} and Energy:${this.energy}`
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

    regainEnergy(regainedEP) {
        if (this.diet === 'herbivore') {
           
            return `${this.name} regained `
        }
        else if (this.diet === 'carnivor') {
            let regainedEP = this.energy + 5;
            return `${this.name} regained ${regainedEP} energy by eating some flesh its ep ${this.energy}` 
        }
        else {
            return `${this.name} catched a giant Meganeura and fully restored its energy !`
        }

    }
}






//                                  Dinosaurier:/ ernährung  / LP / Energy
const ankylosaurus = new Dinosaur('Ankylosaurus', 'herbivor', 240, 150);
//console.log(ankylosaurus);

const ornithomimus = new Dinosaur('Ornithomimus', 'omnivor', 180, 170);
//console.log(ornithomimus);

const utahraptor = new Dinosaur('Utahraptor', 'carnivor', 220, 120);
//console.log(utahraptor);

const allosaurus = new Dinosaur('Allosaurus', 'carnivor', 200, 130);
//console.log(allosaurus);




//methodenaufruf status
console.log(ankylosaurus.status());
console.log(ornithomimus.status());
console.log(utahraptor.status());
console.log(allosaurus.status());


//dinosaur learns attack
console.log(ankylosaurus.learnSkill(keulenschlag));
//console.log(keulenschlag);
console.log(ankylosaurus.learnSkill(stacheltornado));

console.log(ankylosaurus)


console.log(ornithomimus.learnSkill(donnertritt));
//console.log(donnertritt);
console.log(ornithomimus.learnSkill(schnabelstoss));

console.log(ornithomimus);

console.log(utahraptor.learnSkill(klauenschnitt));
//console.log(klauenschnitt);
console.log(utahraptor.learnSkill(krallenwurf));

console.log(utahraptor);


console.log(allosaurus.learnSkill(schreckenbiss));
//console.log(schreckenbiss);
console.log(allosaurus.learnSkill(donnerzahn));

console.log(allosaurus);

// FIGHT 1
console.log("FIGHT 1: Ankylosaurus vs. Utahraptor")
console.log(ankylosaurus.attack(utahraptor, [0]));
// console.log(ankylosaurus.status());
// console.log(utahraptor.status());
console.log(utahraptor.attack(ankylosaurus, [1]));
console.log(ankylosaurus.status());
console.log(utahraptor.status());
console.log(ankylosaurus.attack(utahraptor, [1]));
console.log(utahraptor.status());
console.log(utahraptor.attack(ankylosaurus, [0]));
console.log(ankylosaurus.attack(utahraptor, [0]));
console.log(ankylosaurus.status());


//FIGHT 2
console.log("FIGHT 2: Allosaurus vs. Ornithomimus");
console.log(allosaurus.attack(ornithomimus, [1]));
console.log(ornithomimus.attack(allosaurus, [0]));
console.log(allosaurus.status());
console.log(ornithomimus.status());
console.log(allosaurus.attack(ornithomimus, [2]));
console.log(ornithomimus.attack(allosaurus, [1]));
console.log(allosaurus.status());
console.log(ornithomimus.status());
console.log(allosaurus.attack(ornithomimus, [1]));
console.log(allosaurus.status());


console.log(allosaurus.regainEnergy(50));
console.log(allosaurus.status());






