/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE
function accionsMultiple (arr) {
  this.arr = arr
} 

// 1 recorre un array e imprime una horación si trabaja en barcelona y conoce react
 accionsMultiple.prototype.stayBarcelona = function () {
   let filter = element => element === "React"
    let stay = element => {
      if(element.job.city === "Barcelona" && element.skills.includes("React")) {
        console.log(`Hi my name is ${element.firstName} ${element.lastName}. I work in ${element.job.city} and i know ${element.skills.filter(filter)}`)
      }
  }
  this.arr.forEach(stay);
}
//2 recorre un array, si trabaja en barcelona ingresa una nueva habilidad y modifica el valor de la propiedad class
accionsMultiple.prototype.add = function () {
  let newSkill = "SQL"
  let changes = element => {
    if(element.job.city === "Barcelona") {
       element.skills.push(newSkill), element.class = "Jun 1"
    }
  }
  this.arr.map(changes)
}
//3 crea un nuevo metodo dentro del objeto y ese metodo agrega skill
accionsMultiple.prototype.skillPlus = function() {
  let plus = element => {
    element.addsKill = function(string) {
      element.skills.push(string)
    }
  }
  this.arr.map(plus)
}


//4 agrega una habilidad a todos los objetos
accionsMultiple.prototype.newSkill = function() {
  let add = element => element.addsKill("Dance")
  this.arr.map(add)
}


//5 quita una hablidad en todos los objetos
accionsMultiple.prototype.removeSkill = function() {
  let remove = element => element.skills.pop()
  this.arr.map(remove)
}


//6 retorna el nombre de la persona que tiene mas skill
accionsMultiple.prototype.mentorWithSkill = function() {
  let skills = [];
  let withh = element => skills.push(element.skills.length);  
  this.arr.forEach(withh)
  let higherr = Math.max.apply(null, skills)
  let is = element => {
    if(element.skills.length === higherr) {
      return console.log(element.firstName) 
      
    }
  }
  
  this.arr.find(is)
}


//7 se agrega un nuevo metodo a cada objeto ".addStudenLikes" y este metodo agrega un 1 a cada propiedad studentLikes 
accionsMultiple.prototype.studienSkillPlus = function() {
  let plus = element => {
    element.addStudenLikes = function() {
    element.studentLikes = 1
    }
  }
  this.arr.map(plus)
}


//8
accionsMultiple.prototype.increase = function() {
  let likes = element => element.addStudenLikes()
  this.arr.map(likes)
}






//** Para ir probando cada ejercicio por favor liberos los console.log() */

///// ------------------ ///////////



let star = new accionsMultiple(mentors);
star.stayBarcelona();
//2
star.add();
//console.log(mentors)
//3
star.skillPlus();
//console.log(mentors)
//4
star.newSkill();
//console.log(mentors)
//5
star.removeSkill();
//console.log(mentors)
//6
star.mentorWithSkill();
//console.log(mentors)
//7
star.studienSkillPlus();
//console.log(mentors)
//8
star.increase()
//console.log(mentors)


/** Practicas con Linoman */
//mentors.filter(mentor => {
//  if(mentor.skills.includes("React") && mentor.job.city === "Barcelona") {
//    return mentor
//  }
//}).forEach(mentor => {
//  console.log(`Hi, my name is ${mentor.firstName} ${mentor.lastName}. I work in Barcelona and I know React.`)
//})
//
///*2. To those that work in Barcelona, set "Jun1" in the class attribute, 
//and add a new skill to the list "SQL".
//To add elements in an array you can use .push()
//var animals = ["dog","cat"];
//animals.push("horse"); //["dog","cat","horse"]
//
//let sequence = [1, 2, 3];
//sequence.push(4);
//sequence.push(5);
//console.log(sequence);
//// → [1, 2, 3, 4, 5] */
//mentors.filter(mentor => {
//  if(mentor.job.city === "Barcelona") {
//    return mentor
//  }
//}).map(mentor => {
//  mentor.class = "Jun1"
//  mentor.skills.push("SQL")
//  return mentor
//}).forEach(mentor => {
//  console.log(mentor)
//})
//
////3. Create an object method with the name .addSkill() to be able to add skills from it
//
//function addSkill(skill) {
//  //this.skill.push(skill)
//  console.log("skill agregado")
//}
//mentors.map(mentor => {
//  mentor.addSkill = addSkill
//  return mentor
//}).forEach(mentor => {
//  mentor.addSkill("HTML")
//})
//