### install mosquitto

r pi
```
sudo apt-get install mosquitto mosquitto-clients
```

### rasberry pi connect
``ssh pi@host``

### mosquitto_sub 接收:
``mosquitto_sub -h hostname -t "message-topic"``

### mosquitto_pub 發送:
``mosquitto_pub -h hostname -t "message-topic" -m "message" ``
``mosquitto_pub [--help]``

https://mosquitto.org/man/mosquitto_pub-1.html

---

### mqtt接收程式碼:

```python
import paho.mqtt.client as mqtt

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    client.subscribe("$SYS/#")

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("iot.eclipse.org", 1883, 60)

# Blocking call that processes network traffic, dispatches callbacks and
# handles reconnecting.
# Other loop*() functions are available that give a threaded interface and a
# manual interface.
client.loop_forever()
```

https://pypi.python.org/pypi/paho-mqtt/1.1#single

---

### mqtt發送程式碼:

```python
# coding: utf-8
import sys, os, time
reload(sys)
sys.setdefaultencoding('utf-8')
import paho.mqtt.client as mqtt
# If broker asks client ID.
client_id = ""
client = mqtt.Client(client_id=client_id)
# If broker asks user/password.
user = ""
password = ""
client.username_pw_set(user, password)
client.connect("10.21.20.198")
topic = "qq"
payload = "hello mqtt"
for i in xrange(10):
    client.publish(topic, "%s - %d" % (payload, i))
    time.sleep(0.01)
   ```
   
  http://rocksaying.tw/archives/2016/MQTT-3-Python-clients.html
