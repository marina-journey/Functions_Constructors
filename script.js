const fine = {
    none: 'none',
    late: 'late fo work',
    absent: 'absent at work',
    delay: 'delay project',
};

const fineTax = {
    [fine.none]: 0,
    [fine.late]: 10,
    [fine.absent]: 20,
    [fine.delay]: 100,
};

const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
};
  
const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
};
  
const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
};
  
function User(name, language, grade = grades.Junior, fine = fine.none, ) {
    this.name = name;
    this.language = language;
    this.fine = fine;
    this.grade = grade;
    this.salary = 1000;
    this.tasks = 0;
    this.done = 0;
  
    this.addTask = () => {
      this.tasks++;
    };
  
    // this.finishTask = () => {
    //   if (this.tasks > 0) {
    //     this.tasks--;
    //     this.salary +=
    //       (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
    //     }
    // };

    this.addDone = () => {
        this.done++;
    };

    this.upgrade = () => {
        if (this.done >= 11) {
            this.grade = grades.Senior;
        } else if (this.done <= 10 && this.done >= 6 ) {
            this.grade = grades.Middle;
        } else {
            console.log('Try harder, you must do more task!'); 
        };
    }

    this.finalSalary = () => { //вот тут не разобралась, как вычислить зарплату за вычетом штрафа
        this.salary = this.salary - fineTax[this.fine];
    };
}
  
const user = new User('John', 'C++', grades.Junior, fine.none);
const user1 = new User('Vasya', 'Rust', grades.Junior, fine.absent);
const user2 = new User('Nifertiti', 'Bu', grades.Junior, fine.delay);
  
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();

// user.finishTask();
// user.finishTask();
// user.finishTask();

user.addDone();
user.addDone();

user.upgrade();

user.finalSalary();

user1.addTask();
user1.addTask();
user1.addTask();

// user1.finishTask();

user1.addDone();
user1.addDone();
user1.addDone();
user1.addDone();
user1.addDone();
user1.addDone();
user1.addDone();

user1.upgrade();

user2.addTask();
user2.addTask();

user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();
user2.addDone();

// user2.finishTask();

user2.upgrade();

console.log(user);
console.log(user1);
console.log(user2);







// In class
// const userExample = {
//     name: 'Custom Name',
//     salary: 1000,
//     language: 'JavaScript',
//     tasks: 5,
//   };
  

// function User() {
//     return {
//         name: 'Custom Name',
//         salary: 1000,
//         language: 'JavaScript',
//         tasks: 5,
//     };
// }

// const grade = {
//     Junior: 'junior',
//     Middle: 'middle',
//     Senior: 'senior',
// };

// const bonuses = {
//     'C++': 100,
//     Rust: 150,
// };

// const gradeTax = {
//     [grade.Junior]: 0.25,
//     [grade.Middle]: 0.50,
//     [grade.Senior]: 0.75,
// };

// function User(name, language, grade = grade.Junior, salary = 1000, tasks = 0) {
//     // return {
//     //     ...userExample,
//     // };
//     this.name = name;
//     this.grade = grade;
//     this.salary = salary;
//     this.language = language;
//     this.tasks = tasks;

//     this.addTasks = () => {
//         this.tasks++;
//     };

//     // this.taskMutate = () => {
//     //     addTasks();
//     //     this.salary += 200;
//     // }

//     this.finishTasks = () => {
//         if (this.tasks > 0) {
//             this.tasks--;
//             this.salary += (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
//         }
//     };
// }


// const user = new User('Vanya', 'C++', grade.Junior);
// const user2 = new User('Alex', 'Rust', grade.Middle);
// const user3 = new User('Anna', 'Ru', grade.Senior);

// user.addTasks();
// user.addTasks();
// user.addTasks();
// user.addTasks();
// user.addTasks();

// user.finishTasks();
// user.finishTasks();
// user.finishTasks();
// user.finishTasks();

// user2.addTasks();
// user2.addTasks();

// user2.finishTasks();

// user3.addTasks();

// user3.finishTasks();

// console.log(user.salary, user.tasks);
// console.log(user2.salary, user2.tasks);
// console.log(user3.salary, user3.tasks);
// // console.log(user);
// // console.log(user instanceof User);
// // console.log(user, user2, user == user2);