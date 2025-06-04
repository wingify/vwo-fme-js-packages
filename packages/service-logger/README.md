# @wingify/service-logger

VWO Logger for Feature Management and Experimentation. Provides logging utilities with support for log levels, transports, and message formatting.

## Features

- Multiple log levels (info, warn, error, debug, etc.)
- Pluggable transports (console, file, etc.)
- Message formatting and metadata support
- TypeScript support

## Installation

This package is part of the [vwo-fme-js-packages](../../README.md) monorepo. To install dependencies, run from the monorepo root:

```bash
pnpm install
```

To build this package:

```bash
pnpm --filter @wingify/service-logger build
```

## Usage

```js
import { Logger } from '@wingify/service-logger';
const logger = new Logger();
logger.info('Hello from logger!');
```

## Scripts

- `pnpm build` – Build the package
- `pnpm test` – Run tests
- `pnpm test:watch` – Run tests in watch mode
- `pnpm test:coverage`– Run tests with coverage
