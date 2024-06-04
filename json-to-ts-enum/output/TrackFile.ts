
export enum TrackType {
    /* 等级基金界面打开 */
    LevelFund = "LevelFund",
    /* 赛季BP界面打开 */
    SeasonBP = "SeasonBP",
    /* 赛季BP2级界面打开 */
    SeasonInBP = "SeasonInBP",
    /* 毒蛇礼包3界面打开 */
    SnakeGift = "SnakeGift",
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
};
