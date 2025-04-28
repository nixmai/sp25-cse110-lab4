1. The bug was that the inputs num1 and num2 were used as strings instead of numbers. So the + would simply concatenate the values. 

2. The fix was to convert num1 and num2 to type Number. So when performing addition it would actually add the numbers numerically. 