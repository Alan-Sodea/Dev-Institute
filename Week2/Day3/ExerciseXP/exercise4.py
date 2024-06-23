# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

disney_users_A = {}
for index, user in enumerate(users):
    disney_users_A[user] = index
print(disney_users_A)

disney_users_B = {}
for index, user in enumerate(users):
    disney_users_B[index] = user
print(disney_users_B)

disney_users_C = dict(sorted({user: index for index, user in enumerate(users)}.items()))
print(disney_users_C)

disney_users_A_i = {user: index for index, user in enumerate(users) if "i" in user}
print(disney_users_A_i)

disney_users_A_m_p = {user: index for index, user in enumerate(users) if user.startswith("M") or user.startswith("P")}
print(disney_users_A_m_p)
