const Dinosaur = require('./src/Dinosaur');

const AttackSkill = require('./src/AttackSkill');


//                                  Dinosaurier:/ ernährung  / LP / Energy
const ankylosaurus = new Dinosaur('Ankylosaurus', 'herbivor', 240, 150);
//console.log(ankylosaurus);

const ornithomimus = new Dinosaur('Ornithomimus', 'omnivor', 180, 170);
//console.log(ornithomimus);

const utahraptor = new Dinosaur('Utahraptor', 'carnivor', 220, 120);
//console.log(utahraptor);

const allosaurus = new Dinosaur('Allosaurus', 'carnivor', 200, 130);
//console.log(allosaurus);



//new attackSkill                      name       damage/energyLoss
const keulenschlag = new AttackSkill('Keulenschlag', 70, 30);
const stacheltornado = new AttackSkill('Stacheltornado', 120, 50);

const donnertritt = new AttackSkill('Donnertritt', 60, 20);
const schnabelstoss = new AttackSkill('Schabelstoß', 100, 40);

const klauenschnitt = new AttackSkill('Klauenschnitt', 50, 20);
const krallenwurf = new AttackSkill('Krallenwurf', 90, 30);

const schreckenbiss = new AttackSkill('Schreckensbiss', 80, 40);
const donnerzahn = new AttackSkill('Donnerzahn', 100, 60);





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
console.log(allosaurus.regainEnergy());
console.log(allosaurus.status());



















