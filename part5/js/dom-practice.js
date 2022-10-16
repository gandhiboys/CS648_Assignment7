/*eslint-env browser*/

//STEP 1
function displayMessage1() {
    "use strict";
    return window.alert("I have been clicked (STEP 1)");
}

//STEP 2
window.onload = function () {
    "use strict";
    var btn = window.document.getElementById("btn");
    function displayMessage2() {
        return window.alert("I have been clicked (STEP 2)");
    }
    btn.onclick = displayMessage2;
};

//STEP 3
function displayMessage3() {
    "use strict";
    return window.alert("I have been clicked (STEP 3)");
}

window.addEventListener("load", function () {
    "use strict";
    var btn1 = window.document.getElementById("btn1");
    btn1.addEventListener("click", displayMessage3);
});

//STEP 4
window.addEventListener("load", function () {
    "use strict";
    var btn2 = window.document.getElementById("btn2");
    btn2.addEventListener("click", function () {
        return window.alert("I have been clicked (STEP 4)");
    });
})
