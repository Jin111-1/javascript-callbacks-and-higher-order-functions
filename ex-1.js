// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
 return operation(array);
}

function addSalaries(array){
  for (let i = 0; array[i]; i++ ){
    newEmployeeSalaries[i]= array[i]+5000;
  }
}


const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here


forEach(employeeSalaries, addSalaries);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
