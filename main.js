// Write your JavaScript here
// change counter
var dollar = 0;
var quarter = 0;
var dime = 0;
var nickel = 0;
var penniess = 0;

// change values
var dollarVal = 1.00
var quarterVal = .25;
var dimeVal = .10;
var nickelVal = .05;
var pennyVal = .01;
var change = calculateChange(change);
var output;


// function that calculates
function calculateChange(change) {

    var change = ($('#amount-received').val() - $('#amount-due').val());
    $('#output').html("Your change is $" + change.toFixed(2));
    change = change.toFixed(3);

        if(change >= 1.00) {
            var hmDollars = change / dollarVal;
            var dollars = Math.floor(hmDollars);
            $('#dollars-output').text(dollars);
            change = change % dollarVal;
            change = change.toFixed(3)

        if (change <= .99) {
            var hmQuarters = change / quarterVal;
            var quarters = Math.floor(hmQuarters);
            $('#quarters-output').text(quarters);
            change = change % quarterVal;
            change = change.toFixed(3)

            if (change <=.24){
                var hmDimes = change / dimeVal;
                var dimes = Math.floor(hmDimes);
                $('#dimes-output').text(dimes);
                change = change % dimeVal;
                change = change.toFixed(3)
                
            }   if (change <= .30) {
                var hmNickels = change / nickelVal;
                var nickels = Math.floor(hmNickels);
                $('#nickels-output').text(nickels);
                change = change % nickelVal;
                change = change.toFixed(3)

            }   if (change <= .04) {
                var hmPennies = change / pennyVal;
                var pennies = Math.floor(hmPennies);
                $('#pennies-output').text(pennies);
                change = change.toFixed(3)
            }
        } 
    }
}

$('#calculate-change').click(calculateChange);