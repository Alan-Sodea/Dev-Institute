# Part 1: Quiz Answers

# What is a class? A class is a blueprint or template for creating objects in object-oriented programming (OOP). It defines attributes (data) and methods (functions) that objects created from the class will have.
# What is an instance? An instance is an individual object created from a class. While the class defines the properties and behavior, an instance is a specific realization of that class.
# What is encapsulation? Encapsulation is the concept of bundling the data (attributes) and methods (functions) that operate on the data into a single unit, i.e., a class. It also restricts direct access to some of an object's components, which is known as data hiding.
# What is abstraction? Abstraction is the concept of hiding complex implementation details and showing only the essential features of an object or process. It simplifies interaction by allowing users to focus on what an object does rather than how it does it.
# What is inheritance? Inheritance is an OOP principle where a class (child class) can inherit attributes and methods from another class (parent class). This allows for code reuse and the creation of hierarchical relationships between classes.
# What is multiple inheritance? Multiple inheritance is a feature in some programming languages (including Python) where a class can inherit attributes and methods from more than one parent class.
# What is polymorphism? Polymorphism is the ability in programming to present the same interface for different underlying data types. In OOP, it allows objects of different classes to respond to the same method call in different ways.
# What is method resolution order or MRO? MRO is the order in which Python looks for a method in a hierarchy of classes. This is particularly important in cases of multiple inheritance. Python uses the C3 linearization algorithm to determine the order in which classes are resolved when searching for methods.


# Part 2 : Implementation
## Code
import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]

    def shuffle(self):
        if len(self.cards) < 52:
            print("Cannot shuffle. Deck is incomplete.")
        else:
            random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            print("No more cards to deal.")
            return None
        return self.cards.pop()

# Example of usage:
deck = Deck()  # Create a new deck
deck.shuffle()  # Shuffle the deck

# Deal cards
card1 = deck.deal()
card2 = deck.deal()

print(f"Dealt cards: {card1}, {card2}")
print(f"Remaining cards in deck: {len(deck.cards)}")