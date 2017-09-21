

## Docker
![docker](https://github.com/Plusone7/learnNote/blob/master/docker/img/docker.png?raw=true)

* 映像[(docker Images)](https://docs.docker.com/engine/reference/commandline/images/)
* 容器（Container）
* 倉庫（Repository）

常用的倉庫 [Docker Hub](https://hub.docker.com/)
###### Docker Hub repositories let you share images with co-workers, customers, or the Docker community at large. 

### 先裝起來吧！

#### [Mac OS](https://docs.docker.com/docker-for-mac/install/)
#### [Windows](https://docs.docker.com/docker-for-windows/install/)
#### [Ubuntu](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#os-requirements)

## docker 基本指令：
### 搜尋映像檔(image)
```
docker search centos
```
### 下載image:
```
docker pull <image_name>:<version>
```
### 顯示本機所有映像檔:
```
sudo docker images -a
```
### 使用image創造container:

```
docker run ubuntu:14.04
```

沒有ubuntu:14.04 image的話會自動download

###### Image是Container的基礎，每次docker run 都會指定是哪個Image為容器運行基礎
###### 以Ubuntu映像為例，ubuntu是倉庫的名字，其內包含有不同的版本標籤14.04,16.04 
###### 我們可以通過ubuntu:14.04或ubuntu:16.04來具體指定所需哪個版本的映像
###### (沒有指定 <image_version>，預設系統取得 latest 版本)


```
sudo docker run -t -i -d -p 1000:80 ubuntu:14.04 /bin/bash
```

* -d --detach 交互操作
* -i --interactive 終端
* -t --tty
* -p --publish


### 查看所有container的狀態：
```
docker ps -a 
```
會看到：
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

簡單的webserver docker範例:
```
docker run --name webserver -d -p 80:80 nginx
```
image為nginx 
name設定為webserver
啟動後可以直接訪問 http://localhost 就會看到web頁面了！


---

### 來寫dockerfile吧！

上面我們所pull到本地的Image都是來自[Docker Hub](https://hub.docker.com/)
###### 自己寫就可以自己去定制每一層的配置
##### 我們可以把每一層建構安裝或操作的命令都寫入一個腳本用這個腳本來建構自己的Image
##### Image是多層存儲每一層是在前一層的基礎上進行的修改
##### 容器也是多層存儲是在以鏡像為基礎層在其基礎上加一層作為容器運行時的儲存層。

Dockerfile是一個腳本，包含兩個部分：指令(Instrunction)和要做的行為(Argument)


### FROM 
From 為選擇哪一個作業系統為基底，當然也可以選擇docker hub上的image(例如：mongo python node等)

```
FROM ubuntu  
```
除了基礎的image外，`scratch`這個空白的image
```
FROM scratch
```
直接FROM scratch會讓鏡像體積更加小


### RUN 執行命令
RUN就像shell腳本後面直接加上終端機的命令就可以了

```
RUN apt-get update
```

Docker file 每一個指令都會建立一層，一個RUN就是一層。
``` 
FROM ubuntu:14.04
MAINTAINER plusone lioa
RUN apt-get update -y 
RUN apt-get install -y 
RUN apt-get python3 -y 
RUN python3-pip -y
RUN apt-get autoclean 
RUN pip3 install django 

```
###### 上面這樣我們就建立了六層image，單純的update也建立了一層，這個image是沒有意義的！

所以我們會用&&來做連接：

```
FROM ubuntu:14.04
MAINTAINER plusone lioa

RUN apt-get update -y \
&& apt-get install -y \
           python3 \
           python3-pip \
           autoclean 
&& pip3 install django 
```
### dockerfile build起來！
```
docker build <路徑> . -t <NEME>
```
##### 建構的時候我們會指定路徑，下docker build時會將<路徑>下的所有內容打包，
##### 所以建構dockerfile的時候請另外開一個新的資料夾，不然到時候東西都被包起來了！

我們也可以
```
COPY ./package.json /opt/
```
就可以複製本地package.json檔案到docker內的/opt目錄啦！

### EXPOSE 聲明端口

```
EXPOSE <端口1>
```
```
EXPOSE 8000
```
聲明運行時容器提供服務端口，幫助使用者理解這個Image服務的端口

`-p`是映射`<宿主端口>:<容器端口>`是將容器的對應端口服務公開給外界訪問
##### EXPOSE 這只是一個聲明，不會因為這個聲明應用就會開啟這個端口的服務!


