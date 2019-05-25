var mysql = require("mysql");
var inquirer = require("inquirer");
var option1 = "View Products for Sale";
var option2 = "View Low Inventory";
var option3 = "Add to Inventory";
var option4 = "Add New Product";
var option5 = "Exit";
//Create connection with database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "**********",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err)
        throw err;

    console.log("Connected as ID: " + connection.threadId);
    displayOptions();
});

function displayOptions() {
    inquirer.prompt([
        {
            type: "list",
            name: "managerOptions",
            message: "Please select an option: ",
            choices: [option1, option2, option3, option4, option5]
        }
    ]).then(function (answer) {
        switch (answer.managerOptions) {
            case (option1):
                displayStore();
                setTimeout(displayOptions, 800);
                break;
            case (option2):
                lowQuantity();
                setTimeout(displayOptions, 800);
                break;
            case (option3):
                break;
            case (option4):
                break;
            case (option5):
                console.log("Thank you for your visit.");
                connection.end();
                break;
        }
    })//End inquirer
}; //End displayOptions




function displayStore() {
    var articlesList = [];
    connection.query("SELECT * FROM bamazon.products", function (err, res) {
        if (err) {
            throw err;
        }
        console.table(res);

        for (var i = 0; i < res.length; i++) {
            articlesList.push(res[i]);
        }
    })
};

function lowQuantity() {
    console.log("The following products are low on stock: ");
    console.log('=====================================================================');
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                console.log(
                    " Item ID: " + res[i].item_id +
                    " \n Product: " + res[i].product_name +
                    " \n Department: " + res[i].department_name +
                    " \n Price: $" + res[i].price +
                    " \n Units: " + res[i].stock_quantity
                );
                console.log('---------------------------------------------------------------------');
            }
        }
    });
};