2017/09/18
```arduino
const int buttonA = 2;
const int buttonB = 3;
int buttonState1 =0 ;
int buttonState2 =0 ;
void setup(){
  pinMode(buttonA,INPUT);
  pinMode(buttonB,INPUT);
}
void loop(){
  buttonState1 = digitalRead(buttonA);
  buttonState2 = digitalRead(buttonB);
  if(buttonState1== HIGH){
     for(int i= 8;i < 10; i++){
       digitalWrite(i,HIGH);
       delay(60);
       digitalWrite(i,LOW);
     } 
    }
  if(buttonState2){
    digitalWrite(7,HIGH);
  }
}
```
