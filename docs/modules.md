[@polyfea/browser-api](README.md) / Exports

# @polyfea/browser-api

## Table of contents

### Classes

- [BaseAPI](classes/BaseAPI.md)
- [BlobApiResponse](classes/BlobApiResponse.md)
- [Configuration](classes/Configuration.md)
- [FetchError](classes/FetchError.md)
- [JSONApiResponse](classes/JSONApiResponse.md)
- [PolyfeaApi](classes/PolyfeaApi.md)
- [RequiredError](classes/RequiredError.md)
- [ResponseError](classes/ResponseError.md)
- [TextApiResponse](classes/TextApiResponse.md)
- [VoidApiResponse](classes/VoidApiResponse.md)

### Interfaces

- [ApiResponse](interfaces/ApiResponse.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [Consume](interfaces/Consume.md)
- [ContextArea](interfaces/ContextArea.md)
- [ElementSpec](interfaces/ElementSpec.md)
- [ErrorContext](interfaces/ErrorContext.md)
- [FetchParams](interfaces/FetchParams.md)
- [GetContextAreaRequest](interfaces/GetContextAreaRequest.md)
- [MicrofrontendResource](interfaces/MicrofrontendResource.md)
- [MicrofrontendSpec](interfaces/MicrofrontendSpec.md)
- [Middleware](interfaces/Middleware.md)
- [RequestContext](interfaces/RequestContext.md)
- [RequestOpts](interfaces/RequestOpts.md)
- [ResponseContext](interfaces/ResponseContext.md)
- [ResponseTransformer](interfaces/ResponseTransformer.md)
- [StaticConfig](interfaces/StaticConfig.md)
- [StaticConfigArea](interfaces/StaticConfigArea.md)

### Type Aliases

- [FetchAPI](modules.md#fetchapi)
- [HTTPBody](modules.md#httpbody)
- [HTTPHeaders](modules.md#httpheaders)
- [HTTPMethod](modules.md#httpmethod)
- [HTTPQuery](modules.md#httpquery)
- [HTTPRequestInit](modules.md#httprequestinit)
- [InitOverrideFunction](modules.md#initoverridefunction)
- [Json](modules.md#json)
- [MicrofrontendResourceKindEnum](modules.md#microfrontendresourcekindenum)
- [ModelPropertyNaming](modules.md#modelpropertynaming)

### Variables

- [BASE\_PATH](modules.md#base_path)
- [COLLECTION\_FORMATS](modules.md#collection_formats)
- [DefaultConfig](modules.md#defaultconfig)
- [MicrofrontendResourceKindEnum](modules.md#microfrontendresourcekindenum-1)

### Functions

- [ContextAreaFromJSON](modules.md#contextareafromjson)
- [ContextAreaFromJSONTyped](modules.md#contextareafromjsontyped)
- [ContextAreaToJSON](modules.md#contextareatojson)
- [ElementSpecFromJSON](modules.md#elementspecfromjson)
- [ElementSpecFromJSONTyped](modules.md#elementspecfromjsontyped)
- [ElementSpecToJSON](modules.md#elementspectojson)
- [MicrofrontendResourceFromJSON](modules.md#microfrontendresourcefromjson)
- [MicrofrontendResourceFromJSONTyped](modules.md#microfrontendresourcefromjsontyped)
- [MicrofrontendResourceToJSON](modules.md#microfrontendresourcetojson)
- [MicrofrontendSpecFromJSON](modules.md#microfrontendspecfromjson)
- [MicrofrontendSpecFromJSONTyped](modules.md#microfrontendspecfromjsontyped)
- [MicrofrontendSpecToJSON](modules.md#microfrontendspectojson)
- [StaticConfigAreaFromJSON](modules.md#staticconfigareafromjson)
- [StaticConfigAreaFromJSONTyped](modules.md#staticconfigareafromjsontyped)
- [StaticConfigAreaToJSON](modules.md#staticconfigareatojson)
- [StaticConfigFromJSON](modules.md#staticconfigfromjson)
- [StaticConfigFromJSONTyped](modules.md#staticconfigfromjsontyped)
- [StaticConfigToJSON](modules.md#staticconfigtojson)
- [canConsumeForm](modules.md#canconsumeform)
- [exists](modules.md#exists)
- [instanceOfContextArea](modules.md#instanceofcontextarea)
- [instanceOfElementSpec](modules.md#instanceofelementspec)
- [instanceOfMicrofrontendResource](modules.md#instanceofmicrofrontendresource)
- [instanceOfMicrofrontendSpec](modules.md#instanceofmicrofrontendspec)
- [instanceOfStaticConfig](modules.md#instanceofstaticconfig)
- [instanceOfStaticConfigArea](modules.md#instanceofstaticconfigarea)
- [mapValues](modules.md#mapvalues)
- [querystring](modules.md#querystring)

## Type Aliases

### FetchAPI

Ƭ **FetchAPI**: `WindowOrWorkerGlobalScope`[``"fetch"``]

#### Defined in

src/generated/runtime.ts:288

___

### HTTPBody

Ƭ **HTTPBody**: [`Json`](modules.md#json) \| `FormData` \| `URLSearchParams`

#### Defined in

src/generated/runtime.ts:294

___

### HTTPHeaders

Ƭ **HTTPHeaders**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

src/generated/runtime.ts:292

___

### HTTPMethod

Ƭ **HTTPMethod**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"OPTIONS"`` \| ``"HEAD"``

#### Defined in

src/generated/runtime.ts:291

___

### HTTPQuery

Ƭ **HTTPQuery**: `Object`

#### Index signature

▪ [key: `string`]: `string` \| `number` \| ``null`` \| `boolean` \| (`string` \| `number` \| ``null`` \| `boolean`)[] \| `Set`\<`string` \| `number` \| ``null`` \| `boolean`\> \| [`HTTPQuery`](modules.md#httpquery)

#### Defined in

src/generated/runtime.ts:293

___

### HTTPRequestInit

Ƭ **HTTPRequestInit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body?` | [`HTTPBody`](modules.md#httpbody) |
| `credentials?` | `RequestCredentials` |
| `headers?` | [`HTTPHeaders`](modules.md#httpheaders) |
| `method` | [`HTTPMethod`](modules.md#httpmethod) |

#### Defined in

src/generated/runtime.ts:295

___

### InitOverrideFunction

Ƭ **InitOverrideFunction**: (`requestContext`: \{ `context`: [`RequestOpts`](interfaces/RequestOpts.md) ; `init`: [`HTTPRequestInit`](modules.md#httprequestinit)  }) => `Promise`\<`RequestInit`\>

#### Type declaration

▸ (`requestContext`): `Promise`\<`RequestInit`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `requestContext` | `Object` |
| `requestContext.context` | [`RequestOpts`](interfaces/RequestOpts.md) |
| `requestContext.init` | [`HTTPRequestInit`](modules.md#httprequestinit) |

##### Returns

`Promise`\<`RequestInit`\>

#### Defined in

src/generated/runtime.ts:298

___

### Json

Ƭ **Json**: `any`

#### Defined in

src/generated/runtime.ts:290

___

### MicrofrontendResourceKindEnum

Ƭ **MicrofrontendResourceKindEnum**: typeof [`MicrofrontendResourceKindEnum`](modules.md#microfrontendresourcekindenum-1)[keyof typeof [`MicrofrontendResourceKindEnum`](modules.md#microfrontendresourcekindenum-1)]

#### Defined in

src/generated/models/MicrofrontendResource.ts:63

src/generated/models/MicrofrontendResource.ts:68

___

### ModelPropertyNaming

Ƭ **ModelPropertyNaming**: ``"camelCase"`` \| ``"snake_case"`` \| ``"PascalCase"`` \| ``"original"``

#### Defined in

src/generated/runtime.ts:296

## Variables

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

Polyfea Browser application
This is the OpenAPI definition for the Polyfea endpoint serving the context information to the browser client. The client is requesting context information from the backend typically  when approaching the `<polyfea-context>` element. The context information is then used to render the UI of the application. 

The version of the OpenAPI document: v1alpha1

NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
https://openapi-generator.tech
Do not edit the class manually.

#### Defined in

src/generated/runtime.ts:16

___

### COLLECTION\_FORMATS

• `Const` **COLLECTION\_FORMATS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `csv` | `string` |
| `pipes` | `string` |
| `ssv` | `string` |
| `tsv` | `string` |

#### Defined in

src/generated/runtime.ts:281

___

### DefaultConfig

• `Const` **DefaultConfig**: [`Configuration`](classes/Configuration.md)

#### Defined in

src/generated/runtime.ts:87

___

### MicrofrontendResourceKindEnum

• `Const` **MicrofrontendResourceKindEnum**: `Object`

**`Export`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Link` | ``"link"`` |
| `Script` | ``"script"`` |
| `Stylesheet` | ``"stylesheet"`` |

#### Defined in

src/generated/models/MicrofrontendResource.ts:63

src/generated/models/MicrofrontendResource.ts:68

## Functions

### ContextAreaFromJSON

▸ **ContextAreaFromJSON**(`json`): [`ContextArea`](interfaces/ContextArea.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`ContextArea`](interfaces/ContextArea.md)

#### Defined in

src/generated/models/ContextArea.ts:65

___

### ContextAreaFromJSONTyped

▸ **ContextAreaFromJSONTyped**(`json`, `ignoreDiscriminator`): [`ContextArea`](interfaces/ContextArea.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`ContextArea`](interfaces/ContextArea.md)

#### Defined in

src/generated/models/ContextArea.ts:69

___

### ContextAreaToJSON

▸ **ContextAreaToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`ContextArea`](interfaces/ContextArea.md) |

#### Returns

`any`

#### Defined in

src/generated/models/ContextArea.ts:80

___

### ElementSpecFromJSON

▸ **ElementSpecFromJSON**(`json`): [`ElementSpec`](interfaces/ElementSpec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`ElementSpec`](interfaces/ElementSpec.md)

#### Defined in

src/generated/models/ElementSpec.ts:69

___

### ElementSpecFromJSONTyped

▸ **ElementSpecFromJSONTyped**(`json`, `ignoreDiscriminator`): [`ElementSpec`](interfaces/ElementSpec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`ElementSpec`](interfaces/ElementSpec.md)

#### Defined in

src/generated/models/ElementSpec.ts:73

___

### ElementSpecToJSON

▸ **ElementSpecToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`ElementSpec`](interfaces/ElementSpec.md) |

#### Returns

`any`

#### Defined in

src/generated/models/ElementSpec.ts:86

___

### MicrofrontendResourceFromJSON

▸ **MicrofrontendResourceFromJSON**(`json`): [`MicrofrontendResource`](interfaces/MicrofrontendResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`MicrofrontendResource`](interfaces/MicrofrontendResource.md)

#### Defined in

src/generated/models/MicrofrontendResource.ts:80

___

### MicrofrontendResourceFromJSONTyped

▸ **MicrofrontendResourceFromJSONTyped**(`json`, `ignoreDiscriminator`): [`MicrofrontendResource`](interfaces/MicrofrontendResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`MicrofrontendResource`](interfaces/MicrofrontendResource.md)

#### Defined in

src/generated/models/MicrofrontendResource.ts:84

___

### MicrofrontendResourceToJSON

▸ **MicrofrontendResourceToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`MicrofrontendResource`](interfaces/MicrofrontendResource.md) |

#### Returns

`any`

#### Defined in

src/generated/models/MicrofrontendResource.ts:97

___

### MicrofrontendSpecFromJSON

▸ **MicrofrontendSpecFromJSON**(`json`): [`MicrofrontendSpec`](interfaces/MicrofrontendSpec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`MicrofrontendSpec`](interfaces/MicrofrontendSpec.md)

#### Defined in

src/generated/models/MicrofrontendSpec.ts:67

___

### MicrofrontendSpecFromJSONTyped

▸ **MicrofrontendSpecFromJSONTyped**(`json`, `ignoreDiscriminator`): [`MicrofrontendSpec`](interfaces/MicrofrontendSpec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`MicrofrontendSpec`](interfaces/MicrofrontendSpec.md)

#### Defined in

src/generated/models/MicrofrontendSpec.ts:71

___

### MicrofrontendSpecToJSON

▸ **MicrofrontendSpecToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`MicrofrontendSpec`](interfaces/MicrofrontendSpec.md) |

#### Returns

`any`

#### Defined in

src/generated/models/MicrofrontendSpec.ts:83

___

### StaticConfigAreaFromJSON

▸ **StaticConfigAreaFromJSON**(`json`): [`StaticConfigArea`](interfaces/StaticConfigArea.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`StaticConfigArea`](interfaces/StaticConfigArea.md)

#### Defined in

src/generated/models/StaticConfigArea.ts:64

___

### StaticConfigAreaFromJSONTyped

▸ **StaticConfigAreaFromJSONTyped**(`json`, `ignoreDiscriminator`): [`StaticConfigArea`](interfaces/StaticConfigArea.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`StaticConfigArea`](interfaces/StaticConfigArea.md)

#### Defined in

src/generated/models/StaticConfigArea.ts:68

___

### StaticConfigAreaToJSON

▸ **StaticConfigAreaToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`StaticConfigArea`](interfaces/StaticConfigArea.md) |

#### Returns

`any`

#### Defined in

src/generated/models/StaticConfigArea.ts:80

___

### StaticConfigFromJSON

▸ **StaticConfigFromJSON**(`json`): [`StaticConfig`](interfaces/StaticConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`StaticConfig`](interfaces/StaticConfig.md)

#### Defined in

src/generated/models/StaticConfig.ts:65

___

### StaticConfigFromJSONTyped

▸ **StaticConfigFromJSONTyped**(`json`, `ignoreDiscriminator`): [`StaticConfig`](interfaces/StaticConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `ignoreDiscriminator` | `boolean` |

#### Returns

[`StaticConfig`](interfaces/StaticConfig.md)

#### Defined in

src/generated/models/StaticConfig.ts:69

___

### StaticConfigToJSON

▸ **StaticConfigToJSON**(`value?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | [`StaticConfig`](interfaces/StaticConfig.md) |

#### Returns

`any`

#### Defined in

src/generated/models/StaticConfig.ts:80

___

### canConsumeForm

▸ **canConsumeForm**(`consumes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumes` | [`Consume`](interfaces/Consume.md)[] |

#### Returns

`boolean`

#### Defined in

src/generated/runtime.ts:352

___

### exists

▸ **exists**(`json`, `key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

src/generated/runtime.ts:313

___

### instanceOfContextArea

▸ **instanceOfContextArea**(`value`): `boolean`

Check if a given object implements the ContextArea interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/generated/models/ContextArea.ts:58

___

### instanceOfElementSpec

▸ **instanceOfElementSpec**(`value`): `boolean`

Check if a given object implements the ElementSpec interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/generated/models/ElementSpec.ts:62

___

### instanceOfMicrofrontendResource

▸ **instanceOfMicrofrontendResource**(`value`): `boolean`

Check if a given object implements the MicrofrontendResource interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/generated/models/MicrofrontendResource.ts:74

___

### instanceOfMicrofrontendSpec

▸ **instanceOfMicrofrontendSpec**(`value`): `boolean`

Check if a given object implements the MicrofrontendSpec interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/generated/models/MicrofrontendSpec.ts:61

___

### instanceOfStaticConfig

▸ **instanceOfStaticConfig**(`value`): `boolean`

Check if a given object implements the StaticConfig interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/generated/models/StaticConfig.ts:58

___

### instanceOfStaticConfigArea

▸ **instanceOfStaticConfigArea**(`value`): `boolean`

Check if a given object implements the StaticConfigArea interface.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

src/generated/models/StaticConfigArea.ts:57

___

### mapValues

▸ **mapValues**(`data`, `fn`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `fn` | (`item`: `any`) => `any` |

#### Returns

`Object`

#### Defined in

src/generated/runtime.ts:345

___

### querystring

▸ **querystring**(`params`, `prefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | [`HTTPQuery`](modules.md#httpquery) | `undefined` |
| `prefix` | `string` | `''` |

#### Returns

`string`

#### Defined in

src/generated/runtime.ts:318
