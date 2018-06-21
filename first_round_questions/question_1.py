# Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t.
# You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output
# should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be
# sortByString(s, t) = "oodg".


def sortByStrings(s, t):
    sorted_string = ""
    frequency = dict()

    for letter in s:
        if letter in frequency:
            frequency[letter] += 1
        else:
            frequency[letter] = 1

    letters = frequency.keys()
    for i in range(len(t)):
        if t[i] in letters:
            sorted_string += t[i]*frequency[t[i]]

    return sorted_string

s = input("Enter the word to be sorted: ")
t = input("Enter string to be sorted by: ")

print(sortByStrings(s, t))
