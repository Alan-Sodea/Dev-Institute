# Instructions
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python


print("Hello world\n"*4+"\n".join(["I love python" for i in range(4)]))
# or
print("Hello world\n"*4+("I love python\n"*4)[:-1])