$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax({
            url:'https://restcountries.eu/rest/v2/name/france',
            success: function(data, status, response) {
                console.log(response.statusCode);
                $("#exercise").text(data.map(function (country) {
                    console.log(country.name);
                   // return country.name;
                }));
                $("#exercise").text(data.map(function (country) {
                    console.log(country.capital);
                    //return country.capital;
                }))    
            }
        })
    })
})