# Installation / Setup

You can run this project using two ways : node directly on your system and docker.

> You may choose docker because it's already setup the way it's meant to run.

## Docker

This project contains a `docker-compose.yml` file to run directly the project on `development` mode, thus requiring no more tools on your side.

To launch the container, fun :
```bash
docker-compose run --build -d
```

Then, wait a minute the time for NPM to install all packages for you, and go to [http://localhost:3000](http://localhost:3000) to see the project running.

> You can follow the NPM install and build steps using `docker-compose logs -f owlnextjs`.

## NPM

If you choose to run the project directly with NPM, follow these steps :

```bash
npm install
npm run dev
```

You can go to [http://localhost:3000](http://localhost:3000) to see the project running.
