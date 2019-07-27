console.log('i sourced');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq sourced');
    $('#employeeSubmitButton').on('click', employeeSubmit)
}

let firstName;
let lastName;
let employeeID;
let title;
let annualSalary;

function employeeSubmit() {
    console.log('submit!');
    // getting values from inputs and setting them to variables
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    employeeID = $('#employeeID').val();
    title = $('#title').val();
    annualSalary = $('#annualSalary').val();

    // push variable values to DOM
    // $('#employeeTableValues').append(`<tr id="employeeTableValues"></tr>`)
    $('#employeeTableValues').append(`<tr>
                    <td>Jen</td>
                    <td>Barber</td>
                    <td>4521</td>
                    <td>Team Lead</td>
                    <td>$80,000</td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>`)
    console.log(firstName);
    console.log(lastName);
    console.log(employeeID);
    console.log(title);
    console.log(annualSalary);
}