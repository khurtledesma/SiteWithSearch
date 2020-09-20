$(function() {
    var APIKEY = "hhT2L1pDmHQXlzkxCTAz6S2mfQlHmq8Z"
    $('#userSubmit').click(function (e) { 
        e.preventDefault() // stops the page from reloading 
        var userInput = $('#userInput').val(); //gathers search input 
        $.ajax ({
            url:'http://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key='+APIKEY+'&limit=5',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(items) {
                $(items.data).each(function (index, value) {
                    imgSrc = value.images.downsized.url
                    // console.log(imgSrc)
                     $('#results').append('<img src='+imgSrc+'>')

            });
         }

        });
    })
 
})

