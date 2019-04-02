// Script Psudeocode
// On click, store input from text box into variable
// Make API call, using url + variables to return 10 images
// Extract rating as well from the gif objects
// generate img tags using jQuery, append to the div
// append rating variable to imgs
// generate button from input text variable, append to button container

// select submit button, attach click event
$('#submit-button').on('click', function () {

    //variable to set queryURL
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=explosion&api_key=csKwWJmlyqvvCH9Z5iDDevJnvgIvylmn&limit=10'
    //ajax call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        var imgData = response
        console.log(response);
        //need a loop to cycle through the response and grab what I need
        for (let i = 0; i < 9; i++) {


        }
        //variables, to store rating and img url
        var imgURL = response.


    });


});