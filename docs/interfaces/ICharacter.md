[streetfight](../README.md) / [Exports](../modules.md) / ICharacter

# Interface: ICharacter

玩家操控的角色

## Hierarchy

- [`IBodyObject`](IBodyObject.md)

  ↳ **`ICharacter`**

## Table of contents

### Properties

- [animationManager](ICharacter.md#animationmanager)
- [body](ICharacter.md#body)
- [characterConfig](ICharacter.md#characterconfig)
- [debugBox](ICharacter.md#debugbox)
- [face](ICharacter.md#face)
- [followed](ICharacter.md#followed)
- [isRunning](ICharacter.md#isrunning)
- [jumpCount](ICharacter.md#jumpcount)
- [keyInput](ICharacter.md#keyinput)
- [movementManager](ICharacter.md#movementmanager)
- [onGround](ICharacter.md#onground)
- [positionOffset](ICharacter.md#positionoffset)

### Methods

- [canIdle](ICharacter.md#canidle)
- [canJump](ICharacter.md#canjump)
- [getFace](ICharacter.md#getface)
- [getPosition](ICharacter.md#getposition)
- [init](ICharacter.md#init)
- [isJumping](ICharacter.md#isjumping)
- [loadAnimations](ICharacter.md#loadanimations)
- [move](ICharacter.md#move)
- [moveByForce](ICharacter.md#movebyforce)
- [moveByPosition](ICharacter.md#movebyposition)
- [moveByVelocity](ICharacter.md#movebyvelocity)
- [onBeforeUpdate](ICharacter.md#onbeforeupdate)
- [onUpdate](ICharacter.md#onupdate)
- [setBodyPosition](ICharacter.md#setbodyposition)
- [setFace](ICharacter.md#setface)
- [setIdle](ICharacter.md#setidle)
- [setPosition](ICharacter.md#setposition)
- [stop](ICharacter.md#stop)
- [switchAnimation](ICharacter.md#switchanimation)
- [update](ICharacter.md#update)
- [waitMS](ICharacter.md#waitms)

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

### followed

• **followed**: [`IBasicObject`](IBasicObject.md)

角色跟隨的物體

#### Inherited from

[IBodyObject](IBodyObject.md).[followed](IBodyObject.md#followed)

#### Defined in

[type.d.ts:211](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L211)

___

### isRunning

• **isRunning**: `boolean`

正在奔跑

**`Default`**

```ts
false
```

#### Defined in

[type.d.ts:343](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L343)

___

### jumpCount

• **jumpCount**: `number`

連跳次數

**`Default`**

```ts
0
```

#### Defined in

[type.d.ts:337](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L337)

___

### keyInput

• **keyInput**: [`KeyInput`](CONFIG.KeyInput.md)

接收GameMain傳來的鍵盤輸入

#### Defined in

[type.d.ts:331](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L331)

___

### movementManager

• **movementManager**: `any`

#### Defined in

[type.d.ts:345](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L345)

___

### onGround

• **onGround**: `boolean`

是否踩在地上

**`Default`**

```ts
true
```

#### Defined in

[type.d.ts:326](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L326)

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

## Methods

### canIdle

▸ **canIdle**(): `boolean`

角色可以進入閒置狀態(default animaion)

#### Returns

`boolean`

#### Defined in

[type.d.ts:369](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L369)

___

### canJump

▸ **canJump**(): `boolean`

是否可以跳躍

#### Returns

`boolean`

#### Defined in

[type.d.ts:384](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L384)

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

[type.d.ts:352](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L352)

___

### isJumping

▸ **isJumping**(): `boolean`

是否正在跳躍中

#### Returns

`boolean`

#### Defined in

[type.d.ts:379](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L379)

___

### loadAnimations

▸ **loadAnimations**(): `Promise`\<`void`\>

從config讀取所有動畫，並且載入，存起來

#### Returns

`Promise`\<`void`\>

#### Defined in

[type.d.ts:357](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L357)

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

[type.d.ts:364](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L364)

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

[type.d.ts:374](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L374)

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
