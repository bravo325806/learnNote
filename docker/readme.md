

## docker
![docker](https://github.com/Plusone7/learnNote/blob/master/docker/img/docker.png?raw=true)

* 映像[(docker Images)](https://docs.docker.com/engine/reference/commandline/images/)
* 容器（Container）
* 倉庫（Repository）

常用的倉庫 [Docker Hub](https://hub.docker.com/)
###### Docker Hub repositories let you share images with co-workers, customers, or the Docker community at large. 

### docker 基本指令：
#### 搜尋映像檔(image)
```
docker search centos
```
#### 下載image:
```
docker pull <image_name>:<version>
```
#### 顯示本機所有映像檔:
```
sudo docker images -a
```
#### 使用image創造container:

```
docker run ubuntu:14.04
```
以Ubuntu映像為例，ubuntu是倉庫的名字，其內包含有不同的版本標籤14.04,16.04。
我們可以通過ubuntu:14.04，或者ubuntu:16.04來具體指定所需哪個版本的映像，沒有指定 <image_version>，預設系統取得 latest 版本

沒有ubuntu:14.04 image的話會自動download

```
sudo docker run -t -i -d -p 1000:80 ubuntu:14.04 /bin/bash
```
```
-d --detach 交互操作
-i --interactive 終端
-t --tty
-p --publish
```
#### 查看所有container的狀態：
```
docker ps -a 
```
會看到：
```
|CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES
```
#### 刪除image:
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


#### 刪除conatianer:
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

#### 停止container:
```
docker stop <container_ID>
```
```
docker stop ebacf392ca8236
```


簡單的webserver docker範例:
```
docker run --name webserver -d -p 80:80 nginx
```
image為nginx 
name設定為webserver

啟動後可以直接訪問 http://localhost 就會看到web頁面了！






