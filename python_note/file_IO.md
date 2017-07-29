
### The open() Function

open ```output.txt``` in ```"w"``` mode ("w" stands for "write"). 
We stored the result of this operation in a file object, f.



```pythonvariable = open("filename", "mode")```

```python
f = open("output.txt","w")
```

* write-only mode ("w") 
* read-only mode ("r") 
* read and write mode ("r+") 
* append mode ("a", which adds any new data you write to the file to the end of the file).

---

### writing


We can write to a Python file like so:
```python
my_file.write("Data to be written")
```
The ```write()``` function takes a string argument
You must close the file. You do this simply by calling ```my_file.close()``` 
If you don't close your file, Python won't write to it properly. 


```python
my_list = [i**2 for i in range(1,11)]
my_file = open("output.txt", "r+")
for i in my_list:
    my_file.write(str(i)+"\n")
my_file.close()
```
add a newline ```"\n"``` after each element to ensure each will appear on its own line

you will see in ```output.txt``` :

1
4
9
16
25
36
49
64
81
100
---

### Reading

```python
my_file = open("output.txt","r")
print my_file.read()
my_file.close() # Make sure to .close() your file 
```

If you open a file and call ```.readline()``` on the file object, 
you'll get the first line of the file; subsequent calls to ```.readline()``` will return successive lines.

```python
my_file = open("text.txt","r")
print my_file.readline() #1
print my_file.readline() #2
print my_file.readline() #3
my_file.close()
```

I'm the first line of the file! #1

I'm the second line. #2

Third line here, boss. #3


Python doesn't flush the buffer—that is, write data to the file—until it's sure you're done writing. One way to do this is to close the file. 
If you write to a file without closing, the data won't make it to the target file.

```python
# Open the file for reading
read_file = open("text.txt", "r")
# Use a second file handler to open the file for writing
write_file = open("text.txt", "w")
# Write to the file
write_file.write("Not closing files is VERY BAD.")
write_file.close()  #close!!!!
# Try to read from the file
print read_file.read()
read_file.close()
```

---

### The 'with' and 'as' Keywords

```python
with open("file", "mode") as variable:
```
we don't explicitly close() our file

'with' and 'as' Keywords contain a special pair of built-in methods:``` __enter__()``` and ```__exit__()```
when a file object's ```__exit__()``` method is invoked, it automatically closes the file.

```python
with open("text.txt","r") as my_file:
    print my_file.read()
```



Python file objects have a closed attribute which is True when the file is closed and False otherwise.

```python
with open("text.txt","r") as my_file:
    #print my_file.read()    
if my_file.closed:
    print my_file.closed
```
True



