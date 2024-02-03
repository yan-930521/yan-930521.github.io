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

- [checkConfig](IConfig.md#checkconfig)
- [fetch](IConfig.md#fetch)

## Properties

### AssetPath

• **AssetPath**: `string`

資源的靜態路徑

#### Defined in

[type.d.ts:204](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L204)

___

### Character

• **Character**: [`CharacterConfigs`](CONFIG.CharacterConfigs.md)

玩家控制角色的設定，包含動畫設定

#### Defined in

[type.d.ts:209](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L209)

___

### GameSetting

• **GameSetting**: [`GameSetting`](CONFIG.GameSetting.md)

遊戲內部設定

#### Defined in

[type.d.ts:199](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L199)

___

### GameViewport

• **GameViewport**: [`GameViewport`](CONFIG.GameViewport.md)

跟顯示有關的設定

#### Defined in

[type.d.ts:194](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L194)

___

### Object

• **Object**: [`ObjectConfigs`](CONFIG.ObjectConfigs.md)

靜態物體的設定

#### Defined in

[type.d.ts:214](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L214)

___

### Particle

• **Particle**: `Object`

粒子特效設定

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[type.d.ts:219](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L219)

## Methods

### checkConfig

▸ **checkConfig**(`subConfig`, `data`): `void`

檢查資料格式是否正確

#### Parameters

| Name | Type |
| :------ | :------ |
| `subConfig` | `any` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[type.d.ts:232](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L232)

___

### fetch

▸ **fetch**(): `Promise`\<[`IConfig`](IConfig.md)\>

取得config.json的內容

#### Returns

`Promise`\<[`IConfig`](IConfig.md)\>

**`Async`**

#### Defined in

[type.d.ts:227](https://github.com/yan-930521/yan-930521.github.io/blob/b3ead09/src/type.d.ts#L227)
