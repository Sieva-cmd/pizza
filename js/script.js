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
})