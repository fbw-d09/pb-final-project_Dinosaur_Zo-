



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



