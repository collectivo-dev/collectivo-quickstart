# Collectivo Quickstart

This repository is a template to start with your own instance or extension of [Collectivo](https://github.com/collectivo-dev/collectivo). For more information on Collectivo, please see the [documentation](https://github.com/collectivo-dev/collectivo).

## Installation

This is a guide to install a local system of Collectivo on your machine in order to test and configure the software or develop your own extensions. If you want to install Collectivo on a server, please see [deployment](#deployment).

Install the following requirements:

- [Docker](https://docs.docker.com/get-docker/)
- [pnpm](https://pnpm.io/installation)

Add the following to your [`etc/hosts`](https://www.howtogeek.com/27350/beginner-geek-how-to-edit-your-hosts-file/) file:

```
127.0.0.1 keycloak
```

Prepare the environment and start up a development server:

```sh
cp .env.example .env
pnpm install
docker compose up -d
pnpm dev
```

In a separate terminal, run the following to apply migrations and example data:

```sh
pnpm seed
```

Go back to the previous terminal (from `pnpm dev`) to see the migration logs.

The following services should now be available:

- Collectivo (user app): http://localhost:3000/
- Directus (data studio): http://localhost:8055/
- Keycloak (access control): http://localhost:8080/admin/master/console/

Log in with the following example users:

- Admin: admin@example.com / admin (Collectivo, Directus, Keycloak)
- Editor: editor@example.com / editor (Collectivo, Directus)
- User: user@example.com / user (Collectivo)

## Deployment

Coming soon.
