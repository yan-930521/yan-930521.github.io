[streetfight](../README.md) / [Exports](../modules.md) / IWorld

# Interface: IWorld

整個物理世界，可以管理所有物件

## Table of contents

### Properties

- [background](IWorld.md#background)
- [character](IWorld.md#character)
- [engine](IWorld.md#engine)
- [ground](IWorld.md#ground)
- [ignoreGravityList](IWorld.md#ignoregravitylist)
- [laseUpdateTime](IWorld.md#laseupdatetime)
- [renderer](IWorld.md#renderer)
- [trainingDummy](IWorld.md#trainingdummy)

### Methods

- [addBody](IWorld.md#addbody)
- [createBackGround](IWorld.md#createbackground)
- [createCharacter](IWorld.md#createcharacter)
- [createCollisionHandler](IWorld.md#createcollisionhandler)
- [createGround](IWorld.md#createground)
- [createTrainingDummy](IWorld.md#createtrainingdummy)
- [init](IWorld.md#init)
- [removeBody](IWorld.md#removebody)
- [setIgnoreGravity](IWorld.md#setignoregravity)
- [update](IWorld.md#update)

## Properties

### background

• **background**: [`IBasicObject`](IBasicObject.md)

#### Defined in

[type.d.ts:92](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L92)

___

### character

• **character**: [`ICharacter`](ICharacter.md)

#### Defined in

[type.d.ts:94](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L94)

___

### engine

• **engine**: `Engine`

Matter的引擎

#### Defined in

[type.d.ts:110](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L110)

___

### ground

• **ground**: [`IBodyObject`](IBodyObject.md)

#### Defined in

[type.d.ts:93](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L93)

___

### ignoreGravityList

• **ignoreGravityList**: `number`[]

需要忽略重力的鋼體ID

#### Defined in

[type.d.ts:100](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L100)

___

### laseUpdateTime

• **laseUpdateTime**: `number`

上次更新的時間

#### Defined in

[type.d.ts:105](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L105)

___

### renderer

• **renderer**: `Render`

Matter的渲染器，用來顯示鋼體

#### Defined in

[type.d.ts:115](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L115)

___

### trainingDummy

• **trainingDummy**: [`ICharacter`](ICharacter.md)

#### Defined in

[type.d.ts:95](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L95)

## Methods

### addBody

▸ **addBody**(`body`): `void`

增加鋼體到物理引擎之中

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Body` |

#### Returns

`void`

#### Defined in

[type.d.ts:137](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L137)

___

### createBackGround

▸ **createBackGround**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:117](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L117)

___

### createCharacter

▸ **createCharacter**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:119](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L119)

___

### createCollisionHandler

▸ **createCollisionHandler**(): `void`

處理碰撞邏輯

#### Returns

`void`

#### Defined in

[type.d.ts:125](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L125)

___

### createGround

▸ **createGround**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:118](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L118)

___

### createTrainingDummy

▸ **createTrainingDummy**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:120](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L120)

___

### init

▸ **init**(): [`IWorld`](IWorld.md)

世界初始化邏輯

#### Returns

[`IWorld`](IWorld.md)

#### Defined in

[type.d.ts:154](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L154)

___

### removeBody

▸ **removeBody**(`body`): `void`

將鋼體從物理引擎中去除

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Body` |

#### Returns

`void`

#### Defined in

[type.d.ts:143](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L143)

___

### setIgnoreGravity

▸ **setIgnoreGravity**(`body`): `void`

將鋼體設置成忽略重力

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `Body` |

#### Returns

`void`

#### Defined in

[type.d.ts:149](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L149)

___

### update

▸ **update**(`deltaMS?`): `void`

更新所有內部組件

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS?` | `number` |

#### Returns

`void`

#### Defined in

[type.d.ts:131](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L131)
