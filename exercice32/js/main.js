/*
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

*/

$(document).ready(function () {
    $(".btn").click(function () {
        $.ajax ({
            url: 'https://restcountries.eu/rest/v2/all', 
            success : function(data, status, response) {
                console.log(status);
                $("#countries").text(data.map(function(element) {
                    return element.name;
                }).join("-"));
            }
        })
    })
})