var artists = ["Adele", "Bon Jovi", "Madonna", "Carrie Underwood", "Elvis Presley", "Frank Sinatra", "Beatles", "Back Street Boys", "Prince", "New Kids on the Block", "Def Leppard", "Kenny Chesney", "Brad Paisley", "Celine Dion", "Blake Shelton", "Adam Levine", "Pink", "Taylor Swift"];

function renderButtons() {
    $("#artist-buttons").empty();
    artists.forEach(function (artist) {
        var button = $("<button>");
        button.text(artist);
        button.attr("data-person", artist);
        $("#artist-buttons").append(button);
    });
}

function displayArtist(data) {
    $("#add-artist").on("click", function (event) {
        event.preventDefault();
        var artist = $("#artist-input").val().trim();
        artists.push(artist);
        renderButtons();
        $("#artist-input").val("");
    });
    renderButtons();

    $("#artist-buttons").on("click", "button", function () {
        $("#artist-info").empty();
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=nV8R8RZprkCia9P7rvv421Tc6FoiHOkq&limit=10";

        $.ajax({
            method: "GET",
            url: queryURL
        }).then(function (response) {
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
           
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p, personImage);
                $("#artist-info").append(gifDiv);
            }
        })


    })
   }
displayArtist();

// $("#artist-buttons").on("click", function() {


//     button.attr("data-state, data-still, data-animate", artist);
//     var state = $(this).attr("data-state"); 
 
//     var stillURL = $(this).attr("data-still"); 
//     var animURL = $(this).attr("data-animate");


//     if (state === "still") {
//       // if it is currently paused
//       $(this).attr({
//         "src": animURL,
//         "data-state": "animate"
//       });

//     }else {
//       // if it is currently animated
//       $(this).attr ({
//         "src": stillURL,
//         "data-state": "still"
//       });
//     }

//   });
