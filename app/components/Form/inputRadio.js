/* #region Jquery */
// import $ from 'jquery'
// window.$ = window.jQuery = require('jquery')
/* #endregion */

// document.addEventListener("DOMContentLoaded", function (event) {
//     let radio = document.getElementById('00N5f00000SB1XU1');
//     radio.checked = true;
// });

function checkByDefault() {
    let radio = document.getElementById('00N5f00000SB1XU1');
    radio.checked = true;
}

window.addEventListener('DOMContentLoaded', checkByDefault);
//window.addEventListener('load', checkByDefault);
