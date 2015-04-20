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

