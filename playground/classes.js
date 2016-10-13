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
    return `${this.name} is ${this.age} years old`;
  }
}

class Child extends Person {
  constructor (name, age , like) {
    super(name, age);
    this.like = like;
  }
  getGreeting() {
    return `Hiiiiiiiii! my name is ${this.name} and i like ${this.like}`;
  }

}


class Baby extends Person {
  getGreeting() {
    return `Waaaaaaah`;
  }
}

var me = new Person('Mo', '30');
var defaultPerson = new Child('AJ' , '25' , 'cars');
var baby = new Baby();

console.log(me.getGreeting());
console.log(defaultPerson.getGreeting());
console.log(baby.getGreeting());
