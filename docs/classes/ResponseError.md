[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / ResponseError

# Class: ResponseError

## Hierarchy

- `Error`

  ↳ **`ResponseError`**

## Table of contents

### Constructors

- [constructor](ResponseError.md#constructor)

### Properties

- [message](ResponseError.md#message)
- [name](ResponseError.md#name)
- [response](ResponseError.md#response)
- [stack](ResponseError.md#stack)

## Constructors

### constructor

• **new ResponseError**(`response`, `msg?`): [`ResponseError`](ResponseError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |
| `msg?` | `string` |

#### Returns

[`ResponseError`](ResponseError.md)

#### Overrides

Error.constructor

#### Defined in

[src/generated/runtime.ts:262](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L262)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: ``"ResponseError"``

#### Overrides

Error.name

#### Defined in

[src/generated/runtime.ts:261](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L261)

___

### response

• **response**: `Response`

#### Defined in

[src/generated/runtime.ts:262](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L262)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077
