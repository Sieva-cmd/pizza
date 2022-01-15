
/* Business Logic */
// function Pizza(size, topping, crust) {
//     this.size = size;
//     this.topping = topping;
//     this.crust = crust;

// }
function Sizes(small, medium, large){
    this.small = small;
    this.medium = medium;
    this.large = large;
}
 function Toppings(sausage, bacon, extra_cheese, onion, mushroom){
     this.sausage = sausage;
     this.bacon = bacon;
     this.extra_cheese = extra_cheese;
     this.onion = onion;
     this.medium = mushroom;
 }
  function Crusts(cripsy, stuffed, glutten_free){
      this.cripsy = cripsy;
      this.stuffed = stuffed;
      this.glutten_free = glutten_free;
  }

Pizza.prototype.fullPizza = function () {
    return this.size + " " + this.topping + " " + this.crust;
}
  Sizes.prototype.fullSizes = function(){
    return this.small + " " + this.medium + " " + this.large;
}
Toppings.prototype.fullToppings = function(){
    return this.sausage + " " + this.bacon + " " + this.extra_cheese  + " " + this.onion  + " " + this.mushroom;
}
Crusts.prototype.fullCrusts = function(){
    return this.cripsy + " " + this.stuffed + " " + this.glutten_free;
}





/* user intarface */
$(document).ready(function () {
    $("#orderBtn").click(function () {
        $(".popup").toggle();
        $("#orderBtn").hide()
    })
    $(".close_btn").click(function () {
        $(".popup").hide();
        $("#orderBtn").show()
    })

    $("form#form").submit(function (event) {
        event.preventDefault();
        // var inputtedSize = $('#size :selected').text();
        // var inputtedToppings = $('#toppings :selected').text();
        // var inputtedCrust = $('#crust :selected').text();

        function displaySize() {
            var inputtedSize = $("select#size").val();
            // var inputtedSize = $('#size :selected').text();
        }
        $("select#size").change(displaySize);

        function displayCrust() {
            var inputtedCrust = $("select#crust").val();
            // var inputtedCrust = $('#crust :selected').text();
        }
        $("select#crust").change(displayCrust);

        function displayToppings() {
            var inputtedToppings = $("select#toppings").val();
            // var inputtedToppings = $('#toppings :selected').text();
        }
        $("select#toppings").change(displayToppings);

    })
    var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings);


    $("ul#pizzaCost").append("<li><span class='pizzas'>" + newPizza.fullPizza() + "</span></li>");

    $("select#size").val("");
    $("select#topping").val("");
    $("select#crust").val("")

})

