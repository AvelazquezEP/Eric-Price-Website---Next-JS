// //loader.js
// import $ from 'jquery'
// // window.$ = window.jQuery = require('jquery')

// // $(document).ready(function () {

// $("#ButtonSend").on("click", function () {
//     $(this).attr("disabled", "disabled");
//     let first_name = document.getElementById("first_name").value;

//     console.log(first_name);
// })

export default function submitForm() {
    const log = console.log;

    let first_name = document.getElementById('first_name').value;

    log(first_name);
}