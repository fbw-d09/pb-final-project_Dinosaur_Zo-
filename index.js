
//                                              !LETS PLAY!
//                                  (1 vs 1) = Winner vs Winner = (1 vs 1)
//                                      👑️ King of the Dinosaurs 👑️



function divider(input)
{
    const spacer = "=".repeat(40);
    console.log("\n" + spacer, input, spacer, "\n");
};

function divider1(input)
{
    const spacer = "-".repeat(40);
    console.log("\n" + spacer, input, spacer, "\n");
};


//Import der Klassen Dinosaur/AttackSkill
const Dinosaur = require('./src/Dinosaur');

const AttackSkill = require('./src/AttackSkill');


//                                  Dinosaurier:/ ernährung  / LP / Energy
const ankylosaurus = new Dinosaur('🐊️Ankylosaurus', 'herbivor', 220, 150);
//console.log(ankylosaurus);

const megalodon = new Dinosaur('🦈️ Megalodon', 'piscivor', 260, 170);
//console.log(megalodon);

const argentinosaurus = new Dinosaur('🦕️ Argentinosaurus', 'herbivor', 240, 180);
//console.log(argentinosaurus);

const allosaurus = new Dinosaur('🦖️ Allosaurus', 'carnivor', 190, 130);
//console.log(allosaurus);



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
divider("dinoattacks")
console.log(ankylosaurus.learnSkill(keulenschlag));
console.log(ankylosaurus.learnSkill(stacheltornado));
console.log(ankylosaurus);

console.log(megalodon.learnSkill(donnerzahn));
console.log(megalodon.learnSkill(hyperflut));
console.log(megalodon);

console.log(argentinosaurus.learnSkill(donnertritt));
console.log(argentinosaurus.learnSkill(megaschlag));
console.log(argentinosaurus);


console.log(allosaurus.learnSkill(krallenwurf));
console.log(allosaurus.learnSkill(schreckenbiss));
console.log(allosaurus);


// FIGHT 1
divider("💫️ FIGHT 1: Ankylosaurus vs. Megalodon");
divider1("status");
console.log(ankylosaurus.status());
console.log(megalodon.status());
divider1("💥️fight💥️")
console.log(ankylosaurus.attack(megalodon, [0]));
console.log(megalodon.attack(ankylosaurus, [1]));
console.log(ankylosaurus.attack(megalodon, [1]));
divider1("final hit")
console.log(megalodon.attack(ankylosaurus,[0]));
divider1("result");
console.log(ankylosaurus.status());
divider1("regain");
console.log(megalodon.regainEnergy());
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
console.log(allosaurus.attack(argentinosaurus,[0]));
divider1("final hit");
console.log(argentinosaurus.attack(allosaurus,[1]));
divider1("regain");
console.log(argentinosaurus.regainEnergy());


//FIGHT 3
divider("💫️ FINAL FIGHT: Megalodon vs Argentinosaurus");
divider1("status");
console.log(megalodon.status());
console.log(argentinosaurus.status());
divider1("💥️fight💥️");
console.log(megalodon.attack(argentinosaurus,[1]));
console.log(argentinosaurus.attack(megalodon,[0]));
console.log(megalodon.regainEnergy());
console.log(argentinosaurus.regainEnergy());
console.log(megalodon.attack(argentinosaurus,[1]));
console.log(argentinosaurus.attack(megalodon,[1]));
divider1("final hit");
console.log(megalodon.attack(argentinosaurus,[0]));
divider1("result");
console.log(argentinosaurus.status());
console.log(megalodon.status());
divider("this was: the king of the dinosaurs👑️")
//divider("THE WINNER 👑️ ")
















