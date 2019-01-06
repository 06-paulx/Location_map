FROM mysql:5.7.24

ENV MY_DATABASE='locationMap'
ENV MYSQL_ROOT_PASSWORD='password'


COPY ./ /docker-entrypoint-initdb.d/



# docker image build -t imageName . => . = path to dockerfile; lower case for image name
# docker run -d imageName -> running a container; -d = detach
# docker exec -it containerName bash -> run a command on an already running container
#sudo yum install -y git create -- install git