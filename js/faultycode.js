// $(document).ready(function(){
//
// //var cityPick = $("#city-type").val();
//
// //I don't know why this isn't working
// $(".cityForm").submit(function(event) {
//   var cityPick = $("#city-type").val();
//   if (cityPick === "NYC" || cityPick === "New York City"){
//     console.log(cityPick);
//     $("body").addClass("NYC");
// }
// });
//
// //this test doesn't work
// // $(".cityForm").submit(function(event) {
// //   console.log("test");
// // });
//
// //this test does work so the html and js files are linked
// // console.log('uggh');
// // var headingText = $("h1").html();
// // console.log(headingText);
//
// //i then tried to switch to just a button and that's not working either
// // $("button").click(function(){
// //   console.log("click");
// // });
// });


$(document).ready(function(){

  //I don't know why this isn't working
  $(".cityForm").submit(function(event) {
    var cityPick = $("#city-type").val();
    if (cityPick === "NYC" || "New York City")
    console.log(cityPick);
    $("body").addClass("NYC");

    event.preventDefault();
  });
});
