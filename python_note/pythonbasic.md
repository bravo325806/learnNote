# Python note

# 

---

群集資料型態

len\( \) 以一個int物件傳回資料項的長度

```python
len((“one”,))
```

1

```python
len(“one”)
```

3

```python
len("automatically”)
```

13

list型態 有個append\(\)方法，可以將一個物件附加至一個清單

就像這樣：

```python
x = ["zebra",49,-897,"arrvark",200]
x.append("more")
x
```

\['zebra', 49, -897, 'arrvark', 200, 'more’\]

list型態 有 insert\(\) 用於將一個資料項插入被給定的索引位置

還有 remove\(\) 用於從被給定的索引位置移除一個資料項

python 的 索引是從 0 開始

```python
x
```

\['zebra', 49, -897, 'arrvark', 200, 'more’\]

```python
x[1]
```

49

```python
x[1] = "forty nine"
x
```

\['zebra', 'forty nine', -897, 'arrvark', 200, 'more’\]

---

雖然a與b是不同的物件\(具有不同的身份\)，但他們有相同的值，

所以他們是相等的。

```python
a = "many paths"
b = "many paths"
a is b
```

False

```python
a == b
```

True

隸屬運算符

對於序列或群集之類的資料型態，像是字串、清單和位元組，我們可以使使用 in 運算元來測試隸屬關係，使用 not in 來測試無隸屬關係：

```python
P = (4,"frog",9,-33,9,2)
2 in P
```

True

```python
phrase = "wild SWans by Jung Chang"
"J" in phrase
```

True

---

邏輯運算符

短路表達式x AND y，事實上等價於條件語句：if x then y else false。短路表達式x OR y，則等價於條件語句：if x then true else y。

```python
five = 5
two = 2
zero = 0
five and two
```

2

```python
two and five
```

5

```python
five and zero
```

0

```python
five or two
```

5

```python
two or five
```

2

```python
zero or five
```

5

```python
5 | 3
```

7

```python
2&1
```

0

---

if 陳述句

與其他語言不同的是Python使用縮排來表示它的區塊結構。

```py
if lines <1000:
print\("small"\)
elif lines <10000:
print\("medium"\)
else:
print("large")
```

---

for...in陳述句

```py
>>>for country in ["Denmark","Finland","Norway","Sweden"]:
print\(country\)
```

Denmark

Finland

Norway

Sweden

```py
>>> for letter in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":    

if letter in "AEIOU":

print\(letter,"is vowel"\)

else:

print\(letter,"is a consonant"\)
```

A is vowel

B is a consonant

C is a consonant

D is a consonant

E is vowel

F is a consonant

G is a consonant

H is a consonant

I is vowel

J is a consonant

K is a consonant

L is a consonant

M is a consonant

N is a consonant

O is vowel

P is a consonant

Q is a consonant

R is a consonant

S is a consonant

T is a consonant

U is vowel

V is a consonant

W is a consonant

X is a consonant

Y is a consonant

Z is a consonant

---

函式的建立與呼叫

```py
def get_int(msg):
while True:
try:
i=int\(input\(msg\)\)
return i
except ValueError as err:
print\(err\)
```

```python
get_int(3)
```

3

```python
get_int(q)
```

invalid literal for int\(\) with base 10: 'get\_int\(q\)’



計算成績

```python
grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]
def grades_sum(scores):
total = 0
for score in scores:
total += score
print total
return total
grades_sum(grades)
```








### 內建函數 range\(\)

```python
>>> print(range(10))
```

range\(0, 10\)

```python
```pythonprint(type(range(10)))
```

&lt;class 'range'&gt;

```python
print(list(range(10)))
```

\[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\]

```python
print(list(range(0, 10)))
```

\[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\]

```python
print(list(range(0, 10, 2)))
```

\[0, 2, 4, 6, 8\]

```python
print(list(range(9, -1, -1)))
```

\[9, 8, 7, 6, 5, 4, 3, 2, 1, 0\]

Make the loop print the numbers from 0 to 19 instead of 0 to 9.

```python
print "Counting..."
for i in range(0,20):
    print i
```

---

Using strings in lists in functions

```py
n = ["Michael", "Lieberman"]
def join_strings(words):
    result = ""
    for i in words:
        result = result + i
    return result
print join_strings(n)
```

Using two lists as two arguments in a function

```python
m = [1, 2, 3]
n = [4, 5, 6]
# Add your code here!
def join_lists(a, b):
    return a + b
print join_lists(m, n)
# You want this to print [1, 2, 3, 4, 5, 6]
```

\[1,  2,  3,  4,  5,  6\]

Using a list of lists in a function

```python
n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]
for lst in n:
    print lst
    for item in lst:
        print item
```

### 內建函數 append\(\)

把input輸入的內容新增到list

```py
hobbies = []
for x in range(0,3):
    newhobbies = raw_input("your new hobbies")
    hobbies.append(str(newhobbies))

print hobbies
```

```python
n = [[1, 2], [4, 5, 6, 7]]
def flatten(lists):
    results = [ ]
    for x in lists:
        for j in x:
            results.append(j)
    return results

print flatten(n)
```

```python
board = []
for x in range(0,5):
    board.append('0')
for i in range(0,5):
    print board
```

or

```python
board = []
for n in range(5):
    board.append('O' )
def print_board(board):
    for row in board:
        print board
print_board(board)
```

\[0,  0,  0,  0,  0\]

\[0,  0,  0,  0,  0\]

\[0,  0,  0,  0,  0\]

\[0,  0,  0,  0,  0\]

\[0,  0,  0,  0,  0\]

```python
board = []
for n in range(5):
    board.append(['O'] * 5)
print board
```

\[\[0,  0,  0,  0,  0\] , \[0,  0,  0,  0,  0\] , \[0,  0,  0,  0,  0\] , \[0,  0,  0,  0,  0\] , \[0,  0,  0,  0,  0\]\]

```python
letters = ['a', 'b', 'c', 'd']
print " ".join(letters)
print "---".join(letters)
```

a b c d

a---b---c---d---

```python
board = []
for x in range(0,5):
   board.append(["O"] * 5)
def print_board(board):
  for row in board:
    print " ".join(row)

print_board(board)
```

---

### While/else

```python
import random
print "Lucky Numbers! 3 numbers will be generated."
print "If one of them is a '5', you lose!"
count = 0
while count < 3:
    num = random.randint(1, 6)
    print num
    if num == 5:
        print "Sorry, you lose!"
        break
    count += 1
else:
    print "You win!"
```

猜數字遊戲

```python
from random import randint
random_number = randint(1, 10)
guesses_left = 3
# Start your game!
while guesses_left > 0:
    guess = int(raw_input("Your guess: "))
    if guess == random_number:
        print "You win!"
        break
    guesses_left -= 1
else:
    print random_number
    print "You lose."
```

取代

```python
phrase = "A bird in the hand..."
s = ""
for x in phrase:
    if x == 'A' or x == 'a':
        s = s + 'X'
    else:
        s = s + x
print s
```

X bird in the hand...

The`,`character after our

`print`statement means that our next`print`

statement keeps printing on the same line.

```python
phrase = "A bird in the hand..."
# Add your for loop
for char in phrase:
    if char == 'A' or char == 'a':
        print 'X',
    else:
        print char,
print
```

X bird in the hand...

---

### For/else

Just like with`while`,`for`loops may have an`else`associated with them.

```python
fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']
print 'You have...'
for f in fruits:
    if f == 'tomato':
        print 'A tomato is not a fruit!' 
        break #到tomato就會停止
    print 'A', f
else:
    print 'A fine selection of fruits!'
```

You have...

A banana

A apple

A orange

A tomato is not a fruit!

```python
#沒有break的版本
fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']
print 'You have...'
for f in fruits:
    if f == 'tomato':
        print 'A tomato is not a fruit!' 
    print 'A', f
else:
    print 'A fine selection of fruits!'
```

You have...

A banana

A apple

A orange

A tomato is not a fruit!

A tomato

A pear

A grape

A fine selection of fruits!

---

Looping over a dictionary

```python
d = {'a': 'apple', 'b': 'berry', 'c': 'cherry'}
for key in d:
    # Your code here!
    #if d[key] == 'berry':
    print key, d[key]
```

a apple

b berry

c cherry

---

### 內建函數enumerate\(\)

`enumerate`works by supplying a corresponding index to each element in the list that you pass it. Each time you go through the loop,

`index`will be one greater, and`item`will be the next item in the sequence. It's very similar to using a normal`for`loop with a list, except this gives us an easy way to count how many items we've seen so far

```python
choices = ['pizza', 'pasta', 'salad', 'nachos']
print 'Your choices are:'
for index, item in enumerate(choices):
    print index+1, item
    # index從0開始所以+1
```

Your choices are:

1 pizza

2 pasta

3 salad

4 nachos

---

### 內建函數zip\(\)

`zip`will create pairs of elements when passed two lists, and will stop at the end of the shorter list.`zip`can handle three or more lists as well!

```python
#zip()用來混合list_a & list_b
list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]
for a, b in zip(list_a, list_b):
    # Add your code here!
    #print a,b 列出ab 
    if a > b: #a,b比大小
        print a
    else:
        print b
```

3

9

17

15

30

---

### 內建函數sum\(\) , float\(\)

```py
grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]
def grades_sum(scores):
    total = sum(scores) 
    #sum 自動總和
    return total

