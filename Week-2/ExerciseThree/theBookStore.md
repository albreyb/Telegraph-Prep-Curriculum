#Bookstore Application!

You've been called up as CTO of the hottest new app on the market, The Book Store. TBS's mission is to be the most comprehensive BookStore on the planet - but it needs some extra functionality to get it started. Over the next hours, you will build that functionality and make this application run.

This lesson will test your knowledge of building functions and methods. In your scripts.js there are two functions that create your fully-loaded book store and a testUser.

The testUser should have a balance and a cart. The balance represents how much money the test user has to spend on books. The cart holds the books that the user is interested in buying.

Susan, our test user, is a college grad looking for some good reads. Let's first make sure she can quickly and efficiently look up things in our bookStore.

1. Create a function, checkStore, that takes a string as a parameter.
	
	(i) checkStore goes through our bookStore and checks each book title.

	(ii) If the title matches the input string, we ask the user whether he or she wants to add it to their cart.
	``` 
	Your prompt should look like this:
		We found your book! [Title of Book], by [Name of Author]. It costs [price].
		
		Would you like to add it to your cart?
	```
	
	(iii) If the title isn't found, alert the user that it wasn't found.

2. Create a method, deleteBook, and put it on your testUser object.
	
	(i) deleteBook takes a string parameter, and checks it against the books in the user's cart.
	
	(ii) If the book is in the cart, ask the user if they're sure they want to delete it using confirm().
	
	(iii) If they do want to delete, take the book out of the cart.
	
	(iv) Inspect the cart to make sure the book was deleted.

3. Create a method, clearCart, and put it on your testUser object.
	
	(i) clearCart prompts the user as to whether they're SURE they want to clear their cart.
	
	(ii) If they confirm yes, delete everything in their cart.
	
	(iii) Inspect the cart to make sure it's empty.

4. Create a method, checkOut, and put it on your testUser object.
	
	(i) checkOut adds up the total price of the books in the user's cart and compares it to their balance.
	
	(ii) If their balance is higher than the the total of the combined books, let them check out.
	
	```
	checkout() ---> 'YOUVE SUCCESSFULLY CHECKED OUT!'
	
	```
	
	(iii) If their balance is lower than the total of the combined books, tell them to get their money up and try again later (jk be nice about it).
	
YOU ARE NOW ENTERING HARD MODE
5. Let's open up our functionality a bit so Susan can more easily find books.
	
	(i) Instead of just checking for the title, let's let our testUser look up books by author and type of book as well.
	
	(ii) If there are multiple titles by the same author, or multiple books of the same type, send the user a prompt that lists the books like so:
	```
	checkStore('classic')
	--> There are multiple books that are classics, which one would you like?
		When Things Fall Apart by Chenua Achebe
		Moby Dick by Herman Melville
		I Know Why The Cagebird Sings by Maya Angelou
	```
	
	(iii) After the user enters the book title they want, add it to their cart.
	
	(iv) Inspect the cart to make sure the right book was inserted.
	
6. Susan is balling on a budget! Let's allow our user to delete multiple books by their price.
	
	(i) If the user passes a number as an argument to our deleteBook function, return all the books
	that are equal to and larger than that price point.
	
	(ii) Much like on #5, let the user know which books fit their parameters.
	```
	deleteBook(20) --->
		These are the books equal to and above 20$:
		
		A Clock Work Orange by Anthony Burgess (27$)
		Enders Game by Orson Scott Card (35$)
		
		Which one would you like to take out of your cart?
	```
	
	(iii) If the value of their input is equal to the book title, delete the book.

- MORE COMPLEX FUNCTIONALITY: CREDIT CARD INFORMATION PROCESSINGo (ASK ALBREY ABOUT THIS).
>>>>>>> 8f34a31a1e2c5e489f3c9c74b21d1bf724a3d50f


