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

- [body](IBodyObject.md#body)
- [container](IBodyObject.md#container)
- [debugBox](IBodyObject.md#debugbox)
- [face](IBodyObject.md#face)
- [followed](IBodyObject.md#followed)
- [listeners](IBodyObject.md#listeners)
- [maxListener](IBodyObject.md#maxlistener)
- [positionOffset](IBodyObject.md#positionoffset)

### Methods

- [addListener](IBodyObject.md#addlistener)
- [emit](IBodyObject.md#emit)
- [getFace](IBodyObject.md#getface)
- [getListeners](IBodyObject.md#getlisteners)
- [getPosition](IBodyObject.md#getposition)
- [moveByForce](IBodyObject.md#movebyforce)
- [moveByPosition](IBodyObject.md#movebyposition)
- [moveByVelocity](IBodyObject.md#movebyvelocity)
- [on](IBodyObject.md#on)
- [onBeforeUpdate](IBodyObject.md#onbeforeupdate)
- [onUpdate](IBodyObject.md#onupdate)
- [once](IBodyObject.md#once)
- [removeAllListeners](IBodyObject.md#removealllisteners)
- [removeListener](IBodyObject.md#removelistener)
- [setBodyPosition](IBodyObject.md#setbodyposition)
- [setFace](IBodyObject.md#setface)
- [setMaxListeners](IBodyObject.md#setmaxlisteners)
- [setPosition](IBodyObject.md#setposition)
- [stop](IBodyObject.md#stop)
- [update](IBodyObject.md#update)
- [waitMS](IBodyObject.md#waitms)

## Properties

### body

• **body**: `Body`

鋼體

#### Defined in

[type.d.ts:331](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L331)

___

### container

• **container**: `Container`\<`DisplayObject`\>

#### Inherited from

[IBasicObject](IBasicObject.md).[container](IBasicObject.md#container)

#### Defined in

[type.d.ts:275](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L275)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Inherited from

[IBasicObject](IBasicObject.md).[debugBox](IBasicObject.md#debugbox)

#### Defined in

[type.d.ts:256](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L256)

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

[type.d.ts:267](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L267)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBasicObject](IBasicObject.md).[followed](IBasicObject.md#followed)

#### Defined in

[type.d.ts:261](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L261)

___

### listeners

• **listeners**: `Object`

#### Index signature

▪ [event: `string`]: [`IEventListener`](../modules.md#ieventlistener)[]

#### Inherited from

[IBasicObject](IBasicObject.md).[listeners](IBasicObject.md#listeners)

#### Defined in

[type.d.ts:635](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L635)

___

### maxListener

• **maxListener**: `number`

#### Inherited from

[IBasicObject](IBasicObject.md).[maxListener](IBasicObject.md#maxlistener)

#### Defined in

[type.d.ts:636](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L636)

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

[type.d.ts:273](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L273)

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

[IBasicObject](IBasicObject.md).[addListener](IBasicObject.md#addlistener)

#### Defined in

[type.d.ts:657](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L657)

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

[IBasicObject](IBasicObject.md).[emit](IBasicObject.md#emit)

#### Defined in

[type.d.ts:650](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L650)

___

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Inherited from

[IBasicObject](IBasicObject.md).[getFace](IBasicObject.md#getface)

#### Defined in

[type.d.ts:285](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L285)

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

[IBasicObject](IBasicObject.md).[getListeners](IBasicObject.md#getlisteners)

#### Defined in

[type.d.ts:690](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L690)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Inherited from

[IBasicObject](IBasicObject.md).[getPosition](IBasicObject.md#getposition)

#### Defined in

[type.d.ts:307](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L307)

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

[type.d.ts:345](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L345)

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

[type.d.ts:351](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L351)

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

[type.d.ts:357](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L357)

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

[IBasicObject](IBasicObject.md).[on](IBasicObject.md#on)

#### Defined in

[type.d.ts:643](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L643)

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

[IBasicObject](IBasicObject.md).[onBeforeUpdate](IBasicObject.md#onbeforeupdate)

#### Defined in

[type.d.ts:291](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L291)

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

[IBasicObject](IBasicObject.md).[onUpdate](IBasicObject.md#onupdate)

#### Defined in

[type.d.ts:297](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L297)

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

[IBasicObject](IBasicObject.md).[once](IBasicObject.md#once)

#### Defined in

[type.d.ts:664](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L664)

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

[IBasicObject](IBasicObject.md).[removeAllListeners](IBasicObject.md#removealllisteners)

#### Defined in

[type.d.ts:677](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L677)

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

[IBasicObject](IBasicObject.md).[removeListener](IBasicObject.md#removelistener)

#### Defined in

[type.d.ts:671](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L671)

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

[type.d.ts:339](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L339)

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

[type.d.ts:280](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L280)

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

[IBasicObject](IBasicObject.md).[setMaxListeners](IBasicObject.md#setmaxlisteners)

#### Defined in

[type.d.ts:683](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L683)

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

[type.d.ts:313](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L313)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:333](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L333)

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

[IBasicObject](IBasicObject.md).[update](IBasicObject.md#update)

#### Defined in

[type.d.ts:302](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L302)

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

[type.d.ts:320](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L320)
