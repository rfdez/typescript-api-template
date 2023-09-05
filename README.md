# [WIP] Typescript API Template

In this repository you will find a template for creating a Typescript backend project. It includes the entrypoint of the application, the testing framework, linter and docker already configured.

## 📄 Features

- [Node.js](https://nodejs.org/en/) as runtime environment
- [Typescript](https://www.typescriptlang.org/) as programming language
- [Pnpm](https://pnpm.js.org/) as package manager
- [Express](https://expressjs.com/) as web framework
- [Jest](https://jestjs.io/) for testing
  - With [Supertest](https://github.com/ladjs/supertest) for testing HTTP requests
- [ESLint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting
- [Docker](https://www.docker.com/) for containerization
- [Github Actions](https://github.com/features/actions) for CI (Continuous Integration)

## 🚀 Getting Started

```shell
# Install dependencies
pnpm install

# Run the application in development mode
pnpm run dev

# Build the application
pnpm run build

# Run the application in production mode
pnpm start
```

## 🐳 Docker

```shell
# Build the image
docker build -t <owner>/typescript-api-template:<tag> .

# Run the container
docker run --rm -p 8080:8080 <owner>/typescript-api-template:<tag>
```

## 🧪 Testing

```shell
pnpm test
```

## 💅 Linting

```shell
# Run the linter
pnpm run lint

# Fix linting errors
pnpm run lint:fix
```
