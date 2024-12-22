
function EmployeeInfo(name, Salary){
    console.lo("Welcome "+name+"Your monthly salry is "+salary)
}
console.log("This is my first program")

var EmpName="John";
var EmpSalary= 5000;

EmployeeInfo(EmpName, EmpSalary)
    const EmpSkills= (Skills)=>{
        console.log("Expert in "+Skills)
    }
EmpSkills("Java")

const student= require('./StudentInfo')
const person= require('./Person')

console.log("Student Name: "+ student.getName())
console.log(student.Location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log("grade is "+ student.Studentgrade(60))

person1= new person("Jim","USA","myemail@gmail.coom")
console.log("Using Person Module", person1.getPersonInfo())
console.log("program endedd")
