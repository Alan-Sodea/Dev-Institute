import random

class Game:
    def get_user_item(self):
        # Ask the user to select an item (rock/paper/scissors)
        user_input = None
        while user_input not in ["r", "p", "s"]:
            user_input = input("Select (r)ock, (p)aper, or (s)cissors: ").lower()
        return user_input

    def get_computer_item(self):
        # Select rock/paper/scissors at random for the computer
        return random.choice(["r", "p", "s"])

    def get_game_result(self, user_item, computer_item):
        # Determine the result of the game
        if user_item == computer_item:
            return "draw"
        elif (user_item == "r" and computer_item == "s") or \
             (user_item == "p" and computer_item == "r") or \
             (user_item == "s" and computer_item == "p"):
            return "win"
        else:
            return "loss"

    def play(self):
        # Play the game and return the result
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}!")
        return result
