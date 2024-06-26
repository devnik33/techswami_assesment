/**
 * Problem 4: Prototypes and Inheritance
 *
 * Implement a constructor function `Person` that has properties `name` and `age`.
 * Add a method `introduce` on the prototype that returns a string introducing the person.
 *
 * @returns {function} - The Person constructor function.
 */

export function Person(name,age){
    this.name=name;
    this.age=age;
    this.introduce=function(){
        return `Hi, I am ${this.name} and I am ${this.age} years old.`;
    }
    

}

let person=new Person('Bob',25);
person.introduce()


