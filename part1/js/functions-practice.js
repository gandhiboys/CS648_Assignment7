/*eslint-env browser*/


//STEP 1

var num = parseFloat(window.prompt("Please enter a number"));
var new_num;
function halfNumber(){
    "use strict";
    new_num= parseFloat(num/2)
    };
halfNumber();
window.document.write("STEP 1. Half of " + num + " is " + new_num + "<br>");

//STEP 2

function squareNumber(){
    "use strict";
    new_num= parseFloat(num*num)
};
squareNumber();
window.document.write("STEP 2. Square of " + num + " is " + new_num + "<br>");

//STEP 3

var num1 = parseFloat(window.prompt("Please enter number 1"));
var num2 = parseFloat(window.prompt("Please enter number 2"));
var perc;
function percentOf(){
    "use strict";
    perc = parseFloat((num1/num2) * 100);
}
percentOf();
window.document.write("STEP 3. " + num1 + " is " + perc + " % of " + num2 + "<br>");

//STEP 4

var mod1 = parseFloat(window.prompt("Please enter number 1"));
var mod2 = parseFloat(window.prompt("Please enter number 2"));
var mod;
function findModulus(){
    "use strict";
    mod = parseFloat(mod1%mod2);
}
findModulus();
window.document.write("STEP 4. " + mod + " is the modulus of " + mod1 + " and " + mod2 + "<br>");

//STEP 5

var add = 0;
function addNumbers() {
    "use strict";
    var numberString = window.prompt("Enter numbers that are seperated by commas");
    numberString = numberString.split(",");
    for (var i=0; i < numberString.length; i++) {
        add += parseFloat(numberString[i]);
    }

    window.document.write("Additon of the numbers is: " + add );

    return add;
}

addNumbers();