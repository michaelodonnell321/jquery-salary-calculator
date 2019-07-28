console.log('i sourced');

$(document).ready(readyNow);

function readyNow() {
    console.log('jq sourced');
    $('#employeeSubmitButton').on('click', employeeSubmit)
    $('#employeeTableValues').on('click', '.deleteButton', deleteEmployee)
}

// global variables
let firstName;
let lastName;
let employeeID;
let title;
let annualSalary;
let monthlyTotalCost = 0;
let newMonthlyTotalCost = 0;

function employeeSubmit() {
    console.log('submit!');
    // getting values from inputs and setting them to variables
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    employeeID = $('#employeeID').val();
    title = $('#title').val();
    annualSalary = $('#annualSalary').val();

    // if statement to make sure all inputs are filled
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
                    <td class="annualSalary">$${annualSalary}</td>
                    <td>
                        <button class="deleteButton">Delete</button>
                    </td>
                </tr>`)

    calculateMonthlyTotal()

    // reset inputs
    firstName = $('#firstName').val('');
    lastName = $('#lastName').val('');
    employeeID = $('#employeeID').val('');
    title = $('#title').val('');
    annualSalary = $('#annualSalary').val('');
    // console.log(firstName);
    // console.log(lastName);
    // console.log(employeeID);
    // console.log(title);
    // console.log(annualSalary);
}

function calculateMonthlyTotal() {
    console.log('calculate running');
    console.log(parseInt(annualSalary));

    console.log(monthlyTotalCost);
    if (typeof monthlyTotalCost === "string") {
        monthlyTotalCost = parseFloat(monthlyTotalCost);
        console.log(monthlyTotalCost);
    }

    monthlyTotalCost += parseFloat(annualSalary) / 12;
    monthlyTotalCost = monthlyTotalCost.toFixed(2);
    console.log(monthlyTotalCost);
    $('#monthlyTotalCost').text(monthlyTotalCost);

    if (monthlyTotalCost > 20000) {
        $('#monthlyTotalBackground').addClass('redBackground');
    }

    if (monthlyTotalCost > 15000) {
        $('#monthlyTotalBackground').addClass('yellowBackground');
    }
}

function deleteEmployee() {
    console.log('deleted');
    // let deletedSalary;
    // // console.log($("td").text());
    // // find the annual salary value using .text
    // deletedSalary = $('.annualSalary').text();
    // console.log(deletedSalary);
    // // everyone has a salary, split into an array
    // let deletedSalarySplit = deletedSalary.split('$');
    // console.log(deletedSalarySplit);
    // // determine length of array and use l
    // let i = deletedSalarySplit.length;
    // console.log(i);
    // console.log(deletedSalarySplit[i - 1]);
    // console.log(monthlyTotalCost);
    // monthlyTotalCost -= (parseInt(deletedSalarySplit[i-1])/12);
    // console.log(monthlyTotalCost);
    // $('#monthlyTotalCost').text(monthlyTotalCost.toFixed(2));
    // console.log(monthlyTotalCost.toFixed(2));

    
    // find the salary value using smarter this selector
    let salaryValue = $(this).closest("tr").find(".annualSalary").text();
    console.log(salaryValue);
    // coming up with a 0, make a new string without that
    salaryValue = salaryValue.substring(1);
    salaryValue = (parseFloat(salaryValue) /12).toFixed(2);
    console.log(salaryValue);
    // recalculate monthly cost
    monthlyTotalCost = (monthlyTotalCost - salaryValue).toFixed(2);
    console.log(monthlyTotalCost);
    if (monthlyTotalCost === -0.00) {
        monthlyTotalCost  = 0.00
    }
    // remove backgrounds if necessary
    if (monthlyTotalCost < 15000) {
        $('#monthlyTotalBackground').removeClass('yellowBackground');
    }
    if (monthlyTotalCost < 20000) {
        $('#monthlyTotalBackground').removeClass('redBackground');
    }
    // push to DOM
    $('#monthlyTotalCost').text(monthlyTotalCost);

    // remove the parent of the parent of what was clicked, this is the whole line
    $(this).parent().parent().remove();


    // below method is 90% working, try again later to fix


    // // pull annual salary by class, use .text as a getter
    // deletedSalary = $('.annualSalary').text();
    // console.log(deletedSalary);
    
    // //if there are no salaries, set monthly budget number to 0 and end
    // if (deletedSalary === '') {
    //     $('#monthlyTotalCost').text(parseInt(0.00));
    //     $('#monthlyTotalBackground').removeClass('redBackground yellowBackground');
    //     return false;
    // }

    // // there are potentially many salaries, split them into an array at every $
    // deletedSalarySplit = deletedSalary.split('$');
    // console.log(deletedSalarySplit);
    // // splice the first value off, we are getting a blank string every time
    // console.log(deletedSalarySplit.splice(0,1));
    // console.log(deletedSalarySplit);
    // // for loop to add all the salaries into a new variable
    // for (let j=0; j < deletedSalarySplit.length; j++) {
    //     newMonthlyTotalCost += (parseInt(deletedSalarySplit[j] /12).toFixed(2));
    // }
    // console.log(newMonthlyTotalCost);
    // // new value is coming out with a 0 on the front, find all the 0's in the front
    // // and return a new string with them gone
    // while(newMonthlyTotalCost.charAt(0) === '0') {
    //     newMonthlyTotalCost = newMonthlyTotalCost.substr(1);
    // }
    // console.log(newMonthlyTotalCost);
    // // push new monthly budget to DOM
    // $('#monthlyTotalCost').text(newMonthlyTotalCost);

}

// add td for % of monthly budget