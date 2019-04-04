// Script Psudeocode
// On click, store input from text box into variable
// Make API call, using url + variables to return 10 images
// Extract rating as well from the gif objects
// generate img tags using jQuery, append to the div
// append rating variable to imgs
// generate button from input text variable, append to button container

// select submit button, attach click event
$('#submit-button').on('click', function () {

    //declare array that will hold all img URLs
    var imgURL = [];
    //holds img ratings
    var imgRating = [];
    var img;
    var rating;
    var query

    //stores value from text box as query 
    $('submit-button').on('click', function () {
        //clear any existing pictures
        $('#gif-container').html();
        query = $('#input').val();
        $('#input').html();

    });


    //variable to set queryURL
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=csKwWJmlyqvvCH9Z5iDDevJnvgIvylmn&limit=10'
    //ajax call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        //grab response and shove it in imgData
        var imgData = response.data;
        //cycle through the responses, and push data into variable
        for (let i = 0; i < 10; i++) {
            //embed URL
            imgURL.push(response.data[i].images.fixed_height_still.url);
            //Rating
            imgRating.push(imgData[i].rating);

            //empty html elements to stick stuff in
            var img = $('<img>').attr('src', imgURL[i]);
            var rating = $('<p>').text('rated : ' + imgRating[i]);
            img.append(rating);
            $('#gif-container').append(img);




            console.log(img);
            //rating.attr('text', imgRating[i]);
            //attach rating to gif
            //img.prepend(rating)
            //attach gif with rating to img
            //$('gif-container').prepend(img);

        }


        console.log(response)
        console.log(imgData);
        console.log(imgURL);
        console.log(imgRating);
    });
    //Now, to generate jQuery objects with the data I grabbed



});

