
* `ls` : List all files and directories
* `pwd`: outputs the name of the current working directory
* `cd`: switches you into the directory you specify.
* `cd .. `: To move up one directory
* `mkdir` dirname : make directory (named "dirname")
* `touch` keyboard.txt : creates a new file inside the working directory (create "keyboard.txt")
* `cp` A.txt B.txt:  copy the contents of A.txt into B.txt

* `ls -a`: lists all contents, including hidden files and directories
* `ls -l`: lists all contents of a directory in long format
* `ls -t`: order files and directories by the time they were last modified.
* `ls -al`t: lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.


---
### 透過ssh傳送檔案

將檔案傳送到主機 192.168.8.120 的 var/abc下
`scp 檔案目錄位置 XXX@192.168.8.120:/var/abc`



