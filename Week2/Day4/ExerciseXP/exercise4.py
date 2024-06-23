# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

def compare_numbers(guess):
    random_number = random.randint(1, 100)
    if guess == random_number:
        print("Success! You guessed the right number.")
    else:
        print(f"Fail! The random number was {random_number}. Your guess was {guess}.")

user_guess = 56
compare_numbers(user_guess)

