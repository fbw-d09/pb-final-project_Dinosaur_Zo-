

// was brauche ich ?

// verschiedene Attacken / 2pro Dino
//Lebenspunkte

//Beim Angriff soll die Anzahl der Schadenspunkte von den Lebenspunkten abgezogen werden.
//Erst kämpfen D1+D2, dann D3+D4 dann Gewinner + Gewinner
  

// Methoden:
//-Status (LP)
//-attacke erlernen () //learnAttackSkill (object als argument)  
//-attacke ausführen() // attack //Die spezifischen Angriffe sollten mit der Konstruktorfunktion AttackSkill erstellt und dann intern zum Array skills des Dinos hinzugefügt werden.
//-KräuterfressMethode // Fleischfressmethode für (Erholung) Energie // if /else carnivore/herbivore/elses




//Klassen
//4 Dinosaurier
// name, diet, lp, energy
//Objects:
//Dinosaurier:  //ernährung // LP // Energy (EP)
//Ankylosaurus (herbivor)  // 250  / 150 / 
//Ornithomimus (omnivor)  //  180 / 170 /
//Albertosaurus (carnivore) // 260 / 120 
//             (piscivore) //        /    /


//Attacken: ATTACKENSKILLKLASSE
//Ankylosaurus: Keulenschlag: -70 LP // Panzer: (schütz 100% & Genger) -30LP // 
//Ornithomimus: Superkick:    -60 LP // Sprinter: (weicht nächster Attacke aus & Gegner) -40LP // 
//Albertosaurus: Zerstörender Biss: - 80 LP //                                               //
//

// notfall: der komet fällt vom himmel


//1. die dinosaurier werden in einer class Dinosaur in objekten angelegt:
//    methode learnAttackSkill wird angelgt. benötigt, da am anfang keine attacken gegeben sind.

//    methode attack wird angelgt, 
//    methode status angelegt, die lebenspunkte und energy angibt

//2. eine weitere class AttackSkill wird angelegt. 
//    sie hat drei Argumente: name der attacke; höhe des verursachten schadens(damage); menge an energie die benötigt wird.


//    die Angriffe werden mit einer constructorfunction AttackSkill erstellt und zum skills array d dinos hinzugefügt

//3.  in Dinosaur 

//4.  "                           " attack erstellt:ruft eine der erlernten attacken auf und fügt gegner schaden zu 
//                                                       erlernte attacke wird aufgerufen 
//                                                       gegner wird schaden abgezogen (lp-damage)
