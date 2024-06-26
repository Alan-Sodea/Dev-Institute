import random

def get_words_from_file(file_path):
    with open(file_path, 'r') as file:
        words = file.read().splitlines()
    return words

def get_random_sentence(words, length):
    random_words = random.sample(words, length)
    sentence = ' '.join(random_words).lower()
    return sentence

def main():
    print("This program generates a random sentence of a specified length using words from a file.")

    try:
        length = int(input("Enter the length of the sentence (an integer between 2 and 20): "))
        if length < 2 or length > 20:
            raise ValueError("The number must be between 2 and 20.")
    except ValueError as e:
        print(f"Invalid input: {e}")
        return

    words = get_words_from_file('words.txt')
    sentence = get_random_sentence(words, length)
    print("Generated sentence:", sentence)

if __name__ == "__main__":
    main()
