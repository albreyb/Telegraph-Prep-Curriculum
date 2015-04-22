#Array Exercises Week 2

## User Network

Our User, Joey Plain has just signed up for Facebook! He's very excited and wants to start building out his network as quickly as possible - and we're going to help him get started.

Don't mess with lines 1 through 32. They are used to create Joey's user object (ourUser) and the network (userNetwork) we're going to use to help him find his friends, family, and coworkers.

1. First, let's inspect ourUser and userNetwork to see what we have

  (i) console.dir the ourUser object. It should have a friends, family, and coworkers arrays.

  (ii) console.dir the userNetwork collection. It should have > 20 objects with the same properties as your ourUser object.

2. Next, let's add some friends to the empty ourUser friends collection.
  
(i) Loop through the userNetwork array
  
(ii) If a user in the userNetwork array is from the same city as ourUser, push the username into the ourUser  friends array.

3. Next, let's add some coworkers to the empty ourUser coworkers collection.
  
(i) Loop through the userNetwork array
  
(ii) If a user in the userNetwork has the same job, push the username into the ourUser coworker array.

4. Next, let's add some family members to the empty ourUser family collection.
  
(i) Loop through the userNetwork array
  
(ii) If a user in the userNetwork array has the same last name, push the username into the ourUser family array.
  
(iii) **You'll have to do something special to check JUST the last name. Check out the split() function.

5. Now let's make sure there aren't any duplicate usernames in our friends and family arrays. If 'Doug Flutie' is in our family array, it shouldn't be in our friends array. If it is, let's delete it from our friends array, as family is more important to Joey.
   
(i) Loop through our family array
   
(ii) Inside of our loop, loop through our friends array
   
(iii) If the value of the current element inside if our family array is equal to the current element of our friends array, delete the element in our friends array.
   
(iv) There are a couple of ways to delete things from an array, look up .splice() and try to us that.

6. Now let's make sure there aren't any duplicate usernames in our friends and coworkers arrays. If 'Doug Flutie' is in our friends array, it shouldn't be in our coworkers array. If it is, let's delete it from our coworkers array, as friends are more important to Joey.
   
(i) Loop through our friends array
   
(ii) Inside of our loop, loop through our coworkers array
   
(iii) If the value of the current element inside if our coworkers array is equal to the current element of our friends array, delete the element in our coworkers array.

YOU ARE NOW ENTERING NIGHTMARE MODE:

7. Now that we have all of our arrays filled, let's sort each array by alphabetical order.

(i) Create a function, nameSort that takes an array and sorts its contents by alphabetical order. **hint: arrays may have a method that does this.

(ii) use nameSort on each array in our ourUser object.

(iii) Check each array by using console.dir to make sure its contents are sorted by the end


8. Joey wants to be able to instantly look up whether someone is in one of his networks.

(i) Create a function, networkCheck, that takes an array and a name.

(ii) If the name exists in the array, alert the users full profile formatted exactly like the example below.

```
nameCheck(friendsArray, 'Solomon Daniels');

'Name: Solomon Daniels
 Job: Engineer
 City: Berkeley, California
 Friends: 0,
 Family: 0,
 Coworkers: 0'

```
 (iii) If the person doesn't exist, set up a prompt that asks for the friends info (name, job, city) and adds it to an object named newUser. (new user should have friends, family, and coworkers arrays inside of it as well)

 (iv) Add newUser to the input array and call nameCheck on the array to make sure it exists.