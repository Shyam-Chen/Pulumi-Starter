# Pulumi Starter

🎄 A boilerplate for cloud applications with Pulumi and Azure using TypeScript on Vite.

:rainbow: View Demo: [Live](https://vue-starter-6fa6.onrender.com) | Windows | macOS | Android | iOS

:octocat: Source Code: [Web-side](https://github.com/Shyam-Chen/Vue-Starter) | [Native-side](https://github.com/Shyam-Chen/Tauri-Starter) | [Server-side](https://github.com/Shyam-Chen/Fastify-Starter) | [Cloud-side](https://github.com/Shyam-Chen/Pulumi-Starter)

## Table of Contents

- [Getting Started](#getting-started)
- [Project Setup](#project-setup)
- [Key Features](#key-features)
- Configuration
- [Directory Structure](#directory-structure)

## Getting Started

Prerequisites:

- Node.js v20
- PNPM v9
- Docker v4
- Pulumi v3
- Azure v2

Get started with Pulumi Starter.

```sh
# install dependencies
$ pnpm install

$ pulumi stack select dev
```

Or use barebones scaffolding for your new Pulumi app

```sh
$ pnpm dlx degit Shyam-Chen/Barebones-Templates/pulumi my-pulumi-app
```

## Project Setup

Follow steps to execute this boilerplate.

### Install dependencies

```sh
$ pnpm install
```

## Key Features

This seed repository provides the following features:

- ---------- **Environments** ----------
- [x] [Node.js](https://nodejs.org/en/) - JavaScript Runtime Environment
- [x] [PNPM](https://pnpm.io/) - Package Manager
- [x] [Caddy](https://caddyserver.com/) - Web Server
- [x] [Docker](https://www.docker.com/) - Containerized Application Development
- [x] [GitHub Actions](https://github.com/features/actions) - Continuous Integration and Delivery

## Directory Structure

The structure follows the LIFT Guidelines.

```coffee
.
├── .github/workflows/deployment.yaml
├── packages
│   ├── client
│   └── server
├── .dockerignore
├── .editorconfig
├── .gitignore
├── biome.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```
