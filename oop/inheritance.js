class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(this.name, "is eating");
  }
}
class Ilham extends Person {
  mainBola() {
    console.log("bisa main bola");
  }
}

const ilham = new Ilham("ilham", 21);
ilham.mainBola();
ilham.eat()
console.log(ilham);
