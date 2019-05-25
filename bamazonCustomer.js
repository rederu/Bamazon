var  mysql = require("mysql");
var inquirer = require("inquirer");
//Create connection with database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "********",
    database:"bamazon"
});

connection.connect(function(err){
    if(err)
    throw err;

    console.log("Connected as ID: " + connection.threadId);
    displayStore();
    selectBuy();

});


function displayStore(){
    var articlesList =[];
    connection.query("SELECT * FROM bamazon.products", function(err,res){
        if (err){
            throw err;
        }
        console.table(res);

        for (var i = 0; i< res.length; i++){
            articlesList.push(res[i]);
        }
    })
};

function selectBuy(){
    inquirer.prompt([
        {
            type:"number",
            name:"productId" ,
            message: "\nPlease enter the product ID (item_id) of the item that you want to buy.\n"
        },
        { 
            type: "number",
            name: "quantity",
            message: "How many would you like to buy?"
        }
    ])
    .then(function(answer){
        var itemId = answer.productId;
        var quantity = answer.quantity;

        connection.query("SELECT * FROM products WHERE ?",
        {
            item_id: itemId
        }, 
        function(err,res){
            if (err) throw err;
            if(parseInt(res[0].stock_quantity) - quantity >= 0){
                var total = parseFloat(res[0].price)*quantity;
                console.log("Your total is $" +total.toFixed(2) + " for " +quantity + " "+ res[0].product_name + "\n");

            }else {
                console.log("Sorry, there is not enough items in stock to fulfill your order. \n")
            }
            connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [res[0].stock_quantity - quantity, itemId],

            function (err, res) {
                if (err) throw err;
            });
        })

    });
};


