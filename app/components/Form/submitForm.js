import './loader';

const log = console.log;

$(document).ready(function () {

    $("#ButtonSend").on("click", function () {
        $(this).attr("disabled", "disabled");
        let first_name = document.getElementById("first_name").value;

        return (log(first_name))
    })

})