[streetfight](../README.md) / [Exports](../modules.md) / IResource

# Class: IResource

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

[type.d.ts:540](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L540)

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

[type.d.ts:533](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L533)

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

[type.d.ts:555](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L555)

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

[type.d.ts:564](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L564)

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

[type.d.ts:546](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L546)
