function Person(name, age){
    this.name = name
    this.age = age
    this.sayHi = function(){
        console.log(`Hi, I am ${this.name}`)
    }
}
const person = new Object()
Person.call(person, "John", 18)
person.sayHi()
console.log(person instanceof Person)
console.log(person.constructor)