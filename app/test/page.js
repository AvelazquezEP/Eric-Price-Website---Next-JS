/ Validation for each important input in the form
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