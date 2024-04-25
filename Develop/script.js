// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []; // array of employee objects
  let employeeFN = ""; // stores each employee's first name
  let employeeLN = ""; // stores each employee's last name
  let employeeSalary = ""; // stores each employee's salary (the prompt() function to get the salary returns a string, we gotta convert it to a float later) 
  let employee = null; // stores each employee object
  let userChoice = prompt("Add a new employee: press any key to continue, or press Q to quit."); // stores user's choice of 'continue or quit' key
  while (userChoice.toUpperCase() !== 'Q') {
    employeeFN = prompt("Enter employee's first name: "); // employee's first name
    employeeLN = prompt("Enter employee's last name: "); // employee's last name 
    employeeSalary = prompt("Enter employee's salary: "); // employee's salary
    employeeSalary = parseFloat(employeeSalary); // converting salary text to a float number
    if (isNaN(employeeSalary))
      employeeSalary = 0; // sometimes weird stuff happens and the salary ends up not a number, so then it'll default to 0
    employee = {
      // creating each new employee object
      firstName: employeeFN,
      lastName: employeeLN,
      salary: employeeSalary
    }
    employees.push(employee); // adding each new employee obj to our list
  }
  return employees; // returning the array of objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salaryTotal = 0; // this will store the total salary of all the employees
  let totalEmployees = employeesArray.length; // this is the amount of employees

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
