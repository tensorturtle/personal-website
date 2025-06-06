# Jason Sohn's Personal Website

Forked from https://github.com/markhorn-dev/astro-nano

## Development

Install node

```
npm install
```

```
npm run dev
```

## Deployment

Try it out locally.

```
npm run build
```

```
npm run preview
```

If everything is good, build the docker container for it, that uses [Caddy](https://caddyserver.com) server (that's what the `Caddyfile` is for) to serve the static files.

Currently, you must build on the same platform (linux/amd64) as the deployment server.

```
docker build -t --platform linux/amd64 tensorturtle/personal-website-astro .
```

Run it locally:
```
docker run -p 3000:3000 tensorturtle/personal-website-astro
```

Upload it to the docker hub:
```
docker push tensorturtle/personal-website-astro
```
On the server, reload the docker compose file:
```
docker compose pull
docker compose up -d
```

## Other commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts local dev server on local network         |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Preview build on local network                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |
