1. i will be returned as i is a var.
2. discountedPrice will be returned as discountedPrice is a var.
3. finalPrice will be returned as finalPrice is a var.
4. [50, 100, 150] because the function will halve the prices as the discount is 0.5.
5. An error will be thrown as i is out of scope.
6. An error will be thrown as discountedPrice is out of scope.
7. finalPrice will be returned because finalPrice is still in scope.
8. [50, 100, 150] because the function will halve the prices as the discount is 0.5.
9. An error will be thrown as i is out of scope.
10. An error will be thrown as discountedPrice is out of scope.
11. 0 will be returned as finalPrice is a const.
12. Since finalPrice is a const, [0,0,0] will be returned.
13A. student.name
13B. student["Grad Year"]
13C. student.greeting()
13D. student['Favorite Teacher'].name
13E. student.courseLoad[0]
14A. 2 is converted to a string and 3 and 2 are concatenated to result in 32.
14B. 3 is converted to an integer, and subtraction is performed to result in 1.
14C. null is represented as 0, so 3+0 = 3.
14D. null is concatenated to the string 3, to get 3null.
14E. true is represented as 1, so 1+3 = 4.
14F. Both false and null are represented as 0, so the result is 0+0 = 0.
14G. undefined is concatenated to 3, resulting in 3undefined.
14H. undefined doesn't have a integer equivalent, resulting in NaN.
15A. true
15B. false
15C. true
15D. false
15E. false
15F. true
16. == just checks the values of the two variables being compared, === checks whether they're an exact match.
17. Hello!, because any value other than 0 is regarded as true, so 2 == true.
19. [6,8,10]. For each element in array, the program calls the callback function, which is doSomething, and an anonymous function is passed in that multiplies x by 2. In doSomething, that anonymous function is called with number + 2 as an arguement. So, if array[i] === 1, then doSomething receives 1, then passes 3 into the anonymous function, which returns 6, which bubbles up to the first call. This process is also repeated for every value in array.
21. 1432 