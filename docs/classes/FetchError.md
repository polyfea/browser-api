[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / FetchError

# Class: FetchError

## Hierarchy

- `Error`

  ↳ **`FetchError`**

## Table of contents

### Constructors

- [constructor](FetchError.md#constructor)

### Properties

- [cause](FetchError.md#cause)
- [message](FetchError.md#message)
- [name](FetchError.md#name)
- [stack](FetchError.md#stack)

## Constructors

### constructor

• **new FetchError**(`cause`, `msg?`): [`FetchError`](FetchError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cause` | `Error` |
| `msg?` | `string` |

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

Error.constructor

#### Defined in

[src/generated/runtime.ts:269](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L269)

## Properties

### cause

• **cause**: `Error`

#### Defined in

[src/generated/runtime.ts:269](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L269)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: ``"FetchError"``

#### Overrides

Error.name

#### Defined in

[src/generated/runtime.ts:268](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L268)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077
