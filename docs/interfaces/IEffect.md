[streetfight](../README.md) / [Exports](../modules.md) / IEffect

# Interface: IEffect

特效

## Hierarchy

- [`IBodyObject`](IBodyObject.md)

  ↳ **`IEffect`**

## Table of contents

### Properties

- [body](IEffect.md#body)
- [container](IEffect.md#container)
- [debugBox](IEffect.md#debugbox)
- [emitter](IEffect.md#emitter)
- [face](IEffect.md#face)
- [follow](IEffect.md#follow)
- [followOffset](IEffect.md#followoffset)
- [followed](IEffect.md#followed)
- [graphics](IEffect.md#graphics)
- [listeners](IEffect.md#listeners)
- [maxListener](IEffect.md#maxlistener)
- [offset](IEffect.md#offset)
- [particleContainer](IEffect.md#particlecontainer)
- [positionOffset](IEffect.md#positionoffset)
- [sprite](IEffect.md#sprite)

### Methods

- [addListener](IEffect.md#addlistener)
- [clearBody](IEffect.md#clearbody)
- [clearFollow](IEffect.md#clearfollow)
- [clearFollowOffset](IEffect.md#clearfollowoffset)
- [clearGraphics](IEffect.md#cleargraphics)
- [clearOffset](IEffect.md#clearoffset)
- [clearSprite](IEffect.md#clearsprite)
- [emit](IEffect.md#emit)
- [getEmit](IEffect.md#getemit)
- [getFace](IEffect.md#getface)
- [getListeners](IEffect.md#getlisteners)
- [getPosition](IEffect.md#getposition)
- [moveByForce](IEffect.md#movebyforce)
- [moveByPosition](IEffect.md#movebyposition)
- [moveByVelocity](IEffect.md#movebyvelocity)
- [on](IEffect.md#on)
- [onBeforeUpdate](IEffect.md#onbeforeupdate)
- [onFinish](IEffect.md#onfinish)
- [onStart](IEffect.md#onstart)
- [onUpdate](IEffect.md#onupdate)
- [once](IEffect.md#once)
- [removeAllListeners](IEffect.md#removealllisteners)
- [removeListener](IEffect.md#removelistener)
- [setBody](IEffect.md#setbody)
- [setBodyPosition](IEffect.md#setbodyposition)
- [setEmit](IEffect.md#setemit)
- [setEmitter](IEffect.md#setemitter)
- [setFace](IEffect.md#setface)
- [setFollow](IEffect.md#setfollow)
- [setFollowOffset](IEffect.md#setfollowoffset)
- [setGraphics](IEffect.md#setgraphics)
- [setMaxListeners](IEffect.md#setmaxlisteners)
- [setOffset](IEffect.md#setoffset)
- [setPosition](IEffect.md#setposition)
- [setSprite](IEffect.md#setsprite)
- [start](IEffect.md#start)
- [stop](IEffect.md#stop)
- [update](IEffect.md#update)
- [waitMS](IEffect.md#waitms)

## Properties

### body

• **body**: `Body`

鋼體

#### Inherited from

[IBodyObject](IBodyObject.md).[body](IBodyObject.md#body)

#### Defined in

[type.d.ts:317](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L317)

___

### container

• **container**: `Container`\<`DisplayObject`\>

#### Inherited from

[IBodyObject](IBodyObject.md).[container](IBodyObject.md#container)

#### Defined in

[type.d.ts:261](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L261)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Inherited from

[IBodyObject](IBodyObject.md).[debugBox](IBodyObject.md#debugbox)

#### Defined in

[type.d.ts:242](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L242)

___

### emitter

• **emitter**: `Emitter`

粒子特效的發射器

#### Defined in

[type.d.ts:443](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L443)

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

[type.d.ts:253](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L253)

___

### follow

• **follow**: [`IBodyObject`](IBodyObject.md)

角色跟隨的物體

#### Defined in

[type.d.ts:448](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L448)

___

### followOffset

• **followOffset**: [`Vector`](CONFIG.Vector.md)

和要跟隨的對象保持的距離

#### Defined in

[type.d.ts:467](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L467)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBodyObject](IBodyObject.md).[followed](IBodyObject.md#followed)

#### Defined in

[type.d.ts:247](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L247)

___

### graphics

• **graphics**: `Graphics`

可以設定的圖像

#### Defined in

[type.d.ts:453](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L453)

___

### listeners

• **listeners**: `Object`

#### Index signature

▪ [event: `string`]: [`IEventListener`](../modules.md#ieventlistener)[]

#### Inherited from

[IBodyObject](IBodyObject.md).[listeners](IBodyObject.md#listeners)

#### Defined in

[type.d.ts:621](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L621)

___

### maxListener

• **maxListener**: `number`

#### Inherited from

[IBodyObject](IBodyObject.md).[maxListener](IBodyObject.md#maxlistener)

#### Defined in

[type.d.ts:622](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L622)

___

### offset

• **offset**: [`Vector`](CONFIG.Vector.md)

可以設定的圖像

#### Defined in

[type.d.ts:462](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L462)

___

### particleContainer

• **particleContainer**: `Container`\<`DisplayObject`\>

裝粒子特效的容器

#### Defined in

[type.d.ts:472](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L472)

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

[type.d.ts:259](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L259)

___

### sprite

• **sprite**: `Sprite`

可以設定的圖像

#### Defined in

[type.d.ts:457](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L457)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): `void`

`on` 的同名別名函數。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | 事件名 |
| `listener` | [`IEventListener`](../modules.md#ieventlistener) | 回調函數 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[addListener](IBodyObject.md#addlistener)

#### Defined in

[type.d.ts:643](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L643)

___

### clearBody

▸ **clearBody**(): [`IEffect`](IEffect.md)

刪除剛體

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:489](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L489)

___

### clearFollow

▸ **clearFollow**(): [`IEffect`](IEffect.md)

清除要刪除的對象

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:534](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L534)

___

### clearFollowOffset

▸ **clearFollowOffset**(): [`IEffect`](IEffect.md)

清除和要跟隨的對象保持的距離

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:523](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L523)

___

### clearGraphics

▸ **clearGraphics**(): [`IEffect`](IEffect.md)

清除圖像

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:500](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L500)

___

### clearOffset

▸ **clearOffset**(): [`IEffect`](IEffect.md)

清除特效位置的校正

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:544](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L544)

___

### clearSprite

▸ **clearSprite**(): [`IEffect`](IEffect.md)

清除圖像

#### Returns

[`IEffect`](IEffect.md)

#### Defined in

[type.d.ts:511](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L511)

___

### emit

▸ **emit**(`event`, `...args`): `void`

按照監聽器的順序執行每個監聽器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | 事件名 |
| `...args` | `any`[] | 附帶的參數 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[emit](IBodyObject.md#emit)

#### Defined in

[type.d.ts:636](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L636)

___

### getEmit

▸ **getEmit**(): `boolean`

獲取發射器是否開始

#### Returns

`boolean`

#### Defined in

[type.d.ts:555](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L555)

___

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Inherited from

[IBodyObject](IBodyObject.md).[getFace](IBodyObject.md#getface)

#### Defined in

[type.d.ts:271](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L271)

___

### getListeners

▸ **getListeners**(`event`): [`IEventListener`](../modules.md#ieventlistener)[]

返回指定事件的監聽器陣列。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | 事件名 |

#### Returns

[`IEventListener`](../modules.md#ieventlistener)[]

監聽器陣列

#### Inherited from

[IBodyObject](IBodyObject.md).[getListeners](IBodyObject.md#getlisteners)

#### Defined in

[type.d.ts:676](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L676)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Inherited from

[IBodyObject](IBodyObject.md).[getPosition](IBodyObject.md#getposition)

#### Defined in

[type.d.ts:293](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L293)

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

[type.d.ts:331](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L331)

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

[type.d.ts:337](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L337)

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

[type.d.ts:343](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L343)

___

### on

▸ **on**(`event`, `listener`): `void`

為指定事件註冊一個監聽器，接受一個事件名和一個回調函數。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | 事件名 |
| `listener` | [`IEventListener`](../modules.md#ieventlistener) | 回調函數 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[on](IBodyObject.md#on)

#### Defined in

[type.d.ts:629](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L629)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`deltaMS`): `void`

在更新前呼叫
為預設的更新函式

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[onBeforeUpdate](IBodyObject.md#onbeforeupdate)

#### Defined in

[type.d.ts:277](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L277)

___

### onFinish

▸ **onFinish**(): `void`

當特效結束的時候呼叫

#### Returns

`void`

#### Defined in

[type.d.ts:570](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L570)

___

### onStart

▸ **onStart**(): `void`

當特效開始的時候呼叫

#### Returns

`void`

#### Defined in

[type.d.ts:565](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L565)

___

### onUpdate

▸ **onUpdate**(`deltaMS`): `void`

在更新時呼叫
為預設的更新函式

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[onUpdate](IBodyObject.md#onupdate)

#### Defined in

[type.d.ts:283](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L283)

___

### once

▸ **once**(`event`, `listener`): `void`

和 `on` 類似，但只觸發一次，隨後便解除事件監聽。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | 事件名 |
| `listener` | [`IEventListener`](../modules.md#ieventlistener) | 回調函數 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[once](IBodyObject.md#once)

#### Defined in

[type.d.ts:650](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L650)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `void`

移除指定事件的所有監聽回調。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` | 要移除監聽器的事件名，如果不提供則移除所有事件的監聽器。 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[removeAllListeners](IBodyObject.md#removealllisteners)

#### Defined in

[type.d.ts:663](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L663)

___

### removeListener

▸ **removeListener**(`event`, `listener`): `void`

移除指定事件的某個監聽回調。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | 事件名 |
| `listener` | [`IEventListener`](../modules.md#ieventlistener) | 要移除的回調函數 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[removeListener](IBodyObject.md#removelistener)

#### Defined in

[type.d.ts:657](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L657)

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

[type.d.ts:484](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L484)

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

[type.d.ts:325](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L325)

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

[type.d.ts:550](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L550)

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

[type.d.ts:478](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L478)

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

[type.d.ts:266](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L266)

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

[type.d.ts:529](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L529)

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

[type.d.ts:517](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L517)

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

[type.d.ts:495](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L495)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `void`

用於提高監聽器的默認限制數量。（默認 10 個監聽回調會產生警告）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | 監聽器的最大限制數量 |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[setMaxListeners](IBodyObject.md#setmaxlisteners)

#### Defined in

[type.d.ts:669](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L669)

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

[type.d.ts:539](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L539)

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

[type.d.ts:299](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L299)

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

[type.d.ts:506](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L506)

___

### start

▸ **start**(): `void`

開始整個特效

#### Returns

`void`

#### Defined in

[type.d.ts:560](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L560)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[stop](IBodyObject.md#stop)

#### Defined in

[type.d.ts:319](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L319)

___

### update

▸ **update**(`deltaMS`): `void`

手動呼叫更新

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[update](IBodyObject.md#update)

#### Defined in

[type.d.ts:288](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L288)

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

[type.d.ts:306](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L306)
