# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. The site is hosted by Netlify.

### Installation

```
$ pnpm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Committing/pushing to main branch will trigger cicd to build the project at Netlify.
