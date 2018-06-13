#Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

#The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
#is repeated exactly k times. Note: k is guaranteed to be a positive integer.

#For s = "4[ab]", the output should be decodeString(s) = "abababab"
#For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

def decodeString(s):
    number_stack = []
    char_stack = []
    result_string = ""

    for i in range(len(s)):
        if s[i].isdigit():
            number_stack.append(int(s[i]))
        elif s[i] == ']':
            last_char = ""
            temp = ""
            letter = ""
            while letter != '[':
                letter = char_stack.pop()
                if letter == '[':
                    num = number_stack.pop()
                    temp = temp[::-1]
                    result_string = temp + result_string
                    result_string *= num
                else:
                    temp += letter
                    last_char = letter

        else:
            char_stack.append(s[i])

    return result_string


s = input("Enter coded string: ")
print(decodeString(s):)
