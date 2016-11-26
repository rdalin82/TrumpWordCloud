import sys
reload(sys)
sys.setdefaultencoding("utf-8")
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.probability import FreqDist
import json 
file_a = open("TrumpSpeechUnionLeagueNationalSecurity.txt")
a = file_a.read()
file_x = open("TrumpSpeechImmigrationPhoenix.txt")
x = file_x.read()


file_y = open('trumpSpeechNomination.txt')
p = file_y.read()

p = p+x +a
stopwords = set(stopwords.words('english'))
text = nltk.word_tokenize(p)
words = [w for w in text if w.lower() not in stopwords]
punct = [".", ",", ":", "\xe2\x80\x93", "?", "It\xe2\x80\x99s"]
words = [w for w in words if w not in punct]

fdist = FreqDist()

for word in words:
  fdist[word] += 1 

final = fdist.most_common(100)
final_array = []
for item in final:
  string = {"text": item[0], "size": str(item[1])}
  final_array.append(string)

print final_array








# fdist = FreqDist()
# for sentence in nltk.tokenize.sent_tokenize(wordp):
#   for word in nltk.tokenize.word_tokenize(sentence):
#     fdist[word] += 1

# print fdist.most_common(50)

