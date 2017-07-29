

Arduino 程式主要由 setup() 和 loop() 這兩個函式組成:

```arduino
void setup() {
  // setup 函式只會跑一次
}
void loop() {
  // loop 函式會不斷的執行
}
```

選擇 Arduino 控制板 
Tools > Board 選擇跟你所用的 Arduino 對應的板子
Tools > Serial Port 選擇 COM Port


---


### LED閃爍控制：

```arduino
int delayTime = 1000;
void setup() {
  pinMode(13 , OUTPUT); //把 pin13 設置成 output pin
}
void loop(){ 
  digitalWrite(13,HIGH); // 供應 5V 電壓到 pin13
  delay(delayTime); //CPU 閒置一秒鐘，讓 LED 燈號亮著一秒鐘
  digitalWrite(13,LOW); //關閉燈號
  delay(delayTime);
  }
```

---

### 呼吸燈：

```arduino
int brightness = 0; //目前燈光亮度
int fadeAmount = 5; //燈光亮度調整值
int delayTime = 30; 
void setup() {
  pinMode(9 , OUTPUT);
}
void loop(){
  analogWrite(9, brightness);
  brightness = brightness + fadeAmount; 
  if (brightness == 0 || brightness ==255)
  { //改變 fadeAmount 燈光亮度調整值
      fadeAmount = - fadeAmount;
   }
  delay(delayTime); //延遲30ms
  }
```

---

### LED可變電阻控制：

LED 接到 pin9 和 GND，長腳(陽極)串接一顆 220 ohm 電阻到 pin9，短腳(陰極)直接接到 GND
可變電阻中間腳位接到類比輸入(Analog Input) pin3，剩下的一支接到 5V，一支接到 GND

```arduino
int potPin = 3; // 可變電阻輸入腳位
int ledPin = 9; // LED腳位
void setup(){
    Serial.begin(9600); 
    //設定SerialPort 的傳輸速率，鮑率為 9600 bps (bit per second)
  }
void loop(){
    int sensorValue = analogRead(potPin); //讀取可變電阻讀值並且放到 sensorValue 變數裏
    Serial.println(sensorValue,DEC);  //把電阻值列印到 SerialPort
                                      //DEC代表十進位顯示數字 
    sensorValue = sensorValue/4;
    /*
     analogRead()讀進來的是一個10位元的數值，值域為0-1023
     analogWrite() 的參數只能接受0-255 的數值 所以sensorValue/4
    */
    analogWrite(ledPin,sensorValue);
    delay(150);
  }
 ```

---

### 多顆LED跑馬燈：

```arduino
const int ledCount = 9; //LED數量
int ledPins[] = {
  2,3,4,5,6,7,8,9,10,11};
void setup(){
 for(int thisLed = 0; thisLed < ledCount; thisLed++){
  pinMode(ledPins[thisLed],OUTPUT);
  }
}
void loop(){
   for(int thisLed = 0; thisLed < ledCount; thisLed++){
      //LED從第一個開始亮
      digitalWrite(ledPins[thisLed],HIGH);
      delay(60);
      digitalWrite(ledPins[thisLed],LOW);
      } 
   for(int thisLed = ledCount -1 ; thisLed >= 0; thisLed--){
   //LED從最後一個開始亮 
    digitalWrite(ledPins[thisLed],HIGH);
    delay(60);
      if(thisLed == 0){
        //如果跑回第一顆時停頓
        delay(60);
        }
      else{
        //LED滅
        digitalWrite(ledPins[thisLed],LOW);
    }
  }
}
```

---


```arduino
#include <IRremote.h>

int RECV_PIN = 2; // 使用數位腳位2接收紅外線訊號
IRrecv irrecv(RECV_PIN); // 初始化紅外線訊號輸入
decode_results results; // 儲存訊號的結構

void setup()
{
  Serial.begin(115200);
  irrecv.blink13(true); // 設為true的話，當收到訊號時，腳位13的LED便會閃爍
  irrecv.enableIRIn(); // 啟動接收
}

void loop() {
  if (irrecv.decode(&results)) { // 接收紅外線訊號並解碼
    Serial.print("results value is "); // 輸出解碼後的資料
    Serial.print(results.value, HEX);
    Serial.print(", bits is ");
    Serial.print(results.bits);
    Serial.print(", decode_type is ");
    Serial.println(results.decode_type);
    irrecv.resume(); // 準備接收下一個訊號
  }
}

```

