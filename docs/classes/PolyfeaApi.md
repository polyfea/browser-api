[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / PolyfeaApi

# Class: PolyfeaApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PolyfeaApi`**

## Table of contents

### Constructors

- [constructor](PolyfeaApi.md#constructor)

### Properties

- [configuration](PolyfeaApi.md#configuration)

### Methods

- [getContextArea](PolyfeaApi.md#getcontextarea)
- [getContextAreaRaw](PolyfeaApi.md#getcontextarearaw)
- [getStaticConfig](PolyfeaApi.md#getstaticconfig)
- [getStaticConfigRaw](PolyfeaApi.md#getstaticconfigraw)
- [isJsonMime](PolyfeaApi.md#isjsonmime)
- [request](PolyfeaApi.md#request)
- [withMiddleware](PolyfeaApi.md#withmiddleware)
- [withPostMiddleware](PolyfeaApi.md#withpostmiddleware)
- [withPreMiddleware](PolyfeaApi.md#withpremiddleware)

## Constructors

### constructor

• **new PolyfeaApi**(`configuration?`): [`PolyfeaApi`](PolyfeaApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) | `DefaultConfig` |

#### Returns

[`PolyfeaApi`](PolyfeaApi.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/generated/runtime.ts:97](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L97)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md) = `DefaultConfig`

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

#### Defined in

[src/generated/runtime.ts:97](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L97)

## Methods

### getContextArea

▸ **getContextArea**(`requestParameters`, `initOverrides?`): `Promise`\<[`ContextArea`](../interfaces/ContextArea.md)\>

Get the context area information. Context area information includes elements and microfrontneds needed for that elements. Actual content is depending on the path - provided as an input  and the user  role determined on the server side. 
Get the context area information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetContextAreaRequest`](../interfaces/GetContextAreaRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`\<[`ContextArea`](../interfaces/ContextArea.md)\>

#### Defined in

[src/generated/apis/PolyfeaApi.ts:78](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/apis/PolyfeaApi.ts#L78)

___

### getContextAreaRaw

▸ **getContextAreaRaw**(`requestParameters`, `initOverrides?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<[`ContextArea`](../interfaces/ContextArea.md)\>\>

Get the context area information. Context area information includes elements and microfrontneds needed for that elements. Actual content is depending on the path - provided as an input  and the user  role determined on the server side. 
Get the context area information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`GetContextAreaRequest`](../interfaces/GetContextAreaRequest.md) |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<[`ContextArea`](../interfaces/ContextArea.md)\>\>

#### Defined in

[src/generated/apis/PolyfeaApi.ts:43](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/apis/PolyfeaApi.ts#L43)

___

### getStaticConfig

▸ **getStaticConfig**(`initOverrides?`): `Promise`\<[`StaticConfig`](../interfaces/StaticConfig.md)\>

Get the static configuration of the application context areas. Holds a sum of all microfrontends and web components. Can be beneficial if logic of the frontend is simple and static, and in cases such as development or testing. 
Get the static information about all resources and context areas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`\<[`StaticConfig`](../interfaces/StaticConfig.md)\>

#### Defined in

[src/generated/apis/PolyfeaApi.ts:106](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/apis/PolyfeaApi.ts#L106)

___

### getStaticConfigRaw

▸ **getStaticConfigRaw**(`initOverrides?`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<[`StaticConfig`](../interfaces/StaticConfig.md)\>\>

Get the static configuration of the application context areas. Holds a sum of all microfrontends and web components. Can be beneficial if logic of the frontend is simple and static, and in cases such as development or testing. 
Get the static information about all resources and context areas.

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` \| [`InitOverrideFunction`](../modules.md#initoverridefunction) |

#### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<[`StaticConfig`](../interfaces/StaticConfig.md)\>\>

#### Defined in

[src/generated/apis/PolyfeaApi.ts:87](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/apis/PolyfeaApi.ts#L87)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[isJsonMime](BaseAPI.md#isjsonmime)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

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

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

#### Defined in

[src/generated/runtime.ts:107](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L107)
