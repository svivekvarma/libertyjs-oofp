console.log('Prototypal inheritance, example one: just a Dog');

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' barked.');
};

var dog = new Dog("Roma");
dog.bark();

