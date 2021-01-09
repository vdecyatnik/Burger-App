
$(function() {
    $(".burger-eat").on("click", function(event){

    var id = 



    })
})





















$(".create-form").on("submit", function(event){


event.preventDefault();

var newBurger = {

    name : $("bu").val().trim(),
    
};

//Send Post Request

 // Send the POST request.
 $.ajax("/api/burgers", {
    type: "POST",
    data: newBurg
  }).then(
    function() {
      console.log("added a burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
