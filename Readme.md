# Problem Statement
### From the given array we need to find the max length of the subsets with the numbers that are not evenly divisible by the given number.
# Solution
- I have intialized an array with the number of elements in the number by the user.
- looped over the number to push the value from the given number from to the array.
```JavaScript
countMaxSubset=Math.min(counts[0],1)
// used to find the minimum intialization of the countMaxSubset
```
- After getting the intialization of the count we are getting the number of iterations.
- We are comparing the length of one  subset with the other  to get the maximum length of the subset.
- The subset with the maximum length will contain the elements whose sum in pairs is not evenly divisible by the given number.
            
                        ****