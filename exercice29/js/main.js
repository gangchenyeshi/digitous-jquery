$(document).ready(function () {
    $(".btn").click(function () {
        if($("input").val().length > 5) {

            $("input").addClass("is-valid");
            $("input").removeClass("is-invalid");//if it not remove this class it store this class in console
        } else {
            $("input").addClass("is-invalid");
            $("input").removeClass("is-valid");//if it not remove this class it store this class in console
        }
        
    })
})