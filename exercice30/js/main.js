$(document).ready(function () {
    
        $("input").keyup( function () {
            if($("input").val().length > 5) {
                $("input").removeClass("is-invalid");//if it not remove this class it store this class in console
                $("input").addClass("is-valid");
                
            } else {
                $("input").removeClass("is-valid");//if it not remove this class it store this class in console
                $("input").addClass("is-invalid");
                
            }
            
        })
    
})