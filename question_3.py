#Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins.
#They found out you're a programmer and asked you to solve something they've been wondering for a long time.

#Write a function that, given an amount of money and an array of coin denominations, computes the
#number of ways to make the amount of money with coins of the available denominations.

#Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the
#number of ways to make 4¢ with those denominations:

def changePossibilities(amount,denominations):
    change = [0] * (amount + 1)
    change[0] = 1

    for coin in denominations:
        for i in range(len(change)):
            if i >= coin:
                change[i] += change[i - coin]

    return change[amount]

amount = int(input("Enter amount: "))
coins = [int(x) for x in input("Enter coins: ").split()]

print(changePossibilities(amount, coins))
