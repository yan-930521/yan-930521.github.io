[streetfight](../README.md) / [Exports](../modules.md) / IBasicObject

# Interface: IBasicObject

每個顯示出來的物件都要具備的屬性

## Hierarchy

- [`IEventEmitter`](IEventEmitter.md)

  ↳ **`IBasicObject`**

  ↳↳ [`IBodyObject`](IBodyObject.md)

## Table of contents

### Properties

- [container](IBasicObject.md#container)
- [debugBox](IBasicObject.md#debugbox)
- [face](IBasicObject.md#face)
- [followed](IBasicObject.md#followed)
- [listeners](IBasicObject.md#listeners)
- [maxListener](IBasicObject.md#maxlistener)
- [positionOffset](IBasicObject.md#positionoffset)

### Methods

- [addListener](IBasicObject.md#addlistener)
- [emit](IBasicObject.md#emit)
- [getFace](IBasicObject.md#getface)
- [getListeners](IBasicObject.md#getlisteners)
- [getPosition](IBasicObject.md#getposition)
- [on](IBasicObject.md#on)
- [onBeforeUpdate](IBasicObject.md#onbeforeupdate)
- [onUpdate](IBasicObject.md#onupdate)
- [once](IBasicObject.md#once)
- [removeAllListeners](IBasicObject.md#removealllisteners)
- [removeListener](IBasicObject.md#removelistener)
- [setFace](IBasicObject.md#setface)
- [setMaxListeners](IBasicObject.md#setmaxlisteners)
- [setPosition](IBasicObject.md#setposition)
- [update](IBasicObject.md#update)
- [waitMS](IBasicObject.md#waitms)

## Properties

### container

• **container**: `Container`\<`DisplayObject`\>

#### Defined in

[type.d.ts:261](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L261)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

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

#### Defined in

[type.d.ts:253](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L253)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Defined in

[type.d.ts:247](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L247)

___

### listeners

• **listeners**: `Object`

#### Index signature

▪ [event: `string`]: [`IEventListener`](../modules.md#ieventlistener)[]

#### Inherited from

[IEventEmitter](IEventEmitter.md).[listeners](IEventEmitter.md#listeners)

#### Defined in

[type.d.ts:621](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L621)

___

### maxListener

• **maxListener**: `number`

#### Inherited from

[IEventEmitter](IEventEmitter.md).[maxListener](IEventEmitter.md#maxlistener)

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

[IEventEmitter](IEventEmitter.md).[addListener](IEventEmitter.md#addlistener)

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

[IEventEmitter](IEventEmitter.md).[emit](IEventEmitter.md#emit)

#### Defined in

[type.d.ts:636](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L636)

___

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

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

[IEventEmitter](IEventEmitter.md).[getListeners](IEventEmitter.md#getlisteners)

#### Defined in

[type.d.ts:676](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L676)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Defined in

[type.d.ts:293](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L293)

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

[IEventEmitter](IEventEmitter.md).[on](IEventEmitter.md#on)

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

[IEventEmitter](IEventEmitter.md).[once](IEventEmitter.md#once)

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

[IEventEmitter](IEventEmitter.md).[removeAllListeners](IEventEmitter.md#removealllisteners)

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

[IEventEmitter](IEventEmitter.md).[removeListener](IEventEmitter.md#removelistener)

#### Defined in

[type.d.ts:657](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L657)

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

[IEventEmitter](IEventEmitter.md).[setMaxListeners](IEventEmitter.md#setmaxlisteners)

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

#### Defined in

[type.d.ts:299](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L299)

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

#### Defined in

[type.d.ts:306](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L306)
