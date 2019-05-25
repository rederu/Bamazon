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
The customer view is located in the `bamazonCustomer.js` file which display the products available in a table allowing the user to see the item id, the name of the product, product's price(per unit) and the available stock for each product. 

After the table with the available products is displayed, a prompt asks the user which item would they like to buy by selecting it by its item_id. The next prompt askts the user for the quantity they want to buy. If the quantity the user wants is more than the items available in stock, bamazon will notify that there is not enough stock to process that order but, if the quantity of items available in stock is bigger than the user's request, Bamazon will process their order and notify them how much is it. 

