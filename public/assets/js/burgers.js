$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger: $("#newBurg").val().trim(),
      devoured: 0,
    };

    // Send the POST request. Insert new burger into database.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("added a burger", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".burgereat").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1,
    };

    // Send the PUT request. Send devoured burger to devoured list.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("Burger has been devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });
 
  // Delete devoured burger from database.
  $(".burgereaten").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("burger in trash");
      location.reload();
    });
  });
});
