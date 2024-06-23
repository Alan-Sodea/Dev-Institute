class Car():
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def rename_car(self, new_name):
        self.name = new_name

    def presentation_car(self):
        print(f"My name is {self.name} and my price is {self.price}")
    
my_first_car = Car("Toyota", 20000)
my_second_car = Car("Mercedes", 15000)
my_third_car = Car("BMW", 70000)

my_first_car.presentation_car()
my_first_car.rename_car("Range Rover")
my_first_car.presentation_car()


