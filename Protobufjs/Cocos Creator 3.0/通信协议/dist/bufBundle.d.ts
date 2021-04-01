declare global {
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace mykj. */
export namespace mykj {

    /** Properties of a BuyCount. */
    interface IBuyCount {

        /** BuyCount monsterId */
        monsterId?: (number|null);

        /** BuyCount count */
        count?: (number|null);
    }

    /** Represents a BuyCount. */
    class BuyCount implements IBuyCount {

        /**
         * Constructs a new BuyCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IBuyCount);

        /** BuyCount monsterId. */
        public monsterId: number;

        /** BuyCount count. */
        public count: number;

        /**
         * Creates a new BuyCount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyCount instance
         */
        public static create(properties?: mykj.IBuyCount): mykj.BuyCount;

        /**
         * Encodes the specified BuyCount message. Does not implicitly {@link mykj.BuyCount.verify|verify} messages.
         * @param message BuyCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IBuyCount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuyCount message, length delimited. Does not implicitly {@link mykj.BuyCount.verify|verify} messages.
         * @param message BuyCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IBuyCount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuyCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.BuyCount;

        /**
         * Decodes a BuyCount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.BuyCount;

        /**
         * Creates a BuyCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuyCount
         */
        public static fromObject(object: { [k: string]: any }): mykj.BuyCount;

        /**
         * Creates a plain object from a BuyCount message. Also converts values to other types if specified.
         * @param message BuyCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.BuyCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuyCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo user */
        user?: (mykj.IUser|null);

        /** GameInfo monster */
        monster?: (mykj.IMonster[]|null);

        /** GameInfo buyCountList */
        buyCountList?: (mykj.IBuyCount[]|null);

        /** GameInfo speedTime */
        speedTime?: (mykj.ITimeStamp|null);

        /** GameInfo speedLevel */
        speedLevel?: (number|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IGameInfo);

        /** GameInfo user. */
        public user?: (mykj.IUser|null);

        /** GameInfo monster. */
        public monster: mykj.IMonster[];

        /** GameInfo buyCountList. */
        public buyCountList: mykj.IBuyCount[];

        /** GameInfo speedTime. */
        public speedTime?: (mykj.ITimeStamp|null);

        /** GameInfo speedLevel. */
        public speedLevel: number;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: mykj.IGameInfo): mykj.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link mykj.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link mykj.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.GameInfo;

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): mykj.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Eggs. */
    interface IEggs {

        /** Eggs eggs */
        eggs?: (mykj.IEgg[]|null);
    }

    /** Represents an Eggs. */
    class Eggs implements IEggs {

        /**
         * Constructs a new Eggs.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IEggs);

        /** Eggs eggs. */
        public eggs: mykj.IEgg[];

        /**
         * Creates a new Eggs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Eggs instance
         */
        public static create(properties?: mykj.IEggs): mykj.Eggs;

        /**
         * Encodes the specified Eggs message. Does not implicitly {@link mykj.Eggs.verify|verify} messages.
         * @param message Eggs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IEggs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Eggs message, length delimited. Does not implicitly {@link mykj.Eggs.verify|verify} messages.
         * @param message Eggs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IEggs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Eggs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Eggs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Eggs;

        /**
         * Decodes an Eggs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Eggs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Eggs;

        /**
         * Creates an Eggs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Eggs
         */
        public static fromObject(object: { [k: string]: any }): mykj.Eggs;

        /**
         * Creates a plain object from an Eggs message. Also converts values to other types if specified.
         * @param message Eggs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Eggs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Eggs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Egg. */
    interface IEgg {

        /** Egg id */
        id?: (number|null);

        /** Egg monsterId */
        monsterId?: (number|null);

        /** Egg timeStamp */
        timeStamp?: (mykj.ITimeStamp|null);

        /** Egg opened */
        opened?: (boolean|null);

        /** Egg userId */
        userId?: (number|null);

        /** Egg level */
        level?: (number|null);
    }

    /** Represents an Egg. */
    class Egg implements IEgg {

        /**
         * Constructs a new Egg.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IEgg);

        /** Egg id. */
        public id: number;

        /** Egg monsterId. */
        public monsterId: number;

        /** Egg timeStamp. */
        public timeStamp?: (mykj.ITimeStamp|null);

        /** Egg opened. */
        public opened: boolean;

        /** Egg userId. */
        public userId: number;

        /** Egg level. */
        public level: number;

        /**
         * Creates a new Egg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Egg instance
         */
        public static create(properties?: mykj.IEgg): mykj.Egg;

        /**
         * Encodes the specified Egg message. Does not implicitly {@link mykj.Egg.verify|verify} messages.
         * @param message Egg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IEgg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Egg message, length delimited. Does not implicitly {@link mykj.Egg.verify|verify} messages.
         * @param message Egg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IEgg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Egg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Egg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Egg;

        /**
         * Decodes an Egg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Egg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Egg;

        /**
         * Creates an Egg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Egg
         */
        public static fromObject(object: { [k: string]: any }): mykj.Egg;

        /**
         * Creates a plain object from an Egg message. Also converts values to other types if specified.
         * @param message Egg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Egg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Egg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CaibuList. */
    interface ICaibuList {

        /** CaibuList caibus */
        caibus?: (mykj.ICaibu[]|null);
    }

    /** Represents a CaibuList. */
    class CaibuList implements ICaibuList {

        /**
         * Constructs a new CaibuList.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ICaibuList);

        /** CaibuList caibus. */
        public caibus: mykj.ICaibu[];

        /**
         * Creates a new CaibuList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CaibuList instance
         */
        public static create(properties?: mykj.ICaibuList): mykj.CaibuList;

        /**
         * Encodes the specified CaibuList message. Does not implicitly {@link mykj.CaibuList.verify|verify} messages.
         * @param message CaibuList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ICaibuList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CaibuList message, length delimited. Does not implicitly {@link mykj.CaibuList.verify|verify} messages.
         * @param message CaibuList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ICaibuList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaibuList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CaibuList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.CaibuList;

        /**
         * Decodes a CaibuList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CaibuList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.CaibuList;

        /**
         * Creates a CaibuList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CaibuList
         */
        public static fromObject(object: { [k: string]: any }): mykj.CaibuList;

        /**
         * Creates a plain object from a CaibuList message. Also converts values to other types if specified.
         * @param message CaibuList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.CaibuList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CaibuList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Caibu. */
    interface ICaibu {

        /** Caibu nickname */
        nickname?: (string|null);

        /** Caibu avatarUrl */
        avatarUrl?: (string|null);

        /** Caibu userId */
        userId?: (number|null);

        /** Caibu level */
        level?: (number|null);

        /** Caibu isFriend */
        isFriend?: (boolean|null);

        /** Caibu egg */
        egg?: (mykj.IEgg|null);
    }

    /** Represents a Caibu. */
    class Caibu implements ICaibu {

        /**
         * Constructs a new Caibu.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ICaibu);

        /** Caibu nickname. */
        public nickname: string;

        /** Caibu avatarUrl. */
        public avatarUrl: string;

        /** Caibu userId. */
        public userId: number;

        /** Caibu level. */
        public level: number;

        /** Caibu isFriend. */
        public isFriend: boolean;

        /** Caibu egg. */
        public egg?: (mykj.IEgg|null);

        /**
         * Creates a new Caibu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Caibu instance
         */
        public static create(properties?: mykj.ICaibu): mykj.Caibu;

        /**
         * Encodes the specified Caibu message. Does not implicitly {@link mykj.Caibu.verify|verify} messages.
         * @param message Caibu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ICaibu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Caibu message, length delimited. Does not implicitly {@link mykj.Caibu.verify|verify} messages.
         * @param message Caibu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ICaibu, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Caibu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Caibu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Caibu;

        /**
         * Decodes a Caibu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Caibu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Caibu;

        /**
         * Creates a Caibu message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Caibu
         */
        public static fromObject(object: { [k: string]: any }): mykj.Caibu;

        /**
         * Creates a plain object from a Caibu message. Also converts values to other types if specified.
         * @param message Caibu
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Caibu, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Caibu to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Revenges. */
    interface IRevenges {

        /** Revenges revenges */
        revenges?: (mykj.IRevenge[]|null);
    }

    /** Represents a Revenges. */
    class Revenges implements IRevenges {

        /**
         * Constructs a new Revenges.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IRevenges);

        /** Revenges revenges. */
        public revenges: mykj.IRevenge[];

        /**
         * Creates a new Revenges instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Revenges instance
         */
        public static create(properties?: mykj.IRevenges): mykj.Revenges;

        /**
         * Encodes the specified Revenges message. Does not implicitly {@link mykj.Revenges.verify|verify} messages.
         * @param message Revenges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IRevenges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Revenges message, length delimited. Does not implicitly {@link mykj.Revenges.verify|verify} messages.
         * @param message Revenges message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IRevenges, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Revenges message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Revenges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Revenges;

        /**
         * Decodes a Revenges message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Revenges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Revenges;

        /**
         * Creates a Revenges message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Revenges
         */
        public static fromObject(object: { [k: string]: any }): mykj.Revenges;

        /**
         * Creates a plain object from a Revenges message. Also converts values to other types if specified.
         * @param message Revenges
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Revenges, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Revenges to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Revenge. */
    interface IRevenge {

        /** Revenge nickname */
        nickname?: (string|null);

        /** Revenge avatarUrl */
        avatarUrl?: (string|null);

        /** Revenge userId */
        userId?: (number|null);

        /** Revenge monsterId */
        monsterId?: (number|null);

        /** Revenge timeStamp */
        timeStamp?: (mykj.ITimeStamp|null);

        /** Revenge id */
        id?: (number|null);
    }

    /** Represents a Revenge. */
    class Revenge implements IRevenge {

        /**
         * Constructs a new Revenge.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IRevenge);

        /** Revenge nickname. */
        public nickname: string;

        /** Revenge avatarUrl. */
        public avatarUrl: string;

        /** Revenge userId. */
        public userId: number;

        /** Revenge monsterId. */
        public monsterId: number;

        /** Revenge timeStamp. */
        public timeStamp?: (mykj.ITimeStamp|null);

        /** Revenge id. */
        public id: number;

        /**
         * Creates a new Revenge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Revenge instance
         */
        public static create(properties?: mykj.IRevenge): mykj.Revenge;

        /**
         * Encodes the specified Revenge message. Does not implicitly {@link mykj.Revenge.verify|verify} messages.
         * @param message Revenge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IRevenge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Revenge message, length delimited. Does not implicitly {@link mykj.Revenge.verify|verify} messages.
         * @param message Revenge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IRevenge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Revenge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Revenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Revenge;

        /**
         * Decodes a Revenge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Revenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Revenge;

        /**
         * Creates a Revenge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Revenge
         */
        public static fromObject(object: { [k: string]: any }): mykj.Revenge;

        /**
         * Creates a plain object from a Revenge message. Also converts values to other types if specified.
         * @param message Revenge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Revenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Revenge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Monster. */
    interface IMonster {

        /** Monster id */
        id?: (number|null);

        /** Monster monsterId */
        monsterId?: (number|null);

        /** Monster timeStamp */
        timeStamp?: (mykj.ITimeStamp|null);
    }

    /** Represents a Monster. */
    class Monster implements IMonster {

        /**
         * Constructs a new Monster.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IMonster);

        /** Monster id. */
        public id: number;

        /** Monster monsterId. */
        public monsterId: number;

        /** Monster timeStamp. */
        public timeStamp?: (mykj.ITimeStamp|null);

        /**
         * Creates a new Monster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Monster instance
         */
        public static create(properties?: mykj.IMonster): mykj.Monster;

        /**
         * Encodes the specified Monster message. Does not implicitly {@link mykj.Monster.verify|verify} messages.
         * @param message Monster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IMonster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Monster message, length delimited. Does not implicitly {@link mykj.Monster.verify|verify} messages.
         * @param message Monster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IMonster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Monster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Monster;

        /**
         * Decodes a Monster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Monster;

        /**
         * Creates a Monster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Monster
         */
        public static fromObject(object: { [k: string]: any }): mykj.Monster;

        /**
         * Creates a plain object from a Monster message. Also converts values to other types if specified.
         * @param message Monster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Monster, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Monster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BNumber. */
    interface IBNumber {

        /** BNumber mainValue */
        mainValue?: (number|null);

        /** BNumber base */
        base?: (number|null);
    }

    /** Represents a BNumber. */
    class BNumber implements IBNumber {

        /**
         * Constructs a new BNumber.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IBNumber);

        /** BNumber mainValue. */
        public mainValue: number;

        /** BNumber base. */
        public base: number;

        /**
         * Creates a new BNumber instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BNumber instance
         */
        public static create(properties?: mykj.IBNumber): mykj.BNumber;

        /**
         * Encodes the specified BNumber message. Does not implicitly {@link mykj.BNumber.verify|verify} messages.
         * @param message BNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IBNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BNumber message, length delimited. Does not implicitly {@link mykj.BNumber.verify|verify} messages.
         * @param message BNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IBNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BNumber message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.BNumber;

        /**
         * Decodes a BNumber message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.BNumber;

        /**
         * Creates a BNumber message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BNumber
         */
        public static fromObject(object: { [k: string]: any }): mykj.BNumber;

        /**
         * Creates a plain object from a BNumber message. Also converts values to other types if specified.
         * @param message BNumber
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.BNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BNumber to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User nickname */
        nickname?: (string|null);

        /** User avatarUrl */
        avatarUrl?: (string|null);

        /** User userId */
        userId?: (number|null);

        /** User level */
        level?: (number|null);

        /** User gold */
        gold?: (number|null);

        /** User leaguePoint */
        leaguePoint?: (number|null);

        /** User coin */
        coin?: (mykj.IBNumber|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IUser);

        /** User nickname. */
        public nickname: string;

        /** User avatarUrl. */
        public avatarUrl: string;

        /** User userId. */
        public userId: number;

        /** User level. */
        public level: number;

        /** User gold. */
        public gold: number;

        /** User leaguePoint. */
        public leaguePoint: number;

        /** User coin. */
        public coin?: (mykj.IBNumber|null);

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: mykj.IUser): mykj.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link mykj.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link mykj.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.User;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): mykj.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MergeMonster. */
    interface IMergeMonster {

        /** MergeMonster monster */
        monster?: (mykj.IMonster|null);

        /** MergeMonster monsterOrder */
        monsterOrder?: (mykj.IMonsterOrder|null);

        /** MergeMonster maxLevel */
        maxLevel?: (mykj.IInt32Values|null);
    }

    /** Represents a MergeMonster. */
    class MergeMonster implements IMergeMonster {

        /**
         * Constructs a new MergeMonster.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IMergeMonster);

        /** MergeMonster monster. */
        public monster?: (mykj.IMonster|null);

        /** MergeMonster monsterOrder. */
        public monsterOrder?: (mykj.IMonsterOrder|null);

        /** MergeMonster maxLevel. */
        public maxLevel?: (mykj.IInt32Values|null);

        /**
         * Creates a new MergeMonster instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MergeMonster instance
         */
        public static create(properties?: mykj.IMergeMonster): mykj.MergeMonster;

        /**
         * Encodes the specified MergeMonster message. Does not implicitly {@link mykj.MergeMonster.verify|verify} messages.
         * @param message MergeMonster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IMergeMonster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MergeMonster message, length delimited. Does not implicitly {@link mykj.MergeMonster.verify|verify} messages.
         * @param message MergeMonster message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IMergeMonster, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MergeMonster message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MergeMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.MergeMonster;

        /**
         * Decodes a MergeMonster message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MergeMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.MergeMonster;

        /**
         * Creates a MergeMonster message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MergeMonster
         */
        public static fromObject(object: { [k: string]: any }): mykj.MergeMonster;

        /**
         * Creates a plain object from a MergeMonster message. Also converts values to other types if specified.
         * @param message MergeMonster
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.MergeMonster, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MergeMonster to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Friends. */
    interface IFriends {

        /** Friends friends */
        friends?: (mykj.IFriend[]|null);
    }

    /** Represents a Friends. */
    class Friends implements IFriends {

        /**
         * Constructs a new Friends.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IFriends);

        /** Friends friends. */
        public friends: mykj.IFriend[];

        /**
         * Creates a new Friends instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Friends instance
         */
        public static create(properties?: mykj.IFriends): mykj.Friends;

        /**
         * Encodes the specified Friends message. Does not implicitly {@link mykj.Friends.verify|verify} messages.
         * @param message Friends message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IFriends, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Friends message, length delimited. Does not implicitly {@link mykj.Friends.verify|verify} messages.
         * @param message Friends message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IFriends, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Friends message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Friends;

        /**
         * Decodes a Friends message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Friends;

        /**
         * Creates a Friends message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Friends
         */
        public static fromObject(object: { [k: string]: any }): mykj.Friends;

        /**
         * Creates a plain object from a Friends message. Also converts values to other types if specified.
         * @param message Friends
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Friends, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Friends to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Friend. */
    interface IFriend {

        /** Friend nickname */
        nickname?: (string|null);

        /** Friend avatarUrl */
        avatarUrl?: (string|null);

        /** Friend userId */
        userId?: (number|null);

        /** Friend level */
        level?: (number|null);

        /** Friend score */
        score?: (mykj.IBNumber|null);

        /** Friend status */
        status?: (number|null);
    }

    /** Represents a Friend. */
    class Friend implements IFriend {

        /**
         * Constructs a new Friend.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IFriend);

        /** Friend nickname. */
        public nickname: string;

        /** Friend avatarUrl. */
        public avatarUrl: string;

        /** Friend userId. */
        public userId: number;

        /** Friend level. */
        public level: number;

        /** Friend score. */
        public score?: (mykj.IBNumber|null);

        /** Friend status. */
        public status: number;

        /**
         * Creates a new Friend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Friend instance
         */
        public static create(properties?: mykj.IFriend): mykj.Friend;

        /**
         * Encodes the specified Friend message. Does not implicitly {@link mykj.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link mykj.Friend.verify|verify} messages.
         * @param message Friend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IFriend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Friend;

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Friend;

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Friend
         */
        public static fromObject(object: { [k: string]: any }): mykj.Friend;

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @param message Friend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Friend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Friend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MonsterOrder. */
    interface IMonsterOrder {

        /** MonsterOrder id */
        id?: (string|null);

        /** MonsterOrder type */
        type?: (number|null);

        /** MonsterOrder gold */
        gold?: (number|null);

        /** MonsterOrder level */
        level?: (number|null);

        /** MonsterOrder monster */
        monster?: (mykj.IMonster[]|null);
    }

    /** Represents a MonsterOrder. */
    class MonsterOrder implements IMonsterOrder {

        /**
         * Constructs a new MonsterOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IMonsterOrder);

        /** MonsterOrder id. */
        public id: string;

        /** MonsterOrder type. */
        public type: number;

        /** MonsterOrder gold. */
        public gold: number;

        /** MonsterOrder level. */
        public level: number;

        /** MonsterOrder monster. */
        public monster: mykj.IMonster[];

        /**
         * Creates a new MonsterOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MonsterOrder instance
         */
        public static create(properties?: mykj.IMonsterOrder): mykj.MonsterOrder;

        /**
         * Encodes the specified MonsterOrder message. Does not implicitly {@link mykj.MonsterOrder.verify|verify} messages.
         * @param message MonsterOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IMonsterOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MonsterOrder message, length delimited. Does not implicitly {@link mykj.MonsterOrder.verify|verify} messages.
         * @param message MonsterOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IMonsterOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MonsterOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MonsterOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.MonsterOrder;

        /**
         * Decodes a MonsterOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MonsterOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.MonsterOrder;

        /**
         * Creates a MonsterOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MonsterOrder
         */
        public static fromObject(object: { [k: string]: any }): mykj.MonsterOrder;

        /**
         * Creates a plain object from a MonsterOrder message. Also converts values to other types if specified.
         * @param message MonsterOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.MonsterOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MonsterOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeStamp. */
    interface ITimeStamp {

        /** TimeStamp value */
        value?: (number|null);
    }

    /** Represents a TimeStamp. */
    class TimeStamp implements ITimeStamp {

        /**
         * Constructs a new TimeStamp.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ITimeStamp);

        /** TimeStamp value. */
        public value: number;

        /**
         * Creates a new TimeStamp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeStamp instance
         */
        public static create(properties?: mykj.ITimeStamp): mykj.TimeStamp;

        /**
         * Encodes the specified TimeStamp message. Does not implicitly {@link mykj.TimeStamp.verify|verify} messages.
         * @param message TimeStamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ITimeStamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeStamp message, length delimited. Does not implicitly {@link mykj.TimeStamp.verify|verify} messages.
         * @param message TimeStamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ITimeStamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeStamp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeStamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.TimeStamp;

        /**
         * Decodes a TimeStamp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeStamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.TimeStamp;

        /**
         * Creates a TimeStamp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeStamp
         */
        public static fromObject(object: { [k: string]: any }): mykj.TimeStamp;

        /**
         * Creates a plain object from a TimeStamp message. Also converts values to other types if specified.
         * @param message TimeStamp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.TimeStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeStamp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CashOrder. */
    interface ICashOrder {

        /** CashOrder id */
        id?: (number|null);

        /** CashOrder num */
        num?: (number|null);

        /** CashOrder status */
        status?: (number|null);

        /** CashOrder timeStamp */
        timeStamp?: (number|null);
    }

    /** Represents a CashOrder. */
    class CashOrder implements ICashOrder {

        /**
         * Constructs a new CashOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ICashOrder);

        /** CashOrder id. */
        public id: number;

        /** CashOrder num. */
        public num: number;

        /** CashOrder status. */
        public status: number;

        /** CashOrder timeStamp. */
        public timeStamp: number;

        /**
         * Creates a new CashOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CashOrder instance
         */
        public static create(properties?: mykj.ICashOrder): mykj.CashOrder;

        /**
         * Encodes the specified CashOrder message. Does not implicitly {@link mykj.CashOrder.verify|verify} messages.
         * @param message CashOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ICashOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CashOrder message, length delimited. Does not implicitly {@link mykj.CashOrder.verify|verify} messages.
         * @param message CashOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ICashOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CashOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CashOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.CashOrder;

        /**
         * Decodes a CashOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CashOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.CashOrder;

        /**
         * Creates a CashOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CashOrder
         */
        public static fromObject(object: { [k: string]: any }): mykj.CashOrder;

        /**
         * Creates a plain object from a CashOrder message. Also converts values to other types if specified.
         * @param message CashOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.CashOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CashOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CashOrderList. */
    interface ICashOrderList {

        /** CashOrderList list */
        list?: (mykj.ICashOrder[]|null);
    }

    /** Represents a CashOrderList. */
    class CashOrderList implements ICashOrderList {

        /**
         * Constructs a new CashOrderList.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ICashOrderList);

        /** CashOrderList list. */
        public list: mykj.ICashOrder[];

        /**
         * Creates a new CashOrderList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CashOrderList instance
         */
        public static create(properties?: mykj.ICashOrderList): mykj.CashOrderList;

        /**
         * Encodes the specified CashOrderList message. Does not implicitly {@link mykj.CashOrderList.verify|verify} messages.
         * @param message CashOrderList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ICashOrderList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CashOrderList message, length delimited. Does not implicitly {@link mykj.CashOrderList.verify|verify} messages.
         * @param message CashOrderList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ICashOrderList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CashOrderList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CashOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.CashOrderList;

        /**
         * Decodes a CashOrderList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CashOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.CashOrderList;

        /**
         * Creates a CashOrderList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CashOrderList
         */
        public static fromObject(object: { [k: string]: any }): mykj.CashOrderList;

        /**
         * Creates a plain object from a CashOrderList message. Also converts values to other types if specified.
         * @param message CashOrderList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.CashOrderList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CashOrderList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player nickname */
        nickname?: (string|null);

        /** Player avatarUrl */
        avatarUrl?: (string|null);

        /** Player userId */
        userId?: (number|null);

        /** Player level */
        level?: (number|null);

        /** Player paramsInt */
        paramsInt?: (number[]|null);

        /** Player paramsStr */
        paramsStr?: (number[]|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IPlayer);

        /** Player nickname. */
        public nickname: string;

        /** Player avatarUrl. */
        public avatarUrl: string;

        /** Player userId. */
        public userId: number;

        /** Player level. */
        public level: number;

        /** Player paramsInt. */
        public paramsInt: number[];

        /** Player paramsStr. */
        public paramsStr: number[];

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: mykj.IPlayer): mykj.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link mykj.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link mykj.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Player;

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): mykj.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Players. */
    interface IPlayers {

        /** Players players */
        players?: (mykj.IPlayer[]|null);
    }

    /** Represents a Players. */
    class Players implements IPlayers {

        /**
         * Constructs a new Players.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IPlayers);

        /** Players players. */
        public players: mykj.IPlayer[];

        /**
         * Creates a new Players instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Players instance
         */
        public static create(properties?: mykj.IPlayers): mykj.Players;

        /**
         * Encodes the specified Players message. Does not implicitly {@link mykj.Players.verify|verify} messages.
         * @param message Players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Players message, length delimited. Does not implicitly {@link mykj.Players.verify|verify} messages.
         * @param message Players message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IPlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Players message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Players;

        /**
         * Decodes a Players message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Players;

        /**
         * Creates a Players message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Players
         */
        public static fromObject(object: { [k: string]: any }): mykj.Players;

        /**
         * Creates a plain object from a Players message. Also converts values to other types if specified.
         * @param message Players
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Players, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Players to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pyramid. */
    interface IPyramid {

        /** Pyramid level */
        level?: (number|null);

        /** Pyramid league */
        league?: (number|null);

        /** Pyramid optTimes */
        optTimes?: (number|null);

        /** Pyramid buffTime */
        buffTime?: (number|null);

        /** Pyramid master */
        master?: (mykj.IPlayer|null);

        /** Pyramid followers */
        followers?: (mykj.IPlayer[]|null);
    }

    /** Represents a Pyramid. */
    class Pyramid implements IPyramid {

        /**
         * Constructs a new Pyramid.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IPyramid);

        /** Pyramid level. */
        public level: number;

        /** Pyramid league. */
        public league: number;

        /** Pyramid optTimes. */
        public optTimes: number;

        /** Pyramid buffTime. */
        public buffTime: number;

        /** Pyramid master. */
        public master?: (mykj.IPlayer|null);

        /** Pyramid followers. */
        public followers: mykj.IPlayer[];

        /**
         * Creates a new Pyramid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pyramid instance
         */
        public static create(properties?: mykj.IPyramid): mykj.Pyramid;

        /**
         * Encodes the specified Pyramid message. Does not implicitly {@link mykj.Pyramid.verify|verify} messages.
         * @param message Pyramid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IPyramid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pyramid message, length delimited. Does not implicitly {@link mykj.Pyramid.verify|verify} messages.
         * @param message Pyramid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IPyramid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pyramid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pyramid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Pyramid;

        /**
         * Decodes a Pyramid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pyramid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Pyramid;

        /**
         * Creates a Pyramid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pyramid
         */
        public static fromObject(object: { [k: string]: any }): mykj.Pyramid;

        /**
         * Creates a plain object from a Pyramid message. Also converts values to other types if specified.
         * @param message Pyramid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Pyramid, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pyramid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ErrorCode. */
    interface IErrorCode {

        /** ErrorCode code */
        code?: (number|null);

        /** ErrorCode msg */
        msg?: (string|null);
    }

    /** Represents an ErrorCode. */
    class ErrorCode implements IErrorCode {

        /**
         * Constructs a new ErrorCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IErrorCode);

        /** ErrorCode code. */
        public code: number;

        /** ErrorCode msg. */
        public msg: string;

        /**
         * Creates a new ErrorCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorCode instance
         */
        public static create(properties?: mykj.IErrorCode): mykj.ErrorCode;

        /**
         * Encodes the specified ErrorCode message. Does not implicitly {@link mykj.ErrorCode.verify|verify} messages.
         * @param message ErrorCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IErrorCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorCode message, length delimited. Does not implicitly {@link mykj.ErrorCode.verify|verify} messages.
         * @param message ErrorCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IErrorCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.ErrorCode;

        /**
         * Decodes an ErrorCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.ErrorCode;

        /**
         * Creates an ErrorCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorCode
         */
        public static fromObject(object: { [k: string]: any }): mykj.ErrorCode;

        /**
         * Creates a plain object from an ErrorCode message. Also converts values to other types if specified.
         * @param message ErrorCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.ErrorCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FloatValues. */
    interface IFloatValues {

        /** FloatValues values */
        values?: (number[]|null);
    }

    /** Represents a FloatValues. */
    class FloatValues implements IFloatValues {

        /**
         * Constructs a new FloatValues.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IFloatValues);

        /** FloatValues values. */
        public values: number[];

        /**
         * Creates a new FloatValues instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FloatValues instance
         */
        public static create(properties?: mykj.IFloatValues): mykj.FloatValues;

        /**
         * Encodes the specified FloatValues message. Does not implicitly {@link mykj.FloatValues.verify|verify} messages.
         * @param message FloatValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IFloatValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FloatValues message, length delimited. Does not implicitly {@link mykj.FloatValues.verify|verify} messages.
         * @param message FloatValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IFloatValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FloatValues message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FloatValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.FloatValues;

        /**
         * Decodes a FloatValues message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FloatValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.FloatValues;

        /**
         * Creates a FloatValues message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloatValues
         */
        public static fromObject(object: { [k: string]: any }): mykj.FloatValues;

        /**
         * Creates a plain object from a FloatValues message. Also converts values to other types if specified.
         * @param message FloatValues
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.FloatValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FloatValues to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DoubleValues. */
    interface IDoubleValues {

        /** DoubleValues values */
        values?: (number[]|null);
    }

    /** Represents a DoubleValues. */
    class DoubleValues implements IDoubleValues {

        /**
         * Constructs a new DoubleValues.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IDoubleValues);

        /** DoubleValues values. */
        public values: number[];

        /**
         * Creates a new DoubleValues instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoubleValues instance
         */
        public static create(properties?: mykj.IDoubleValues): mykj.DoubleValues;

        /**
         * Encodes the specified DoubleValues message. Does not implicitly {@link mykj.DoubleValues.verify|verify} messages.
         * @param message DoubleValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IDoubleValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DoubleValues message, length delimited. Does not implicitly {@link mykj.DoubleValues.verify|verify} messages.
         * @param message DoubleValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IDoubleValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoubleValues message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoubleValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.DoubleValues;

        /**
         * Decodes a DoubleValues message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoubleValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.DoubleValues;

        /**
         * Creates a DoubleValues message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DoubleValues
         */
        public static fromObject(object: { [k: string]: any }): mykj.DoubleValues;

        /**
         * Creates a plain object from a DoubleValues message. Also converts values to other types if specified.
         * @param message DoubleValues
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.DoubleValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DoubleValues to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringValue. */
    interface IStringValue {

        /** StringValue values */
        values?: (string[]|null);
    }

    /** Represents a StringValue. */
    class StringValue implements IStringValue {

        /**
         * Constructs a new StringValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IStringValue);

        /** StringValue values. */
        public values: string[];

        /**
         * Creates a new StringValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringValue instance
         */
        public static create(properties?: mykj.IStringValue): mykj.StringValue;

        /**
         * Encodes the specified StringValue message. Does not implicitly {@link mykj.StringValue.verify|verify} messages.
         * @param message StringValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringValue message, length delimited. Does not implicitly {@link mykj.StringValue.verify|verify} messages.
         * @param message StringValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.StringValue;

        /**
         * Decodes a StringValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.StringValue;

        /**
         * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringValue
         */
        public static fromObject(object: { [k: string]: any }): mykj.StringValue;

        /**
         * Creates a plain object from a StringValue message. Also converts values to other types if specified.
         * @param message StringValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BoolValues. */
    interface IBoolValues {

        /** BoolValues values */
        values?: (boolean[]|null);
    }

    /** Represents a BoolValues. */
    class BoolValues implements IBoolValues {

        /**
         * Constructs a new BoolValues.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IBoolValues);

        /** BoolValues values. */
        public values: boolean[];

        /**
         * Creates a new BoolValues instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoolValues instance
         */
        public static create(properties?: mykj.IBoolValues): mykj.BoolValues;

        /**
         * Encodes the specified BoolValues message. Does not implicitly {@link mykj.BoolValues.verify|verify} messages.
         * @param message BoolValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IBoolValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BoolValues message, length delimited. Does not implicitly {@link mykj.BoolValues.verify|verify} messages.
         * @param message BoolValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IBoolValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoolValues message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoolValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.BoolValues;

        /**
         * Decodes a BoolValues message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoolValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.BoolValues;

        /**
         * Creates a BoolValues message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BoolValues
         */
        public static fromObject(object: { [k: string]: any }): mykj.BoolValues;

        /**
         * Creates a plain object from a BoolValues message. Also converts values to other types if specified.
         * @param message BoolValues
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.BoolValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BoolValues to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Int32Values. */
    interface IInt32Values {

        /** Int32Values values */
        values?: (number[]|null);
    }

    /** Represents an Int32Values. */
    class Int32Values implements IInt32Values {

        /**
         * Constructs a new Int32Values.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IInt32Values);

        /** Int32Values values. */
        public values: number[];

        /**
         * Creates a new Int32Values instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Int32Values instance
         */
        public static create(properties?: mykj.IInt32Values): mykj.Int32Values;

        /**
         * Encodes the specified Int32Values message. Does not implicitly {@link mykj.Int32Values.verify|verify} messages.
         * @param message Int32Values message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IInt32Values, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Int32Values message, length delimited. Does not implicitly {@link mykj.Int32Values.verify|verify} messages.
         * @param message Int32Values message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IInt32Values, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Int32Values message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Int32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Int32Values;

        /**
         * Decodes an Int32Values message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Int32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Int32Values;

        /**
         * Creates an Int32Values message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Int32Values
         */
        public static fromObject(object: { [k: string]: any }): mykj.Int32Values;

        /**
         * Creates a plain object from an Int32Values message. Also converts values to other types if specified.
         * @param message Int32Values
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Int32Values, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Int32Values to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uint32Values. */
    interface IUint32Values {

        /** Uint32Values values */
        values?: (number[]|null);
    }

    /** Represents an Uint32Values. */
    class Uint32Values implements IUint32Values {

        /**
         * Constructs a new Uint32Values.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IUint32Values);

        /** Uint32Values values. */
        public values: number[];

        /**
         * Creates a new Uint32Values instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uint32Values instance
         */
        public static create(properties?: mykj.IUint32Values): mykj.Uint32Values;

        /**
         * Encodes the specified Uint32Values message. Does not implicitly {@link mykj.Uint32Values.verify|verify} messages.
         * @param message Uint32Values message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IUint32Values, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Uint32Values message, length delimited. Does not implicitly {@link mykj.Uint32Values.verify|verify} messages.
         * @param message Uint32Values message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IUint32Values, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uint32Values message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uint32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Uint32Values;

        /**
         * Decodes an Uint32Values message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Uint32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Uint32Values;

        /**
         * Creates an Uint32Values message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uint32Values
         */
        public static fromObject(object: { [k: string]: any }): mykj.Uint32Values;

        /**
         * Creates a plain object from an Uint32Values message. Also converts values to other types if specified.
         * @param message Uint32Values
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Uint32Values, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uint32Values to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BytesValues. */
    interface IBytesValues {

        /** BytesValues values */
        values?: (Uint8Array[]|null);
    }

    /** Represents a BytesValues. */
    class BytesValues implements IBytesValues {

        /**
         * Constructs a new BytesValues.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IBytesValues);

        /** BytesValues values. */
        public values: Uint8Array[];

        /**
         * Creates a new BytesValues instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BytesValues instance
         */
        public static create(properties?: mykj.IBytesValues): mykj.BytesValues;

        /**
         * Encodes the specified BytesValues message. Does not implicitly {@link mykj.BytesValues.verify|verify} messages.
         * @param message BytesValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IBytesValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BytesValues message, length delimited. Does not implicitly {@link mykj.BytesValues.verify|verify} messages.
         * @param message BytesValues message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IBytesValues, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BytesValues message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BytesValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.BytesValues;

        /**
         * Decodes a BytesValues message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BytesValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.BytesValues;

        /**
         * Creates a BytesValues message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BytesValues
         */
        public static fromObject(object: { [k: string]: any }): mykj.BytesValues;

        /**
         * Creates a plain object from a BytesValues message. Also converts values to other types if specified.
         * @param message BytesValues
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.BytesValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BytesValues to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfflineReward. */
    interface IOfflineReward {

        /** OfflineReward time */
        time?: (number|null);

        /** OfflineReward count */
        count?: (mykj.IBNumber|null);
    }

    /** Represents an OfflineReward. */
    class OfflineReward implements IOfflineReward {

        /**
         * Constructs a new OfflineReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IOfflineReward);

        /** OfflineReward time. */
        public time: number;

        /** OfflineReward count. */
        public count?: (mykj.IBNumber|null);

        /**
         * Creates a new OfflineReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfflineReward instance
         */
        public static create(properties?: mykj.IOfflineReward): mykj.OfflineReward;

        /**
         * Encodes the specified OfflineReward message. Does not implicitly {@link mykj.OfflineReward.verify|verify} messages.
         * @param message OfflineReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IOfflineReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfflineReward message, length delimited. Does not implicitly {@link mykj.OfflineReward.verify|verify} messages.
         * @param message OfflineReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IOfflineReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfflineReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfflineReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.OfflineReward;

        /**
         * Decodes an OfflineReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfflineReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.OfflineReward;

        /**
         * Creates an OfflineReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfflineReward
         */
        public static fromObject(object: { [k: string]: any }): mykj.OfflineReward;

        /**
         * Creates a plain object from an OfflineReward message. Also converts values to other types if specified.
         * @param message OfflineReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.OfflineReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfflineReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Rewards. */
    interface IRewards {

        /** Rewards rewards */
        rewards?: (mykj.IReward[]|null);
    }

    /** Represents a Rewards. */
    class Rewards implements IRewards {

        /**
         * Constructs a new Rewards.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IRewards);

        /** Rewards rewards. */
        public rewards: mykj.IReward[];

        /**
         * Creates a new Rewards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rewards instance
         */
        public static create(properties?: mykj.IRewards): mykj.Rewards;

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link mykj.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link mykj.Rewards.verify|verify} messages.
         * @param message Rewards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IRewards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Rewards;

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Rewards;

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rewards
         */
        public static fromObject(object: { [k: string]: any }): mykj.Rewards;

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @param message Rewards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Rewards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rewards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Reward. */
    interface IReward {

        /** Reward type */
        type?: (number|null);

        /** Reward count */
        count?: (mykj.IBNumber|null);
    }

    /** Represents a Reward. */
    class Reward implements IReward {

        /**
         * Constructs a new Reward.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IReward);

        /** Reward type. */
        public type: number;

        /** Reward count. */
        public count?: (mykj.IBNumber|null);

        /**
         * Creates a new Reward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reward instance
         */
        public static create(properties?: mykj.IReward): mykj.Reward;

        /**
         * Encodes the specified Reward message. Does not implicitly {@link mykj.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link mykj.Reward.verify|verify} messages.
         * @param message Reward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Reward;

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Reward;

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reward
         */
        public static fromObject(object: { [k: string]: any }): mykj.Reward;

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @param message Reward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Reward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Speed. */
    interface ISpeed {

        /** Speed count */
        count?: (number|null);

        /** Speed cd */
        cd?: (number|null);
    }

    /** Represents a Speed. */
    class Speed implements ISpeed {

        /**
         * Constructs a new Speed.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ISpeed);

        /** Speed count. */
        public count: number;

        /** Speed cd. */
        public cd: number;

        /**
         * Creates a new Speed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Speed instance
         */
        public static create(properties?: mykj.ISpeed): mykj.Speed;

        /**
         * Encodes the specified Speed message. Does not implicitly {@link mykj.Speed.verify|verify} messages.
         * @param message Speed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ISpeed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Speed message, length delimited. Does not implicitly {@link mykj.Speed.verify|verify} messages.
         * @param message Speed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ISpeed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Speed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Speed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Speed;

        /**
         * Decodes a Speed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Speed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Speed;

        /**
         * Creates a Speed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Speed
         */
        public static fromObject(object: { [k: string]: any }): mykj.Speed;

        /**
         * Creates a plain object from a Speed message. Also converts values to other types if specified.
         * @param message Speed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Speed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Speed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Ad. */
    interface IAd {

        /** Ad type */
        type?: (number|null);
    }

    /** Represents an Ad. */
    class Ad implements IAd {

        /**
         * Constructs a new Ad.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IAd);

        /** Ad type. */
        public type: number;

        /**
         * Creates a new Ad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ad instance
         */
        public static create(properties?: mykj.IAd): mykj.Ad;

        /**
         * Encodes the specified Ad message. Does not implicitly {@link mykj.Ad.verify|verify} messages.
         * @param message Ad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IAd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ad message, length delimited. Does not implicitly {@link mykj.Ad.verify|verify} messages.
         * @param message Ad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IAd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.Ad;

        /**
         * Decodes an Ad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.Ad;

        /**
         * Creates an Ad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ad
         */
        public static fromObject(object: { [k: string]: any }): mykj.Ad;

        /**
         * Creates a plain object from an Ad message. Also converts values to other types if specified.
         * @param message Ad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.Ad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeInfo. */
    interface IChangeInfo {

        /** ChangeInfo luck */
        luck?: (number|null);

        /** ChangeInfo monsters */
        monsters?: (mykj.IMonster[]|null);

        /** ChangeInfo freeCDTime */
        freeCDTime?: (mykj.ITimeStamp|null);

        /** ChangeInfo adCount */
        adCount?: (number|null);

        /** ChangeInfo count */
        count?: (number|null);
    }

    /** Represents a ChangeInfo. */
    class ChangeInfo implements IChangeInfo {

        /**
         * Constructs a new ChangeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IChangeInfo);

        /** ChangeInfo luck. */
        public luck: number;

        /** ChangeInfo monsters. */
        public monsters: mykj.IMonster[];

        /** ChangeInfo freeCDTime. */
        public freeCDTime?: (mykj.ITimeStamp|null);

        /** ChangeInfo adCount. */
        public adCount: number;

        /** ChangeInfo count. */
        public count: number;

        /**
         * Creates a new ChangeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeInfo instance
         */
        public static create(properties?: mykj.IChangeInfo): mykj.ChangeInfo;

        /**
         * Encodes the specified ChangeInfo message. Does not implicitly {@link mykj.ChangeInfo.verify|verify} messages.
         * @param message ChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IChangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeInfo message, length delimited. Does not implicitly {@link mykj.ChangeInfo.verify|verify} messages.
         * @param message ChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IChangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.ChangeInfo;

        /**
         * Decodes a ChangeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.ChangeInfo;

        /**
         * Creates a ChangeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeInfo
         */
        public static fromObject(object: { [k: string]: any }): mykj.ChangeInfo;

        /**
         * Creates a plain object from a ChangeInfo message. Also converts values to other types if specified.
         * @param message ChangeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.ChangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MonsterChangeInfo. */
    interface IMonsterChangeInfo {

        /** MonsterChangeInfo monsterInfo */
        monsterInfo?: (mykj.IMonsterChange[]|null);
    }

    /** Represents a MonsterChangeInfo. */
    class MonsterChangeInfo implements IMonsterChangeInfo {

        /**
         * Constructs a new MonsterChangeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IMonsterChangeInfo);

        /** MonsterChangeInfo monsterInfo. */
        public monsterInfo: mykj.IMonsterChange[];

        /**
         * Creates a new MonsterChangeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MonsterChangeInfo instance
         */
        public static create(properties?: mykj.IMonsterChangeInfo): mykj.MonsterChangeInfo;

        /**
         * Encodes the specified MonsterChangeInfo message. Does not implicitly {@link mykj.MonsterChangeInfo.verify|verify} messages.
         * @param message MonsterChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IMonsterChangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MonsterChangeInfo message, length delimited. Does not implicitly {@link mykj.MonsterChangeInfo.verify|verify} messages.
         * @param message MonsterChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IMonsterChangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MonsterChangeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MonsterChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.MonsterChangeInfo;

        /**
         * Decodes a MonsterChangeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MonsterChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.MonsterChangeInfo;

        /**
         * Creates a MonsterChangeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MonsterChangeInfo
         */
        public static fromObject(object: { [k: string]: any }): mykj.MonsterChangeInfo;

        /**
         * Creates a plain object from a MonsterChangeInfo message. Also converts values to other types if specified.
         * @param message MonsterChangeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.MonsterChangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MonsterChangeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MonsterChange. */
    interface IMonsterChange {

        /** MonsterChange id */
        id?: (number|null);

        /** MonsterChange type */
        type?: (number|null);

        /** MonsterChange monsters */
        monsters?: (mykj.IMonster[]|null);

        /** MonsterChange monsterOrder */
        monsterOrder?: (mykj.IMonsterOrder|null);
    }

    /** Represents a MonsterChange. */
    class MonsterChange implements IMonsterChange {

        /**
         * Constructs a new MonsterChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IMonsterChange);

        /** MonsterChange id. */
        public id: number;

        /** MonsterChange type. */
        public type: number;

        /** MonsterChange monsters. */
        public monsters: mykj.IMonster[];

        /** MonsterChange monsterOrder. */
        public monsterOrder?: (mykj.IMonsterOrder|null);

        /**
         * Creates a new MonsterChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MonsterChange instance
         */
        public static create(properties?: mykj.IMonsterChange): mykj.MonsterChange;

        /**
         * Encodes the specified MonsterChange message. Does not implicitly {@link mykj.MonsterChange.verify|verify} messages.
         * @param message MonsterChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IMonsterChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MonsterChange message, length delimited. Does not implicitly {@link mykj.MonsterChange.verify|verify} messages.
         * @param message MonsterChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IMonsterChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MonsterChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MonsterChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.MonsterChange;

        /**
         * Decodes a MonsterChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MonsterChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.MonsterChange;

        /**
         * Creates a MonsterChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MonsterChange
         */
        public static fromObject(object: { [k: string]: any }): mykj.MonsterChange;

        /**
         * Creates a plain object from a MonsterChange message. Also converts values to other types if specified.
         * @param message MonsterChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.MonsterChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MonsterChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LuckInfo. */
    interface ILuckInfo {

        /** LuckInfo sign */
        sign?: (boolean|null);

        /** LuckInfo video */
        video?: (mykj.ICountData|null);

        /** LuckInfo share */
        share?: (mykj.ICountData|null);
    }

    /** Represents a LuckInfo. */
    class LuckInfo implements ILuckInfo {

        /**
         * Constructs a new LuckInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ILuckInfo);

        /** LuckInfo sign. */
        public sign: boolean;

        /** LuckInfo video. */
        public video?: (mykj.ICountData|null);

        /** LuckInfo share. */
        public share?: (mykj.ICountData|null);

        /**
         * Creates a new LuckInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LuckInfo instance
         */
        public static create(properties?: mykj.ILuckInfo): mykj.LuckInfo;

        /**
         * Encodes the specified LuckInfo message. Does not implicitly {@link mykj.LuckInfo.verify|verify} messages.
         * @param message LuckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ILuckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LuckInfo message, length delimited. Does not implicitly {@link mykj.LuckInfo.verify|verify} messages.
         * @param message LuckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ILuckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LuckInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LuckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.LuckInfo;

        /**
         * Decodes a LuckInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LuckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.LuckInfo;

        /**
         * Creates a LuckInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LuckInfo
         */
        public static fromObject(object: { [k: string]: any }): mykj.LuckInfo;

        /**
         * Creates a plain object from a LuckInfo message. Also converts values to other types if specified.
         * @param message LuckInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.LuckInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LuckInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CountData. */
    interface ICountData {

        /** CountData now */
        now?: (number|null);

        /** CountData max */
        max?: (number|null);
    }

    /** Represents a CountData. */
    class CountData implements ICountData {

        /**
         * Constructs a new CountData.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.ICountData);

        /** CountData now. */
        public now: number;

        /** CountData max. */
        public max: number;

        /**
         * Creates a new CountData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CountData instance
         */
        public static create(properties?: mykj.ICountData): mykj.CountData;

        /**
         * Encodes the specified CountData message. Does not implicitly {@link mykj.CountData.verify|verify} messages.
         * @param message CountData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.ICountData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CountData message, length delimited. Does not implicitly {@link mykj.CountData.verify|verify} messages.
         * @param message CountData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.ICountData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CountData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CountData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.CountData;

        /**
         * Decodes a CountData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CountData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.CountData;

        /**
         * Creates a CountData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CountData
         */
        public static fromObject(object: { [k: string]: any }): mykj.CountData;

        /**
         * Creates a plain object from a CountData message. Also converts values to other types if specified.
         * @param message CountData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.CountData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CountData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedPacketInfo. */
    interface IRedPacketInfo {

        /** RedPacketInfo redPackets */
        redPackets?: (mykj.IMonsterOrder[]|null);
    }

    /** Represents a RedPacketInfo. */
    class RedPacketInfo implements IRedPacketInfo {

        /**
         * Constructs a new RedPacketInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IRedPacketInfo);

        /** RedPacketInfo redPackets. */
        public redPackets: mykj.IMonsterOrder[];

        /**
         * Creates a new RedPacketInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPacketInfo instance
         */
        public static create(properties?: mykj.IRedPacketInfo): mykj.RedPacketInfo;

        /**
         * Encodes the specified RedPacketInfo message. Does not implicitly {@link mykj.RedPacketInfo.verify|verify} messages.
         * @param message RedPacketInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IRedPacketInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedPacketInfo message, length delimited. Does not implicitly {@link mykj.RedPacketInfo.verify|verify} messages.
         * @param message RedPacketInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IRedPacketInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPacketInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPacketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.RedPacketInfo;

        /**
         * Decodes a RedPacketInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedPacketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.RedPacketInfo;

        /**
         * Creates a RedPacketInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedPacketInfo
         */
        public static fromObject(object: { [k: string]: any }): mykj.RedPacketInfo;

        /**
         * Creates a plain object from a RedPacketInfo message. Also converts values to other types if specified.
         * @param message RedPacketInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.RedPacketInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedPacketInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedPointList. */
    interface IRedPointList {

        /** RedPointList RedPoint */
        RedPoint?: (mykj.IRedPoint[]|null);
    }

    /** Represents a RedPointList. */
    class RedPointList implements IRedPointList {

        /**
         * Constructs a new RedPointList.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IRedPointList);

        /** RedPointList RedPoint. */
        public RedPoint: mykj.IRedPoint[];

        /**
         * Creates a new RedPointList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPointList instance
         */
        public static create(properties?: mykj.IRedPointList): mykj.RedPointList;

        /**
         * Encodes the specified RedPointList message. Does not implicitly {@link mykj.RedPointList.verify|verify} messages.
         * @param message RedPointList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IRedPointList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedPointList message, length delimited. Does not implicitly {@link mykj.RedPointList.verify|verify} messages.
         * @param message RedPointList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IRedPointList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPointList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPointList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.RedPointList;

        /**
         * Decodes a RedPointList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedPointList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.RedPointList;

        /**
         * Creates a RedPointList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedPointList
         */
        public static fromObject(object: { [k: string]: any }): mykj.RedPointList;

        /**
         * Creates a plain object from a RedPointList message. Also converts values to other types if specified.
         * @param message RedPointList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.RedPointList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedPointList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RedPoint. */
    interface IRedPoint {

        /** RedPoint key */
        key?: (number|null);

        /** RedPoint value */
        value?: (boolean|null);
    }

    /** Represents a RedPoint. */
    class RedPoint implements IRedPoint {

        /**
         * Constructs a new RedPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: mykj.IRedPoint);

        /** RedPoint key. */
        public key: number;

        /** RedPoint value. */
        public value: boolean;

        /**
         * Creates a new RedPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RedPoint instance
         */
        public static create(properties?: mykj.IRedPoint): mykj.RedPoint;

        /**
         * Encodes the specified RedPoint message. Does not implicitly {@link mykj.RedPoint.verify|verify} messages.
         * @param message RedPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mykj.IRedPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RedPoint message, length delimited. Does not implicitly {@link mykj.RedPoint.verify|verify} messages.
         * @param message RedPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mykj.IRedPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RedPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mykj.RedPoint;

        /**
         * Decodes a RedPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mykj.RedPoint;

        /**
         * Creates a RedPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RedPoint
         */
        public static fromObject(object: { [k: string]: any }): mykj.RedPoint;

        /**
         * Creates a plain object from a RedPoint message. Also converts values to other types if specified.
         * @param message RedPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mykj.RedPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RedPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
}
export { mykj as default };