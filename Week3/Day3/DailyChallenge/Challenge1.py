import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:self.radius = radius
        elif diameter is not None:self.radius = diameter / 2
        else:raise ValueError("Must provide either radius or diameter")
    def radius(self):return self._radius
    def radius(self, radius):
        if radius < 0:raise ValueError("Radius cannot be negative")
        self._radius = radius
    def diameter(self):return self.radius * 2
    def diameter(self, diameter):
        if diameter < 0:raise ValueError("Diameter cannot be negative")
        self.radius = diameter / 2
    def area(self):return math.pi * self.radius**2
    def __str__(self):return f"Circle with radius: {self.radius}"
    def __repr__(self):return f"Circle({self.radius})"
    def __add__(self, other):return Circle(self.radius + other.radius)
    def __lt__(self, other):return self.radius < other.radius
    def __eq__(self, other):return self.radius == other.radius
    def __gt__(self, other):return self.radius > other.radius
    def __le__(self, other):return self.radius <= other.radius
    def __ge__(self, other):return self.radius >= other.radius
    def __ne__(self, other):return self.radius != other.radius
    def draw(self, x=0, y=0):
        turtle.penup()
        turtle.goto(x, y - self.radius)
        turtle.pendown()
        turtle.circle(self.radius*30)

if __name__ == "__main__":
    c1 = Circle(radius=3)
    c2 = Circle(diameter=4)
    c3 = Circle(radius=2)
    
    print(c1)
    print(c2)  
    
    print(f"Area of c1: {c1.area()}")
    c4 = c1 + c2
    print(c4)  
    print(c1 > c2)
    print(c1 == c3)
    circles = [c1, c2, c3, c4]
    circles_sorted = sorted(circles)
    print([str(circle) for circle in circles_sorted]) 
    c1.draw()

