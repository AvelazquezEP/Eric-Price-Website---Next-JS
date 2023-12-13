const log = console.log;

$(document).ready(function () {
    // function to disable the submit button and send the data and cant submit again
    $("#ButtonSend").on("click", function () {
        // $(this).attr("disabled", "disabled");

        let firstName = document.getElementById("first_name").value;
        let lastName = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;
        let location = document.getElementById("00N5f00000SB1X0").value;
        let language = document.getElementById('00N5f00000SB1Ws').value;
        // let meetingType = document.getElementById('meetingTypePerson').value;
        let message = document.getElementById('message').value;
        // let sms = document.getElementById("00N5f00000SB1XU").value;
        var sms = '';
        let sms_yes = document.getElementById('00N5f00000SB1XU1');
        if (sms_yes.checked == true) {
            sms = 'Yes';
        } else {
            sms = "No";
        }
        // let sms = "Yes";

        var name_input = name_input_validation(firstName);
        var location_input = location_input_validation(location);
        var phone_number = location_input_validation(mobile);
        var email_validation = email_input_validation(email);

        // #region PARAMS BY DEFAULT
        // let tfirstName = "lastname test";
        // let tlastName = "lastname test";
        // let temail = 'test@email.com';
        // let tmobile = '6875425968';
        // let tlocation = 'Los Angeles';
        // let tmessage = "test message";
        // let tlanguage = 'Spanish';
        // let tmeetingType = 'Phone';
        // let tsms = "Yes";
        // #endregion

        // if (name_input == true && location_input == true && phone_number == true && email_validation) {
        //     sendData(firstName, lastName, email, mobile, location, language, meetingType, message, sms);

        //     sendData(tfirstName, tlastName, temail, tmobile, tlocation, tmessage, tlanguage, tmeetingType, tsms);
        // } else {
        //     setTimeout('$("#ButtonSend").removeAttr("disabled)', 3800);
        // }

        sendData(firstName, lastName, email, mobile, location, language, message, sms);

    });
});

const sendData = (firstName, lastName, email, mobile, location, language, comment, sms) => {

    // document.getElementById('locationInput').innerHTML = '';
    // document.getElementById('nameInput').innerHTML = '';
    // document.getElementById('emailInput').innerHTML = '';
    // document.getElementById('ButtonSend').style.backgroundColor = 'gray';
    // document.getElementById('ButtonSend').innerHTML = 'Sending Data';

    createLeadApi(firstName, lastName, email, mobile, location, language, sms, comment);
}

const createLeadApi = (firstName, lastName, email, mobile, location, language, sms, comment = "-") => {

    // log(sms);
    $.ajax({
        type: 'POST',
        // url: 'https://abogadoericprice.com/apiData.php',
        url: 'https://abogadoericprice.com/test.php',
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
        },
        // dataType: 'json',
        dataType: 'json',
        success: function (data) {

            let inPerson = "OUR_LOCATION";
            let byPhone = "VID_CONFERENCE";
            var fullUrl = "";

            let leadID = data.id;
            // log(leadID);

            let locationCode = getLocation(location);
            // log(locationCode);          

            sendEmail(firstName, lastName, email, mobile, language, leadID, comment);

            if (leadID == "" || leadID == null || leadID == undefined) {
                let url_thanks = '/Thanks';
                window.location.href = url_thanks;
            } else {
                if (location != "National") {
                    fullUrl = `https://greencardla.my.site.com/s/onlinescheduler?processId=a1h5f000000nAJCAA2&locationType=${inPerson}&WhatId=a1n5f0000006fzTAAQ&WhereID=${locationCode}&sumoapp_WhoId=0055f000007NE9T&clientId=${leadID}`;
                } else {
                    fullUrl = `https://greencardla.my.site.com/s/onlinescheduler?processId=a1h5f000000nAJZAA2&locationType=${byPhone}&WhatId=a1n5f0000006fzTAAQ&WhereID=a1b5f000000enBiAAI&sumoapp_WhoId=0055f000007NE9T&clientId=${leadID}`;
                }

                window.location.href = fullUrl;
            }
        }, error: function (data) {
            log(`Error: ${data}`)
            // window.location.href = "/Thanks";
        }
    })
}

const getLocation = (location) => {
    var code = "";
    let LACode = "a1b5f000000eT4OAAU";
    let OCCode = "a1b5f000000eT4PAAU";
    let SDCode = "a1b5f000000eT8bAAE";
    let SMCode = "a1b5f000000eT8gAAE";
    let CHCode = "a1b5f000000enBnAAI";
    let SBCode = "a1b5f000001signAAA";

    switch (location) {
        case "Los Angeles":
            code = LACode;
            break;
        case "Orange County":
            code = OCCode;
            break;
        case "San Diego":
            code = SDCode;
            break;
        case "San Marcos":
            code = SMCode;
            break;
        case "Chicago":
            code = CHCode;
            break;
        case "San Bernardino":
            code = SBCode;
            break;
        case "National":
            code = LACode;
            break;
    }
    return code;
}

const sendEmail = (firstName, lastName, email, mobile, language, leadID, comment) => {
    $.ajax({
        type: 'POST',
        url: 'https://abogadoericprice.com/test-sendEmail.php',
        data: {
            "FirstName": firstName,
            "lastName": lastName,
            "Email": email,
            "Mobile": mobile,
            "Language": language,
            "leadID": leadID,
            "question": comment
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