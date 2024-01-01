@polyfea/browser-api / [Exports](modules.md)

# Polyfea API for the browser client

This package contains the API specification and generated implementation of the Polyfea API intended for communication with the Polyfea server from a browser client. The api is used by `@polyfea/core` package, most of the user will not use it directly.

## Installation

```bash
npm install @polyfea/browser-api
```

## Usage

The package is generated using [`typescript-fetch`](https://openapi-generator.tech/docs/generators/typescript-fetch) OpenAPI generator tool.

```typescript
const api = new PolyfeaApi({ basePath: './polyfea' });
const contextArea  = await api.getContextArea({ name: 'test', path: '/'});
```

See also generated [API documentation](./docs/modules.md)
