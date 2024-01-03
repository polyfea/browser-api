[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / ElementSpec

# Interface: ElementSpec

Specification of the element
Elements are the building blocks of the application. Each element shall be a web component that is
rendered by the browser. When rendered in context - using e.g. `polyfea-context` element, the element 
attribute ˙context` is set to the context area's name.

**`Export`**

ElementSpec

## Table of contents

### Properties

- [attributes](ElementSpec.md#attributes)
- [microfrontend](ElementSpec.md#microfrontend)
- [style](ElementSpec.md#style)
- [tagName](ElementSpec.md#tagname)

## Properties

### attributes

• `Optional` **attributes**: `Object`

Attributes of the element to be set when the element is rendered.

**`Memberof`**

ElementSpec

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/models/ElementSpec.ts:48](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/ElementSpec.ts#L48)

___

### microfrontend

• `Optional` **microfrontend**: `string`

The name of the microfrontend that the element belongs to. The microfrontend is loaded by the browser
before the element is rendered. If not provided, then it is assumed that all resources needed by the
element are already loaded by the browser before the element is rendered.

**`Memberof`**

ElementSpec

#### Defined in

[src/generated/models/ElementSpec.ts:34](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/ElementSpec.ts#L34)

___

### style

• `Optional` **style**: `Object`

The styles of the element. Intended primary as a fallback for specific 
cases, e.g. setting CSS variables.

**`Memberof`**

ElementSpec

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/models/ElementSpec.ts:56](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/ElementSpec.ts#L56)

___

### tagName

• **tagName**: `string`

The name of the element - its tag name to be put into document flow.

**`Memberof`**

ElementSpec

#### Defined in

[src/generated/models/ElementSpec.ts:41](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/ElementSpec.ts#L41)
