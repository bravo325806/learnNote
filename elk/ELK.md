
### Install Elasticsearch on Mac OS X:

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
$ brew install elasticsearch
```
run Elasticsearch from the terminal:
```
elasticsearch
```

### Plugins:
到目錄底下：
```
/usr/local/Cellar/elasticsearch/5.5.2/libexec/

sudo bin/elasticsearch-plugin install [plugin_name]
```
ICU Analysis Plugin install:
https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html

Installation:
```
sudo bin/elasticsearch-plugin install analysis-icu
```
Removal
```
sudo bin/elasticsearch-plugin remove analysis-icu
```

Lists installed elasticsearch plugins:
```
elasticsearch-plugin list
```
---
### Install kibana on Mac OS X:

```
brew install kibana
```
Start kibana:
```
kibana
http://127.0.0.1:5601/
```

---
### Install logstash on Mac OS X:

```
brew install logstash
```



