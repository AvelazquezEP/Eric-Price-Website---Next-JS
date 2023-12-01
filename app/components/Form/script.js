const { comment } = require("postcss");

var log = console.log;

// $(document).ready(function () {
//     $("#ButtonSend").on("click", function () {
//         $($this).attr("disabled", "disabled");

//         let name = document.getElementById("first_name").value;

//         log(name);
//     })
// })

$(document).ready(function () {
    // function to disable the submit button and send the data and cant submit again
    $("#ButtonSend").on("click", function () {
        $(this).attr("disabled", "disabled");

        let firstName = document.getElementById("first_name").value;
        let lastName = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;
        let location = document.getElementById("00N5f00000SB1X0").value;
        let message = document.getElementById('message').value;
        let language = document.getElementById('00N5f00000SB1Ws').value;
        let meetingType = document.getElementById('meetingType').value;
        let sms = document.getElementById("00N5f00000SB1XU").value;

        var name_input = name_input_validation(firstName);
        var location_input = location_input_validation(location);
        var phone_number = location_input_validation(mobile);
        var email_validation = email_input_validation(email);

        if (name_input == true && location_input == true && phone_number == true && email_validation) {
            sendData(firstName, lastName, email, mobile, location, language, meetingType, message, sms);
        } else {
            setTimeout('$("#ButtonSend").removeAttr("disabled)', 3800);
        }
    });
});

const sendData = (firstName, lastName, email, mobile, location, language, meetingType, comment, sms) => {

    document.getElementById('locationInput').innerHTML = '';
    document.getElementById('nameInput').innerHTML = '';
    document.getElementById('emailInput').innerHTML = '';
    document.getElementById('ButtonSend').style.backgroundColor = 'gray';
    document.getElementById('ButtonSend').innerHTML = 'Sending Data';

    createLeadApi(firstName, lastName, email, mobile, location, language, meetingType, comment, sms);
}

const createLeadApi = (firstName, lastName, email, mobile, location, language, sms, comment = "-") => {
    $.ajax({
        type: 'POST',
        url: 'https://abogadoericprice.com/apiData.php',
        data: {
            "FirstName": firstName,
            "LastName": lastName,
            "Email": email,
            "LeadSource": "EP-CA-Website",
            "MobilePhone": mobile,
            "Location__c": location,
            "Language__c": language,
            "SMS_Opt_In__c": sms,
            "comments": comment
        }
    })
}

// #region INPUT VALIDATION
const name_input_validation = (name_element) => {
    if (/^ *$/.test(name_element)) {
        document.getElementById('nameInput').innerHTML = 'Please write your name';
        document.getElementById('nameInput').style.color = "#F93C17";
        return false;
    } else {
        document.getElementById('nameInput').innerHTML = '';
        document.getElementById('nameInput').style.color = "#F93C17";
        return true;
    }
}

const email_input_validation = (email_element) => {

    if (/^ *$/.test(email_element)) {
        document.getElementById('emailInput').innerHTML = 'Write an email please';
        document.getElementById('emailInput').style.color = "#F93C17";
        return false;
    } else {
        document.getElementById('emailInput').innerHTML = '';
        document.getElementById('emailInput').style.color = "#F93C17";
        return true;
    }
}

const location_input_validation = (location_element) => {
    if (/^ *$/.test(location_element)) {
        document.getElementById('locationInput').innerHTML = 'select a location please';
        document.getElementById('locationInput').style.color = "#F93C17";
        return false;
    } else {
        document.getElementById('locationInput').innerHTML = '';
        document.getElementById('locationInput').style.color = "#F93C17";
        return true;
    }
}

const phone_input_validation = (mobilePhone) => {
    if (mobilePhone.length < 10) {
        document.getElementById('mobileInput').innerHTML = 'The phone number must be 10 digits';
        document.getElementById('mobileInput').style.color = "#F93C17";
        return false;
    } else {
        document.getElementById('mobileInput').innerHTML = '';
        document.getElementById('mobileInput').style.color = "#F93C17";
        return true;
    }
}

// #endregion