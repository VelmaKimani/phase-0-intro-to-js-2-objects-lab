const employee = {
    name: "Sam",
    streetAddress: "Nairobi",
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    var update = {...employee};
    
    update[key] = value;
    update.name = "Sam";
    update.streetAddress = "11 Broadway";
    return update;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
     var update = employee;
    update.name = "Sam";
    update.streetAddress = "12 Broadway";
    return update;
}



function deleteFromEmployeeByKey(employee, key) {
var deletedEmployee = {...employee};
deletedEmployee[key];
 delete deletedEmployee.name;
return deletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key];
     delete employee.name;
     return employee;
}
