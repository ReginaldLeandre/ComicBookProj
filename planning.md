# This application will be a comic book store application

## MVP features:

#### application will have a home page
#### it will also have a search page
#### the user will be able to search for comic books directly or search a character and show all comic books based on that character
#### if the user searches by character, a selection of 10 results will appear;
    for example, if the user searched "spider-man" results like "spider-man", "venom-suit spider-man", "spider-man(miles morales)"
    this feature will use the "nameStartsWith" parameter provided by the marvel website.
#### this application will have an inventory(quantity will use math.random)
    user will be able to select quantity
    message will display if the user tries to select a value more than inventory preventing the user from adding to cart

#### this application will have a cart feature that will be avaliable to signed in users(ice-box feature) as well as non-signed in users
#### this application will finalize a purchase(without credit card feature)





## Ice box feature:


####  will have a login feature with user name and password(or googleOAuth)
#### will utilize openAI to generate based recommendations on the user's "about me" in their profile when the user signs up
    this feature will be saved to the user's account and only be avaialble to users to prevent unneccesary calls to the api
####  will have a featured comics for the home page(featured comics may or may not change with every refresh)
#### will have have a dark mode 
-   