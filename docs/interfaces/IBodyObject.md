[streetfight](../README.md) / [Exports](../modules.md) / IBodyObject

# Interface: IBodyObject

添加鋼體的物件要具備的屬性

## Hierarchy

- [`IBasicObject`](IBasicObject.md)

  ↳ **`IBodyObject`**

  ↳↳ [`ICharacter`](ICharacter.md)

  ↳↳ [`IEffect`](IEffect.md)

## Table of contents

### Properties

- [animationManager](IBodyObject.md#animationmanager)
- [body](IBodyObject.md#body)
- [characterConfig](IBodyObject.md#characterconfig)
- [debugBox](IBodyObject.md#debugbox)
- [face](IBodyObject.md#face)
- [followed](IBodyObject.md#followed)
- [positionOffset](IBodyObject.md#positionoffset)

### Methods

- [getFace](IBodyObject.md#getface)
- [getPosition](IBodyObject.md#getposition)
- [moveByForce](IBodyObject.md#movebyforce)
- [moveByPosition](IBodyObject.md#movebyposition)
- [moveByVelocity](IBodyObject.md#movebyvelocity)
- [onBeforeUpdate](IBodyObject.md#onbeforeupdate)
- [onUpdate](IBodyObject.md#onupdate)
- [setBodyPosition](IBodyObject.md#setbodyposition)
- [setFace](IBodyObject.md#setface)
- [setPosition](IBodyObject.md#setposition)
- [stop](IBodyObject.md#stop)
- [switchAnimation](IBodyObject.md#switchanimation)
- [update](IBodyObject.md#update)
- [waitMS](IBodyObject.md#waitms)

## Properties

### animationManager

• **animationManager**: `any`

#### Inherited from

[IBasicObject](IBasicObject.md).[animationManager](IBasicObject.md#animationmanager)

#### Defined in

[type.d.ts:225](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L225)

___

### body

• **body**: `Body`

#### Defined in

[type.d.ts:289](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L289)

___

### characterConfig

• **characterConfig**: [`CharacterConfig`](CONFIG.CharacterConfig.md)

角色的設定

#### Inherited from

[IBasicObject](IBasicObject.md).[characterConfig](IBasicObject.md#characterconfig)

#### Defined in

[type.d.ts:230](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L230)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Inherited from

[IBasicObject](IBasicObject.md).[debugBox](IBasicObject.md#debugbox)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[face](IBasicObject.md#face)

#### Defined in

[type.d.ts:217](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L217)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBasicObject](IBasicObject.md).[followed](IBasicObject.md#followed)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[positionOffset](IBasicObject.md#positionoffset)

#### Defined in

[type.d.ts:223](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L223)

## Methods

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Inherited from

[IBasicObject](IBasicObject.md).[getFace](IBasicObject.md#getface)

#### Defined in

[type.d.ts:240](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L240)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Inherited from

[IBasicObject](IBasicObject.md).[getPosition](IBasicObject.md#getposition)

#### Defined in

[type.d.ts:263](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L263)

___

### moveByForce

▸ **moveByForce**(`vector`): `void`

透過力移動

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](CONFIG.Vector.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:303](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L303)

___

### moveByPosition

▸ **moveByPosition**(`vector`): `void`

透過向量座標移動

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](CONFIG.Vector.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:309](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L309)

___

### moveByVelocity

▸ **moveByVelocity**(`vector`): `void`

透過指定速度移動

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](CONFIG.Vector.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:315](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L315)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[onBeforeUpdate](IBasicObject.md#onbeforeupdate)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[onUpdate](IBasicObject.md#onupdate)

#### Defined in

[type.d.ts:252](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L252)

___

### setBodyPosition

▸ **setBodyPosition**(`vector`): `void`

設置鋼體位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Vector`](CONFIG.Vector.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:297](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L297)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[setFace](IBasicObject.md#setface)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[setPosition](IBasicObject.md#setposition)

#### Defined in

[type.d.ts:269](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L269)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:291](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L291)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[switchAnimation](IBasicObject.md#switchanimation)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[update](IBasicObject.md#update)

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

#### Inherited from

[IBasicObject](IBasicObject.md).[waitMS](IBasicObject.md#waitms)

#### Defined in

[type.d.ts:282](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L282)
