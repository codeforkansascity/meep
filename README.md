# meep
Mapping Energy Efficiency &amp; Public Health

![Image of Beaker](https://s.abcnews.com/images/US/abc_ann_wtb_beeker_091111_ms.jpg)

## Project Overview

Metropolitan Energy Center (MEC) is a nonprofit promoting energy efficiency, economic development, and environmental vitality in and around Kansas City. As the host of Kansas City's local Clean Cities Coalition, the organization works to assist fleets in converting to alternative fuels. Their projects improve air quality and reduce the use of foreign oil. MEC also takes an active role in reducing energy consumption of residential and commercial buildings by providing training, online tools, and low cost audits.

The aim of this project is to create a central database that consolidates MEC's data on the impact their programs have on air quality  and improving public health, and then to create a map-based interface to the data. This app will provide MEC with a means to summarize the impact of their work to their funders. It will also be used to increase the general public's awareness of local projects dedicated to improving sustainabilty.

This repository is only for front-end. Please check back-end repo in https://github.com/codeforkansascity/meep-backend.

## Installation


### With docker

If you haven't installed [docker](https://docs.docker.com/v17.09/engine/installation/), go do so now. Make sure that you also install docker-compose.

1. from the project root directory, do ```docker-compose up --build -d```
2. Poulate the development database with ```docker container exec meep_api_1 python db_operations.py reset```. You should only need to do this the first time you run the app.  
3. In a browser, go to ```http://localhost:8200```. You should see the frontend running.
4. In another browser tab, go to ```http://localhost:8000/locations```. You should see a bunch of json served by the api.
5. When you are done working on the project, do ```docker-compose down``` to shut down the containers.

### Without docker

This assumes that you have already installed [node](https://nodejs.org/en/).

1. Clone the project from github ```git clone git@github.com:codeforkansascity/meep.git```
2. Change into the ```frontend``` directory.
3. ```npm install```
4. ```npm run dev-server```
5. In a browser, navigate to ```http://localhost:8200```. You should see the app running.


## Wireframe
This is what we want to replicate: https://preview.uxpin.com/3ebaab4bf3defd232e90c32218050bb67db4e8bb#/pages//simulate/no-panels.

## How to Contribute

1. Check out the [issues](https://github.com/codeforkansascity/meep/issues) page to see what work currently needs to be done. For a more organized layout, try installing the [ZenHub](https://www.zenhub.com/extension) plugin.
2. Leave a comment under the issue you want to work on. A project owner will invite you to collaborate on the project and then assign you the issue.  
3. Clone the repo to your machine. See [here](https://help.github.com/articles/cloning-a-repository/#platform-all) for details on how to do this.
4. Create a branch whose name adheres to the following format: {{issue number}}_{{name of issue}}. For example, if you are working on issue number 4, which is titled "Style super awesome widget", you might name your branch 4_style_widget. For more info on working with branches in git, see [here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).
=======
5. Do some work on your branch.
6. Push your branch back to github and open a pull request. See [here](https://help.github.com/articles/pushing-to-a-remote/) for details. A project owner will review your changes and either approve a merge, or leave comments on what needs to be done before your changes can be merged.

## Member
Piero A. Pretto : pieroprettojs@gmail.com
Wes Galbraith : galbwe92@gmail.com
