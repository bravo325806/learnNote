### Raspberry Pi 開發Arduino

Raspberry Pi就是一台Linux機器，而Arduino軟體開發環境原本就支援Linux

直接以apt-get安裝
arduino-mk是要在命令列模式下以make進行編譯與燒錄動作所需要的套件
```
$ sudo apt-get install arduino arduino-mk
```
Arduino核心程式碼位於/usr/share/arduino/hardware/arduino/cores/arduino裡，
內建程式庫位於/usr/share/arduino/libraries

arduino:
```
#include <Arduino.h>

void setup(){
  pinMode(13, OUTPUT);
}

void loop(){
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}
```

makefile:
```
TARGET = BlinkByPi

ARDUINO_DIR = /usr/share/arduino
BOARD_TAG = uno
ARDUINO_PORT =/dev/ttyACM0
include /usr/share/arduino/Arduino.mk
```


* TARGET指定最後產生出來的檔案的主檔名，最好跟此專案名相同
* 以BOARD_TAG指定你使用的板子
* 以ARDUINO_PORT指定與板子連接的通訊埠，在Raspberry Pi上為/dev/ttyACM0
* 使用include匯入內涵基本設定與規則的Arduino.mk

在專案目錄內
```
$ make
```
即可編譯、連結，將會產生出build-cli子目錄，存放建置過程的中間檔 .elf與.hex也會放在裡面

燒錄
```
$ make upload
```
另外可用make clean清除，以make depends更新檔案相依性。


