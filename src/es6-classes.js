

class Person{

constructor(name='Anonymous',age=10){
this.name = name;
this.age = age;
}

getGreeting()
{
    return `Hi this is ${this.name} and my age is ${this.age}`;
}
}

const me = new Person('Krishna Vatsavai',32);
console.log(me.getGreeting());

console.log(me.name,me.age);

const other = new Person();
console.log(other.getGreeting());

console.log(other.name,other.age);