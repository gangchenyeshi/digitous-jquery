$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url : 'https://restcountries.eu/rest/v2/name/france',
            success : function(data, status, response) {
                console.log(response.statusCode);
                $("#country").html(data.map(function(country) {
                    //console.log(country.name);
                    return country.name;
                }));
                $("#capital").html(data.map(function(country) {
                    return country.capital;
                }));
            }
        });
    })
    
})

