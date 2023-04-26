
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



module.exports = AttackSkill;