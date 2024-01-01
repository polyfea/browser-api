[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / MicrofrontendSpec

# Interface: MicrofrontendSpec

Specification of the microfrontend
Microfrontend resources are loaded by browser on demand. Each microfrontend consist of a set
of resources to be loaded ahead of rendering or parallel to the rendering of microfrontend elements.
In addition, the microfrontend can depend on other microfrontends.

**`Export`**

MicrofrontendSpec

## Table of contents

### Properties

- [dependsOn](MicrofrontendSpec.md#dependson)
- [module](MicrofrontendSpec.md#module)
- [resources](MicrofrontendSpec.md#resources)

## Properties

### dependsOn

• `Optional` **dependsOn**: `string`[]

The microfrontend that this microfrontend is depending on. Specification of the dependendencies
is provided in the context  area information.

**`Memberof`**

MicrofrontendSpec

#### Defined in

src/generated/models/MicrofrontendSpec.ts:40

___

### module

• `Optional` **module**: `string`

Shorthand for the microfrontend script module resource. The module is loaded by the browser before rendering of elements happens. In case the module has dependencies to other resources, they may be loaded by the module itself, assuming their references are provided as a relative path to the module.

**`Memberof`**

MicrofrontendSpec

#### Defined in

src/generated/models/MicrofrontendSpec.ts:46

___

### resources

• `Optional` **resources**: [`MicrofrontendResource`](MicrofrontendResource.md)[]

The resources to be loaded by the browser. Only resources that needs to be directly loaded in the 
document `head` element needs to be specified here, typical examples are fonts, and stylesheets that 
are required to be globally available.

**`Memberof`**

MicrofrontendSpec

#### Defined in

src/generated/models/MicrofrontendSpec.ts:55
