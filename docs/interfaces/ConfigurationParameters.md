[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / ConfigurationParameters

# Interface: ConfigurationParameters

## Table of contents

### Properties

- [accessToken](ConfigurationParameters.md#accesstoken)
- [apiKey](ConfigurationParameters.md#apikey)
- [basePath](ConfigurationParameters.md#basepath)
- [credentials](ConfigurationParameters.md#credentials)
- [fetchApi](ConfigurationParameters.md#fetchapi)
- [headers](ConfigurationParameters.md#headers)
- [middleware](ConfigurationParameters.md#middleware)
- [password](ConfigurationParameters.md#password)
- [queryParamsStringify](ConfigurationParameters.md#queryparamsstringify)
- [username](ConfigurationParameters.md#username)

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`\<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| `Promise`\<`string`\>

#### Defined in

[src/generated/runtime.ts:26](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L26)

___

### apiKey

• `Optional` **apiKey**: `string` \| (`name`: `string`) => `string`

#### Defined in

[src/generated/runtime.ts:25](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L25)

___

### basePath

• `Optional` **basePath**: `string`

#### Defined in

[src/generated/runtime.ts:19](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L19)

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

#### Defined in

[src/generated/runtime.ts:28](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L28)

___

### fetchApi

• `Optional` **fetchApi**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`\<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`\<`Response`\>

#### Defined in

[src/generated/runtime.ts:20](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L20)

___

### headers

• `Optional` **headers**: [`HTTPHeaders`](../modules.md#httpheaders)

#### Defined in

[src/generated/runtime.ts:27](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L27)

___

### middleware

• `Optional` **middleware**: [`Middleware`](Middleware.md)[]

#### Defined in

[src/generated/runtime.ts:21](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L21)

___

### password

• `Optional` **password**: `string`

#### Defined in

[src/generated/runtime.ts:24](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L24)

___

### queryParamsStringify

• `Optional` **queryParamsStringify**: (`params`: [`HTTPQuery`](../modules.md#httpquery)) => `string`

#### Type declaration

▸ (`params`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HTTPQuery`](../modules.md#httpquery) |

##### Returns

`string`

#### Defined in

[src/generated/runtime.ts:22](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L22)

___

### username

• `Optional` **username**: `string`

#### Defined in

[src/generated/runtime.ts:23](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L23)
