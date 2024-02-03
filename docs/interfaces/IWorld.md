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

[type.d.ts:134](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L134)

___

### engine

• **engine**: `Engine`

Matter的引擎

#### Defined in

[type.d.ts:125](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L125)

___

### objects

• **objects**: \{ `index`: `number` ; `object`: [`IBasicObject`](IBasicObject.md)  }[]

#### Defined in

[type.d.ts:132](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L132)

___

### renderer

• **renderer**: `Render`

Matter的渲染器，用來顯示鋼體

#### Defined in

[type.d.ts:130](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L130)

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

[type.d.ts:167](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L167)

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

[type.d.ts:145](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L145)

___

### createBackGround

▸ **createBackGround**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:136](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L136)

___

### createCharacter

▸ **createCharacter**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:138](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L138)

___

### createCollisionHandler

▸ **createCollisionHandler**(): `void`

處理碰撞邏輯

#### Returns

`void`

#### Defined in

[type.d.ts:156](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L156)

___

### createGround

▸ **createGround**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:137](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L137)

___

### createTrainingDummy

▸ **createTrainingDummy**(): `void`

#### Returns

`void`

#### Defined in

[type.d.ts:139](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L139)

___

### getCharacters

▸ **getCharacters**(): [`ICharacter`](ICharacter.md)[]

取得所有可動對象

#### Returns

[`ICharacter`](ICharacter.md)[]

#### Defined in

[type.d.ts:183](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L183)

___

### init

▸ **init**(): [`IWorld`](IWorld.md)

世界初始化邏輯

#### Returns

[`IWorld`](IWorld.md)

#### Defined in

[type.d.ts:178](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L178)

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

[type.d.ts:173](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L173)

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

[type.d.ts:151](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L151)

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

[type.d.ts:161](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L161)
