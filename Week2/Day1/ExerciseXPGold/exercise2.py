# Instructions
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

A = list(range(3, 13))
A.extend(list(range(1, 3)))
B = ["Spring", "Summer", "Autumn", "Winter"]
print(B[A.index(int(input("Enter a month beetween 1 and 12 : ")))//3])