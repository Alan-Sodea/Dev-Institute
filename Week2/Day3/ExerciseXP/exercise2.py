# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# How much does each family member have to pay ?


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for age in family.values():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    total_cost += cost

for name, age in family.items():
    if age < 3:
        print(f"{name} has to pay: $0")
    elif 3 <= age <= 12:
        print(f"{name} has to pay: $10")
    else:
        print(f"{name} has to pay: $15")

print(f"Total cost for the family: ${total_cost}")
