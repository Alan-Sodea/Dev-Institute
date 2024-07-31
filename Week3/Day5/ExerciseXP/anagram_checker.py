class AnagramChecker:
    def __init__(self, word_list_file):
        self.word_list = self.load_word_list(word_list_file)

    def load_word_list(self, word_list_file):
        with open(word_list_file, 'r') as file:
            words = file.read().splitlines()
        return words

    def is_valid_word(self, word):
        return word in self.word_list

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = [w for w in self.word_list if self.is_anagram(word, w.lower()) and w.lower() != word]
        return anagrams

        