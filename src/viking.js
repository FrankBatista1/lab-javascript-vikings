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
       this.health -= damage;//how to do that doesnt return anything return ???
    }
}

// Viking
class Viking {
  constructor(health,strength,name){
  super(health,strength)
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
  super(health, strength)
  receivedamage(damage) {
  this.health -= damage
  if (this.health > 0){
    return `${this.health} has received ${damage} points of damage`
   }
    else {
      return `A Saxon has died in act of combat`
    }
  }



// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
