[streetfight](../README.md) / [Exports](../modules.md) / ICharacter

# Interface: ICharacter

玩家操控的角色，不可直接調用

## Hierarchy

- [`IBodyObject`](IBodyObject.md)

  ↳ **`ICharacter`**

## Table of contents

### Properties

- [animationManager](ICharacter.md#animationmanager)
- [body](ICharacter.md#body)
- [characterConfig](ICharacter.md#characterconfig)
- [container](ICharacter.md#container)
- [debugBox](ICharacter.md#debugbox)
- [face](ICharacter.md#face)
- [followed](ICharacter.md#followed)
- [isRunning](ICharacter.md#isrunning)
- [jumpCount](ICharacter.md#jumpcount)
- [keyInput](ICharacter.md#keyinput)
- [listeners](ICharacter.md#listeners)
- [maxListener](ICharacter.md#maxlistener)
- [movementManager](ICharacter.md#movementmanager)
- [onGround](ICharacter.md#onground)
- [positionOffset](ICharacter.md#positionoffset)

### Methods

- [addListener](ICharacter.md#addlistener)
- [canIdle](ICharacter.md#canidle)
- [canJump](ICharacter.md#canjump)
- [emit](ICharacter.md#emit)
- [getFace](ICharacter.md#getface)
- [getListeners](ICharacter.md#getlisteners)
- [getPosition](ICharacter.md#getposition)
- [init](ICharacter.md#init)
- [isJumping](ICharacter.md#isjumping)
- [loadAnimations](ICharacter.md#loadanimations)
- [move](ICharacter.md#move)
- [moveByForce](ICharacter.md#movebyforce)
- [moveByPosition](ICharacter.md#movebyposition)
- [moveByVelocity](ICharacter.md#movebyvelocity)
- [on](ICharacter.md#on)
- [onBeforeUpdate](ICharacter.md#onbeforeupdate)
- [onUpdate](ICharacter.md#onupdate)
- [once](ICharacter.md#once)
- [removeAllListeners](ICharacter.md#removealllisteners)
- [removeListener](ICharacter.md#removelistener)
- [setBodyPosition](ICharacter.md#setbodyposition)
- [setFace](ICharacter.md#setface)
- [setIdle](ICharacter.md#setidle)
- [setMaxListeners](ICharacter.md#setmaxlisteners)
- [setPosition](ICharacter.md#setposition)
- [stop](ICharacter.md#stop)
- [switchAnimation](ICharacter.md#switchanimation)
- [update](ICharacter.md#update)
- [waitMS](ICharacter.md#waitms)

## Properties

### animationManager

• **animationManager**: `AnimationManager`

動畫系統

#### Defined in

[type.d.ts:396](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L396)

___

### body

• **body**: `Body`

鋼體

#### Inherited from

[IBodyObject](IBodyObject.md).[body](IBodyObject.md#body)

#### Defined in

[type.d.ts:331](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L331)

___

### characterConfig

• **characterConfig**: [`CharacterConfig`](CONFIG.CharacterConfig.md)

角色的設定

#### Defined in

[type.d.ts:390](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L390)

___

### container

• **container**: `Container`\<`DisplayObject`\>

#### Inherited from

[IBodyObject](IBodyObject.md).[container](IBodyObject.md#container)

#### Defined in

[type.d.ts:275](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L275)

___

### debugBox

• **debugBox**: `Graphics`

紅色外框，用來除錯

#### Inherited from

[IBodyObject](IBodyObject.md).[debugBox](IBodyObject.md#debugbox)

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

[IBodyObject](IBodyObject.md).[face](IBodyObject.md#face)

#### Defined in

[type.d.ts:267](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L267)

___

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBodyObject](IBodyObject.md).[followed](IBodyObject.md#followed)

#### Defined in

[type.d.ts:261](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L261)

___

### isRunning

• **isRunning**: `boolean`

正在奔跑

**`Default`**

```ts
false
```

#### Defined in

[type.d.ts:385](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L385)

___

### jumpCount

• **jumpCount**: `number`

連跳次數

**`Default`**

```ts
0
```

#### Defined in

[type.d.ts:379](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L379)

___

### keyInput

• **keyInput**: [`KeyInput`](CONFIG.KeyInput.md)

接收GameMain傳來的鍵盤輸入

#### Defined in

[type.d.ts:373](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L373)

___

### listeners

• **listeners**: `Object`

#### Index signature

▪ [event: `string`]: [`IEventListener`](../modules.md#ieventlistener)[]

#### Inherited from

[IBodyObject](IBodyObject.md).[listeners](IBodyObject.md#listeners)

#### Defined in

[type.d.ts:635](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L635)

___

### maxListener

• **maxListener**: `number`

#### Inherited from

[IBodyObject](IBodyObject.md).[maxListener](IBodyObject.md#maxlistener)

#### Defined in

[type.d.ts:636](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L636)

___

### movementManager

• **movementManager**: `MovementManager`

操作系統

#### Defined in

[type.d.ts:401](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L401)

___

### onGround

• **onGround**: `boolean`

是否踩在地上

**`Default`**

```ts
true
```

#### Defined in

[type.d.ts:368](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L368)

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

[IBodyObject](IBodyObject.md).[addListener](IBodyObject.md#addlistener)

#### Defined in

[type.d.ts:657](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L657)

___

### canIdle

▸ **canIdle**(): `boolean`

角色可以進入閒置狀態(default animaion)

#### Returns

`boolean`

#### Defined in

[type.d.ts:425](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L425)

___

### canJump

▸ **canJump**(): `boolean`

是否可以跳躍

#### Returns

`boolean`

#### Defined in

[type.d.ts:440](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L440)

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

[type.d.ts:650](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L650)

___

### getFace

▸ **getFace**(): `Face`

取的當前的面向

#### Returns

`Face`

#### Inherited from

[IBodyObject](IBodyObject.md).[getFace](IBodyObject.md#getface)

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

[IBodyObject](IBodyObject.md).[getListeners](IBodyObject.md#getlisteners)

#### Defined in

[type.d.ts:690](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L690)

___

### getPosition

▸ **getPosition**(): [`Vector`](CONFIG.Vector.md)

取得實際位置

#### Returns

[`Vector`](CONFIG.Vector.md)

#### Inherited from

[IBodyObject](IBodyObject.md).[getPosition](IBodyObject.md#getposition)

#### Defined in

[type.d.ts:307](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L307)

___

### init

▸ **init**(`initX?`, `initY?`): [`ICharacter`](ICharacter.md)

角色的初始化邏輯

#### Parameters

| Name | Type |
| :------ | :------ |
| `initX?` | `number` |
| `initY?` | `number` |

#### Returns

[`ICharacter`](ICharacter.md)

#### Defined in

[type.d.ts:408](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L408)

___

### isJumping

▸ **isJumping**(): `boolean`

是否正在跳躍中

#### Returns

`boolean`

#### Defined in

[type.d.ts:435](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L435)

___

### loadAnimations

▸ **loadAnimations**(): `Promise`\<`void`\>

從config讀取所有動畫，並且載入，存起來，需要實作

#### Returns

`Promise`\<`void`\>

#### Defined in

[type.d.ts:413](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L413)

___

### move

▸ **move**(`movements`, `deltaTime`): `void`

每一帧更新時，玩家對角色的操作輸入

#### Parameters

| Name | Type |
| :------ | :------ |
| `movements` | `Movement`[] |
| `deltaTime` | `number` |

#### Returns

`void`

#### Defined in

[type.d.ts:420](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L420)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[moveByPosition](IBodyObject.md#movebyposition)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[moveByVelocity](IBodyObject.md#movebyvelocity)

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

[IBodyObject](IBodyObject.md).[on](IBodyObject.md#on)

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

[IBodyObject](IBodyObject.md).[onBeforeUpdate](IBodyObject.md#onbeforeupdate)

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

[IBodyObject](IBodyObject.md).[onUpdate](IBodyObject.md#onupdate)

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

[IBodyObject](IBodyObject.md).[once](IBodyObject.md#once)

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

[IBodyObject](IBodyObject.md).[removeAllListeners](IBodyObject.md#removealllisteners)

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

[IBodyObject](IBodyObject.md).[removeListener](IBodyObject.md#removelistener)

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

#### Inherited from

[IBodyObject](IBodyObject.md).[setBodyPosition](IBodyObject.md#setbodyposition)

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

[IBodyObject](IBodyObject.md).[setFace](IBodyObject.md#setface)

#### Defined in

[type.d.ts:280](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L280)

___

### setIdle

▸ **setIdle**(`bool`): `void`

設置是否閒置

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

`void`

#### Defined in

[type.d.ts:430](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L430)

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

[IBodyObject](IBodyObject.md).[setPosition](IBodyObject.md#setposition)

#### Defined in

[type.d.ts:313](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L313)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IBodyObject](IBodyObject.md).[stop](IBodyObject.md#stop)

#### Defined in

[type.d.ts:333](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L333)

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

[type.d.ts:447](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L447)

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

[IBodyObject](IBodyObject.md).[waitMS](IBodyObject.md#waitms)

#### Defined in

[type.d.ts:320](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L320)
