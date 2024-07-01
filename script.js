var percentageElement = document.getElementById("bill_percentage");

document.querySelectorAll(".amount_input")[0].addEventListener("keyup", function (event) {
    calculate();
});

document.querySelectorAll(".tip_input")[0].addEventListener("keyup", function (event) {

    calculate();

});
        
function calculate() { 

    var bill = document.getElementById("bill_amount").value;
    var percentage = document.getElementById("bill_percentage").value;
    var tip = bill * (percentage/100);

    document.getElementById("bill_result").innerHTML = tip;
    document.getElementById("bill_full").innerHTML = Number(tip) + Number(bill);

}