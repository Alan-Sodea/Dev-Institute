# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

word = input("Enter a word: ")

new_word = ""
for i in range(len(word)):
    if i == 0 or word[i] != word[i - 1]:
        new_word += word[i]

print(new_word)