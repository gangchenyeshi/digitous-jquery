$(document).ready(function() {
    $(".generatebtn").click(function() {
        generateSudoku();    

        var sudokuHtml = '<div class="container">'; // create a div in Html and class = "container"
    
    for(var i = 0; i < 9; i ++) {
        sudokuHtml += '<div id="row${i}" class = "row">';// create a div in Html and class = "row"

        for(var j = 0; j < 9; j++) {
            sudokuHtml += `<div id="col${j}" class ="col-1 box">${sudoku[i][j]}</div>`; // create a div in Html and class = "col-1"and closed here
            }   
            sudokuHtml += '</div>';//closed div class row
        }
    sudokuHtml = sudokuHtml + '</div>'; // div class= container is closed
    //sudoku += '</div>'; // div class= container is closed

    $("#sudoku").html(sudokuHtml);
    })
    

    
});