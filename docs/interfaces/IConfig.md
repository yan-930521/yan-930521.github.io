[streetfight](../README.md) / [Exports](../modules.md) / IConfig

# Interface: IConfig

為設定檔規範格式

## Table of contents

### Properties

- [AssetPath](IConfig.md#assetpath)
- [Character](IConfig.md#character)
- [GameSetting](IConfig.md#gamesetting)
- [GameViewport](IConfig.md#gameviewport)
- [Object](IConfig.md#object)
- [Particle](IConfig.md#particle)

### Methods

- [fetch](IConfig.md#fetch)

## Properties

### AssetPath

• **AssetPath**: `string`

資源的靜態路徑

#### Defined in

[type.d.ts:174](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L174)

___

### Character

• **Character**: [`CharacterConfigs`](CONFIG.CharacterConfigs.md)

玩家控制角色的設定，包含動畫設定

#### Defined in

[type.d.ts:179](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L179)

___

### GameSetting

• **GameSetting**: [`GameSetting`](CONFIG.GameSetting.md)

遊戲內部設定

#### Defined in

[type.d.ts:169](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L169)

___

### GameViewport

• **GameViewport**: [`GameViewport`](CONFIG.GameViewport.md)

跟顯示有關的設定

#### Defined in

[type.d.ts:164](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L164)

___

### Object

• **Object**: [`ObjectConfigs`](CONFIG.ObjectConfigs.md)

靜態物體的設定

#### Defined in

[type.d.ts:184](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L184)

___

### Particle

• **Particle**: `Object`

粒子特效設定

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[type.d.ts:189](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L189)

## Methods

### fetch

▸ **fetch**(): `Promise`\<[`IConfig`](IConfig.md)\>

取得config.json的內容

#### Returns

`Promise`\<[`IConfig`](IConfig.md)\>

#### Defined in

[type.d.ts:196](https://github.com/yan-930521/yan-930521.github.io/blob/b69c0fa/src/type.d.ts#L196)
