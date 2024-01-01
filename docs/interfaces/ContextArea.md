[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / ContextArea

# Interface: ContextArea

Elements to be inserted into the microfrontend context area.
The context area describes an area in the document flow which content is depending on the configuration of the system. For examples
the context area `top-level-applicartion` may be used to render the top level application tiles.

**`Export`**

ContextArea

## Table of contents

### Properties

- [elements](ContextArea.md#elements)
- [microfrontends](ContextArea.md#microfrontends)

## Properties

### elements

• **elements**: [`ElementSpec`](ElementSpec.md)[]

The elements to be inserted into the context area. The elements are rendered in the order they are provided in the array.

**`Memberof`**

ContextArea

#### Defined in

src/generated/models/ContextArea.ts:44

___

### microfrontends

• `Optional` **microfrontends**: `Object`

The microfrontends referenced by any of the elements. Loading of microfrontend resources is triggered by the browser when the
element is rendered.

**`Memberof`**

ContextArea

#### Index signature

▪ [key: `string`]: [`MicrofrontendSpec`](MicrofrontendSpec.md)

#### Defined in

src/generated/models/ContextArea.ts:52
