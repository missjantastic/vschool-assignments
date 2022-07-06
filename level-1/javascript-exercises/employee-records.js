let employees = [];

function Employee(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name);
    console.log("Job Title: " + this.jobTitle);
    console.log("Salary: " + this.salary);
    console.log("Status: " + this.status + "\n");
}

barbara = new Employee("Barbara", "Secretary", 60000);
polina = new Employee("Polina", "Sales Rep", 75000);
harminder = new Employee("Harminder", "Accountant", 80000);
barbara.status = "Part Time";

employees.push(barbara, polina, harminder);

for (let i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm();
}