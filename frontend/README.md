## Making Changes To Project

When working on an issue, relevant code should be assigned to a feature branch. 

```
$> git checkout -b feature/<description of issue>
```

#### Creating new components:

When creating a new component, A sub folder and js file(s) should be generated to maintain that code inside the `frontend/src/components` folder.

#### Adding styling:

When adding new css styling to the project, the style class should be assign to one the scss files nested inside `frontend/src/styles` folder.


#### Adding styling to a component inside one panel:

```
frontend/src/styles/panels/<panel_name>.scss
```

#### Adding styling to a component nested in multiple panels:

```
frontend/src/styles/panels/_global.scss
```

#### Adding styling to a global helper component:

```
frontend/src/styles/helper/<helper_name>.scss
```

#### Adding styling to the entire project:

```
frontend/src/styles/body/_body.scss
```


## Available Scripts

This application can be run locally with webpack-dev-server or via a docker container.  Both methods below will result in a web site running in development mode available at http://localhost:8888

#### To run locally via webpack-dev-server:
```
$> npm install
$> npm run dev-server
```
Visit http://localhost:8888 in your browser.

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
$> docker run -it -p 8080:80 $(docker images meep-frontend:latest -q)
```
Visit http://localhost:8080 in your browser.

#### To build a production Docker image, add this to your build script
```
$> docker build --pull --no-cache --force-rm --quiet -t meep-frontend -f prod.Dockerfile .
```

#### One liner
```
$> docker build --pull --no-cache --force-rm -t meep-frontend -f prod.Dockerfile . && docker run -d -p 8080:80 $(docker images meep-frontend:latest -q) && curl -I http://localhost:8080
```
