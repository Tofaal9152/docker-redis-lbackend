
<!-- make docker image -->
docker build -t dockerclient .
<!-- create compose -->
docker compose up -d 
<!-- remove compose -->
docker compose down 

docker network ls

docker network rm <network_name>


docker network connect customnet server_container

docker ps

docker images

docker rmi <image_name_or_id>
