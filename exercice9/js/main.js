//create a function displayBlock
function displayBlock() {
    $("#text").css("display", "block");
};

/*
$(document).ready(function () {
    $(".btn").click(displayBlock);
});

*/
//or
$(document).ready(function () {
    $(".btn").click(function () {
        displayBlock();
    });
});