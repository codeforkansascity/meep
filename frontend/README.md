## Available Scripts

<<<<<<< HEAD
In the project directory, you can run:

### `yarn run dev-server`
=======
This application can be run locally with webpack-dev-server or via a docker container.  Both methods below will result in a web site running in development mode available at http://localhost:8080
>>>>>>> b359205559fa9f0165c64a5cc6831bbc6a47dd4f

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

#### To build a production Docker image
```
$> docker build --pull --no-cache --force-rm --quiet \
  -t meep-frontend -f prod.Dockerfile .
```

#### To run the production image locally
```
$> docker run -it -p 8080:80 \
  $(docker images -f label=project=meep -f label=component=frontend -q)
```
Visit http://localhost:8080 in your browser.
