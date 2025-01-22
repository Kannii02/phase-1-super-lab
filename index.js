class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class (Child of Tree)
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); 
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Define the Evergreen class (Child of Tree)
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); 
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Example Usage
  const oak = new Deciduous("Quercus", "Oak");
  const pine = new Evergreen("Pinus", "Pine");
  
  console.log(`Species: ${oak.species}, Name: ${oak.name}`);
  console.log(Deciduous.definition());
  
  console.log(`Species: ${pine.species}, Name: ${pine.name}`);
  console.log(Evergreen.definition());
  
  // Export the classes
  module.exports = { Tree, Deciduous, Evergreen };
  