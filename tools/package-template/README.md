# @wingify/**TYPE**-**NAME**

VWO **NAME** **TYPE** for Feature Management and Experimentation.

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
pnpm --filter @wingify/__TYPE__-__NAME__ build
```

## Usage

```js
import { _ } from '@wingify/__TYPE__-__NAME__';
console.log(_);
```

## Scripts

- `pnpm build` – Build the package
- `pnpm test` – Run tests
- `pnpm test:watch` – Run tests in watch mode
- `pnpm test:coverage`– Run tests with coverage
