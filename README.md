# Collectivo Quickstart

Collectivo is a modular plattform for collaboration, participation, and data management. For more information, please visit the [documentation](https://github.com/collectivo-dev/collectivo).

This repository is a template to start with your own instance of [Collectivo](https://github.com/collectivo-dev/collectivo). The repository can also be used as a starter template to create [custom extensions](#publish-your-features-as-an-extension).

## Overview

Here is an overview of this repository:

- `/collectivo`: A [Nuxt](https://nuxt.com/) app that extends the original Collectivo package. Custom features can be added by [adapting the Nuxt app](#develop-custom-features) or [adding extensions](#add-an-extension).
- `/docker-compose.yml`: A [Docker](https://docs.docker.com/) setup to run an instance of [Directus](https://directus.io/) and [Keycloak](https://www.keycloak.org/).

## Install locally

Install the following requirements:

- [git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/get-docker/)
- [pnpm](https://pnpm.io/installation)

Add the following to your [`etc/hosts`](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/) file. This is necessary for keycloak to work in a local docker network.

```
127.0.0.1 keycloak
```

Clone this repository.

```sh
git clone https://github.com/collectivo-dev/collectivo-quickstart.git
```

Move into your new project folder.

```sh
cd collectivo-quickstart
```

Create an environment file where you can define secret variables.

```
cp .env.example .env
```

Build all docker containers.

```
docker compose build
```

Start all docker containers.

```
docker compose up -d
```

Install all npm packages.

```sh
pnpm i
```

Start a development server for Collectivo.

```sh
pnpm dev
```

While Collectivo is running, in a separate terminal, apply migrations and example data.

```sh
pnpm seed
```

Go back to the previous terminal to see the migration logs.

The following services should now be available:

- Collectivo (user app): http://localhost:3000/
- Directus (data studio): http://localhost:8055/
- Keycloak (access control): http://localhost:8080/admin/master/console/

Log in with the following example users:

- Admin: admin@example.com / admin (Collectivo, Directus, Keycloak)
- Editor: editor@example.com / editor (Collectivo, Directus)
- User: user@example.com / user (Collectivo)

## Configuration

The main settings of Collectivo can be configured in `collectivo/app.config.ts`.

## Add an extension

To add an extension to Collectivo, add the name of the package in `package.json` and `nuxt.config.ts`. For more information, see [Nuxt Layers](https://nuxt.com/docs/guide/going-further/layers).

## Develop custom features

You can adapt the Nuxt app in `/collectivo` to add your own custom functionality. To do so, create your own [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of this repository.

For further information, please see the [development guide](https://github.com/collectivo-dev/collectivo#development-guide).

## Publish your features as an extension

You can share your custom functionality with others by creating an extension of Collectivo as an npm package.

To do so, configure the name, version, author, and license in [`collectivo/package.json`](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) and set `private:false`.

Then, change the name of your extension in [registerExtension.ts](https://github.com/collectivo-dev/collectivo#creating-an-extension).

Finally, publish your extension on npm.

```sh
pnpm publish -r --access=public
```

## Deploy to a server

To deploy Collectivo on a server, make sure to generate a new client secret in Keycloak and set fresh secrets in `.env`.

A template for the Collectivo container can be found in `docker-compose.yml`.

You further need to set up a reverse proxy system and SSH certificates to make your instance of Collectivo publicly accessible.

A working example of a deployment setup can be found in [mila-server](https://github.com/MILA-Wien/mila-server).
