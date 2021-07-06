// CODE here for your Lambda Classes
class Person {
    constructor(base) {
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    review(student) {
        let number = Math.floor((Math.random() * 15) + 1);
        let posOrNeg = Math.random();
        if(posOrNeg < .5){
            posOrNeg = 1;
        } 
        else{
            posOrNeg = -1;
        }
        number = number * posOrNeg;
        student.grade = student.grade + number;
        console.log(`${this.name} has reviewed ${student.name}'s grade and has adjusted it by ${number}. Their new grade is ${student.grade}.`)
    }
}

class Student extends Person{
    constructor(learn) {
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects;
        this.grade = learn.grade;
    }
    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    } 
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
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

const whitney = new Student ({
    name: 'Whitney',
    age: 18,
    location: 'Chicago',
    className: 'webpt9',
    grade: 80,
    previousBackground: 'Waitress',
    favSubjects: ['Javascript', 'Physics', 'Anything new']
});


const peter = new Student ({
    name: 'Peter',
    age: 21,
    location: 'Alabama',
    grade: 90,
    className: 'web22',
    previousBackground: 'Police Officer',
    favSubjects: ['Reading', 'Fishing']
});

const john = new Student ({
    name: 'John',
    age: 48,
    grade: 65,
    location: 'Germany',
    className: 'webpt7',
    previousBackground: 'IT',
    favSubjects: ['Woodwork', 'Java', 'Python']
});

const nate = new ProjectManager ({
    name: 'Nate',
    age: 24,
    location: 'San Jose',
    favLanguage: 'Javascript',
    speciality: 'Front End',
    catchPhrase: 'Dad jokes all around.',
    gradClassName: 'webpt1',
    favInstructor: 'Sean'
});


const jane = new ProjectManager ({
    name: 'Jane',
    age: 34,
    location: 'Los Angeles',
    favLanguage: 'Javascript',
    speciality: 'React',
    catchPhrase: "The world needs more love.",
    gradClassName: 'web1',
    favInstructor: 'Pace'
});

const gina = new ProjectManager ({
    name: 'Gina',
    age: 28,
    location: 'Italy',
    favLanguage: 'Ruby',
    speciality: 'Back end',
    catchPhrase: "Don't make me turn this class around.",
    gradClassName: 'web18',
    favInstructor: 'Jennifer'
});


console.log(james.catchPhrase);
jennifer.demo('LESS');
sally.grade(peter, "Applied Javascript");
whitney.listsSubjects();
peter.sprintChallenge("Javascript Fundamentals");
john.PRAssignment('React');
nate.standUp('webpt9');
jane.debugsCode(john, "HTML");
gina.review(john);
jane.review(john);