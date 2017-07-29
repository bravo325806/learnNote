
install

```
npm install mqtt --save
```
command line tools:

```
npm install mqtt -g
```
---


on one terminal (接收）
```
mqtt sub -t 'topic' -h hostname -v
```
on another （發送）
```
mqtt pub -t 'topic' -h hostname -m 'hello world'
```
 * publish     publish a message to the broker
 * subscribe   subscribe for updates from the broker
 * version     the current MQTT.js version
 * help        help about commands



