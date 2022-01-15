
/* Business Logic */

function Pizza(size, topping, crust, number, delivery){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.number = number;
    this.delivery = delivery;
}
var priceSizes, crustPrice, toppingsPrice, totalPrice, inputtedNumber, deliveryCost;


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

    $("#form").submit(function (event) {
        event.preventDefault();

        var inputtedSize = $('#size').val();
        var inputtedToppings = $('#toppings').val();
        var inputtedCrust = $('#crust').val();
        var inputtedNumber = parseInt( $('#number').val());
        var inputtedDelivery = $('#delivery').val();

        var fullPizza = new Pizza(inputtedSize, inputtedToppings, inputtedCrust, inputtedNumber, inputtedDelivery); 

        if (fullPizza.size == "small"){
            priceSizes = 500;
        } else if(fullPizza.size == "medium"){
            priceSizes = 1000;
        } else {
            priceSizes = 1500;
        }
        




      
    })
  

})

