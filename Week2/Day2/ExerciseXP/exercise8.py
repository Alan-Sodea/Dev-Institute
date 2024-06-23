# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

toppings = []
total_price = 10

while True:
    topping = input("Enter a pizza topping (or 'quit' to finish): ")
    
    if topping.lower() == 'quit':
        break
    
    print(f"Adding {topping} to your pizza.")
    toppings.append(topping)
    total_price += 2.5

print("Toppings on your pizza:")
for topping in toppings:
    print(f"- {topping}")

print(f"Total price for your pizza: ${total_price}")