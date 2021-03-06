
### Ubuntu 快速安裝：
```
curl -sSL https://get.docker.com/ | sudo sh
```

### 下載映像檔(版本16.04)
```
docker pull <image_name>:<image_version>
```
```
sudo docker pull ubuntu:16.04
```
沒有指定 <image_version>，預設系統取得 latest 版本

### 顯示本機所有的映像檔
```
sudo docker images -a
```
刪除映像檔
```
sudo docker rmi image
```
* 無法刪除container正在使用的image
### 開啟服務:

使用該映像檔建立一個容器 執行 bash
```
sudo docker run -t -i -d -p 1000:80 ubuntu:16.04 /bin/bash
```
-P 1000 本地port 80 docker port 
-t : terminal互動介面
-i : I/O
如果沒有指定 TAG，預設使用 latest

### 看目前docker container (-a 所有）
```
sudo docker ps -a
```
查看正在執行的
```
sudo docker ps 
```

### container 操作

啟動：
```
docker start <container_id>
```
停止：
```
docker stop <container_id>
```
刪除：
```
docker rm <container_id>
```
刪除所有container:
```
docker rm `docker ps --no-trunc -aq`
```

```
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
```
https://hub.docker.com



