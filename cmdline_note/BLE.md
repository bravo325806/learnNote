### installation

http://www.bluez.org/download/

```
tar xvf bluez-5.37.tar.xz
```
```
cd bluez-5.37
```

Install Dependencies:
```
sudo apt-get install -y libusb-dev libdbus-1-dev libglib2.0-dev libudev-dev libical-dev libreadline-dev
```

Compile & Install bluez
```
./configure
```
若出現報錯
checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... configure: error: newly created file is older than distributed files!
Check your system clock

因為系統時間不對所以：
```
sudo date -s "201708/16 11:21:32"
```
（可以用`date｀看裝置的現在時間）

```
make
```
should see no error messages

After bluez has been compiled it can be installed by running the following command:
```
sudo make install
```

check the bluez service is installed
```
systemctl status bluetooth
```
```
sudo systemctl start bluetooth
sudo systemctl stop bluetooth
```





