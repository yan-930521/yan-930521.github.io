[streetfight](../README.md) / [Exports](../modules.md) / IResource

# Class: IResource

資源載入器

## Table of contents

### Constructors

- [constructor](IResource.md#constructor)

### Methods

- [createGradTexture](IResource.md#creategradtexture)
- [getUrl](IResource.md#geturl)
- [loadAnimatedResource](IResource.md#loadanimatedresource)
- [loadMutiAnimatedResource](IResource.md#loadmutianimatedresource)
- [loadResource](IResource.md#loadresource)

## Constructors

### constructor

• **new IResource**(): [`IResource`](IResource.md)

#### Returns

[`IResource`](IResource.md)

## Methods

### createGradTexture

▸ **createGradTexture**(`width`, `height`): `Texture`\<`Resource`\>

創造漸變texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`Texture`\<`Resource`\>

#### Defined in

[type.d.ts:603](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L603)

___

### getUrl

▸ **getUrl**(`...args`): `string`

將輸出的arg輸出成完整的連結

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

#### Returns

`string`

#### Defined in

[type.d.ts:596](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L596)

___

### loadAnimatedResource

▸ **loadAnimatedResource**(`path`, `frameCount`, `width?`, `height?`): `Promise`\<`AnimatedSprite`\>

從單一來源載入動畫資源

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `frameCount` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`Promise`\<`AnimatedSprite`\>

#### Defined in

[type.d.ts:618](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L618)

___

### loadMutiAnimatedResource

▸ **loadMutiAnimatedResource**(`path`, `frameCountX`, `frameCountY`, `width?`, `height?`): `Promise`\<`AnimatedSprite`[]\>

從單一來源載入多個動畫資源

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `frameCountX` | `number` |
| `frameCountY` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`Promise`\<`AnimatedSprite`[]\>

#### Defined in

[type.d.ts:627](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L627)

___

### loadResource

▸ **loadResource**(`path`): `Promise`\<`Sprite`\>

載入圖片資源

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`Sprite`\>

#### Defined in

[type.d.ts:609](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L609)
