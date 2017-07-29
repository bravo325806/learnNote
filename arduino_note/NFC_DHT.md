   ```arduino
    #include <SPI.h>
    #include "PN532_SPI.h"
    #include "PN532.h"
    #include "NfcAdapter.h"
    String const myUID ="AA C3 AF 0E"; 
    int const LEDpin = 3; 
    
    PN532_SPI interface(SPI, 10); // create a PN532 SPI interface with the SPI CS terminal located at digital pin 10
    NfcAdapter nfc = NfcAdapter(interface); // create an NFC adapter object

    void setup(void) {
        Serial.begin(115200); // begin serial communication
        Serial.println("NDEF Reader");
        pinMode(LEDpin,OUTPUT);
        nfc.begin(); // begin NFC communication
    }
    void loop(void) {
        
        //Serial.println("\nScan an NFC tag\n");
        if (nfc.tagPresent()) // Do an NFC scan to see if an NFC tag is present
        {
            
            NfcTag tag = nfc.read(); 
            String scannedUID = tag.getUidString();
            //tag.print();
            //digitalWrite(LEDpin,HIGH);
            if(myUID.compareTo(scannedUID) == 0)
            {
              Serial.println("UID keycorrect");
              Serial.println("UID key is AA C3 AF 0E");
              digitalWrite(LEDpin,HIGH);
              }else{
              Serial.println("UID key not correct, try again!");
            
                digitalWrite(LEDpin,LOW);
             }
            
        }
        delay(1000); 
    }
    
```


Temperature and Humidity Sensor:



  ```arduino
#include "DHT.h"

#define DHTPIN A0     // what pin we're connected to

// Uncomment whatever type you're using!
#define DHTTYPE DHT11   // DHT 11 
#define DHTTYPE DHT22   // DHT 22  (AM2302)
#define DHTTYPE DHT21   // DHT 21 (AM2301)

// Connect pin 1 (on the left) of the sensor to +5V
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 4 (on the right) of the sensor to GROUND
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor

DHT dht(DHTPIN, DHTTYPE);

void setup() 
{
    Serial.begin(9600); 
    dht.begin();
}

void loop() 
{
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // check if returns are valid, if they are NaN (not a number) then something went wrong!
    if (isnan(t) || isnan(h)) 
    {
        Serial.println("Failed to read from DHT");
    } 
    else 
    {
        Serial.print("Humidity: "); 
        Serial.print(h);
        Serial.print(" %\t");
        Serial.print("Temperature: "); 
        Serial.print(t);
        Serial.println(" *C");
    }
}

  ``` 
  ---
  
  結合：
  
 ```arduino  
#include <SPI.h>
#include "PN532_SPI.h"
#include "PN532.h"
#include "NfcAdapter.h"
String const myUID ="AA C3 AF 0E"; 
int const LEDpin = 3;  
PN532_SPI interface(SPI, 10); // create a PN532 SPI interface with the SPI CS terminal located at digital pin 10
NfcAdapter nfc = NfcAdapter(interface); // create an NFC adapter object

#include "DHT.h"
#define DHTPIN A0    
#define DHTTYPE DHT11   // DHT 11 
#define DHTTYPE DHT22   // DHT 22  (AM2302)
#define DHTTYPE DHT21   // DHT 21 (AM2301)

// Connect pin 1 (on the left) of the sensor to +5V
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 4 (on the right) of the sensor to GROUND
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor
DHT dht(DHTPIN, DHTTYPE);

void setup() 
{
   Serial.begin(9600); 
    //Serial.begin(115200); // begin serial communication
    Serial.println("NDEF Reader");
    pinMode(LEDpin,OUTPUT);
    nfc.begin(); // begin NFC communication
    dht.begin();
}

void loop() 
{
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    if (nfc.tagPresent()) // Do an NFC scan to see if an NFC tag is present
     {  
         NfcTag tag = nfc.read(); 
         String scannedUID = tag.getUidString();
         //tag.print();
         //digitalWrite(LEDpin,HIGH);
         if(myUID.compareTo(scannedUID) == 0)
         {
           Serial.println("UID keycorrect");
           Serial.println("UID key is AA C3 AF 0E");
           digitalWrite(LEDpin,HIGH);
           delay(1000);
           digitalWrite(LEDpin,LOW);
           /*-----------------------------------------*/
             if (isnan(t) || isnan(h)) 
                  {
                      Serial.println("Failed to read from DHT");
                  } 
                  else 
                  {
                      Serial.print("Humidity: "); 
                      Serial.print(h);
                      Serial.print(" %\t");
                      Serial.print("Temperature: "); 
                      Serial.print(t);
                      Serial.println(" *C");
                  } 
           }else{
           Serial.println("UID key not correct, try again!"); 
          }
     }
     delay(1000);   
}
```

---


node.js :

```js
var SarialPort = require("serialport");
var port = new SarialPort("/dev/cu.usbmodem1411",{
   parser:SarialPort.parsers.readline('\n') 
});

port.on("open", function () {
  console.log('open');
  port.on('data', function(data) {
    console.log(data);
  });
});

//port.on('open',function(){
//   setTimeout(function(){
//      port.write('apple\r',function(err){
//         if (err){
//            return console.log('Error on write',err.message);
//         }
//             console.log('message wrirten');
//       });
//   },5000);
//});

port.on('error',function(err){
    console.log('Error',err.message);
});
 
```

