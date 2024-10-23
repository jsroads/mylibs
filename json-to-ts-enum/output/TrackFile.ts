
export enum TrackUIOpenType {
    /* 等级基金界面打开 */
    LevelFund = "LevelFund",
    /* 赛季BP界面打开 */
    SeasonBP = "SeasonBP",
    /* 赛季BP2级界面打开 */
    SeasonInBP = "SeasonInBP",
    /* 毒蛇礼包3界面打开 */
    SnakeGift = "SnakeGift",
    /* 场外月卡界面打开 */
    ExternalMonthlyPass = "ExternalMonthlyPass",
    /* A圣物7日界面打开 */
    AArtifactBP = "AArtifactBP",
    /* 橙装礼包界面 打开 */
    EpicGear = "EpicGear",
    /* 每日商店界面打开 */
    DailyShop = "DailyShop",
    /* 终生钻石界面打开 */
    LifetimeDiamond = "LifetimeDiamond",
    /* 流派自选礼包界面打开 */
    PetFactionChoice = "PetFactionChoice",
    /* A圣物返场界面打开 */
    AArtifactReturn = "AArtifactReturn",
    /* 装备1基金界面打开 */
    LevelEpicFund1 = "LevelEpicFund1",
    /* 装备2基金界面打开 */
    LevelEpicFund2 = "LevelEpicFund2",
    /* 生命周期锤子礼包界面打开 */
    EternalHammer = "EternalHammer",
    /* 固定时间锤子礼包界面打开 */
    EventHammer = "EventHammer",
    /* 198圣物+蛇礼包界面打开 */
    Artifact198A = "Artifact198A",
    /* 爬塔基金界面打开 */
    TowerFund = "TowerFund",
    /* 宠物商店界面打开 */
    PetShop = "PetShop",
    /* 宠物bp界面打开 */
    PetBP = "PetBP",
    /* 流派宠物商店界面打开 */
    FactionPetShop = "FactionPetShop",
    /* 流派宠物UP累抽界面打开 */
    FactionPetCumulativeDraw = "FactionPetCumulativeDraw",
    /* 竞技场商店界面打开 */
    ArenaStore = "ArenaStore",
    /* 竞技场入场券界面打开 */
    ArenaTicket = "ArenaTicket",
    /* 竞技场vip界面打开 */
    ArenaVIP = "ArenaVIP",
    /* 竞技场大转盘侧边栏打开 */
    ArenaSpinSidebar = "ArenaSpinSidebar",
    /* 挖矿礼包打开 */
    Miningvip = "Miningvip",
    /* 挖矿商店打开 */
    MiningShop = "MiningShop",
    /* 章节基金界面打开 */
    ChapterFund = "ChapterFund",
    /* 嘉年华商店界面 */
    CarnivalShop = "CarnivalShop",
    /* bingo商店界面 */
    BingoShop = "BingoShop",
    /* 大富翁商店界面 */
    MonopolyShop = "MonopolyShop",
    /* 翻牌商店主界面 */
    FlipShop = "FlipShop",
    /* 6元新手礼包界面打开 */
    StarterPack6 = "StarterPack6",
    /* 30元新手礼包界面打开 */
    StarterPack30 = "StarterPack30",
    /* 68元新手礼包界面打开 */
    StarterPack68 = "StarterPack68",
    /* 圣物返场礼包界面打开 */
    SArtifactReturn = "SArtifactReturn",
    /* 章节礼包界面弹出 */
    ChapterPack = "ChapterPack",
    /* 复仇礼包界面弹出 */
    RevengePack = "RevengePack",
    /* 场内高级月卡界面打开 */
    InAdvancedMonthlyPass = "InAdvancedMonthlyPass",
    /* 场内至尊月卡界面打开 */
    InSupremeMonthlyPass = "InSupremeMonthlyPass",
    /* 98元S圣物bp界面打开 */
    SartifactBP98 = "SartifactBP98",
    /* 128元S圣物bp界面打开 */
    SartifactBP128 = "SartifactBP128",
    /* 自选商店界面打开 */
    OptionalShop = "OptionalShop",
    /* 钻石大促打开 */
    DiamondShop = "DiamondShop",
    /* 皮肤打开 */
    Skin98 = "Skin98",
    /* 争霸赛VIP打开 */
    BloodlineVIP = "BloodlineVIP",
    /* 血脉密保打开 */
    BloodlineSecretTreasure = "BloodlineSecretTreasure",
    /* 小精灵打开 */
    Genie = "Genie",
    /* 每日登录面版打开 */
    NewSignIn = "NewSignIn",
    /* 68元神龙礼包打开 */
    Dragon68 = "Dragon68",
    /* 98元神龙礼包打开 */
    Dragon98 = "Dragon98",
    /* 328元神龙bp打开 */
    DragonBP328 = "DragonBP328",
    /* 钥匙大促打开 */
    KeyPromotional = "KeyPromotional",
    /* 游乐场商店打开 */
    PlaygroundShop = "PlaygroundShop",
    /* 企鹅钓鱼商店打开 */
    PenguinShop = "PenguinShop",
}

interface TrackTypeObjectType {
    value: string;
    desc: string;
}

