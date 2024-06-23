# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.


total_cost = 0
family_members = int(input("How many family members need tickets? "))

for i in range(family_members):
    age = int(input(f"Enter age of family member {i + 1}: "))
    
    if age < 3:
        total_cost += 0
    elif 3 <= age <= 12:
        total_cost += 10
    else:
        total_cost += 15

print(f"Total cost for the family's tickets: ${total_cost}")

teenagers = ["Alice", "Bob", "Charlie", "David"]
allowed_teenagers = []

for teen in teenagers:
    age = int(input(f"Enter age of {teen}: "))
    
    if 16 <= age <= 21:
        allowed_teenagers.append(teen)

print("Final list of teenagers allowed to watch the movie:")
print(allowed_teenagers)
