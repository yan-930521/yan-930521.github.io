[streetfight](../README.md) / [Exports](../modules.md) / IWorld

# Interface: IWorld

整個物理世界，可以管理所有物件

## Table of contents

### Properties

- [container](IWorld.md#container)
- [engine](IWorld.md#engine)
- [objects](IWorld.md#objects)
- [renderer](IWorld.md#renderer)

### Methods

- [addBody](IWorld.md#addbody)
- [addObjectToWorld](IWorld.md#addobjecttoworld)
- [createBackGround](IWorld.md#createbackground)
- [createCharacter](IWorld.md#createcharacter)
- [createCollisionHandler](IWorld.md#createcollisionhandler)
- [createGround](IWorld.md#createground)
- [createTrainingDummy](IWorld.md#createtrainingdummy)
- [getCharacters](IWorld.md#getcharacters)
- [init](IWorld.md#init)
- [removeBody](IWorld.md#removebody)
- [removeObjectToWorld](IWorld.md#removeobjecttoworld)
- [update](IWorld.md#update)

## Properties

### container

• **container**: `Container`\<`DisplayObject`\>

#### Defined in

[type.d.ts:148](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L148)

___

### engine

• **engine**: `Engine`

Matter的引擎

#### Defined in

[type.d.ts:139](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L139)

___

### objects

• **objects**: \{ `index`: `number` ; `object`: [`IBasicObject`](IBasicObject.md)  }[]

#### Defined in

[type.d.ts:146](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L146)

___

### renderer

• **renderer**: `Render`

Matter的渲染器，用來顯示鋼體

#### Defined in

[type.d.ts:144](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L144)

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

[type.d.ts:181](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L181)

___

### addObjectToWorld

▸ **addObjectToWorld**(`object`): `void`

將物體加入世界

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`IBasicObject`](IBasicObject.md) \| [`IBodyObject`](IBodyObject.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:159](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L159)

___

### createBackGround

▸ **createBackGround**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:150](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L150)

___

### createCharacter

▸ **createCharacter**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:152](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L152)

___

### createCollisionHandler

▸ **createCollisionHandler**(): `void`

處理碰撞邏輯

#### Returns

`void`

#### Defined in

[type.d.ts:170](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L170)

___

### createGround

▸ **createGround**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:151](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L151)

___

### createTrainingDummy

▸ **createTrainingDummy**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:153](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L153)

___

### getCharacters

▸ **getCharacters**(): [`ICharacter`](ICharacter.md)[]

取得所有可動對象

#### Returns

[`ICharacter`](ICharacter.md)[]

#### Defined in

[type.d.ts:197](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L197)

___

### init

▸ **init**(): [`IWorld`](IWorld.md)

世界初始化邏輯

#### Returns

[`IWorld`](IWorld.md)

#### Defined in

[type.d.ts:192](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L192)

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

[type.d.ts:187](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L187)

___

### removeObjectToWorld

▸ **removeObjectToWorld**(`object`): `void`

將物體移出世界

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`IBasicObject`](IBasicObject.md) \| [`IBodyObject`](IBodyObject.md) |

#### Returns

`void`

#### Defined in

[type.d.ts:165](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L165)

___

### update

▸ **update**(`deltaMS`): `void`

更新所有內部組件

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaMS` | `number` |

#### Returns

`void`

#### Defined in

[type.d.ts:175](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L175)
