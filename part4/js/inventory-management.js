/*eslint-env browser*/

function view(inventory) {
    "use strict";
    var i, stored;
    for (i = 0; i < inventory.length; i += 1) {
        stored = localStorage.getItem(inventory[i].sku);
        if (stored !== null) {
            inventory[i].quantity = stored;
        }
        window.console.log(inventory[i].sku + "\t" + inventory[i].product + "\t" + "(" + inventory[i].quantity + ")" + "\t$" + inventory[i].cost);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var i, newQuantity, quantityToUpdate;
    quantityToUpdate = parseInt(window.prompt("Enter the sku to update"), 10);
    if (quantityToUpdate === null || isNaN(quantityToUpdate)) {
        window.alert("The entered sku is not valid");
        return false;
    } else {
        for (i = 0; i < inventory.length; i += 1) {
            if (inventory[i].sku === quantityToUpdate) {
                newQuantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (newQuantity === null || isNaN(newQuantity)) {
                    window.alert("The quantity you entered is not valid");
                } else {
                    localStorage.setItem(inventory[i].sku, newQuantity);
                    inventory[i].quantity = newQuantity;
                    window.console.log("The quantity of \"" + inventory[i].product + "\" was updated to " + newQuantity + " units");
                    window.console.log("");
                    view(inventory);
                    return true;
                }
            } else {
                window.alert("The sku you entered is not present in inventory");
                return false;
            }
        }
    }
}

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("Command Menu");
    window.console.log("view - view all products");
    window.console.log("update - update inventory");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function getInventory() {
    "use strict";
    var tshirt = [], jeans = [], jacket = [], hat = [], socks = [], inventory;

    tshirt.sku = 101;
    tshirt.product = "TShirt";
    tshirt.quantity = 17;
    tshirt.cost = 24.99;

    jeans.sku = 102;
    jeans.product = "Jeans";
    jeans.quantity = 33;
    jeans.cost = 49.99;

    jacket.sku = 103;
    jacket.product = "Jacket";
    jacket.quantity = 23;
    jacket.cost = 39.99;

    hat.sku = 104;
    hat.product = "Belt";
    hat.quantity = 15;
    hat.cost = 19.99;

    socks.sku = 105;
    socks.product = "Socks";
    socks.quantity = 13;
    socks.cost = 9.99;
    
    inventory = [tshirt, jeans, jacket, hat, socks];
    
    return inventory;
}

window.addEventListener("load", function () {
    "use strict";
    var inventory, command;
    displayMenu();
    inventory = getInventory();        
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("This is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated");
});