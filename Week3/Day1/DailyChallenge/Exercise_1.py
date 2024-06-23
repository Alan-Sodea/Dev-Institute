class Farm():
    def __init__(self, name):
        self.name = name
        self.animal_list = []
        self.animal_number = []

    def add_animal(self, animal_name, animal_num=1):
        if animal_name in self.animal_list:self.animal_number[self.animal_list.index(animal_name)] += animal_num
        else:
            self.animal_list.append(animal_name)
            self.animal_number.append(animal_num)

    def get_info(self):
        txt = ""
        for i in range(len(self.animal_list)):
            txt += f"{self.animal_list[i]} : {self.animal_number[i]}\n"

        return f"{self.name}'s farm\n\n{txt}\n    E-I-E-I-0!"

    def get_animal_types(self):
        return sorted(self.animal_list)

    def get_short_info(self):
        return(f"“McDonald’s farm has {", ".join([i+"s" for i in self.get_animal_types()][:-1])} and {self.get_animal_types()[-1]+"s"}.”")


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_short_info())