// Write your solution in this file!
let employee = {name: "", streetAdress: ""};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

//hello my coding is done

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
