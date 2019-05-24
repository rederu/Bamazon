var  mysql = require("mysql");
var inquirer = require("inquirer");
//Create connection with database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "CapuaN0r.",
    database:"bamazon"
});

connection.connect(function(err){
    if(err)
    throw err;

    console.log("connected as id: " + connection.threadId);
    displayStore();
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

};