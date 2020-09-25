$(function() {
    var APIKEY = "hhT2L1pDmHQXlzkxCTAz6S2mfQlHmq8Z"
    $('#userSubmit').click(function (e) { 
        e.preventDefault() // stops the page from reloading 
        $('#results').empty(); //empties page after submitting, allows you to search multiple times
        var userInput = $('#userInput').val(); //gathers search input 
        var userAmount = $('#userAmount').val();

        if (userInput === "" || userAmount === "") { //ensures both fields are filled out
            alert("Please fill out all of the fields.")
        } else { //continue 
            $('#results').html('<h2>Showing ' + userAmount +  ' results for: ' + userInput + '</h2>')//shows what the user searched for
            $.ajax ({
                url:'https://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key='+APIKEY+'&limit='+userAmount+'', //url of the API
                dataType: 'json', //dataType
                type: 'get', //getting JSON
                cache: false,
                success: function(items) {
                    console.log(items)
                    $(items.data).each(function (index, value) { //cycles through the data received
                        var imgSrc = value.images.downsized.url //gets the img URL
                        $('#results').append('<img class="col-md-3 col-sm-12" alt="img from GIPHY" src='+imgSrc+'>') //adds to the results Div
                        $('footer').removeClass('hidden') // appear after search

                });
            },
        }); 
    }
   })
 
})

