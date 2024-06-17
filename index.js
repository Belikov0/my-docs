function Person(name, age){
    this.name = name
    this.age = age
    
}

Person.prototype.sayHi = function(){
    console.log(`Hi, I am ${this.name}`)
}

function Student(name, age, id){
    this.id = id
    this.name = name
    this.age = age
}

Student.prototype.__proto__ = Person.prototype


const stu = new Student('张三', 15, 100)

console.log(stu instanceof Person)
stu.sayHi()

console.log(stu.__proto__, Student.prototype.constructor, stu.constructor)