def grades_average(scores):
    return grades_sum(scores)/float(len(scores))
    #float轉換成浮點數
    #len()長度（list數量）
print grades_average(grades)
```

---

Standard Deviation:

The standard deviation is the square root of the variance.

```python
grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]

# all the grades
def print_grades(grades):
    for grade in grades:
        print grade
# sum of grades        
def grades_sum(grades): 
    total = 0
    for grade in grades: 
        total += grade
    return total
# average of grades
def grades_average(grades):
    sum_of_grades = grades_sum(grades)
    average = sum_of_grades / float(len(grades))
    return average
# variance of grades
def  grades_variance(scores):
    average = grades_average(scores)
    variance = 0
    for score in scores:
        variance += (average - score) ** 2
        result = variance/float(len(scores))
    return result 
# deviation of grades
def grades_std_deviation(variance):
    return variance ** 0.5 #開根號

variance = grades_std_deviation(grades_variance(grades))
#取得variance的值再計算deviation
print (variance)
```



---


### 內建函數 item\(\)

th`items()`function doesn't return key/value pairs in any specific order.

```python
my_dict = {
'Name':'Jiayi',
'Age':20,
'height':155
}
print my_dict.items()
```

\[\( 'Age', 20\), \( 'Name', 'Jiayi' \), \( 'height' , 155\) \]

---

### Key\(\) and Values\(\)

The`keys()`function returns an array of the dictionary's keys, and

The`values()`function returns an array of the dictionary's values.

```python
my_dict = {
'Name':'Jiayi',
'Age':20,
'height':155
}

