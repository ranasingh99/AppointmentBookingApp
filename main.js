function Person(firstname,lastname,age,sex){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.sex = sex;
    this.getFullName = function(){
        return `${this.firstname} +${this.lastname}`;
    }
}
const person1= new Person("rana","singh",24,"male");
console.log(person1.fullName);
