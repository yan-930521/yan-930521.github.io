[streetfight](../README.md) / [Exports](../modules.md) / IEffect

# Interface: IEffect

特效

## Hierarchy

- [`IBodyObject`](IBodyObject.md)

  ↳ **`IEffect`**

## Table of contents

### Properties

- [animationManager](IEffect.md#animationmanager)
- [body](IEffect.md#body)
- [characterConfig](IEffect.md#characterconfig)
- [debugBox](IEffect.md#debugbox)
- [emitter](IEffect.md#emitter)
- [face](IEffect.md#face)
- [follow](IEffect.md#follow)
- [followOffset](IEffect.md#followoffset)
- [followed](IEffect.md#followed)
- [graphics](IEffect.md#graphics)
- [offset](IEffect.md#offset)
- [particleContainer](IEffect.md#particlecontainer)
- [positionOffset](IEffect.md#positionoffset)
- [sprite](IEffect.md#sprite)

### Methods

- [clearBody](IEffect.md#clearbody)
- [clearFollow](IEffect.md#clearfollow)
- [clearFollowOffset](IEffect.md#clearfollowoffset)
- [clearGraphics](IEffect.md#cleargraphics)
- [clearOffset](IEffect.md#clearoffset)
- [clearSprite](IEffect.md#clearsprite)
- [getEmit](IEffect.md#getemit)
- [getFace](IEffect.md#getface)
- [getPosition](IEffect.md#getposition)
- [moveByForce](IEffect.md#movebyforce)
- [moveByPosition](IEffect.md#movebyposition)
- [moveByVelocity](IEffect.md#movebyvelocity)
- [onBeforeUpdate](IEffect.md#onbeforeupdate)
- [onFinish](IEffect.md#onfinish)
- [onStart](IEffect.md#onstart)
- [onUpdate](IEffect.md#onupdate)
- [setBody](IEffect.md#setbody)
- [setBodyPosition](IEffect.md#setbodyposition)
- [setEmit](IEffect.md#setemit)
- [setEmitter](IEffect.md#setemitter)
- [setFace](IEffect.md#setface)
- [setFollow](IEffect.md#setfollow)
- [setFollowOffset](IEffect.md#setfollowoffset)
- [setGraphics](IEffect.md#setgraphics)
- [setOffset](IEffect.md#setoffset)
- [setPosition](IEffect.md#setposition)
- [setSprite](IEffect.md#setsprite)
- [start](IEffect.md#start)
- [stop](IEffect.md#stop)
- [switchAnimation](IEffect.md#switchanimation)
- [update](IEffect.md#update)
- [waitMS](IEffect.md#waitms)

## Properties

### animationManager

• **animationManager**: `any`

#### Inherited from

[IBodyObject](IBodyObject.md).[animationManager](IBodyObject.md#animationmanager)

#### Defined in

[type.d.ts:225](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L225)

___

### body

• **body**: `Body`

#### Inherited from

[IBodyObject](IBodyObject.md).[body](IBodyObject.md#body)

#### Defined in

[type.d.ts:289](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L289)

___

### characterConfig

• **characterConfig**: [`CharacterConfig`](CONFIG.CharacterConfig.md)

角色的設定

#### Inherited from

[IBodyObject](IBodyObject.md).[characterConfig](IBodyObject.md#characterconfig)

#### Defined in

[type.d.ts:230](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L230)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Inherited from

[IBodyObject](IBodyObject.md).[debugBox](IBodyObject.md#debugbox)

#### Defined in

[type.d.ts:206](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L206)

___

### emitter

• **emitter**: `Emitter`

粒子特效的發射器

#### Defined in

[type.d.ts:394](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L394)

___

### face

• **face**: `Face`

角色面對的方向

**`Default`**

```ts
Face.RIGHT
```

#### Inherited from

[IBodyObject](IBodyObject.md).[face](IBodyObject.md#face)

#### Defined in

[type.d.ts:217](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L217)

___

### follow

• **follow**: [`IBodyObject`](IBodyObject.md)

角色跟隨的物體

#### Defined in

[type.d.ts:399](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L399)

___

### followOffset

• **followOffset**: [`Vector`](CONFIG.Vector.md)

和要跟隨的對象保持的距離

#### Defined in

[type.d.ts:418](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L418)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBodyObject](IBodyObject.md).[followed](IBodyObject.md#followed)

#### Defined in

[type.d.ts:211](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L211)

___

### graphics

• **graphics**: `Graphics`

可以設定的圖像

#### Defined in

[type.d.ts:404](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L404)

___

### offset

• **offset**: [`Vector`](CONFIG.Vector.md)

可以設定的圖像

#### Defined in

[type.d.ts:413](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L413)

___

### particleContainer

• **particleContainer**: `Container`\<`DisplayObject`\>

裝粒子特效的容器

#### Defined in

[type.d.ts:423](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L423)

___

### positionOffset

• **positionOffset**: [`Vector`](CONFIG.Vector.md)

顯示容器和鋼體的位置偏差

**`Default`**

```ts
{x:0,y:0}
```

#### Inherited from

[IBodyObject](IBodyObject.md).[positionOffset](IBodyObject.md#positionoffset)

#### Defined in

[type.d.ts:223](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L223)

___

### sprite

• **sprite**: `Sprite`

可以設定的圖像

#### Defined in

[type.d.ts:408](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L408)

## Methods

### clearBody

▸ **clearBody**(): [`IEffect`](IEffect.md)

刪除剛體

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:440](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L440)

___

### clearFollow

▸ **clearFollow**(): [`IEffect`](IEffect.md)

清除要刪除的對象

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:485](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L485)

___

### clearFollowOffset

▸ **clearFollowOffset**(): [`IEffect`](IEffect.md)

清除和要跟隨的對象保持的距離

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:474](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L474)

___

### clearGraphics

▸ **clearGraphics**(): [`IEffect`](IEffect.md)

清除圖像

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:451](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L451)

___

### clearOffset

▸ **clearOffset**(): [`IEffect`](IEffect.md)

清除特效位置的校正

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:495](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L495)

___

### clearSprite

▸ **clearSprite**(): [`IEffect`](IEffect.md)

清除圖像

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:462](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L462)

___

### getEmit

▸ **getEmit**(): `boolean`

獲取發射器是否開始

#### Returns

`boolean`

#### Defined in

[type.d.ts:506](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L506)

___

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Inherited from

[IBodyObject](IBodyObject.md).[getFace](IBodyObject.md#getface)

#### Defined in

[type.d.ts:240](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L240)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Inherited from

[IBodyObject](IBodyObject.md).[getPosition](IBodyObject.md#getposition)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[moveByForce](IBodyObject.md#movebyforce)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[moveByPosition](IBodyObject.md#movebyposition)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[moveByVelocity](IBodyObject.md#movebyvelocity)

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

[IBodyObject](IBodyObject.md).[onBeforeUpdate](IBodyObject.md#onbeforeupdate)

#### Defined in

[type.d.ts:246](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L246)

___

### onFinish

▸ **onFinish**(): `void`

當特效結束的時候呼叫

#### Returns

`void`

#### Defined in

[type.d.ts:521](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L521)

___

### onStart

▸ **onStart**(): `void`

當特效開始的時候呼叫

#### Returns

`void`

#### Defined in

[type.d.ts:516](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L516)

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

[IBodyObject](IBodyObject.md).[onUpdate](IBodyObject.md#onupdate)

#### Defined in

[type.d.ts:252](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L252)

___

### setBody

▸ **setBody**(`body`): [`IEffect`](IEffect.md)

設置鋼體

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Body` |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:435](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L435)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[setBodyPosition](IBodyObject.md#setbodyposition)

#### Defined in

[type.d.ts:297](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L297)

___

### setEmit

▸ **setEmit**(`bool`): [`IEffect`](IEffect.md)

設置是否開始發射器

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:501](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L501)

___

### setEmitter

▸ **setEmitter**(`config`): [`IEffect`](IEffect.md)

設定發射器

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `EmitterConfigV3` |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:429](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L429)

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

[IBodyObject](IBodyObject.md).[setFace](IBodyObject.md#setface)

#### Defined in

[type.d.ts:235](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L235)

___

### setFollow

▸ **setFollow**(`follow`): [`IEffect`](IEffect.md)

設置要跟隨的對象

#### Parameters

| Name | Type |
| :------ | :------ |
| `follow` | [`IBodyObject`](IBodyObject.md) |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:480](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L480)

___

### setFollowOffset

▸ **setFollowOffset**(`followOffset`): [`IEffect`](IEffect.md)

設置和要跟隨的對象保持的距離

#### Parameters

| Name | Type |
| :------ | :------ |
| `followOffset` | [`Vector`](CONFIG.Vector.md) |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:468](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L468)

___

### setGraphics

▸ **setGraphics**(`graphics`): [`IEffect`](IEffect.md)

設置圖像

#### Parameters

| Name | Type |
| :------ | :------ |
| `graphics` | `Graphics` |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:446](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L446)

___

### setOffset

▸ **setOffset**(`offset`): [`IEffect`](IEffect.md)

特效位置的校正

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`Vector`](CONFIG.Vector.md) |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:490](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L490)

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

[IBodyObject](IBodyObject.md).[setPosition](IBodyObject.md#setposition)

#### Defined in

[type.d.ts:269](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L269)

___

### setSprite

▸ **setSprite**(`sprite`): [`IEffect`](IEffect.md)

設置圖像

#### Parameters

| Name | Type |
| :------ | :------ |
| `sprite` | `Sprite` |

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:457](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L457)

___

### start

▸ **start**(): `void`

開始整個特效

#### Returns

`void`

#### Defined in

[type.d.ts:511](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L511)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[stop](IBodyObject.md#stop)

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

[IBodyObject](IBodyObject.md).[switchAnimation](IBodyObject.md#switchanimation)

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

[IBodyObject](IBodyObject.md).[update](IBodyObject.md#update)

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

[IBodyObject](IBodyObject.md).[waitMS](IBodyObject.md#waitms)

#### Defined in

[type.d.ts:282](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L282)
