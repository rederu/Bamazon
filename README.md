# Bamazon
Welcome to Bamazon! 
<h2>What is Bamazon</h2>
Bamazon is an Amazon-like storefront app powered by MySQL and NodeJS to create a CLI store with a simple customer view and a manager view.
Powered by the following NPM repositories:
<ul>
  <li>mysql</li>
  <li>inquirer</li>
</ul>
<h3>Customer View</h3>
The customer view is located in the <b>bamazonCustomer.js</b> file which displays the products available in a table allowing the user to see the item id, the name of the product, product's price(per unit) and the available stock for each product. 

After the table with the available products is displayed, a prompt asks the user which item would they like to buy by selecting it by its item_id. The next prompt askts the user for the quantity they want to buy. If the quantity the user wants is more than the items available in stock, Bamazon will notify that there is not enough stock to process that order but, if the quantity of items available in stock is bigger than the user's request, Bamazon will process their order and notify them how much is it. 

It also allows the user to choose if they want to continue shopping or if they prefer to exit the app.

<h3>Manager View</h3>
Manager View is located in the <b>bamazonManager.js</b> file which displays a menu with the following options:
<ul>
  <li><b><i>View Products for Sale.</i></b></li>
  It allows the user to see the products available in the store at the moment displayed in a table. 
  <li><b><i>View Low Inventory.</i></b></li>
  It allows the user to locate the products available which stock is less than 5 units available.
  <li><b><i>Add to Inventory.</i></b></li>
  Allows the user to add more units to the stock of a product located by its id. it requests the ID of the product which stock will be increased and the number of units that will be added to the current stock.
  <li><b><i>Add New Product.</i></b></li>
  Allows the user to add a new product. It requests a product name, the name of the department to which the product will belong, the price per unit and the quiantity available in stock. It adds the product to the  list after that.
  <li>Exit.</li>
  Allows the user to close the current session. 
</ul>

<h2>How to install</h2>
<ul>
  <li>Clone this repository.</li>
  <li>Create the MySQL database with the .sql file provided. You can create your own database too.</li>
  <li>Install the dependencies needed to make this app to function properly (run "npm install" or install the npm dependencies mysql and inquirer).</li>
  <li>Start the app (node bamazonCustomer.js  or node bamazonManager.js).</li>
</ul>
Please consider you probably will need to change the information of how to create the connection with MySQL (port, user, password or database name).
