# Astro Contenful POC

A POC explaining how to work with Contentful and Astro.

## Contentful

All copy screens how setup Contentful

1. Create `fds-astro-space`

![fds-astro-space](./assets/fds-astro-space.png)

2. Create POC content model

- Design Token

![fds-tokens](./assets/fds-tokens.png)

- Foundation Entries

![fds-tokens](./assets/foundation-entries.png)

- Foundations

![fds-foundation](./assets/foundation.png)

3. Create A POC Content

- Design Token Content

![](./assets/token-1.png)

![](./assets/token-2.png)

- Foundation Content

![](./assets/foundation-1.png)

![](./assets/foundation-2.png)

- Foundation entries content

![](./assets/foundation-entry-1.png)

![](./assets/foundation-entry-2.png)

4. Setup contentful credentials (This is need for setting up Dev Env)

- Contentful space ID - The ID of your Contentful space.

- Contentful delivery access token - The access token to consume published content from your Contentful space.

- Contentful preview access token - The access token to consume unpublished content from your Contentful space.

![](./assets/api-setting.png)

5. Setup Preview URL

- Go to Content Preview Menu

![](./assets/preview-setup-1.png)

- Create a content Preview setup

![](./assets/preview-setup-2.png)

## Astro

This POC contains a astro implementation and configuration with folowing feature

- Contenful integration
- Lit integration
- SSR

### Local dev

1. setup .env

```
CONTENTFUL_SPACE_ID=...
CONTENTFUL_DELIVERY_TOKEN=...
CONTENTFUL_PREVIEW_TOKEN=...
```

2. Install dependencies

```
npm installl
```

3. Start Dev Server

```
npm start
```

### Deploy

- This POC prepares two npm script to deploy to server. Because it needs SSR, so it will need a node server.

- The entry server file is : /dist/server/entry.mjs

So to start server : `node dist/server/entry.mjs`

Build for production : `npm run build`
Build for preview : `npm run build-preview`

One time, executed the build, you can run `npm run preview` or `node dist/server/entry.mjs` to test the POC build on local machine.
