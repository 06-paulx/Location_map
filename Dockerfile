# # Derived from official mysql image (our base image)
# FROM mysql

# ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
# # Add the content of the sql-scripts/ directory to your image
# # All scripts in docker-entrypoint-initdb.d/ are automatically
# # executed during container startup
# COPY ./db/schema.sql ./db/seed.js /docker-entrypoint-initdb.d/

# RUN apt-get update
# RUN apt-get install nodejs -y


# docker image build -t imageName . => . = path to dockerfile; lower case for image name
# docker run -d imageName -> running a container; -d = detach
# docker exec -it containerName bash -> run a command on an already running container
#sudo yum install -y git create -- install git

# seed in root

# run seedjs, image for db and module
# share EC2 links with teammates

FROM node:8.12.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app/

RUN npm install

EXPOSE 3007

CMD ["npm", "start"] 