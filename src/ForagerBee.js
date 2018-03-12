var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

//setting prototype
ForagerBee.prototype = Object.create(Bee.prototype);
//setting constructor
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
};
