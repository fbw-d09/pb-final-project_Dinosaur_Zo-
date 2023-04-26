
//                                              !LETS PLAY!
//                                  (1 vs 1) = Winner vs Winner = (1 vs 1)
//                                      👑️ King of the Dinosaurs 👑️



//Import der Klassen Dinosaur/AttackSkill
const Dinosaur = require('./src/Dinosaur');

const AttackSkill = require('./src/AttackSkill');


//                                  Dinosaurier:/ ernährung  / LP / Energy
const ankylosaurus = new Dinosaur('🐊️Ankylosaurus', 'herbivor', 220, 150);
//console.log(ankylosaurus);

const megalodon = new Dinosaur('🦈️ Megalodon', 'piscivor', 260, 170);
//console.log(utahraptor);

const argentinosaurus = new Dinosaur('🦕️ Argentinosaurus', 'herbivor', 240, 180);
//console.log(argentinosaurus);



const allosaurus = new Dinosaur('🦖️ Allosaurus', 'carnivor', 190, 130);
//console.log(allosaurus);



//new attackSkill                     name       damage/energyLoss

//ankylosaurus
const keulenschlag = new AttackSkill('Keulenschlag🦴️', 70, 30);
const stacheltornado = new AttackSkill('Stacheltornado🌪️', 90, 50);

//megalodon
const hyperflut = new AttackSkill('Hyperflut🌊️', 150, 20);
const donnerzahn = new AttackSkill('Donnerzahn🦷️', 100, 60);

//argentinosaurus
const donnertritt = new AttackSkill('Donnertritt🐾️', 60, 20);
const megaschlag = new AttackSkill('Megaschlag🌠️', 100, 40);


//allosaurus

const schreckenbiss = new AttackSkill('Schreckensbiss🦷️', 80, 40);
const krallenwurf = new AttackSkill('Krallenwurf🔱️', 90, 30);



//methodenaufruf status
console.log(ankylosaurus.status());
console.log(argentinosaurus.status());
console.log(megalodon.status());
console.log(allosaurus.status());


//dinosaur learns attack
console.log(ankylosaurus.learnSkill(keulenschlag));
//console.log(keulenschlag);
console.log(ankylosaurus.learnSkill(stacheltornado));
console.log(ankylosaurus)
console.log(argentinosaurus.learnSkill(donnertritt));
//console.log(donnertritt);
console.log(argentinosaurus.learnSkill(megaschlag));
console.log(argentinosaurus);
console.log(megalodon.learnSkill(donnerzahn));
//console.log(klauenschnitt);
console.log(megalodon.learnSkill(hyperflut));
console.log(megalodon);
console.log(allosaurus.learnSkill(krallenwurf));
//console.log(schreckenbiss);
console.log(allosaurus.learnSkill(schreckenbiss));

console.log(allosaurus);


// FIGHT 1
console.log("FIGHT 1: Ankylosaurus vs. Megalodon")
console.log(ankylosaurus.attack(megalodon, [0]));
// console.log(ankylosaurus.status());
// console.log(utahraptor.status());
console.log(megalodon.attack(ankylosaurus, [1]));
console.log(ankylosaurus.attack(megalodon, [1]));
console.log(megalodon.attack(ankylosaurus,[0]));

console.log(ankylosaurus.status());
console.log(megalodon.regainEnergy());




//FIGHT 2
console.log("FIGHT 2: Allosaurus vs. Argentinosaurus");

console.log(allosaurus.status());
console.log(argentinosaurus.status());

console.log(allosaurus.attack(argentinosaurus, [1]));
console.log(argentinosaurus.attack(allosaurus, [0]));
console.log(allosaurus.status());
console.log(argentinosaurus.status());
console.log(allosaurus.attack(argentinosaurus, [2]));
console.log(argentinosaurus.attack(allosaurus, [1]));
console.log(allosaurus.status());
console.log(argentinosaurus.status());
console.log(allosaurus.attack(argentinosaurus,[0]));
console.log(argentinosaurus.attack(allosaurus,[1]));
console.log(argentinosaurus.regainEnergy());


//FIGHT 3
console.log("FINAL FIGHT: Megalodon vs Argentinosaurus");

console.log(megalodon.status());
console.log(argentinosaurus.status());

console.log(megalodon.attack(argentinosaurus,[0]));
console.log(argentinosaurus.attack(megalodon,[0]));
console.log(megalodon.status());
console.log(argentinosaurus.status());
console.log(megalodon.attack(argentinosaurus,[1]));
















