import string
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text.lower()

    def word_frequency(self, word):
        word = word.lower()
        words = self.text.split()
        frequency = words.count(word)
        return frequency if frequency > 0 else None

    def most_common_word(self):
        words = self.text.split()
        word_counts = Counter(words)
        most_common_word, most_common_count = word_counts.most_common(1)[0]
        return most_common_word

    def unique_words(self):
        words = set(self.text.split())
        return list(words)

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r') as file:
            text = file.read()
        return cls(text)

# Example usage
text_instance = Text("A good book would sometimes cost as much as a good house.")
print("Frequency of 'good':", text_instance.word_frequency('good'))
print("Most common word:", text_instance.most_common_word())
print("Unique words:", text_instance.unique_words())

file_text_instance = Text.from_file('the_stranger.txt')
print("Frequency of 'the':", file_text_instance.word_frequency('the'))
print("Most common word:", file_text_instance.most_common_word())
print("Unique words:", file_text_instance.unique_words())
class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        no_punctuation_text = self.text.translate(translator)
        return no_punctuation_text
    
    def remove_stop_words(self):
        stop_words = set([
            'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves',
            'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their',
            'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was',
            'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the',
            'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against',
            'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in',
            'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
            'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only',
            'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now', 'd', 'll',
            'm', 'o', 're', 've', 'y', 'ain', 'aren', 'couldn', 'didn', 'doesn', 'hadn', 'hasn', 'haven', 'isn', 'ma', 'mightn',
            'mustn', 'needn', 'shan', 'shouldn', 'wasn', 'weren', 'won', 'wouldn'
        ])
        words = self.text.split()
        filtered_words = [word for word in words if word not in stop_words]
        return ' '.join(filtered_words)
    
    def remove_special_characters(self):
        return ''.join(e for e in self.text if e.isalnum() or e.isspace())

mod_text_instance = TextModification("A good book, would sometimes cost as much as a good house!")

print("Text without punctuation:", mod_text_instance.remove_punctuation())
print("Text without stop words:", mod_text_instance.remove_stop_words())
print("Text without special characters:", mod_text_instance.remove_special_characters())

