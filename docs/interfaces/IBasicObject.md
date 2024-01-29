[streetfight](../README.md) / [Exports](../modules.md) / IBasicObject

# Interface: IBasicObject

每個顯示出來的物件都要具備的屬性

## Hierarchy

- **`IBasicObject`**

  ↳ [`IBodyObject`](IBodyObject.md)

## Table of contents

### Properties

- [animationManager](IBasicObject.md#animationmanager)
- [characterConfig](IBasicObject.md#characterconfig)
- [debugBox](IBasicObject.md#debugbox)
- [face](IBasicObject.md#face)
- [followed](IBasicObject.md#followed)
- [positionOffset](IBasicObject.md#positionoffset)

### Methods

- [getFace](IBasicObject.md#getface)
- [getPosition](IBasicObject.md#getposition)
- [onBeforeUpdate](IBasicObject.md#onbeforeupdate)
- [onUpdate](IBasicObject.md#onupdate)
- [setFace](IBasicObject.md#setface)
- [setPosition](IBasicObject.md#setposition)
- [switchAnimation](IBasicObject.md#switchanimation)
- [update](IBasicObject.md#update)
- [waitMS](IBasicObject.md#waitms)

## Properties

### animationManager

• **animationManager**: `any`

#### Defined in

[type.d.ts:225](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L225)

___

### characterConfig

• **characterConfig**: [`CharacterConfig`](CONFIG.CharacterConfig.md)

角色的設定

#### Defined in

[type.d.ts:230](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L230)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Defined in

[type.d.ts:206](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L206)

___

### face

• **face**: `Face`

角色面對的方向

**`Default`**

```ts
Face.RIGHT
```

#### Defined in

[type.d.ts:217](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L217)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Defined in

[type.d.ts:211](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L211)

___

### positionOffset

• **positionOffset**: [`Vector`](CONFIG.Vector.md)

顯示容器和鋼體的位置偏差

**`Default`**

```ts
{x:0,y:0}
```

#### Defined in

[type.d.ts:223](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L223)

## Methods

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Defined in

[type.d.ts:240](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L240)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Defined in

[type.d.ts:263](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L263)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`deltaMS`): `void`

在更新前呼叫
需要實作

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Defined in

[type.d.ts:246](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L246)

___

### onUpdate

▸ **onUpdate**(`deltaMS`): `void`

在更新時呼叫
需要實作

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Defined in

[type.d.ts:252](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L252)

___

### setFace

▸ **setFace**(`face`): `void`

改變面向

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `Face` |

#### Returns

`void`

#### Defined in

[type.d.ts:235](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L235)

___

### setPosition

▸ **setPosition**(`vector`): `void`

設定實際位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](CONFIG.Vector.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:269](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L269)

___

### switchAnimation

▸ **switchAnimation**(`name?`): `void`

切換動畫

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`void`

#### Defined in

[type.d.ts:275](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L275)

___

### update

▸ **update**(`deltaMS`): `void`

更新物體

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Defined in

[type.d.ts:258](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L258)

___

### waitMS

▸ **waitMS**(`ms`, `cb`): `number`

等待若干毫秒後執行

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |
| `cb` | () => `void` |

#### Returns

`number`

#### Defined in

[type.d.ts:282](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L282)
