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

[type.d.ts:317](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L317)

___

### container

• **container**: `Container`\<`DisplayObject`\>

#### Inherited from

[IBasicObject](IBasicObject.md).[container](IBasicObject.md#container)

#### Defined in

[type.d.ts:261](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L261)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Inherited from

[IBasicObject](IBasicObject.md).[debugBox](IBasicObject.md#debugbox)

#### Defined in

[type.d.ts:242](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L242)

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

[type.d.ts:253](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L253)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBasicObject](IBasicObject.md).[followed](IBasicObject.md#followed)

#### Defined in

[type.d.ts:247](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L247)

___

### listeners

• **listeners**: `Object`

#### Index signature

▪ [event: `string`]: [`IEventListener`](../modules.md#ieventlistener)[]

#### Inherited from

[IBasicObject](IBasicObject.md).[listeners](IBasicObject.md#listeners)

#### Defined in

[type.d.ts:621](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L621)

___

### maxListener

• **maxListener**: `number`

#### Inherited from

[IBasicObject](IBasicObject.md).[maxListener](IBasicObject.md#maxlistener)

#### Defined in

[type.d.ts:622](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L622)

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

[type.d.ts:259](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L259)

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

[type.d.ts:643](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L643)

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

[type.d.ts:636](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L636)

___

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Inherited from

[IBasicObject](IBasicObject.md).[getFace](IBasicObject.md#getface)

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

[IBasicObject](IBasicObject.md).[getListeners](IBasicObject.md#getlisteners)

#### Defined in

[type.d.ts:676](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L676)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Inherited from

[IBasicObject](IBasicObject.md).[getPosition](IBasicObject.md#getposition)

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

[IBasicObject](IBasicObject.md).[on](IBasicObject.md#on)

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

[IBasicObject](IBasicObject.md).[onBeforeUpdate](IBasicObject.md#onbeforeupdate)

#### Defined in

[type.d.ts:277](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L277)

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

[IBasicObject](IBasicObject.md).[once](IBasicObject.md#once)

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

[IBasicObject](IBasicObject.md).[removeAllListeners](IBasicObject.md#removealllisteners)

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

[IBasicObject](IBasicObject.md).[removeListener](IBasicObject.md#removelistener)

#### Defined in

[type.d.ts:657](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L657)

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

[type.d.ts:325](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L325)

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

[type.d.ts:266](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L266)

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

[type.d.ts:669](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L669)

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

[type.d.ts:299](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L299)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

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

[IBasicObject](IBasicObject.md).[update](IBasicObject.md#update)

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

[IBasicObject](IBasicObject.md).[waitMS](IBasicObject.md#waitms)

#### Defined in

[type.d.ts:306](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L306)
