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

function displayArtist (data) {
    $("#add-artist").on("click", function (event) {
        event.preventDefault();
        
        var artist = $("#artist-input").val().trim();
        artists.push(artist);
        renderButtons();
        $("#artist-input").val("");
      });

//     // In this case, the "this" keyword refers to the button that was clicked
//     var person = $(this).attr("data-person"); // Michael J. Fox

//     // Consructing a URL to search Giphy for the name of the person who said the quote
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         person + "&api_key=nV8R8RZprkCia9P7rvv421Tc6FoiHOkq&limit=10";

//     // Performing our AJAX GET request
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {

//         // Storing an array of results in the results variable
//         var results = response.data;

//         //Looping over every result item
//         for (var i = 0; i < results.length; i++) {

//             var gifDiv = $("<div>");

//             var rating = results[i].rating;

//             var p = $("<p>").text("Rating: " + rating);

//             var personImage = $("<img>");

//             personImage.attr("src", results[i].images.fixed_height.url);

//             gifDiv.prepend(p);
//             gifDiv.prepend(personImage);

//             $("#movie-info").prepend(gifDiv);
        
        }
//     });
// });
// }
displayArtist();
renderButtons();
