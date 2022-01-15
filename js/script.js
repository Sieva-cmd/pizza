
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

        if(fullPizza.crust == "cripsy"){
            crustPrice = 100;
            } else if(fullPizza.crust == "stuffed"){
                crustPrice = 150;
            } else {
                crustPrice = 200;
            }

            if (fullPizza.topping == "sausage"){
                toppingsPrice = 100;
            } else if( fullPizza.topping == "bacon"){
                toppingsPrice = 110;
            } else if (fullPizza.topping == "extra-cheese"){
                toppingsPrice = 120;
            } else if(fullPizza.topping == "onions"){
                toppingsPrice = 130;
            } else {
                toppingsPrice = 140;
            }

            totalPrice =(priceSizes + crustPrice + toppingsPrice)*inputtedNumber;
        




      
    })
  

})

