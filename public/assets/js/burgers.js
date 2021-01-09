$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger: $("#newBurg").val().trim(),
      devoured: 0
    };

   

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
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
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("Burger has been devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