print my_dict.keys()
print my_dict.values()
```

\['Name', 'Age', 'height' \]

\['Jiayi', 20, 155 \]

---

You can use`in`very`in`tuitively, like so:

```python
my_dict = {
'Name':'Jiayi',
'Age':20,
'height':155
}

for key in my_dict:
print key, my_dict[key]
```

Age 20

Name Jiayi

height 155

```python
for letter in 'JIAYI':
    print letter
```

J

I

A

Y

I

---

Building Lists

```python
evens_to_50 = [i for i in range(51) if i % 2 == 0]
print evens_to_50
```

\[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50\]

```python
even_squares = [y**2 for y in range(1,11) if (y**2) % 2 == 0]
print y
```

\[4, 16, 36, 64, 100\]

### List Slicing Syntax

```
[start:end:stride]
```

Where`start`describes where the slice starts \(inclusive\),`end`is where it ends \(exclusive\), and`stride`describes the space between items in the sliced list. For example, a stride of`2`would select every other item from the original list to place in the sliced list.

```python
l = [i ** 2 for i in range(1, 11)]
# Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print l[2:9:2]
```

\[9, 25, 49, 81\]

### Omitting Indices

The default starting index is`0`

The default ending index is the end of the list

The default stride is`1`

```python
to_five = ['A', 'B', 'C','D','E']
print to_five[3:]
# prints ['D', 'E'] 
print to_five[:2]
# prints ['A', 'B']
print to_five[::2]
# print ['A', 'C', 'E']
```

```python
my_list = range(1, 11) # List of numbers 1 - 10
print my_list[0::]
print my_list[::2]
```

\[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

\[1, 3, 5, 7, 9\]

### Reversing a List

```python
my_list = range(1, 11)
backwards =  my_list[::-1]
print backwards
```

\[10, 9, 8, 7, 6, 5, 4, 3, 2, 1\]

### Stride Length
```python
to_one_hundred = range(101)
backwards_by_tens = to_one_hundred[100::-10]
print backwards_by_tens
```
\[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0\]

```python
to_21 = range(1,22)
odds = to_21[0::2]
print odds
middle_third = to_21[7:14:]
print middle_third
```
\[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21\]
\[8, 9, 10, 11, 12, 13, 14\]

---

### Anonymous Functions

```python
lambda x: x % 3 == 0
```
Is the same as

```python
def by_three(x):
    return x % 3 == 0
