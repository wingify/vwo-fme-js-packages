# @wingify/util-data-type

VWO Data Type Utility for Feature Management and Experimentation. Provides utility functions for data type checking and manipulation.

## Features

- Type checking utilities (isString, isNumber, etc.)
- TypeScript support
- Lightweight and fast

## Installation

This package is part of the [vwo-fme-js-packages](../../README.md) monorepo. To install dependencies, run from the monorepo root:

```bash
pnpm install
```

To build this package:

```bash
pnpm --filter @wingify/util-data-type build
```

## Usage

```js
import { isString } from '@wingify/util-data-type';
console.log(isString('test')); // true
```

## Scripts

- `pnpm build` – Build the package
- `pnpm test` – Run tests
- `pnpm test:watch` – Run tests in watch mode
- `pnpm test:coverage`– Run tests with coverage
