## Docker
##### Network
Creating a custom network:
```bash
docker network create --driver bridge my-network
```
Inspecting the network configurations:
```bash
docker network ls
docker inspect my-network
```
Connecting containers to a custom network:
```bash
docker build -t demo-api:1
<!-- TOKEN=t123 - HARDCODED IN ANGULAR ENV FILE -->
docker run  --env TOKEN=t123 --network my-network --name course-api demo-api:1 - domain name = course-api
docker build -t demo-client:1
docker run --network my-network --name course-client demo-client:1
```

docker ps - lists running containers  (-a - all)
docker stop  ID, docker rm ID
docker inspect container_ID => find the ip address
##### Persistency
```bash
docker run -v vol:/home/customuser/app/tmp --env TOKEN=t123 --network my-network --name course-api -p 8088:8080 demo-api:1
docker run --env TOKEN=t123 --mount type=bind,source=C:\Users\User\Desktop\workspace\docker-client-server\course-api\tmp\courses.json,target=/home/customuser/app/tmp/courses.json -p 8088:8080 demo-api:1 
```

```bash
docker run --env TOKEN=t123 --network my-network --name course-api -p 8088:8080 demo-api:1
docker run --network my-network --name course-client -p 4201:4200 demo-client:1
```
##### Building
- development
```bash
$ docker build -f Dockerfile.dev -t {repository:tag} .
```
- production
```bash
$ docker build -t {repository:tag} .
```

Reducing the build time :
- Create a .dockerignore file - Avoid including unnecessary files
- Optimize the build cache - Order matters - a change causes a rebuild for the following steps

##### Running 

```bash
$ docker run --env TOKEN={token} -p {local-port}:{container-port} {repository:tag}
```

##### Networking
 - Docker isolates the container network from the host network, using linux network namespaces
```bash
$ docker run -p {local-port}:{container-port} {repository:tag}
```

##### Security 
- Avoid root permissions
- Use secure container registries

##### Image size
- Avoid including unnecessary files
- Use an appropiate base image


# CourseClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
