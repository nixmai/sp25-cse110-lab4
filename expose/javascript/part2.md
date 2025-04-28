1. i was declared as a var inside the for loop. Since we know var is function scoped which means that when the for loop ends, i still exists and is accesible. Therefore, 3 is printed. 

2. 150 will be outputted. DiscountedPrice is defined as a var so will exist throughout the entire code. 

3. 150 will be outputted. finalPrice is defined as a var so will exist throughout the entire code. 

4. [50, 100, 150] will be returned because each original price is multiplied by (1 - discount) and added into the discounted array.

5. referenceerror: i is not defined. Because i was declared as a let inside a for loop, it will only exist within that for loop. So once we exit it won't exist and we will get an error that i was not defined/declared. 

6. referenceerror: discountedPrice is not defined. Because discountedPrice was declared as a let inside a for loop, it will only exist within that for loop. So once we exit it won't exist and we will get an error that discountedPrice was not defined/declared. 

7. 150 because finalPrice was defined as a let so it will exist through the entire function. As it was defined just within the function. 
8. [50, 100, 150] because it applies a 50% discount to each original price, rounds the result, and stores each in an array that is returned.

9. referenceerror: i is not defined. i was defined in the for loop using let. Since we exit the for loop it won't exist.
10. 3 because length was declared with const inside the function and is accessible throughout the entire function scope.

11. Returns [50, 100, 150] because each original price is multiplied by (1 - discount) and added into the discounted array. No errors occur.

12. A. student.name B. student["Grad Year"] C. student.greeting() D. student["Favorite Teacher"].name E. student.courseLoad[0]

13. ###Arithmetic 
- '32' as we have string concatenation here
- 1 as 3 is converted to a number then we have 3-2 = 1
- 3 as NULL is converted to 0 and 3+0=3
- '3null' as null is converted to a string as 3 is already a string
- 4 as true is 1 and 3 is 3 and 1 + 3 = 4
- 0 as false and null are both 0
- '3undefined' as 3 is a string and it is concatenated 
- NaN as 3 becomes a number but undefined can't 
  
14. ###Comparison
- True, as it is converted to the number 2 and 2 is greater than 1
- False, we see string comparison here and 2 is greater than 1 (first digit)
- True, == does type check so '2' = 2 and 2 = 2
- False, checks type and value and string and number are not equal
- False, as true = 1 and 1 is not equal to 2
- True, boolean(2) is true and true = true
  
15. == compares valus only after doing the type conversion. === checks value and type exactly. 

16. Done in part2-question16.js file.

17. Calling `modifyArray([1, 2, 3], doSomething)` will return `[2, 4, 6]`. The modifyArray function will loop through every element of the array and applies the doSomething function to these values which takes every element and multiples it times 2. Which will result in the array presented above. 

18. Done in part2-question18.js file.

19. Output:
    1
    4
    3
    2
The 1 runs immediatly, then the 2 is scheduled for after a second. Then 3 is scheduled to run after the code if gone through and 4 runs immediatly. 

