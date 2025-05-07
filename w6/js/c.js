//Set up event listener for submit button

var submitButton = document.querySelector("#get-money");

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    calculateMoney();
});

function calculateMoney(){
    var hoursWorked = document.querySelector("#Hours");
    var hourlyPay = document.querySelector("#Pay");
    var taxRate = document.querySelector("#Tax");
    var displayInfo = document.querySelector("#display-info");

    //Validate form to see nothing is blank
    if(hourlyPay.value === "" || hoursWorked.value === "" || taxRate.value === ""){
        alert("Please enter the missing data");
        return;
    }
    var grossPay = ((Number(hoursWorked.value)) * (parseFloat(hourlyPay.value))).toFixed(2);
    var taxes = (((Number(taxRate.value))/(100)) * (parseFloat(grossPay))).toFixed(2);
    var netPay = (grossPay - taxes).toFixed(2);

    alert(`Gross Pay is $${grossPay}`)
    alert(`Taxes is $${taxes}`)
    alert(`Net Pay is $${netPay}`)
    displayInfo.innerHTML = `Here is your info:
                            <br>
                            <br>
                            Gross Pay: $${grossPay}
                            <br>
                            Uncle Sam's Share: $${taxes}
                            <br>
                            Net Pay: $${netPay}`

}