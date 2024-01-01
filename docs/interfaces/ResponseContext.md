[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / ResponseContext

# Interface: ResponseContext

## Table of contents

### Properties

- [fetch](ResponseContext.md#fetch)
- [init](ResponseContext.md#init)
- [response](ResponseContext.md#response)
- [url](ResponseContext.md#url)

## Properties

### fetch

• **fetch**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`\<`Response`\>

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

src/generated/runtime.ts:372

___

### init

• **init**: `RequestInit`

#### Defined in

src/generated/runtime.ts:374

___

### response

• **response**: `Response`

#### Defined in

src/generated/runtime.ts:375

___

### url

• **url**: `string`

#### Defined in

src/generated/runtime.ts:373
