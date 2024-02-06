[streetfight](../README.md) / [Exports](../modules.md) / IGameMain

# Interface: IGameMain

主要的遊戲邏輯

## Table of contents

### Properties

- [config](IGameMain.md#config)
- [debug](IGameMain.md#debug)
- [keyInput](IGameMain.md#keyinput)
- [laseUpdateTime](IGameMain.md#laseupdatetime)
- [nowUpdateTime](IGameMain.md#nowupdatetime)
- [pixi](IGameMain.md#pixi)
- [world](IGameMain.md#world)

### Methods

- [getDeltaTime](IGameMain.md#getdeltatime)
- [getMoveData](IGameMain.md#getmovedata)
- [handleKeyInput](IGameMain.md#handlekeyinput)
- [init](IGameMain.md#init)

## Properties

### config

• **config**: [`IConfig`](IConfig.md)

#### Defined in

[type.d.ts:91](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L91)

___

### debug

• **debug**: `boolean`

是否為測試模式(顯示外框、log輸出)

**`Default`**

```ts
false
```

#### Defined in

[type.d.ts:88](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L88)

___

### keyInput

• **keyInput**: [`KeyInput`](CONFIG.KeyInput.md)

事件監聽所接受到的鍵盤輸入

#### Defined in

[type.d.ts:106](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L106)

___

### laseUpdateTime

• **laseUpdateTime**: `number`

上次更新的時間

#### Defined in

[type.d.ts:101](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L101)

___

### nowUpdateTime

• **nowUpdateTime**: `number`

更新當下的時間

#### Defined in

[type.d.ts:97](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L97)

___

### pixi

• **pixi**: `Application`\<`ICanvas`\>

#### Defined in

[type.d.ts:90](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L90)

___

### world

• **world**: [`IWorld`](IWorld.md)

#### Defined in

[type.d.ts:92](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L92)

## Methods

### getDeltaTime

▸ **getDeltaTime**(): `number`

取得上次更新到現在經過的時間

#### Returns

`number`

#### Defined in

[type.d.ts:119](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L119)

___

### getMoveData

▸ **getMoveData**(): `Movement`[]

讀取現有的鍵盤輸入中，並且透過CONFIG.GameSetting.KeyBoardController轉換成合法的操作

#### Returns

`Movement`[]

#### Defined in

[type.d.ts:129](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L129)

___

### handleKeyInput

▸ **handleKeyInput**(): `void`

處理鍵盤輸入的事件

#### Returns

`void`

#### Defined in

[type.d.ts:124](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L124)

___

### init

▸ **init**(`pixi`, `config`): `void`

初始化遊戲邏輯

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixi` | `Application`\<`ICanvas`\> |
| `config` | [`IConfig`](IConfig.md) |

#### Returns

`void`

**`Async`**

#### Defined in

[type.d.ts:114](https://github.com/yan-930521/yan-930521.github.io/blob/897f374/src/type.d.ts#L114)
