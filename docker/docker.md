
## docker 基本指令介紹：

顯示本機所有映像檔

```
sudo docker images -a
```
下載映像檔

```
docker pull <image_name>:<version>
```

```
docker run ubuntu:14.04
```
沒有指定 <image_version>，預設系統取得 latest 版本