### 紅外線接收控制LED：

```arduino
#include <IRremote.h>  //引用 IRRemote函式庫

const int irReceiverPin = 5; // 紅外線接收器腳位
IRrecv irrecv(irReceiverPin); // 接收紅外線訊號
decode_results results; //解碼結果放在decode_results結構的results

void setup()
{
  Serial.begin(9600); //開啟Serial port 通訊速率為9600bps
  irrecv.enableIRIn(); //啟動紅外線解碼
  pinMode(4 , OUTPUT);
}

void loop(){
  if(irrecv.decode(&results)){ //解碼成功收到一組紅外線訊號
    Serial.print("irCode:");
    //Serial.println(results.value, HEX); //紅外線編碼
    Serial.println(results.value);
    Serial.print(", bits:");
    Serial.println(results.bits); //紅外線編碼位元數
       if(results.value == 4294967295 )
       {
        digitalWrite(4,HIGH); // 供應 5V 電壓到 pin4
        delay(1000);
         digitalWrite(4,LOW); // 供應 5V 電壓到 pin4
        delay(1000);

        }
    irrecv.resume();// 繼續收下一組紅外線訊號
  
    }  
  
  }
  ```
  ---
### 顯示協定種類：

decode_results 是用來存放紅外線訊號解碼結果的結構。decode_results 結構它的定義如下:

```arduino
class decode_results {
public:
  int decode_type;      // 協定種類: NEC, SONY, RC5, RC6, DISH, SHARP, UNKNOWN
  unsigned long value;  // 解到的編碼數值
  int bits;             // 編碼的位元總數(Number of bits in decoded value)
  volatile unsigned int *rawbuf; // 紅外線訊號原始波形資料
  int rawlen;                    // rawbuf 的記錄總筆數(Number of records in rawbuf)
};

 ```
 
 
 ```arduino
* decode_type	協定種類
  包括 NEC, SONY, RC5, RC6, DISH 以及 SHARP 等紅外線協定，若解析不出則為 UNKNOWN。
* value	解到的編碼數值
* bits	編碼的位元數(即資料長度)
* rawbuf	紅外線訊號原始波形資料
* rawlen	rawbuf 的記錄總筆數
 
 
#include <IRremote.h>

const int irReceiverPin = 5; 
IRrecv irrecv(irReceiverPin); //定義IRrecv 物件來接收紅外線訊號
decode_results results;

void setup(){
    Serial.begin(9600);
    irrecv.enableIRIn(); //啟動紅外線解碼
  }

//顯示紅外線協定種類
void showIRProtocol(decode_results *results)
{
  //判斷紅外線協定種類
  Serial.print("Protocol:");
  switch (results->decode_type){
    case NEC:
      Serial.print("NEC");
      break;
    case SONY:
      Serial.print("SONY");
      break;
    case RC5:
      Serial.print("RC5");
      break;
    case RC6:
      Serial.print("RC6");
      break;
    default:
      Serial.print("Unknown encoding");
  }
    Serial.print(", irCode:");
    Serial.println(results->value,HEX);
    Serial.print("bits:");
    Serial.println(results->bits);
  }
void loop(){
  if (irrecv.decode(&results)){ //解碼成功收到一組紅外線訊號
    showIRProtocol(&results);
    irrecv.resume();//繼續收下一組紅外線訊號    
    }  
  }
 ```
 
 ### 接收Serial字串 控制LED開關
 
 ```arduino
 void setup() {
    pinMode(13, OUTPUT);
    Serial.begin(9600);
}
String s = "";
void loop() {
    if(Serial.available() > 0)
    {
        char c = Serial.read();
        if(c != '\n'){
            Serial.println(s);
            s += c;
        }else{          
            if(s == "turnon")
            { 
                Serial.println("high");
                digitalWrite(13, HIGH); 
                s = "";   
            }if(s == "turnoff")
            {
              Serial.println("LOW");
               digitalWrite(13, LOW); 
            }
         
            s = "";
            
        }
    }//else{Serial.println("NOT READ");}
}
 
  ```
 
