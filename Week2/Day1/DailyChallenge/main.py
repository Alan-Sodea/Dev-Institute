# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod

import random

a = input("Enter a string : ")
print("string not long enough" if len(a)<10 else "perfect string" if len(a)==10 else "string too long")
print(a[0],a[-1])

s = ""
for i in range(len(a)):
    s+=a[i]
    print(s)


a = list(a)
random.shuffle(a)
print("".join(a))