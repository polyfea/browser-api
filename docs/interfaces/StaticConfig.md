[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / StaticConfig

# Interface: StaticConfig

Specification of the static configuration of the application.
The static configuration is a compilation of all contexts/paths and their elements, 
usefull durring development, testing or for simpler applications.

**`Export`**

StaticConfig

## Table of contents

### Properties

- [contextAreas](StaticConfig.md#contextareas)
- [microfrontends](StaticConfig.md#microfrontends)

## Properties

### contextAreas

• `Optional` **contextAreas**: [`StaticConfigArea`](StaticConfigArea.md)[]

List of context areas and their elements. The context areas are referenced by the name and path regex
at which they are rendered. In case of conflict, the first matching context area is used.

**`Memberof`**

StaticConfig

#### Defined in

src/generated/models/StaticConfig.ts:45

___

### microfrontends

• **microfrontends**: `Object`

Dictionary of microfrontends. The microfrontends are referenced by their name.

**`Memberof`**

StaticConfig

#### Index signature

▪ [key: `string`]: [`MicrofrontendSpec`](MicrofrontendSpec.md)

#### Defined in

src/generated/models/StaticConfig.ts:52
