# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {7, 13, 22, 42}
my_fav_numbers.add(8)
my_fav_numbers.add(30)
my_fav_numbers.remove(30)
friend_fav_numbers = {3, 11, 22, 35}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("My Favorite Numbers:", my_fav_numbers)
print("Friend's Favorite Numbers:", friend_fav_numbers)
print("Our Favorite Numbers:", our_fav_numbers)