```

### Lambda Syntax

```python
languages = ["HTML", "JavaScript", "Python", "Ruby"]
print filter(lambda x: x=='Python',languages)
```
['Python']
```python
my_list = range(16)
filter(lambda x: x % 3 == 0, my_list)
```

```pythonfilter()``` takes two arguments: the first is the function that tells it what to filter, and the second is the object to perform the filtering on.

```python
cubes = [x**3 for x in range(1,11)]
print filter(lambda x: x%3 == 0, cubes)
#print [27, 216, 729]

squares = [x**2 for x in range(1,11)]
print filter(lambda x: x>=30 and x<=70,squares)
#print [36, 49, 64]
```

consists only of the numbers between 1 and 15 (inclusive) that are evenly divisible by 3 or 5.
```python
threes_and_fives = [ x for x in range(1,16) ]
#print threes_and_fives
threes_and_fives = filter(lambda x: x%3==0 or x%5==0,threes_and_fives)
```
\[0, 1, 4, 9, 16\]


```python
garbled = "!XeXgXaXsXsXeXmX XtXeXrXcXeXsX XeXhXtX XmXaX XI"
message = garbled[::-2]
print message
```
I am the secret message!


lambda expression looks like this:
```lambda variable: variable expression```

For example:
```lambda x: x != 10```
```python
garbled = "IXXX aXXmX aXXXnXoXXXXXtXhXeXXXXrX sXXXXeXcXXXrXeXt mXXeXsXXXsXaXXXXXXgXeX!XX"
message = filter(lambda x: x!='X' , garbled)
print message
```
I am another secret message!

---

### Why Use Classes?

Python is an object-oriented programming language, which means it manipulates programming constructs called objects. You can think of an object as a single data structure that contains data as well as functions; functions of objects are called methods. 

### Class Syntax

A basic class consists only of the ```class```

```python
class Animal(object):
    pass
```
```pass``` doesn't do anything, but it's useful as a placeholder in areas of your code where Python expects an expression


 ```python __init__()``` only takes one parameter:  ```self ```. This is a Python convention; there's nothing magic about the word self. However, it's overwhelmingly common to use  ```self ``` as the first parameter in ``` __init__() ```, so you should do this so that other people will understand your code.
self is the first parameter passed to ``` __init__() ```. Python will use the first parameter that  ```__init__() ``` receives to refer to the object being created; this is why it's often called self, since this parameter gives the object being created its identity.

 ```python
class Animal(object):
    def __init__(self,name):
        self.name = name 
        
zebra = Animal("Jeffrey")
print zebra.name
```
Jeffrey


 ```python
class Animal(object):
    def __init__(self, name, age ,is_hungry):
        self.name = name
        self.age = age
        self.is_hungry = is_hungry
