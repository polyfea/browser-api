[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / RequestContext

# Interface: RequestContext

## Table of contents

### Properties

- [fetch](RequestContext.md#fetch)
- [init](RequestContext.md#init)
- [url](RequestContext.md#url)

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

[src/generated/runtime.ts:366](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L366)

___

### init

• **init**: `RequestInit`

#### Defined in

[src/generated/runtime.ts:368](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L368)

___

### url

• **url**: `string`

#### Defined in

[src/generated/runtime.ts:367](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/runtime.ts#L367)
