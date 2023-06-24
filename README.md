<a href="https://jourloy.com/">
	<h1 align="center">
		Next Template
	</h1>
</a>

## Description

This is a next template repository

Features:

| Features    | Description                                  |
|-------------|----------------------------------------------|
| Next.js     | SSR and SEO. Also good routing               |
| TailwindCSS | Make CSS simple                              |
| Sentry      | Collect errors                               |
| Zustand     | Simple store like Redux                      |
| Docker      | Containerization. Support next.js hot reload |

## Getting Started

### Installation

```shell
$ yarn install
```

### Prepare

#### Sentry

For collect all errors you should add Setry config

```shell
$ npx @sentry/wizard@latest -i nextjs
```

And check **sentry.*.config.ts**

#### Git

##### Change remote

```shell
$ git remote remove origin

$ git remote add [name] [link]
```

##### Push

You can push with autoversioning

```shell
$ npm version [major|minor|patch]
```

### Running the app

#### Docker

```shell
$ docker-compose up -d
```

#### Yarn

```shell
# Developmemt
$ yarn dev

# Production (Not recommend)
$ yarn start
```

### Running the storybook

```shell
# Development
$ yarn storybook

# Build
$ yarn build-storybook
```
