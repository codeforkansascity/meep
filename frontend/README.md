## Available Scripts

This application can be run locally with webpack-dev-server or via a docker container.  Both methods below will result in a web site running in development mode available at http://localhost:8080

#### To run locally via webpack-dev-server:
```
$> npm install
$> npm run dev-server
```
Visit http://localhost:8080 in your browser.

#### To run locally via Docker container
Note: Give it some time to start up; it has to install all the dependencies
```
docker-compose up -d
```
Visit http://localhost:8080 in your browser.

#### To build a production version of the Docker image locally, quickly
```
$> docker build -t meep-frontend -f prod.Dockerfile .
```

#### To build a production version of the Docker image locally, cleanly
```
$> docker build --pull --no-cache --force-rm -t meep-frontend -f prod.Dockerfile .
```

#### To run the production image locally
```
$> docker run -it -p 8080:80 $(docker images meep-frontend -q)
```
Visit http://localhost:8080 in your browser.

#### To build a production Docker image, add this to your build script
```
$> docker build --pull --no-cache --force-rm --quiet -t meep-frontend -f prod.Dockerfile .
```
