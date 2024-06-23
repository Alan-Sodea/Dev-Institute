# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

print("First question : ")
for i in range(1, 20):
    print(i)


print("Second question : ")
a = list(range(1, 21))
for i in range(len(a)):
    if i%2 == 0:
        print(a[i])

