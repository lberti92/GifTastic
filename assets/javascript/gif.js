var artists = ["Adele", "Bon Jovi", "Nickelback", "Carrie Underwood", "Elvis Presley", "Frank Sinatra", "George Strait", "Back Street Boys", "Prince", "New Kids on the Block", "Garth Brooks", "Kenny Chesney", "Brad Paisley", "Celine Dion", "Blake Shelton", "Adam Levine", "Pink"];

function renderButtons() {
    $("#artist-buttons").empty();
    artists.forEach(function (artist) {
        var button = $("<button>");
        button.text(artist);
        button.attr("data-person", artist);
        $("#artist-buttons").append(button);
    });
}


$("button").on("click", function () {

    // In this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("data-person"); // Michael J. Fox

    // Consructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=nV8R8RZprkCia9P7rvv421Tc6FoiHOkq&limit=10";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // AFter the data come back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            var results = response.data;

            //Looping over every result item
            for (var i = 0; i < results.length; i++) {

    
                var gifDiv = $("<div>");


                var rating = results[i].rating;

 
                var p = $("<p>").text("Rating: " + rating);

      
                var personImage = $("<img>");

        
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                   $("#movie-info").prepend(gifDiv);
            }
        });
});


renderButtons();

// function displayMovieInfo() {
//     var movie = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artist + "&limit=10&api_key=nV8R8RZprkCia9P7rvv421Tc6FoiHOkq";

//     $.ajax({
//         method: "GET",
//         url: queryURL
//     }).then(function (response) {

//         console.log(response)

//     })
// // }
//     function renderButtons() {
//         $("#movie-buttons").empty();

//         for (var i = 0; movies.length; i++) {
//             var button = $("<button>");
//             button.addClass("movie-btn");
//             button.attr("data-name", movies[i]);
//             button.text(movies[i]);
//             $("#movie-buttons").append(button);
//         }
//     }
//     // $("#add-movie").on("click", function (event) {
//     //     event.preventDefault();
//     //     var movie = $("#movie-input").val().trim();
//     //     movies.push(movie);
//     //     // renderButtons();
//     // });

//     // $(document).on("click", ".movie-btn");


// renderButtons();