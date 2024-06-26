import random
import string

def generate_random_string(length=5):
    letters = string.ascii_letters  # Contains both uppercase and lowercase letters
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string

print(generate_random_string())
