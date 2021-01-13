$(document).ready(function() {
    $(".btn").click(function () {
        $.ajax ({
            url : 'https://api.chucknorris.io/jokes/random',
            success : function(data, status, response){
                console.log(status);
                $("#jokeNew").html(data.value);
            }
        })
    })
})
