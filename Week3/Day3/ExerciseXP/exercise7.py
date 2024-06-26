from faker import Faker

fake = Faker()

users = []

def add_fake_user(users_list):
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users_list.append(user)

# Adding 5 fake users to the list
for _ in range(5):
    add_fake_user(users)

# Example usage
for user in users:
    print(user)
