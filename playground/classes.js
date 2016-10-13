class Person {
  constructor (name = 'Anonymous', age = '0') {
    this.name = name;
    this.age = age;
  }

  getGreeting () {
    return `Hi! I'm ${this.name} .`;
  }

  toString () {
    return JSON.stringify(this);
  }

  getDescription () {
    return `${this.name} is ${this.age}`;
  }
}


var me = new Person('Mo', '30');
var defaultPerson = new Person();
console.log(me.getDescription());
console.log(defaultPerson.getDescription());
