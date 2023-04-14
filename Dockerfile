from openjdk
workdir /application
copy Test1.java .
run javac Test1.java
cmd java Test1