// Soldier
class Soldier {
  constructor (health,strength){
    this.health = health,
    this.strength = strength
  }
    attack() {
        return this.strength;
    }
    receivedamage(damage) {
       this.health -= damage;//Doesnt return anything return ???
    }
}

// Viking
class Viking extends Soldier {
  constructor(health,strength,name){
    super(health,strength);
    this.name = name
}
 receivedamage(damage) {
  this.health -= damage
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`
  }
  else{
      return `${this.name}has died in act of combat`
  }
}
  battleCry() {
    return "Odin Owns You All!"
  }
}


// Saxon
class Saxon extends Soldier{
  constructor(health,strength){
  super(health, strength)
}
  receivedamage(damage) {
  this.health -= damage
    if(this.health > 0){
    return `${this.health} has received ${damage} points of damage`
   }
    else {
      return `A Saxon has died in act of combat`
    }
  }
}

// const saxon1 = new Saxon(123,234)
// console.log(saxon1)

// // War
// class War {
//   constructor(){
//   this.viking = {},
//   this.saxon = {}
// }
//   addViking(newViking){
//     this.viking += newViking;
//   }
//   addSaxon(newViking) {
//     this.saxon += newViking;
//   }
//   // addSaxon()
//   // vikingAttack()
//   // saxonAttack()
//   // showStatus() 
// }



// const guerra = new War()
// guerra.addSaxon(saxon1)
// console.log(guerra)


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = { Soldier, Viking, Saxon, War };
// }
