$(function() {
    var APIKEY = "hhT2L1pDmHQXlzkxCTAz6S2mfQlHmq8Z"
    $('#userSubmit').click(function (e) { 
        e.preventDefault() // stops the page from reloading 
        $('#results').empty(); //empties page after submitting, allows you to search multiple times 
        var userInput = $('#userInput').val(); //gathers search input 
        var userAmount = $('#userAmount').val();

        $.ajax ({
            url:'http://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key='+APIKEY+'&limit='+userAmount+'', //url of the API
            dataType: 'json', //dataType
            type: 'get', //getting JSON
            cache: false,
            success: function(items) {
                $(items.data).each(function (index, value) { //cycles through the data received
                    imgSrc = value.images.downsized.url //gets the img URL
                     $('#results').append('<img class="col-md-3" alt="img from GIPHY" src='+imgSrc+'>') //adds to the results Div

            });
         }

        });
    })
 
})

