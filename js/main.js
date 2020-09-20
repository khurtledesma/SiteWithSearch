var fs = require("fs");
 
module.exports = {
    cert: fs.readFileSync(__dirname + "/server.cert"),
    key: fs.readFileSync(__dirname + "/server.key"),
    passphrase: "12345"
};

$(function() {

    var APIKEY = "hhT2L1pDmHQXlzkxCTAz6S2mfQlHmq8Z"
    $('#userSubmit').click(function (e) { 
        e.preventDefault() // stops the page from reloading 
        var userInput = $('#userInput').val() //gathers search input 
        var URL = $.get('https://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key='+APIKEY+'=5'); //creates URL
        console.log(URL)
        fetch(URL)
            .then(response => response.json())
            .then(content => {
              console.log(content.data);
    })
}) })

