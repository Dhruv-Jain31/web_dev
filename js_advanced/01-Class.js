// class is a blueprint. That has attributes and functions associated to it. Attributes
// are the properties and functions are the things that happen on the object.
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  static myType(){  // this is a static method. Through this function can be called
    // directly on the class.
    console.log("Animal")
    return
  }
  speak(){ // this function needs a object of a class to be called.
    return console.log("hi there" + " " + this.speaks)
  }
}

console.log(Animal.myType())
let dog = new Animal("dog",4,"bhow bhow");
dog.speak()


