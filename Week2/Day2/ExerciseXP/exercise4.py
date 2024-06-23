# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?


# Float: A float is a data type in programming that represents real numbers with decimal points. It stands for "floating point."
# Difference between an Integer and a Float:
# An integer is a whole number without any decimal point.
# A float, on the other hand, is a number that includes a decimal point.

# Create a list containing the sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
sequence_list = [x / 2 + 1 for x in range(8)]

# Another way to generate a sequence of floats:
# You can use list comprehension with a range and divide each element by 2 while adding 1 to get the desired sequence of floats.