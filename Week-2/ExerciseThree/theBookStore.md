
USER: 
- has a balance
- a cart array
FUNCTIONS:
- check site for books (by author, or by type of book)
	 - current search
		- reassigns the search array to the value of check site
     - caching: if the user has already looked up this type of book or the author, just return the old search results

	- adds a book to the cart
		- takes the title of the book
     - Adds the book to the cart
		-  subtracts from price from balance
METHODS:
- subtract a book from the cart
		- takes the title of a book
			- adds the price to the balance

	- clear cart
		- confirms with user before clearing cart
		- clears everything from the object array
- check out:
	 	- adds up the total of the books in the cart
		- compares it to the balance prompts SUCCESS if the balance is greater than
		- or equal to the total.
- MORE COMPLEX FUNCTIONALITY: YOU'RE BALLING ON A BUDGET! (ASK ALBREY ABOUT THIS)


