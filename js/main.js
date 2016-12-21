//make sure everything has loaded before anything can be manipulated
$(document).ready(function(){

  $(".cityForm").submit(function(event) {
    //the value, in this case the entered text, of the input tag with the "city-type" id is stored in a variable we are creating named cityPick
    var cityPick = $("#city-type").val();
    if (cityPick === "NYC" || cityPick === "nyc" || cityPick === "New York City" || cityPick === "new york city" || cityPick === "New York"){
    console.log(cityPick);
    // You can remove classes more efficiently by using .remove() because it will remove all the classes already on the element.  You can also chain these commands so you only have to call the body once and then remove then add (so you don't remove the class you just added)
    $("body").addClass("nyc");
    $("body").removeClass("sf");
    $("body").removeClass("la");
    $("body").removeClass("austin");
    $("body").removeClass("sydney");
  } else if (cityPick === "SF" || cityPick === "sf" || cityPick === "San Francisco" || cityPick === "san francisco" || cityPick === "Bay Area") {
    console.log(cityPick);
    //we not only have to add the class of the city selected, we have to remove the non-selected ones or they'll stick in place if they were selected first
    $("body").removeClass("nyc");
    $("body").addClass("sf");
    $("body").removeClass("la");
    $("body").removeClass("austin");
    $("body").removeClass("sydney");
  } else if (cityPick === "LA" || cityPick === "la" || cityPick === "Los Angeles" || cityPick === "los angeles" || cityPick === "LAX") {
    console.log(cityPick);
    $("body").removeClass("nyc");
    $("body").removeClass("sf");
    $("body").addClass("la");
    $("body").removeClass("austin");
    $("body").removeClass("sydney");
  } else if (cityPick === "Austin" || cityPick === "austin" || cityPick === "ATX") {
    console.log(cityPick);
    $("body").removeClass("nyc");
    $("body").removeClass("sf");
    $("body").removeClass("la");
    $("body").addClass("austin");
    $("body").removeClass("sydney");
  } else if (cityPick === "Sydney" || cityPick === "sydney" || cityPick === "SYD") {
    console.log(cityPick);
    $("body").removeClass("nyc");
    $("body").removeClass("sf");
    $("body").removeClass("la");
    $("body").removeClass("austin");
    $("body").addClass("sydney");
    //this will be a catch-all for anything typed in that isn't one of these five cities
  } else {
    // Great job with the catch all!
    alert("Pick a more popular city!");
  }
    //make sure the form doesn't actually get submitted
    event.preventDefault();
  });
  //this gets the class attribute of the form div
  var attributeTest = $("form").attr("class");
  console.log(attributeTest);
});
