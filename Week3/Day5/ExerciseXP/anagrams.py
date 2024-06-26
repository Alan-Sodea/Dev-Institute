from anagram_checker import AnagramChecker

def main():
    anagram_checker = AnagramChecker('words.txt')

    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ").strip()

        if choice == '2':
            print("Goodbye!")
            break
        elif choice == '1':
            word = input("Enter a word: ").strip()

            if ' ' in word:
                print("Error: Please enter only a single word.")
                continue

            if not word.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue

            word = word.lower()

            if anagram_checker.is_valid_word(word):
                anagrams = anagram_checker.get_anagrams(word)
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is a valid English word.")
                print("Anagrams for your word: " + ", ".join(anagrams))
            else:
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is not a valid English word.")

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
