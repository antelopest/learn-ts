enum Color {Red, Green, Blue}

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['a', 'b', 'c'];

interface Person {
    name: string;
    age: number;

    greet(): string;
}

const person: Person = {name: 'John', age: 30, greet: () => 'Hello'};

class User implements Person {
    name: string;
    age: number;

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


}

const user = new User('John', 30);
user.greet();