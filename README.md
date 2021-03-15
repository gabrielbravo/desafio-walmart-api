# Desafio Walmart Gabriel Bravo

## Install without Docker
> Follow this steps
1. Clone repository
``` shell
$ git clone "repository"
```

2. Install dependencies
``` shell
$ npm install
```

3. Create .env file with values
DATABASE=mongodb://localhost:27017/promotions
DB_NAME=promotions
DB_USER=productListUser
DB_PASSWORD=productListPassword


4. Start project
``` shell
$ nodemon server/server
```

## Install with Docker
> You have to install [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

> Follow this steps
1. Clone repository
``` shell
$ git clone "repository"
```

2. Build docker
``` shell
$ docker-compose build
```

3. Start containers
``` shell
$ docker-compose up
```

The file docker-compose.yml rewrite the environment parameters to
- DATABASE=mongodb://db:27017/desafio_ripley
- PORT=8000