export const TrackTypeObject: Record<string, TrackTypeObjectType> = {
    LevelFund: {
        value: "LevelFund",
        desc: "等级基金界面打开"
    },
    SeasonBP: {
        value: "SeasonBP",
        desc: "赛季BP界面打开"
    },
    SeasonInBP: {
        value: "SeasonInBP",
        desc: "赛季BP2级界面打开"
    },
    SnakeGift: {
        value: "SnakeGift",
        desc: "毒蛇礼包3界面打开"
    },
    ExternalMonthlyPass: {
        value: "ExternalMonthlyPass",
        desc: "场外月卡界面打开"
    },
    AArtifactBP: {
        value: "AArtifactBP",
        desc: "A圣物7日界面打开"
    },
    EpicGear: {
        value: "EpicGear",
        desc: "橙装礼包界面 打开"
    },
    DailyShop: {
        value: "DailyShop",
        desc: "每日商店界面打开"
    },
    LifetimeDiamond: {
        value: "LifetimeDiamond",
        desc: "终生钻石界面打开"
    },
    PetFactionChoice: {
        value: "PetFactionChoice",
        desc: "流派自选礼包界面打开"
    },
    AArtifactReturn: {
        value: "AArtifactReturn",
        desc: "A圣物返场界面打开"
    },
    LevelEpicFund1: {
        value: "LevelEpicFund1",
        desc: "装备1基金界面打开"
    },
    LevelEpicFund2: {
        value: "LevelEpicFund2",
        desc: "装备2基金界面打开"
    },
    EternalHammer: {
        value: "EternalHammer",
        desc: "生命周期锤子礼包界面打开"
    },
    EventHammer: {
        value: "EventHammer",
        desc: "固定时间锤子礼包界面打开"
    },
    Artifact198A: {
        value: "Artifact198A",
        desc: "198圣物+蛇礼包界面打开"
    },
    TowerFund: {
        value: "TowerFund",
        desc: "爬塔基金界面打开"
    },
    PetShop: {
        value: "PetShop",
        desc: "宠物商店界面打开"
    },
    PetBP: {
        value: "PetBP",
        desc: "宠物bp界面打开"
    },
    FactionPetShop: {
        value: "FactionPetShop",
        desc: "流派宠物商店界面打开"
    },
    FactionPetCumulativeDraw: {
        value: "FactionPetCumulativeDraw",
        desc: "流派宠物UP累抽界面打开"
    },
    ArenaStore: {
        value: "ArenaStore",
        desc: "竞技场商店界面打开"
    },
    ArenaTicket: {
        value: "ArenaTicket",
        desc: "竞技场入场券界面打开"
    },
    ArenaVIP: {
        value: "ArenaVIP",
        desc: "竞技场vip界面打开"
    },
    ArenaSpinSidebar: {
        value: "ArenaSpinSidebar",
        desc: "竞技场大转盘侧边栏打开"
    },
    Miningvip: {
        value: "Miningvip",
        desc: "挖矿礼包打开"
    },
    MiningShop: {
        value: "MiningShop",
        desc: "挖矿商店打开"
    },
    ChapterFund: {
        value: "ChapterFund",
        desc: "章节基金界面打开"
    },
    CarnivalShop: {
        value: "CarnivalShop",
        desc: "嘉年华商店界面"
    },
    BingoShop: {
        value: "BingoShop",
        desc: "bingo商店界面"
    },
    MonopolyShop: {
        value: "MonopolyShop",
        desc: "大富翁商店界面"
    },
    FlipShop: {
        value: "FlipShop",
        desc: "翻牌商店主界面"
    },
    StarterPack6: {
        value: "StarterPack6",
        desc: "6元新手礼包界面打开"
    },
    StarterPack30: {
        value: "StarterPack30",
        desc: "30元新手礼包界面打开"
    },
    StarterPack68: {
        value: "StarterPack68",
        desc: "68元新手礼包界面打开"
    },
    SArtifactReturn: {
        value: "SArtifactReturn",
        desc: "圣物返场礼包界面打开"
    },
    ChapterPack: {
        value: "ChapterPack",
        desc: "章节礼包界面弹出"
    },
    RevengePack: {
        value: "RevengePack",
        desc: "复仇礼包界面弹出"
    },
    InAdvancedMonthlyPass: {
        value: "InAdvancedMonthlyPass",
        desc: "场内高级月卡界面打开"
    },
    InSupremeMonthlyPass: {
        value: "InSupremeMonthlyPass",
        desc: "场内至尊月卡界面打开"
    },
    SartifactBP98: {
        value: "SartifactBP98",
        desc: "98元S圣物bp界面打开"
    },
    SartifactBP128: {
        value: "SartifactBP128",
        desc: "128元S圣物bp界面打开"
    },
    OptionalShop: {
        value: "OptionalShop",
        desc: "自选商店界面打开"
    },
    DiamondShop: {
        value: "DiamondShop",
        desc: "钻石大促打开"
    },
    Skin98: {
        value: "Skin98",
        desc: "皮肤打开"
    },
    BloodlineVIP: {
        value: "BloodlineVIP",
        desc: "争霸赛VIP打开"
    },
    BloodlineSecretTreasure: {
        value: "BloodlineSecretTreasure",
        desc: "血脉密保打开"
    },
    Genie: {
        value: "Genie",
        desc: "小精灵打开"
    },
    NewSignIn: {
        value: "NewSignIn",
        desc: "每日登录面版打开"
    },
    Dragon68: {
        value: "Dragon68",
        desc: "68元神龙礼包打开"
    },
    Dragon98: {
        value: "Dragon98",
        desc: "98元神龙礼包打开"
    },
    DragonBP328: {
        value: "DragonBP328",
        desc: "328元神龙bp打开"
    },
    KeyPromotional: {
        value: "KeyPromotional",
        desc: "钥匙大促打开"
    },
    PlaygroundShop: {
        value: "PlaygroundShop",
        desc: "游乐场商店打开"
    },
    PenguinShop: {
        value: "PenguinShop",
        desc: "企鹅钓鱼商店打开"
    },
};
