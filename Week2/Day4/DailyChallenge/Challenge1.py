# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# 7	i	i
# T	s	x
# h	%	?
# i		#
# s	M	
# $	a	
# #	t	%
# ^	r	!


# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string



# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning “Matrix” videos

# matrix_str = 
# """7ii
# Tsx
# h%?
# i #
# sM 
# $a 
# #t%
# ^r!"""

matrix_str = ""

for i in range(int(input("Enter the number of lines : "))):
    matrix_str += input(f"Enter the line number {i} : ")+"\n" 

matrix_str = matrix_str[:-1]

# Convert the matrix string into a 2D list
matrix = [list(row) for row in matrix_str.split("\n")]

# Decrypt the matrix and reveal the hidden message
message = ""
for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        char = matrix[row][col]
        if char.isalnum():
            message += char
        elif message and message[-1] != " ":
            message += " "

print(message)
