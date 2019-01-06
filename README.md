# Project Name

> Project description

## Related Projects

- https://github.com/teamName/repo
- https://github.com/teamName/repo
- https://github.com/teamName/repo
- https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## notes

# Database

- builds an image using Dockerfile

  - docker image build -t imageName . => . = path to dockerfile; lower case for image name

- build a container using that image

  - docker run -d imageName -> running a container; -d = detach

- executes what's in the container
  - docker exec -it containerName bash -> run a command on an already running container

# Component

- builds an image using Dockerfile

  - docker image build -t imageName . => . = path to dockerfile; lower case for image name

- build a container using image with port (port 3007 exposed)
  - docker run -d -p 6666:3007 --name containerName imageName

#

# remove image - docker rmi imageName

# remove container - docker rm containerName

# inspect bridge - docker network inspect bridge (172.17.02)

# sudo yum install -y git create -- install git

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
