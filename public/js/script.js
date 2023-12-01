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

        const firstName = document.getElementById("first_name").value;

        console.log(firstName);
    });
});