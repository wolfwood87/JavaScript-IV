// CODE here for your Lambda Classes
class Person {
    constructor(base) {
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(teach){
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
    }
    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructoor = pm.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    } 
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const jimmy = new Person({
    name: "Jimmy",
    age: "42",
    location: "Nashville, TN"
});
jimmy.speak();
const bob = new Person({
    name: "Bob",
    age: "45",
    location: "London, England"
});
const billy = new Person({
    name: "Billy",
    age: "21",
    location: "Paris, France"
});

const james = new Instructor({
    name: 'James',
    location: 'Earth',
    age: 28,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Catch ya on the flip side.'
});

console.log(james.catchPhrase);

const jennifer = new Instructor({
    name: 'Jennifer',
    location: 'New York',
    age: 31,
    favLanguage: 'Javascript',
    specialty: 'Front-end',
    catchPhrase: 'Right back atcha.'
});

const sally = new Instructor({
    name: 'Sally',
    location: 'Kansas City',
    age: 22,
    favLanguage: 'Java',
    specialty: 'Mobile',
    catchPhrase: 'Sorry not sorry.'
});