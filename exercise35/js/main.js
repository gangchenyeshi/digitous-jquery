$(document).ready(function (){
    $(".btn").click(function () {
        $("input").val();
            $.ajax ({
                url : `https://pokeapi.co/api/v2/pokemon/${$("input").val()}`,
                success: function(data, status, response) {
                    console.log(response.statusCode);
                    console.log(data);
                    $("#pokemonId").html(data.id);
                    $("#pokemonName").html(data.name);
                }
                    
    
        })
    })
})