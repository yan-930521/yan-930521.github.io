[streetfight](../README.md) / [Exports](../modules.md) / IEventEmitter

# Interface: IEventEmitter

## Hierarchy

- **`IEventEmitter`**

  ↳ [`IBasicObject`](IBasicObject.md)

## Table of contents

### Properties

- [listeners](IEventEmitter.md#listeners)
- [maxListener](IEventEmitter.md#maxlistener)

### Methods

- [addListener](IEventEmitter.md#addlistener)
- [emit](IEventEmitter.md#emit)
- [getListeners](IEventEmitter.md#getlisteners)
- [on](IEventEmitter.md#on)
- [once](IEventEmitter.md#once)
- [removeAllListeners](IEventEmitter.md#removealllisteners)
- [removeListener](IEventEmitter.md#removelistener)
- [setMaxListeners](IEventEmitter.md#setmaxlisteners)

## Properties

### listeners

• **listeners**: `Object`

#### Index signature

▪ [event: `string`]: [`IEventListener`](../modules.md#ieventlistener)[]

#### Defined in

[type.d.ts:621](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L621)

___

### maxListener

• **maxListener**: `number`

#### Defined in

[type.d.ts:622](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L622)

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

#### Defined in

[type.d.ts:636](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L636)

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

#### Defined in

[type.d.ts:676](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L676)

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

#### Defined in

[type.d.ts:629](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L629)

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

#### Defined in

[type.d.ts:657](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L657)

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

#### Defined in

[type.d.ts:669](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L669)
