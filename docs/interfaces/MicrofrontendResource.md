[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / MicrofrontendResource

# Interface: MicrofrontendResource

The resource required by the microfrontend.
The resource is either a script, stylesheet, or any other `link` element. The resource is 
loaded by the browser when the microfrontend is requested to be loaded. The resource may be loaded
either synchronously or asynchronously.

**`Export`**

MicrofrontendResource

## Table of contents

### Properties

- [attributes](MicrofrontendResource.md#attributes)
- [href](MicrofrontendResource.md#href)
- [kind](MicrofrontendResource.md#kind)
- [waitOnLoad](MicrofrontendResource.md#waitonload)

## Properties

### attributes

• `Optional` **attributes**: `Object`

The attributes to be put on the `link` or `script` element in addition to `rel` and `href` attributes.

**`Memberof`**

MicrofrontendResource

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

src/generated/models/MicrofrontendResource.ts:47

___

### href

• `Optional` **href**: `string`

The URL of the resource. The URL is typically relative to the base URL of the application and typically
served as subpath of `<base_href>/polyfea/webcomponent/<microfrontend-name>/<resource-path...>`.

**`Memberof`**

MicrofrontendResource

#### Defined in

src/generated/models/MicrofrontendResource.ts:40

___

### kind

• `Optional` **kind**: [`MicrofrontendResourceKindEnum`](../modules.md#microfrontendresourcekindenum-1)

The kind of the resource. The resource is either a script, stylesheet, or any other `link` element.

**`Memberof`**

MicrofrontendResource

#### Defined in

src/generated/models/MicrofrontendResource.ts:32

___

### waitOnLoad

• `Optional` **waitOnLoad**: `boolean`

If `true` the browser will wait for the resource to be loaded before finishing loading of the microfrontend.
If `false` the browser will load the resource asynchronously and continue with loading and rendering in 
between.

**`Memberof`**

MicrofrontendResource

#### Defined in

src/generated/models/MicrofrontendResource.ts:56
