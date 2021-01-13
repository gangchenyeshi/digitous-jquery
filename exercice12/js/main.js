/*
$(document).ready (function () {
    $(".btn").click(function() {
        $("#square").css({"width": "500px", "height": "500px"})
    })
})
*/
/*

$(document).ready (function () {
    $(".btn").click(function() {
        if($("#square").css('width') === "500px") {
            $("#square").css('width', "200px");
        } else {
            $("#square").css('width', "500px");
        }

        
    })
})
*/


$(document).ready (function () {
    $(".btn").click(function() {
        if($("#square").css('width') === "500px") {
            $("#square").animate({width: "200px"});
        } else {
            $("#square").animate({width: "500px"});
        }

        
    })
})