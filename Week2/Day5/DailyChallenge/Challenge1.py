# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

input_string = input("Enter a comma-separated sequence of words: ")
words = [word.strip() for word in input_string.split(",")]
sorted_words = sorted(words)
output_string = ",".join(sorted_words)
print(output_string)
