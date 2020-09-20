$(function() {

    var APIKEY = "hhT2L1pDmHQXlzkxCTAz6S2mfQlHmq8Z"
    $('#userSubmit').click(function (e) { 
        e.preventDefault() // stops the page from reloading 
        var userInput = $('#userInput').val() //gathers search input 
        var URL = $.get('https://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key='+APIKEY+'=5'); //creates URL
        fetch(URL)
            .then(res => res.json())
            .then(data => console.log(data))

        
    })
})
 
