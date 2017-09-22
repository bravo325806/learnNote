build image
```
docker build . -t <ur_image_name>
```
run  container
```
docker run -tid -p 3000:3000  <ur_image_name> /bin/bash
```

```
docker ps 
```

EXEC 

```
docker exec -ti  <containerID> npm start
```
