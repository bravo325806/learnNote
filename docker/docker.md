
## docker 基本指令：

### 顯示本機所有映像檔:
```
sudo docker images -a
```
### 下載image:
```
docker pull <image_name>:<version>
```
### 使用image創造container:
```
docker run ubuntu:14.04
```
沒有指定 <image_version>，預設系統取得 latest 版本
沒有ubuntu:14.04 image的話會自動download

```
sudo docker run -t -i -d -p 1000:80 ubuntu:14.04 /bin/bash
```
-d --detach
-i --interactive
-t --tty
-p --publish

### 查看所有container的狀態：
```
docker ps -a 
```
```
|CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES
```
### 刪除image:
```
sudo docker rmi <image_ID>
```
```
sudo docker rmi 4c6f8497d662 -f
```
--force, -f 強制刪除

刪除時，可能會遇到：
###### Error response from daemon: conflict: unable to delete 4c6f8497d662 (cannot be forced) - image has dependent child images
這時候就需要將跟此image有關的container或image先刪除，才可以刪除它。


### 刪除conatianer:
```
docker rm <container_ID> <container_ID> ... (可一次刪除多個)
```
```
docker rm ebacf392ca8236
```
刪除時，可能會遇到：
###### Error response from daemon: You cannot remove a running container ebacf392ca8236... 
###### Stop the container before attempting removal or force remove
代表container正在運行中，需要先將它停止

### 停止container:
```
docker stop <container_ID>
```
```
docker stop ebacf392ca8236
```


