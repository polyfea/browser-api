[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

- **`BaseAPI`**

  ↳ [`PolyfeaApi`](PolyfeaApi.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [configuration](BaseAPI.md#configuration)
- [middleware](BaseAPI.md#middleware)
- [jsonRegex](BaseAPI.md#jsonregex)

### Methods

- [clone](BaseAPI.md#clone)
- [createFetchParams](BaseAPI.md#createfetchparams)
- [fetchApi](BaseAPI.md#fetchapi)
- [isJsonMime](BaseAPI.md#isjsonmime)
- [request](BaseAPI.md#request)
- [withMiddleware](BaseAPI.md#withmiddleware)
- [withPostMiddleware](BaseAPI.md#withpostmiddleware)
- [withPreMiddleware](BaseAPI.md#withpremiddleware)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`): [`BaseAPI`](BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `DefaultConfig` |

#### Returns

[`BaseAPI`](BaseAPI.md)

#### Defined in

[src/generated/runtime.ts:97](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L97)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md) = `DefaultConfig`

#### Defined in

[src/generated/runtime.ts:97](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L97)

___

### middleware

• `Private` **middleware**: [`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

[src/generated/runtime.ts:95](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L95)

___

### jsonRegex

▪ `Static` `Private` `Readonly` **jsonRegex**: `RegExp`

#### Defined in

[src/generated/runtime.ts:94](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L94)

## Methods

### clone

▸ **clone**\<`T`\>(`this`): `T`

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`T`

#### Defined in

[src/generated/runtime.ts:244](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L244)

___

### createFetchParams

▸ **createFetchParams**(`context`, `initOverrides?`): `Promise`\<\{ `init`: `RequestInit` ; `url`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`\<\{ `init`: `RequestInit` ; `url`: `string`  }\>

#### Defined in

[src/generated/runtime.ts:143](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L143)

___

### fetchApi

▸ **fetchApi**(`url`, `init`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/generated/runtime.ts:194](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L194)

___

### isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

#### Defined in

[src/generated/runtime.ts:127](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L127)

___

### request

▸ **request**(`context`, `initOverrides?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[src/generated/runtime.ts:134](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L134)

___

### withMiddleware

▸ **withMiddleware**\<`T`\>(`this`, `...middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Defined in

[src/generated/runtime.ts:101](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L101)

___

### withPostMiddleware

▸ **withPostMiddleware**\<`T`\>(`this`, `...postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`\<`void` \| `Response`\>[] |

#### Returns

`T`

#### Defined in

[src/generated/runtime.ts:112](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L112)

___

### withPreMiddleware

▸ **withPreMiddleware**\<`T`\>(`this`, `...preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`\<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Defined in

[src/generated/runtime.ts:107](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L107)
