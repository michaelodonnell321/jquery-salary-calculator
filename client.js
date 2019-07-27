console.log('i sourced');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq sourced');
    $('#employeeSubmitButton').on('click', employeeSubmit)
    $('#employeeTableValues').on('click', '.deleteButton', deleteEmployee)
}


let firstName;
let lastName;
let employeeID;
let title;
let annualSalary;
let monthlyTotalCost = 0;

function employeeSubmit() {
    console.log('submit!');
    // getting values from inputs and setting them to variables
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    employeeID = $('#employeeID').val();
    title = $('#title').val();
    annualSalary = $('#annualSalary').val();

    if (firstName === '' || lastName === '' || employeeID === '' || title === '' || annualSalary === '') {
        if (confirm('All fields are needed')) {
            txt = 'OK';
        } else {
            txt = 'OK';
        }
        return false;
    }

    // push variable values to DOM
    // $('#employeeTableValues').append(`<tr id="employeeTableValues"></tr>`)
    $('#employeeTableValues').append(`<tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${employeeID}</td>
                    <td>${title}</td>
                    <td>$${annualSalary}</td>
                    <td>
                        <button class="deleteButton">Delete</button>
                    </td>
                </tr>`)

    calculateMonthlyTotal()

    firstName = $('#firstName').val('');
    lastName = $('#lastName').val('');
    employeeID = $('#employeeID').val('');
    title = $('#title').val('');
    annualSalary = $('#annualSalary').val('');
    console.log(firstName);
    console.log(lastName);
    console.log(employeeID);
    console.log(title);
    console.log(annualSalary);


}

function calculateMonthlyTotal() {
    console.log('calculate running');
    console.log(parseInt(annualSalary));

    console.log(monthlyTotalCost);

    monthlyTotalCost += (parseInt(annualSalary) / 12);
    console.log(monthlyTotalCost);
    $('#monthlyTotalCost').text(monthlyTotalCost.toFixed(2));

    if (monthlyTotalCost > 20000) {
        $('#monthlyTotalBackground').addClass('redBackground');
    }
}

function deleteEmployee() {
console.log('deleted');
$(this).parent().parent().remove();
}

