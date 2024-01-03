[@polyfea/browser-api](../README.md) / [Exports](../modules.md) / StaticConfigArea

# Interface: StaticConfigArea

Specification of the static configuration of the context area with specific name and path regex.

**`Export`**

StaticConfigArea

## Table of contents

### Properties

- [contextArea](StaticConfigArea.md#contextarea)
- [name](StaticConfigArea.md#name)
- [path](StaticConfigArea.md#path)

## Properties

### contextArea

• `Optional` **contextArea**: [`ContextArea`](ContextArea.md)

**`Memberof`**

StaticConfigArea

#### Defined in

[src/generated/models/StaticConfigArea.ts:51](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/StaticConfigArea.ts#L51)

___

### name

• **name**: `string`

Name of the context area.

**`Memberof`**

StaticConfigArea

#### Defined in

[src/generated/models/StaticConfigArea.ts:36](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/StaticConfigArea.ts#L36)

___

### path

• `Optional` **path**: `string`

The regular expression to match the path relative to base href to apply this context area. 
If path is not provided then context area specification applies on any path. In case of the conflicts
the first matching context area is used.

**`Memberof`**

StaticConfigArea

#### Defined in

[src/generated/models/StaticConfigArea.ts:45](https://github.com/polyfea/browser-api/blob/3f82ee7/src/generated/models/StaticConfigArea.ts#L45)