zebra = Animal("Jeffrey", 2, True)
giraffe = Animal("Bruce", 1, False)
panda = Animal("Chad", 7, True)

print zebra.name, zebra.age, zebra.is_hungry
print giraffe.name, giraffe.age, giraffe.is_hungry
print panda.name, panda.age, panda.is_hungry ```

Jeffrey 2 True
Bruce 1 False
Chad 7 True


 When dealing with classes, you can have variables that are available everywhere (global variables), variables that are only available to members of a certain class (member variables), and variables that are only available to particular instances of a class (instance variables).

 ```python
class Animal(object):
    is_alive = True
    def __init__(self, name, age):
        self.name = name
        self.age = age

zebra = Animal("Jeffrey", 2)
giraffe = Animal("Bruce", 1)
panda = Animal("Chad", 7)
print zebra.name, zebra.age, zebra.is_alive
print giraffe.name, giraffe.age, giraffe.is_alive
print panda.name, panda.age, panda.is_alive
 ```
Jeffrey 2 True
Bruce 1 True
Chad 7 True

 ```python
class Animal(object):
    """Makes cute animals."""
    is_alive = True
    def __init__(self, name, age):
        self.name = name
        self.age = age
    # Add your method here!
    def description(self):
    #()unnecessary use (name, age) 
    #__init__ already have
        print self.name
        print self.age
        
hippo = Animal("Hippo",51)
hippo.description()
 ```

health is global variable
 ```python
class Animal(object):
    is_alive = True
    health = "good"
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def description(self):
        print self.name
        print self.age
hippo = Animal("Artie", "40+")
sloth = Animal("Valerie", "<=35")
ocelot = Animal("Old Tony", ">80")
print hippo.health
print sloth.health
print ocelot.health
 ```
good
good
good
 
 ```python
class ShoppingCart(object):
    items_in_cart = {}
    def __init__(self, customer_name):
        self.customer_name = customer_name
    
    def add_item(self, product, price):
        if not product in self.items_in_cart:
            self.items_in_cart[product] = price
            print product + " added."
        else:
            print product + " is already in the cart."
    def remove_item(self, product):
        """Remove product from the cart."""
        if product in self.items_in_cart:
            del self.items_in_cart[product]
            print product + " removed."
        else:
            print product + " is not in the cart."
        
my_cart = ShoppingCart("Jiayi")        
my_cart.add_item("Ukelele", 100)
my_cart.add_item("Ukelele", 10)
```
Ukelele added.
Ukelele is already in the cart.

### Override!
```python
class Employee(object):
    def __init__(self, employee_name):
        self.employee_name = employee_name

    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00
        
class PartTimeEmployee(Employee):
    def calculate_wage(self,hours): 
    # Because PartTimeEmployee.calculate_wage overrides Employee.calculate_wage, it still needs to set self.hours = hours. 
        self.hours = hours
        return hours * 12.00
```

### 繼承

```python
class Triangle(object):
    number_of_sides = 3
    def __init__(self,angle1,angle2,angle3):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
    def check_angles(self):
        if self.angle1 + self.angle2 + self.angle3 == 180:
            return True
        else:
            return False
my_triangle = Triangle(90,30,60)
print my_triangle.number_of_sides
print my_triangle.check_angles()
```

Equilateral 類別繼承了 上面Triangle類別

```python             
class Equilateral(Triangle):
    angle = 60
    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle
        
```

---

### super()

super 是用來解決多重繼承問題的，直接用類名調用父class方法在使用單繼承的時候沒問題，但是如果使用多繼承，會涉及到查找順序（MRO）、重複調用（鑽石繼承）等種種問題。super() 它讓class既實現繼承又實現了多態。
class的三大特點：封裝、繼承、多態

super(type[, object-or-type])

```python
class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name

    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00

class PartTimeEmployee(Employee):
    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 12.00
        print hours * 12.00
    def full_time_wage(self, hours):
        return super(PartTimeEmployee, self).calculate_wage(hours)

milton = PartTimeEmployee("djsak")
print  milton.full_time_wage(10)
```


---

















