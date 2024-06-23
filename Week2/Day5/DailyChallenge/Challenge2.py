# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    return longest

# print(longest_word("Margaret's toy is a pretty doll."))  # Output: "Margaret's"
# print(longest_word("A thing of beauty is a joy forever."))  # Output: "forever."
# print(longest_word("Forgetfulness is by all means powerless!"))  # Output: "Forgetfulness"
