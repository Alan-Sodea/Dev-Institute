import psycopg2
from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n--- Menu Editor ---")
        print("V: View an Item")
        print("A: Add an Item")
        print("D: Delete an Item")
        print("U: Update an Item")
        print("S: Show the Menu")
        print("E: Exit")

        choice = input("Please choose an option: ").upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            show_restaurant_menu()
            print("Exiting program...")
            break
        else:
            print("Invalid choice. Please try again.")

def add_item_to_menu():
    name = input("Enter the name of the item: ")
    try:
        price = int(input("Enter the price of the item: "))
    except ValueError:
        print("Invalid price. Please enter a number.")
        return

    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuManager.get_by_name(name)
    
    if item:
        item.delete()
        print("Item was deleted successfully.")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    name = input("Enter the name of the item to update: ")
    item = MenuManager.get_by_name(name)
    
    if item:
        try:
            new_name = input("Enter the new name of the item (or press Enter to keep the current name): ")
            new_price = input("Enter the new price of the item (or press Enter to keep the current price): ")
            
            new_price = int(new_price) if new_price else None
            if not new_name:
                new_name = None
            
            item.update(new_name, new_price)
            print("Item was updated successfully.")
        except ValueError:
            print("Invalid price. Please enter a number.")
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(f"Name: {item.name}, Price: {item.price}")
    else:
        print("The menu is currently empty.")

if __name__ == "__main__":
    show_user_menu()