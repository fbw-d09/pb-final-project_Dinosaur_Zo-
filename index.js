
//                                              !LETS PLAY!
//                                  (1 vs 1) = Winner vs Winner = (1 vs 1)
//                                      👑️ King of the Dinosaurs 👑️



function divider(input) {
    const spacer = "=".repeat(40);
    console.log("\n" + spacer, input, spacer, "\n");
};

function divider1(input) {
    const spacer = "-".repeat(40);
    console.log("\n" + spacer, input, spacer, "\n");
};


//Import der Klassen Dinosaur/AttackSkill
const Dinosaur = require('./src/Dinosaur');
const Damage = require('./src/Damage');
const AttackSkill = require('./src/AttackSkill');


//                                  Dinosaurier:/ ernährung  / LP / Energy
const ankylosaurus = new Dinosaur('🐊️Ankylosaurus', 'herbivor', 220, 150);
//console.log(ankylosaurus);

const mosasaurus = new Dinosaur('🦈️ Mosasaurus', 'piscivor', 260, 170);
//console.log(mosasaurus);

const argentinosaurus = new Dinosaur('🦕️ Argentinosaurus', 'herbivor', 240, 180);
//console.log(argentinosaurus);

const allosaurus = new Dinosaur('🦖️ Allosaurus', 'carnivor', 190, 130);
//console.log(allosaurus);

//                      Damages:/ name   /  lpLoss
const astroidImpact = new Damage('Astorid', 30);
const vulcanicEruption = new Damage('Vulcan', 40);

// console.log(astroidImpact.astroidImpactDamage());
// console.log(vulcanicEruption(2));


//new attackSkill                     name       damage/energyLoss

//ankylosaurus
const keulenschlag = new AttackSkill('Keulenschlag🦴️', 70, 30);
const stacheltornado = new AttackSkill('Stacheltornado🌪️', 90, 50);

//megalodon
const donnerzahn = new AttackSkill('Donnerzahn🦷️', 100, 60);
const hyperflut = new AttackSkill('Hyperflut🌊️', 150, 20);


//argentinosaurus
const donnertritt = new AttackSkill('Donnertritt🐾️', 60, 20);
const megaschlag = new AttackSkill('Megaschlag🌠️', 100, 40);


//allosaurus

const schreckenbiss = new AttackSkill('Schreckensbiss🦷️', 80, 40);
const krallenwurf = new AttackSkill('Krallenwurf🔱️', 90, 30);

//dinosaur learns attack
divider1("learning attacks")
console.log(ankylosaurus.learnSkill(keulenschlag));
console.log(ankylosaurus.learnSkill(stacheltornado));


console.log(mosasaurus.learnSkill(donnerzahn));
console.log(mosasaurus.learnSkill(hyperflut));


console.log(argentinosaurus.learnSkill(donnertritt));
console.log(argentinosaurus.learnSkill(megaschlag));



console.log(allosaurus.learnSkill(krallenwurf));
console.log(allosaurus.learnSkill(schreckenbiss));


divider("dinosaurs ready to fight");
divider1("fight1");
console.log(ankylosaurus);
console.log(mosasaurus);
divider1("fight2");
console.log(argentinosaurus);
console.log(allosaurus);

// FIGHT 1
divider("💫️ FIGHT 1: Ankylosaurus vs. Mosasaurus");
divider1("status");
console.log(ankylosaurus.status());
console.log(mosasaurus.status());
divider1("💥️fight💥️")
console.log(ankylosaurus.attack(mosasaurus, [0]));
console.log(mosasaurus.attack(ankylosaurus, [1]));
console.log(ankylosaurus.attack(mosasaurus, [1]));
divider1("final hit")
console.log(mosasaurus.attack(ankylosaurus, [0]));
divider1("result");
console.log(ankylosaurus.status());
console.log(ankylosaurus.attack());
divider1("regain");
console.log(mosasaurus.regainEnergy());
divider1;



//FIGHT 2
divider("💫️ FIGHT 2: Allosaurus vs. Argentinosaurus");
divider1("status");
console.log(allosaurus.status());
console.log(argentinosaurus.status());
divider1("💥️fight💥️");
console.log(allosaurus.attack(argentinosaurus, [1]));
console.log(argentinosaurus.attack(allosaurus, [0]));
// divider1("status");
// console.log(allosaurus.status());
// console.log(argentinosaurus.status());

console.log(allosaurus.attack(argentinosaurus, [2]));
console.log(argentinosaurus.attack(allosaurus, [1]));
console.log(allosaurus.status());
// console.log(argentinosaurus.status());
console.log(allosaurus.attack(argentinosaurus, [0]));
divider1("final hit");
console.log(argentinosaurus.attack(allosaurus, [1]));
divider1("result");
console.log(allosaurus.status());
console.log(allosaurus.attack());
divider1("regain");
console.log(argentinosaurus.regainEnergy());


//FIGHT 3
divider("💫️ FINAL FIGHT: Mosasaurus vs Argentinosaurus");
divider1("status");
console.log(mosasaurus.status());
console.log(argentinosaurus.status());
divider1("💥️fight💥️");
console.log(mosasaurus.attack(argentinosaurus, [1]));
console.log(argentinosaurus.attack(mosasaurus, [0]));
console.log(mosasaurus.regainEnergy());
console.log(argentinosaurus.regainEnergy());
console.log(mosasaurus.attack(argentinosaurus, [1]));
console.log(argentinosaurus.attack(mosasaurus, [1]));
divider1("final hit");
console.log(mosasaurus.attack(argentinosaurus, [0]));
divider1("result");
console.log(argentinosaurus.status());
console.log(argentinosaurus.attack());
divider("the winner is:");
console.log(mosasaurus.declareWinner());
divider("this was: the king of the dinosaurs👑️")
divider1("thx for playing");
divider1("copy right: chaoz company 2023")

















