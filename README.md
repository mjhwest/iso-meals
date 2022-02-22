# 23 Final Project: MERN Stack Single-Page Application 
# Project : Iso-Meals

![License](https://img.shields.io/badge/license-MIT-blue)

## Description
Working individually we were tasked to build a MERN Stack Single-Page Application of our choosing. This project provided the opportunity to demonstrate and implement the skills and knoweledge we have learnt since starting our web-development journey. 

While we had the option to choose our own application the project had to include the following: 
### Project Requirements

* Use React for the front end.

* Use GraphQL with a Node.js and Express.js server.

* Use MongoDB and the Mongoose ODM for the database.

* Use queries and mutations for retrieving, adding, updating, and deleting data.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Include authentication (JWT).

* Protect sensitive API key information on the server.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).


The application that was created was called *Iso Meals*; an e-commerce store for people that have been suddenly forced into isolation and may not feel well enough to do their own shopping. This application lets them pick the 'food bundle' of their choice, without having to find and select individual items. 
<br>
<br> 

To view the applicatoin [click here and you will be directed to the live webpage](https://iso-meals.herokuapp.com/)


# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contribute](#contribute)
<br>


## Installation
Assuming the application has successfully been cloned there are a few small steps that need to be followed so that the user can install the application. <br>

First, in the root directroy the user must open the command line and enter <br>
'npm i'
<br>
this will allow all the npm dependencies to be installed. 

Once the installatin has complete the user must 'seed' the application. Seeding the application is important as it means the products and user information will be created. <br> 

This is done by inputing into the command line <br>
'npm run seed' 
<br>
The user will see a message in the command line once all the seeds have completed seedinng. <br>
<br>
The last step to complete installation is to input 'npm run develop' in the root directoy. This allows the 'front end and back end' (server and client folders) to run concurrenty. 

Once this is done a window will automically open displaying the application. 



## Usage

The application is straightforward and intuitive to use. This was important as it is meant to be a simple e-commerce store for people who are not feeling well. 

When the application first loads the user will see the homepage. 

![home](/client/public/images/home.png)

Here they can login, signup, view the products and click on cart. However, if they are not signed in the cart page will display a message "sign in to view your cart". 

If the user clicks on the 'PRODUCTS' tab, they will see all the products that are available to select. 

![bundle](/client/public//images/bundle.png)

The user then selects the bundle they want and they are taken to a decided page for that specific bundle, for example "Vegan Deluxe Bundle" 

![VBD](/client/public/images/VDB.png)

Here they see a description about the bundle, its price, if it is in stock and can decide if they want to add to cart. 

If they do not want this bundle you can select the "Go back" button which will take you back to the products page, if they select add to cart a prompt will appear so they know the item was successfully added to their cart.

![added](/client/public/images/added.png)

The prompt then allows the user to decided to continue shopping or to go to cart. 

If the user selects go to cart; they are presented with a small page, highlighting the items they selected and the total cost. 

![cartpage](/client/public/images/cartpage.png) 
<br>
<br>
<br>
<br>

## Features
This application was made up of the following features: 
- apollo-client
- bcrypt
- boostrap
- concurrently 
- dotenv
- emailjs
- express
- graphQL
- JWT-decode
- mongoose
- node.js
- nodemon 
- react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- react-share


## License

This project is released under the [MIT LICENSE](https://github.com/mjhwest/iso-meals/blob/main/LICENSE).

![License](https://img.shields.io/badge/license-MIT-blue)




## Contribute
If you would like to contribute to the project please contact me: 
- Michael West - michaelwest.webdev@gmail.com

