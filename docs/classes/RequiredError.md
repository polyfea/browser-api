[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / RequiredError

# Class: RequiredError

## Hierarchy

- `Error`

  ↳ **`RequiredError`**

## Table of contents

### Constructors

- [constructor](RequiredError.md#constructor)

### Properties

- [field](RequiredError.md#field)
- [message](RequiredError.md#message)
- [name](RequiredError.md#name)
- [stack](RequiredError.md#stack)

## Constructors

### constructor

• **new RequiredError**(`field`, `msg?`): [`RequiredError`](RequiredError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `string` |
| `msg?` | `string` |

#### Returns

[`RequiredError`](RequiredError.md)

#### Overrides

Error.constructor

#### Defined in

[src/generated/runtime.ts:276](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L276)

## Properties

### field

• **field**: `string`

#### Defined in

[src/generated/runtime.ts:276](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L276)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: ``"RequiredError"``

#### Overrides

Error.name

#### Defined in

[src/generated/runtime.ts:275](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L275)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077
