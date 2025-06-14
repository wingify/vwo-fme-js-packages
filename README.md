# VWO Feature Management and Experimentation JavaScript Packages

[![Maintained with PNPM](https://img.shields.io/badge/maintained%20with-pnpm-green?style=for-the-badge)](https://pnpm.io/) [![License](https://img.shields.io/github/license/wingify/vwo-fme-js-packages?style=for-the-badge&color=blue)](http://www.apache.org/licenses/LICENSE-2.0) ![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-yellow?style=for-the-badge) [![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-e72163?style=for-the-badge)](https://prettier.io)

[![CI](https://img.shields.io/github/actions/workflow/status/wingify/vwo-fme-js-packages/ci.yml?style=for-the-badge&logo=github)](https://github.com/wingify/vwo-fme-js-packages/actions?query=workflow%3ACI) [![codecov](https://img.shields.io/codecov/c/github/wingify/vwo-fme-js-packages?token=813UYYMWGM&style=for-the-badge&logo=codecov)](https://codecov.io/gh/wingify/vwo-fme-js-packages)

---

## Monorepo Overview

This repository contains JavaScript packages for VWO Feature Management and Experimentation. It is managed as a monorepo using [pnpm workspaces](https://pnpm.io/workspaces), making it easy to develop, test, and publish related packages together.

### Structure

```bash
/ (root)
├── packages/
│   ├── service-logger/      # Logging utilities for FME
│   └── util-data-type/      # Data type utilities for FME
├── .changeset/              # Changeset versioning
├── .github/                 # GitHub workflows and templates
├── build/                   # Build tools and scripts
├── ... (configs, docs, etc.)
```

### Packages

Packages in this Monorepo:

| Package Name | Version                                                                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| util-array   | [![npm](https://img.shields.io/npm/v/@wingify/util-data-type.svg?label=@wingify/util-data-type&style=for-the-badge)](https://www.npmjs.com/package/@wingify/util-data-type) |
| util-object  | [![npm](https://img.shields.io/npm/v/@wingify/service-logger.svg?label=@wingify/service-logger&style=for-the-badge)](https://www.npmjs.com/package/@wingify/service-logger) |

#### [`@wingify/service-logger`](./packages/service-logger)

VWO Logger for Feature Management and Experimentation. Provides logging utilities with support for log levels, transports, and message formatting.

- **Main entry:** `dist/index.umd.min.js`
- **Type definitions:** `dist/index.d.ts`
- **Dependencies:** `@wingify/util-data-type`, `uuid`

**Usage Example:**

```js
import { Logger } from '@wingify/service-logger';
const logger = new Logger();
logger.info('Hello from logger!');
```

> For more details, refer to the [README of Logger Service](./packages/service-logger/README.md)

#### [`@wingify/util-data-type`](./packages/util-data-type)

VWO Data Type Utility for Feature Management and Experimentation. Provides utility functions for data type checking and manipulation.

- **Main entry:** `dist/index.umd.min.js`
- **Type definitions:** `dist/index.d.ts`

**Usage Example:**

```js
import { isString } from '@wingify/util-data-type';
console.log(isString('test')); // true
```

> For more details, refer to the [README of Data Type Util](./packages/util-data-type/README.md)

---

## Installation & Setup

This monorepo uses [pnpm](https://pnpm.io/) for package management. Please install it globally if you haven't already:

```bash
npm install -g pnpm
```

#### Install all dependencies:

```bash
pnpm install
```

#### Build all packages:

```bash
pnpm -r build
```

#### Run tests for all packages:

```bash
pnpm -r test
```

#### Lint all TypeScript files:

```bash
pnpm lint
```

#### Format all supported files:

```bash
pnpm format
```

### Add new package

```bash
pnpm add:package
```

## Scripts

The following scripts are available at the root level:

| Script             | Description                              |
| ------------------ | ---------------------------------------- |
| `pnpm build`       | Cleans and builds all packages           |
| `pnpm test`        | Runs tests for all packages              |
| `pnpm lint`        | Lints all TypeScript files               |
| `pnpm format`      | Formats all supported files              |
| `pnpm clean`       | Removes all build artifacts              |
| `pnpm add:package` | Add a new package following instructions |

Each package also provides its own `build`, `test`, and related scripts.

## 🤝 Contributing

We value your contributions! Please check our [contributing guidelines](https://github.com/wingify/vwo-fme-js-packages/blob/master/CONTRIBUTING.md) before submitting a PR.

## 📜 Code of Conduct

We maintain a [Code of Conduct](https://github.com/wingify/vwo-fme-js-packages/blob/master/CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

## 📄 License

[Apache License, Version 2.0](https://github.com/wingify/vwo-fme-js-packages/blob/master/LICENSE)

Copyright 2025 Wingify Software Pvt. Ltd.
