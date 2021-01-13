$(document).ready(function () {
    $(".btn").click(function () {
        $("input").val();
            $.ajax({
                url : `https://restcountries.eu/rest/v2/name/${$("input").val()}`,
                success : function(data, status, response) {
                    console.log(response.statusCode);
                    $("#country").html(data.map(function(element) {
                        //console.log(country.name);
                        return element.name;
                    }));
                    $("#capital").html(data.map(function(element) {
                        return element.capital;
                    }));
                },
                error : function(data, status, response) {
                    $("#country").empty();
                    $("#capital").empty();
                    alert(`${$("input").val()} Country Name is not found in restCountries.eu` );
                }
            });
        
    })
})