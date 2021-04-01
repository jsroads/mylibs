/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

const $protobuf = protobuf;

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.creator3 || ($protobuf.roots.creator3 = $util.global);

const mykj = $root.mykj = (() => {

    /**
     * Namespace mykj.
     * @exports mykj
     * @namespace
     */
    const mykj = {};

    mykj.BuyCount = (function() {

        /**
         * Properties of a BuyCount.
         * @memberof mykj
         * @interface IBuyCount
         * @property {number|null} [monsterId] BuyCount monsterId
         * @property {number|null} [count] BuyCount count
         */

        /**
         * Constructs a new BuyCount.
         * @memberof mykj
         * @classdesc Represents a BuyCount.
         * @implements IBuyCount
         * @constructor
         * @param {mykj.IBuyCount=} [properties] Properties to set
         */
        function BuyCount(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyCount monsterId.
         * @member {number} monsterId
         * @memberof mykj.BuyCount
         * @instance
         */
        BuyCount.prototype.monsterId = 0;

        /**
         * BuyCount count.
         * @member {number} count
         * @memberof mykj.BuyCount
         * @instance
         */
        BuyCount.prototype.count = 0;

        /**
         * Creates a new BuyCount instance using the specified properties.
         * @function create
         * @memberof mykj.BuyCount
         * @static
         * @param {mykj.IBuyCount=} [properties] Properties to set
         * @returns {mykj.BuyCount} BuyCount instance
         */
        BuyCount.create = function create(properties) {
            return new BuyCount(properties);
        };

        /**
         * Encodes the specified BuyCount message. Does not implicitly {@link mykj.BuyCount.verify|verify} messages.
         * @function encode
         * @memberof mykj.BuyCount
         * @static
         * @param {mykj.IBuyCount} message BuyCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyCount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monsterId != null && Object.hasOwnProperty.call(message, "monsterId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.monsterId);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified BuyCount message, length delimited. Does not implicitly {@link mykj.BuyCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.BuyCount
         * @static
         * @param {mykj.IBuyCount} message BuyCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyCount message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.BuyCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.BuyCount} BuyCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyCount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.BuyCount();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.monsterId = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.BuyCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.BuyCount} BuyCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a BuyCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.BuyCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.BuyCount} BuyCount
         */
        BuyCount.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.BuyCount)
                return object;
            let message = new $root.mykj.BuyCount();
            if (object.monsterId != null)
                message.monsterId = object.monsterId >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BuyCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.BuyCount
         * @static
         * @param {mykj.BuyCount} message BuyCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuyCount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.monsterId = 0;
                object.count = 0;
            }
            if (message.monsterId != null && message.hasOwnProperty("monsterId"))
                object.monsterId = message.monsterId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this BuyCount to JSON.
         * @function toJSON
         * @memberof mykj.BuyCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuyCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuyCount;
    })();

    mykj.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof mykj
         * @interface IGameInfo
         * @property {mykj.IUser|null} [user] GameInfo user
         * @property {Array.<mykj.IMonster>|null} [monster] GameInfo monster
         * @property {Array.<mykj.IBuyCount>|null} [buyCountList] GameInfo buyCountList
         * @property {mykj.ITimeStamp|null} [speedTime] GameInfo speedTime
         * @property {number|null} [speedLevel] GameInfo speedLevel
         */

        /**
         * Constructs a new GameInfo.
         * @memberof mykj
         * @classdesc Represents a GameInfo.
         * @implements IGameInfo
         * @constructor
         * @param {mykj.IGameInfo=} [properties] Properties to set
         */
        function GameInfo(properties) {
            this.monster = [];
            this.buyCountList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInfo user.
         * @member {mykj.IUser|null|undefined} user
         * @memberof mykj.GameInfo
         * @instance
         */
        GameInfo.prototype.user = null;

        /**
         * GameInfo monster.
         * @member {Array.<mykj.IMonster>} monster
         * @memberof mykj.GameInfo
         * @instance
         */
        GameInfo.prototype.monster = $util.emptyArray;

        /**
         * GameInfo buyCountList.
         * @member {Array.<mykj.IBuyCount>} buyCountList
         * @memberof mykj.GameInfo
         * @instance
         */
        GameInfo.prototype.buyCountList = $util.emptyArray;

        /**
         * GameInfo speedTime.
         * @member {mykj.ITimeStamp|null|undefined} speedTime
         * @memberof mykj.GameInfo
         * @instance
         */
        GameInfo.prototype.speedTime = null;

        /**
         * GameInfo speedLevel.
         * @member {number} speedLevel
         * @memberof mykj.GameInfo
         * @instance
         */
        GameInfo.prototype.speedLevel = 0;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @function create
         * @memberof mykj.GameInfo
         * @static
         * @param {mykj.IGameInfo=} [properties] Properties to set
         * @returns {mykj.GameInfo} GameInfo instance
         */
        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link mykj.GameInfo.verify|verify} messages.
         * @function encode
         * @memberof mykj.GameInfo
         * @static
         * @param {mykj.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.mykj.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.monster != null && message.monster.length)
                for (let i = 0; i < message.monster.length; ++i)
                    $root.mykj.Monster.encode(message.monster[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.buyCountList != null && message.buyCountList.length)
                for (let i = 0; i < message.buyCountList.length; ++i)
                    $root.mykj.BuyCount.encode(message.buyCountList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.speedTime != null && Object.hasOwnProperty.call(message, "speedTime"))
                $root.mykj.TimeStamp.encode(message.speedTime, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.speedLevel != null && Object.hasOwnProperty.call(message, "speedLevel"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.speedLevel);
            return writer;
        };

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link mykj.GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.GameInfo
         * @static
         * @param {mykj.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.GameInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.mykj.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.monster && message.monster.length))
                        message.monster = [];
                    message.monster.push($root.mykj.Monster.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.buyCountList && message.buyCountList.length))
                        message.buyCountList = [];
                    message.buyCountList.push($root.mykj.BuyCount.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.speedTime = $root.mykj.TimeStamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.speedLevel = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.GameInfo} GameInfo
         */
        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.GameInfo)
                return object;
            let message = new $root.mykj.GameInfo();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".mykj.GameInfo.user: object expected");
                message.user = $root.mykj.User.fromObject(object.user);
            }
            if (object.monster) {
                if (!Array.isArray(object.monster))
                    throw TypeError(".mykj.GameInfo.monster: array expected");
                message.monster = [];
                for (let i = 0; i < object.monster.length; ++i) {
                    if (typeof object.monster[i] !== "object")
                        throw TypeError(".mykj.GameInfo.monster: object expected");
                    message.monster[i] = $root.mykj.Monster.fromObject(object.monster[i]);
                }
            }
            if (object.buyCountList) {
                if (!Array.isArray(object.buyCountList))
                    throw TypeError(".mykj.GameInfo.buyCountList: array expected");
                message.buyCountList = [];
                for (let i = 0; i < object.buyCountList.length; ++i) {
                    if (typeof object.buyCountList[i] !== "object")
                        throw TypeError(".mykj.GameInfo.buyCountList: object expected");
                    message.buyCountList[i] = $root.mykj.BuyCount.fromObject(object.buyCountList[i]);
                }
            }
            if (object.speedTime != null) {
                if (typeof object.speedTime !== "object")
                    throw TypeError(".mykj.GameInfo.speedTime: object expected");
                message.speedTime = $root.mykj.TimeStamp.fromObject(object.speedTime);
            }
            if (object.speedLevel != null)
                message.speedLevel = object.speedLevel >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.GameInfo
         * @static
         * @param {mykj.GameInfo} message GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.monster = [];
                object.buyCountList = [];
            }
            if (options.defaults) {
                object.user = null;
                object.speedTime = null;
                object.speedLevel = 0;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.mykj.User.toObject(message.user, options);
            if (message.monster && message.monster.length) {
                object.monster = [];
                for (let j = 0; j < message.monster.length; ++j)
                    object.monster[j] = $root.mykj.Monster.toObject(message.monster[j], options);
            }
            if (message.buyCountList && message.buyCountList.length) {
                object.buyCountList = [];
                for (let j = 0; j < message.buyCountList.length; ++j)
                    object.buyCountList[j] = $root.mykj.BuyCount.toObject(message.buyCountList[j], options);
            }
            if (message.speedTime != null && message.hasOwnProperty("speedTime"))
                object.speedTime = $root.mykj.TimeStamp.toObject(message.speedTime, options);
            if (message.speedLevel != null && message.hasOwnProperty("speedLevel"))
                object.speedLevel = message.speedLevel;
            return object;
        };

        /**
         * Converts this GameInfo to JSON.
         * @function toJSON
         * @memberof mykj.GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    mykj.Eggs = (function() {

        /**
         * Properties of an Eggs.
         * @memberof mykj
         * @interface IEggs
         * @property {Array.<mykj.IEgg>|null} [eggs] Eggs eggs
         */

        /**
         * Constructs a new Eggs.
         * @memberof mykj
         * @classdesc Represents an Eggs.
         * @implements IEggs
         * @constructor
         * @param {mykj.IEggs=} [properties] Properties to set
         */
        function Eggs(properties) {
            this.eggs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Eggs eggs.
         * @member {Array.<mykj.IEgg>} eggs
         * @memberof mykj.Eggs
         * @instance
         */
        Eggs.prototype.eggs = $util.emptyArray;

        /**
         * Creates a new Eggs instance using the specified properties.
         * @function create
         * @memberof mykj.Eggs
         * @static
         * @param {mykj.IEggs=} [properties] Properties to set
         * @returns {mykj.Eggs} Eggs instance
         */
        Eggs.create = function create(properties) {
            return new Eggs(properties);
        };

        /**
         * Encodes the specified Eggs message. Does not implicitly {@link mykj.Eggs.verify|verify} messages.
         * @function encode
         * @memberof mykj.Eggs
         * @static
         * @param {mykj.IEggs} message Eggs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Eggs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eggs != null && message.eggs.length)
                for (let i = 0; i < message.eggs.length; ++i)
                    $root.mykj.Egg.encode(message.eggs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Eggs message, length delimited. Does not implicitly {@link mykj.Eggs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Eggs
         * @static
         * @param {mykj.IEggs} message Eggs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Eggs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Eggs message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Eggs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Eggs} Eggs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Eggs.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Eggs();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.eggs && message.eggs.length))
                        message.eggs = [];
                    message.eggs.push($root.mykj.Egg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Eggs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Eggs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Eggs} Eggs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Eggs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an Eggs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Eggs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Eggs} Eggs
         */
        Eggs.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Eggs)
                return object;
            let message = new $root.mykj.Eggs();
            if (object.eggs) {
                if (!Array.isArray(object.eggs))
                    throw TypeError(".mykj.Eggs.eggs: array expected");
                message.eggs = [];
                for (let i = 0; i < object.eggs.length; ++i) {
                    if (typeof object.eggs[i] !== "object")
                        throw TypeError(".mykj.Eggs.eggs: object expected");
                    message.eggs[i] = $root.mykj.Egg.fromObject(object.eggs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Eggs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Eggs
         * @static
         * @param {mykj.Eggs} message Eggs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Eggs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.eggs = [];
            if (message.eggs && message.eggs.length) {
                object.eggs = [];
                for (let j = 0; j < message.eggs.length; ++j)
                    object.eggs[j] = $root.mykj.Egg.toObject(message.eggs[j], options);
            }
            return object;
        };

        /**
         * Converts this Eggs to JSON.
         * @function toJSON
         * @memberof mykj.Eggs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Eggs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Eggs;
    })();

    mykj.Egg = (function() {

        /**
         * Properties of an Egg.
         * @memberof mykj
         * @interface IEgg
         * @property {number|null} [id] Egg id
         * @property {number|null} [monsterId] Egg monsterId
         * @property {mykj.ITimeStamp|null} [timeStamp] Egg timeStamp
         * @property {boolean|null} [opened] Egg opened
         * @property {number|null} [userId] Egg userId
         * @property {number|null} [level] Egg level
         */

        /**
         * Constructs a new Egg.
         * @memberof mykj
         * @classdesc Represents an Egg.
         * @implements IEgg
         * @constructor
         * @param {mykj.IEgg=} [properties] Properties to set
         */
        function Egg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Egg id.
         * @member {number} id
         * @memberof mykj.Egg
         * @instance
         */
        Egg.prototype.id = 0;

        /**
         * Egg monsterId.
         * @member {number} monsterId
         * @memberof mykj.Egg
         * @instance
         */
        Egg.prototype.monsterId = 0;

        /**
         * Egg timeStamp.
         * @member {mykj.ITimeStamp|null|undefined} timeStamp
         * @memberof mykj.Egg
         * @instance
         */
        Egg.prototype.timeStamp = null;

        /**
         * Egg opened.
         * @member {boolean} opened
         * @memberof mykj.Egg
         * @instance
         */
        Egg.prototype.opened = false;

        /**
         * Egg userId.
         * @member {number} userId
         * @memberof mykj.Egg
         * @instance
         */
        Egg.prototype.userId = 0;

        /**
         * Egg level.
         * @member {number} level
         * @memberof mykj.Egg
         * @instance
         */
        Egg.prototype.level = 0;

        /**
         * Creates a new Egg instance using the specified properties.
         * @function create
         * @memberof mykj.Egg
         * @static
         * @param {mykj.IEgg=} [properties] Properties to set
         * @returns {mykj.Egg} Egg instance
         */
        Egg.create = function create(properties) {
            return new Egg(properties);
        };

        /**
         * Encodes the specified Egg message. Does not implicitly {@link mykj.Egg.verify|verify} messages.
         * @function encode
         * @memberof mykj.Egg
         * @static
         * @param {mykj.IEgg} message Egg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Egg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.monsterId != null && Object.hasOwnProperty.call(message, "monsterId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.monsterId);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                $root.mykj.TimeStamp.encode(message.timeStamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.opened != null && Object.hasOwnProperty.call(message, "opened"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.opened);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.userId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.level);
            return writer;
        };

        /**
         * Encodes the specified Egg message, length delimited. Does not implicitly {@link mykj.Egg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Egg
         * @static
         * @param {mykj.IEgg} message Egg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Egg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Egg message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Egg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Egg} Egg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Egg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Egg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.monsterId = reader.uint32();
                    break;
                case 3:
                    message.timeStamp = $root.mykj.TimeStamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.opened = reader.bool();
                    break;
                case 5:
                    message.userId = reader.uint32();
                    break;
                case 6:
                    message.level = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Egg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Egg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Egg} Egg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Egg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an Egg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Egg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Egg} Egg
         */
        Egg.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Egg)
                return object;
            let message = new $root.mykj.Egg();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.monsterId != null)
                message.monsterId = object.monsterId >>> 0;
            if (object.timeStamp != null) {
                if (typeof object.timeStamp !== "object")
                    throw TypeError(".mykj.Egg.timeStamp: object expected");
                message.timeStamp = $root.mykj.TimeStamp.fromObject(object.timeStamp);
            }
            if (object.opened != null)
                message.opened = Boolean(object.opened);
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.level != null)
                message.level = object.level | 0;
            return message;
        };

        /**
         * Creates a plain object from an Egg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Egg
         * @static
         * @param {mykj.Egg} message Egg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Egg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.monsterId = 0;
                object.timeStamp = null;
                object.opened = false;
                object.userId = 0;
                object.level = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.monsterId != null && message.hasOwnProperty("monsterId"))
                object.monsterId = message.monsterId;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = $root.mykj.TimeStamp.toObject(message.timeStamp, options);
            if (message.opened != null && message.hasOwnProperty("opened"))
                object.opened = message.opened;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this Egg to JSON.
         * @function toJSON
         * @memberof mykj.Egg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Egg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Egg;
    })();

    mykj.CaibuList = (function() {

        /**
         * Properties of a CaibuList.
         * @memberof mykj
         * @interface ICaibuList
         * @property {Array.<mykj.ICaibu>|null} [caibus] CaibuList caibus
         */

        /**
         * Constructs a new CaibuList.
         * @memberof mykj
         * @classdesc Represents a CaibuList.
         * @implements ICaibuList
         * @constructor
         * @param {mykj.ICaibuList=} [properties] Properties to set
         */
        function CaibuList(properties) {
            this.caibus = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CaibuList caibus.
         * @member {Array.<mykj.ICaibu>} caibus
         * @memberof mykj.CaibuList
         * @instance
         */
        CaibuList.prototype.caibus = $util.emptyArray;

        /**
         * Creates a new CaibuList instance using the specified properties.
         * @function create
         * @memberof mykj.CaibuList
         * @static
         * @param {mykj.ICaibuList=} [properties] Properties to set
         * @returns {mykj.CaibuList} CaibuList instance
         */
        CaibuList.create = function create(properties) {
            return new CaibuList(properties);
        };

        /**
         * Encodes the specified CaibuList message. Does not implicitly {@link mykj.CaibuList.verify|verify} messages.
         * @function encode
         * @memberof mykj.CaibuList
         * @static
         * @param {mykj.ICaibuList} message CaibuList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CaibuList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.caibus != null && message.caibus.length)
                for (let i = 0; i < message.caibus.length; ++i)
                    $root.mykj.Caibu.encode(message.caibus[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CaibuList message, length delimited. Does not implicitly {@link mykj.CaibuList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.CaibuList
         * @static
         * @param {mykj.ICaibuList} message CaibuList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CaibuList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CaibuList message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.CaibuList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.CaibuList} CaibuList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CaibuList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.CaibuList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.caibus && message.caibus.length))
                        message.caibus = [];
                    message.caibus.push($root.mykj.Caibu.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CaibuList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.CaibuList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.CaibuList} CaibuList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CaibuList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a CaibuList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.CaibuList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.CaibuList} CaibuList
         */
        CaibuList.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.CaibuList)
                return object;
            let message = new $root.mykj.CaibuList();
            if (object.caibus) {
                if (!Array.isArray(object.caibus))
                    throw TypeError(".mykj.CaibuList.caibus: array expected");
                message.caibus = [];
                for (let i = 0; i < object.caibus.length; ++i) {
                    if (typeof object.caibus[i] !== "object")
                        throw TypeError(".mykj.CaibuList.caibus: object expected");
                    message.caibus[i] = $root.mykj.Caibu.fromObject(object.caibus[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CaibuList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.CaibuList
         * @static
         * @param {mykj.CaibuList} message CaibuList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CaibuList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.caibus = [];
            if (message.caibus && message.caibus.length) {
                object.caibus = [];
                for (let j = 0; j < message.caibus.length; ++j)
                    object.caibus[j] = $root.mykj.Caibu.toObject(message.caibus[j], options);
            }
            return object;
        };

        /**
         * Converts this CaibuList to JSON.
         * @function toJSON
         * @memberof mykj.CaibuList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CaibuList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CaibuList;
    })();

    mykj.Caibu = (function() {

        /**
         * Properties of a Caibu.
         * @memberof mykj
         * @interface ICaibu
         * @property {string|null} [nickname] Caibu nickname
         * @property {string|null} [avatarUrl] Caibu avatarUrl
         * @property {number|null} [userId] Caibu userId
         * @property {number|null} [level] Caibu level
         * @property {boolean|null} [isFriend] Caibu isFriend
         * @property {mykj.IEgg|null} [egg] Caibu egg
         */

        /**
         * Constructs a new Caibu.
         * @memberof mykj
         * @classdesc Represents a Caibu.
         * @implements ICaibu
         * @constructor
         * @param {mykj.ICaibu=} [properties] Properties to set
         */
        function Caibu(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Caibu nickname.
         * @member {string} nickname
         * @memberof mykj.Caibu
         * @instance
         */
        Caibu.prototype.nickname = "";

        /**
         * Caibu avatarUrl.
         * @member {string} avatarUrl
         * @memberof mykj.Caibu
         * @instance
         */
        Caibu.prototype.avatarUrl = "";

        /**
         * Caibu userId.
         * @member {number} userId
         * @memberof mykj.Caibu
         * @instance
         */
        Caibu.prototype.userId = 0;

        /**
         * Caibu level.
         * @member {number} level
         * @memberof mykj.Caibu
         * @instance
         */
        Caibu.prototype.level = 0;

        /**
         * Caibu isFriend.
         * @member {boolean} isFriend
         * @memberof mykj.Caibu
         * @instance
         */
        Caibu.prototype.isFriend = false;

        /**
         * Caibu egg.
         * @member {mykj.IEgg|null|undefined} egg
         * @memberof mykj.Caibu
         * @instance
         */
        Caibu.prototype.egg = null;

        /**
         * Creates a new Caibu instance using the specified properties.
         * @function create
         * @memberof mykj.Caibu
         * @static
         * @param {mykj.ICaibu=} [properties] Properties to set
         * @returns {mykj.Caibu} Caibu instance
         */
        Caibu.create = function create(properties) {
            return new Caibu(properties);
        };

        /**
         * Encodes the specified Caibu message. Does not implicitly {@link mykj.Caibu.verify|verify} messages.
         * @function encode
         * @memberof mykj.Caibu
         * @static
         * @param {mykj.ICaibu} message Caibu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Caibu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.userId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.isFriend != null && Object.hasOwnProperty.call(message, "isFriend"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isFriend);
            if (message.egg != null && Object.hasOwnProperty.call(message, "egg"))
                $root.mykj.Egg.encode(message.egg, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Caibu message, length delimited. Does not implicitly {@link mykj.Caibu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Caibu
         * @static
         * @param {mykj.ICaibu} message Caibu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Caibu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Caibu message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Caibu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Caibu} Caibu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Caibu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Caibu();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.avatarUrl = reader.string();
                    break;
                case 3:
                    message.userId = reader.uint32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.isFriend = reader.bool();
                    break;
                case 6:
                    message.egg = $root.mykj.Egg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Caibu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Caibu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Caibu} Caibu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Caibu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Caibu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Caibu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Caibu} Caibu
         */
        Caibu.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Caibu)
                return object;
            let message = new $root.mykj.Caibu();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.isFriend != null)
                message.isFriend = Boolean(object.isFriend);
            if (object.egg != null) {
                if (typeof object.egg !== "object")
                    throw TypeError(".mykj.Caibu.egg: object expected");
                message.egg = $root.mykj.Egg.fromObject(object.egg);
            }
            return message;
        };

        /**
         * Creates a plain object from a Caibu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Caibu
         * @static
         * @param {mykj.Caibu} message Caibu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Caibu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nickname = "";
                object.avatarUrl = "";
                object.userId = 0;
                object.level = 0;
                object.isFriend = false;
                object.egg = null;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.isFriend != null && message.hasOwnProperty("isFriend"))
                object.isFriend = message.isFriend;
            if (message.egg != null && message.hasOwnProperty("egg"))
                object.egg = $root.mykj.Egg.toObject(message.egg, options);
            return object;
        };

        /**
         * Converts this Caibu to JSON.
         * @function toJSON
         * @memberof mykj.Caibu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Caibu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Caibu;
    })();

    mykj.Revenges = (function() {

        /**
         * Properties of a Revenges.
         * @memberof mykj
         * @interface IRevenges
         * @property {Array.<mykj.IRevenge>|null} [revenges] Revenges revenges
         */

        /**
         * Constructs a new Revenges.
         * @memberof mykj
         * @classdesc Represents a Revenges.
         * @implements IRevenges
         * @constructor
         * @param {mykj.IRevenges=} [properties] Properties to set
         */
        function Revenges(properties) {
            this.revenges = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Revenges revenges.
         * @member {Array.<mykj.IRevenge>} revenges
         * @memberof mykj.Revenges
         * @instance
         */
        Revenges.prototype.revenges = $util.emptyArray;

        /**
         * Creates a new Revenges instance using the specified properties.
         * @function create
         * @memberof mykj.Revenges
         * @static
         * @param {mykj.IRevenges=} [properties] Properties to set
         * @returns {mykj.Revenges} Revenges instance
         */
        Revenges.create = function create(properties) {
            return new Revenges(properties);
        };

        /**
         * Encodes the specified Revenges message. Does not implicitly {@link mykj.Revenges.verify|verify} messages.
         * @function encode
         * @memberof mykj.Revenges
         * @static
         * @param {mykj.IRevenges} message Revenges message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Revenges.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.revenges != null && message.revenges.length)
                for (let i = 0; i < message.revenges.length; ++i)
                    $root.mykj.Revenge.encode(message.revenges[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Revenges message, length delimited. Does not implicitly {@link mykj.Revenges.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Revenges
         * @static
         * @param {mykj.IRevenges} message Revenges message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Revenges.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Revenges message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Revenges
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Revenges} Revenges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Revenges.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Revenges();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.revenges && message.revenges.length))
                        message.revenges = [];
                    message.revenges.push($root.mykj.Revenge.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Revenges message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Revenges
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Revenges} Revenges
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Revenges.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Revenges message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Revenges
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Revenges} Revenges
         */
        Revenges.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Revenges)
                return object;
            let message = new $root.mykj.Revenges();
            if (object.revenges) {
                if (!Array.isArray(object.revenges))
                    throw TypeError(".mykj.Revenges.revenges: array expected");
                message.revenges = [];
                for (let i = 0; i < object.revenges.length; ++i) {
                    if (typeof object.revenges[i] !== "object")
                        throw TypeError(".mykj.Revenges.revenges: object expected");
                    message.revenges[i] = $root.mykj.Revenge.fromObject(object.revenges[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Revenges message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Revenges
         * @static
         * @param {mykj.Revenges} message Revenges
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Revenges.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.revenges = [];
            if (message.revenges && message.revenges.length) {
                object.revenges = [];
                for (let j = 0; j < message.revenges.length; ++j)
                    object.revenges[j] = $root.mykj.Revenge.toObject(message.revenges[j], options);
            }
            return object;
        };

        /**
         * Converts this Revenges to JSON.
         * @function toJSON
         * @memberof mykj.Revenges
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Revenges.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Revenges;
    })();

    mykj.Revenge = (function() {

        /**
         * Properties of a Revenge.
         * @memberof mykj
         * @interface IRevenge
         * @property {string|null} [nickname] Revenge nickname
         * @property {string|null} [avatarUrl] Revenge avatarUrl
         * @property {number|null} [userId] Revenge userId
         * @property {number|null} [monsterId] Revenge monsterId
         * @property {mykj.ITimeStamp|null} [timeStamp] Revenge timeStamp
         * @property {number|null} [id] Revenge id
         */

        /**
         * Constructs a new Revenge.
         * @memberof mykj
         * @classdesc Represents a Revenge.
         * @implements IRevenge
         * @constructor
         * @param {mykj.IRevenge=} [properties] Properties to set
         */
        function Revenge(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Revenge nickname.
         * @member {string} nickname
         * @memberof mykj.Revenge
         * @instance
         */
        Revenge.prototype.nickname = "";

        /**
         * Revenge avatarUrl.
         * @member {string} avatarUrl
         * @memberof mykj.Revenge
         * @instance
         */
        Revenge.prototype.avatarUrl = "";

        /**
         * Revenge userId.
         * @member {number} userId
         * @memberof mykj.Revenge
         * @instance
         */
        Revenge.prototype.userId = 0;

        /**
         * Revenge monsterId.
         * @member {number} monsterId
         * @memberof mykj.Revenge
         * @instance
         */
        Revenge.prototype.monsterId = 0;

        /**
         * Revenge timeStamp.
         * @member {mykj.ITimeStamp|null|undefined} timeStamp
         * @memberof mykj.Revenge
         * @instance
         */
        Revenge.prototype.timeStamp = null;

        /**
         * Revenge id.
         * @member {number} id
         * @memberof mykj.Revenge
         * @instance
         */
        Revenge.prototype.id = 0;

        /**
         * Creates a new Revenge instance using the specified properties.
         * @function create
         * @memberof mykj.Revenge
         * @static
         * @param {mykj.IRevenge=} [properties] Properties to set
         * @returns {mykj.Revenge} Revenge instance
         */
        Revenge.create = function create(properties) {
            return new Revenge(properties);
        };

        /**
         * Encodes the specified Revenge message. Does not implicitly {@link mykj.Revenge.verify|verify} messages.
         * @function encode
         * @memberof mykj.Revenge
         * @static
         * @param {mykj.IRevenge} message Revenge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Revenge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.userId);
            if (message.monsterId != null && Object.hasOwnProperty.call(message, "monsterId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.monsterId);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                $root.mykj.TimeStamp.encode(message.timeStamp, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified Revenge message, length delimited. Does not implicitly {@link mykj.Revenge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Revenge
         * @static
         * @param {mykj.IRevenge} message Revenge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Revenge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Revenge message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Revenge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Revenge} Revenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Revenge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Revenge();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.avatarUrl = reader.string();
                    break;
                case 3:
                    message.userId = reader.uint32();
                    break;
                case 4:
                    message.monsterId = reader.uint32();
                    break;
                case 5:
                    message.timeStamp = $root.mykj.TimeStamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Revenge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Revenge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Revenge} Revenge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Revenge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Revenge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Revenge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Revenge} Revenge
         */
        Revenge.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Revenge)
                return object;
            let message = new $root.mykj.Revenge();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.monsterId != null)
                message.monsterId = object.monsterId >>> 0;
            if (object.timeStamp != null) {
                if (typeof object.timeStamp !== "object")
                    throw TypeError(".mykj.Revenge.timeStamp: object expected");
                message.timeStamp = $root.mykj.TimeStamp.fromObject(object.timeStamp);
            }
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a Revenge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Revenge
         * @static
         * @param {mykj.Revenge} message Revenge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Revenge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nickname = "";
                object.avatarUrl = "";
                object.userId = 0;
                object.monsterId = 0;
                object.timeStamp = null;
                object.id = 0;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.monsterId != null && message.hasOwnProperty("monsterId"))
                object.monsterId = message.monsterId;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = $root.mykj.TimeStamp.toObject(message.timeStamp, options);
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Revenge to JSON.
         * @function toJSON
         * @memberof mykj.Revenge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Revenge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Revenge;
    })();

    mykj.Monster = (function() {

        /**
         * Properties of a Monster.
         * @memberof mykj
         * @interface IMonster
         * @property {number|null} [id] Monster id
         * @property {number|null} [monsterId] Monster monsterId
         * @property {mykj.ITimeStamp|null} [timeStamp] Monster timeStamp
         */

        /**
         * Constructs a new Monster.
         * @memberof mykj
         * @classdesc Represents a Monster.
         * @implements IMonster
         * @constructor
         * @param {mykj.IMonster=} [properties] Properties to set
         */
        function Monster(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Monster id.
         * @member {number} id
         * @memberof mykj.Monster
         * @instance
         */
        Monster.prototype.id = 0;

        /**
         * Monster monsterId.
         * @member {number} monsterId
         * @memberof mykj.Monster
         * @instance
         */
        Monster.prototype.monsterId = 0;

        /**
         * Monster timeStamp.
         * @member {mykj.ITimeStamp|null|undefined} timeStamp
         * @memberof mykj.Monster
         * @instance
         */
        Monster.prototype.timeStamp = null;

        /**
         * Creates a new Monster instance using the specified properties.
         * @function create
         * @memberof mykj.Monster
         * @static
         * @param {mykj.IMonster=} [properties] Properties to set
         * @returns {mykj.Monster} Monster instance
         */
        Monster.create = function create(properties) {
            return new Monster(properties);
        };

        /**
         * Encodes the specified Monster message. Does not implicitly {@link mykj.Monster.verify|verify} messages.
         * @function encode
         * @memberof mykj.Monster
         * @static
         * @param {mykj.IMonster} message Monster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Monster.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.monsterId != null && Object.hasOwnProperty.call(message, "monsterId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.monsterId);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                $root.mykj.TimeStamp.encode(message.timeStamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Monster message, length delimited. Does not implicitly {@link mykj.Monster.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Monster
         * @static
         * @param {mykj.IMonster} message Monster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Monster.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Monster message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Monster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Monster} Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Monster.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Monster();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.monsterId = reader.uint32();
                    break;
                case 3:
                    message.timeStamp = $root.mykj.TimeStamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Monster message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Monster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Monster} Monster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Monster.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Monster message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Monster
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Monster} Monster
         */
        Monster.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Monster)
                return object;
            let message = new $root.mykj.Monster();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.monsterId != null)
                message.monsterId = object.monsterId >>> 0;
            if (object.timeStamp != null) {
                if (typeof object.timeStamp !== "object")
                    throw TypeError(".mykj.Monster.timeStamp: object expected");
                message.timeStamp = $root.mykj.TimeStamp.fromObject(object.timeStamp);
            }
            return message;
        };

        /**
         * Creates a plain object from a Monster message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Monster
         * @static
         * @param {mykj.Monster} message Monster
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Monster.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.monsterId = 0;
                object.timeStamp = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.monsterId != null && message.hasOwnProperty("monsterId"))
                object.monsterId = message.monsterId;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = $root.mykj.TimeStamp.toObject(message.timeStamp, options);
            return object;
        };

        /**
         * Converts this Monster to JSON.
         * @function toJSON
         * @memberof mykj.Monster
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Monster.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Monster;
    })();

    mykj.BNumber = (function() {

        /**
         * Properties of a BNumber.
         * @memberof mykj
         * @interface IBNumber
         * @property {number|null} [mainValue] BNumber mainValue
         * @property {number|null} [base] BNumber base
         */

        /**
         * Constructs a new BNumber.
         * @memberof mykj
         * @classdesc Represents a BNumber.
         * @implements IBNumber
         * @constructor
         * @param {mykj.IBNumber=} [properties] Properties to set
         */
        function BNumber(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BNumber mainValue.
         * @member {number} mainValue
         * @memberof mykj.BNumber
         * @instance
         */
        BNumber.prototype.mainValue = 0;

        /**
         * BNumber base.
         * @member {number} base
         * @memberof mykj.BNumber
         * @instance
         */
        BNumber.prototype.base = 0;

        /**
         * Creates a new BNumber instance using the specified properties.
         * @function create
         * @memberof mykj.BNumber
         * @static
         * @param {mykj.IBNumber=} [properties] Properties to set
         * @returns {mykj.BNumber} BNumber instance
         */
        BNumber.create = function create(properties) {
            return new BNumber(properties);
        };

        /**
         * Encodes the specified BNumber message. Does not implicitly {@link mykj.BNumber.verify|verify} messages.
         * @function encode
         * @memberof mykj.BNumber
         * @static
         * @param {mykj.IBNumber} message BNumber message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BNumber.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mainValue != null && Object.hasOwnProperty.call(message, "mainValue"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mainValue);
            if (message.base != null && Object.hasOwnProperty.call(message, "base"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.base);
            return writer;
        };

        /**
         * Encodes the specified BNumber message, length delimited. Does not implicitly {@link mykj.BNumber.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.BNumber
         * @static
         * @param {mykj.IBNumber} message BNumber message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BNumber.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BNumber message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.BNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.BNumber} BNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BNumber.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.BNumber();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mainValue = reader.uint32();
                    break;
                case 2:
                    message.base = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BNumber message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.BNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.BNumber} BNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BNumber.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a BNumber message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.BNumber
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.BNumber} BNumber
         */
        BNumber.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.BNumber)
                return object;
            let message = new $root.mykj.BNumber();
            if (object.mainValue != null)
                message.mainValue = object.mainValue >>> 0;
            if (object.base != null)
                message.base = object.base | 0;
            return message;
        };

        /**
         * Creates a plain object from a BNumber message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.BNumber
         * @static
         * @param {mykj.BNumber} message BNumber
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BNumber.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.mainValue = 0;
                object.base = 0;
            }
            if (message.mainValue != null && message.hasOwnProperty("mainValue"))
                object.mainValue = message.mainValue;
            if (message.base != null && message.hasOwnProperty("base"))
                object.base = message.base;
            return object;
        };

        /**
         * Converts this BNumber to JSON.
         * @function toJSON
         * @memberof mykj.BNumber
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BNumber.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BNumber;
    })();

    mykj.User = (function() {

        /**
         * Properties of a User.
         * @memberof mykj
         * @interface IUser
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [avatarUrl] User avatarUrl
         * @property {number|null} [userId] User userId
         * @property {number|null} [level] User level
         * @property {number|null} [gold] User gold
         * @property {number|null} [leaguePoint] User leaguePoint
         * @property {mykj.IBNumber|null} [coin] User coin
         */

        /**
         * Constructs a new User.
         * @memberof mykj
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {mykj.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof mykj.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User avatarUrl.
         * @member {string} avatarUrl
         * @memberof mykj.User
         * @instance
         */
        User.prototype.avatarUrl = "";

        /**
         * User userId.
         * @member {number} userId
         * @memberof mykj.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User level.
         * @member {number} level
         * @memberof mykj.User
         * @instance
         */
        User.prototype.level = 0;

        /**
         * User gold.
         * @member {number} gold
         * @memberof mykj.User
         * @instance
         */
        User.prototype.gold = 0;

        /**
         * User leaguePoint.
         * @member {number} leaguePoint
         * @memberof mykj.User
         * @instance
         */
        User.prototype.leaguePoint = 0;

        /**
         * User coin.
         * @member {mykj.IBNumber|null|undefined} coin
         * @memberof mykj.User
         * @instance
         */
        User.prototype.coin = null;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof mykj.User
         * @static
         * @param {mykj.IUser=} [properties] Properties to set
         * @returns {mykj.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link mykj.User.verify|verify} messages.
         * @function encode
         * @memberof mykj.User
         * @static
         * @param {mykj.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gold);
            if (message.leaguePoint != null && Object.hasOwnProperty.call(message, "leaguePoint"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.leaguePoint);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                $root.mykj.BNumber.encode(message.coin, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link mykj.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.User
         * @static
         * @param {mykj.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.avatarUrl = reader.string();
                    break;
                case 3:
                    message.userId = reader.int32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.gold = reader.int32();
                    break;
                case 6:
                    message.leaguePoint = reader.int32();
                    break;
                case 7:
                    message.coin = $root.mykj.BNumber.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.User)
                return object;
            let message = new $root.mykj.User();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.leaguePoint != null)
                message.leaguePoint = object.leaguePoint | 0;
            if (object.coin != null) {
                if (typeof object.coin !== "object")
                    throw TypeError(".mykj.User.coin: object expected");
                message.coin = $root.mykj.BNumber.fromObject(object.coin);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.User
         * @static
         * @param {mykj.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nickname = "";
                object.avatarUrl = "";
                object.userId = 0;
                object.level = 0;
                object.gold = 0;
                object.leaguePoint = 0;
                object.coin = null;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.leaguePoint != null && message.hasOwnProperty("leaguePoint"))
                object.leaguePoint = message.leaguePoint;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = $root.mykj.BNumber.toObject(message.coin, options);
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof mykj.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    mykj.MergeMonster = (function() {

        /**
         * Properties of a MergeMonster.
         * @memberof mykj
         * @interface IMergeMonster
         * @property {mykj.IMonster|null} [monster] MergeMonster monster
         * @property {mykj.IMonsterOrder|null} [monsterOrder] MergeMonster monsterOrder
         * @property {mykj.IInt32Values|null} [maxLevel] MergeMonster maxLevel
         */

        /**
         * Constructs a new MergeMonster.
         * @memberof mykj
         * @classdesc Represents a MergeMonster.
         * @implements IMergeMonster
         * @constructor
         * @param {mykj.IMergeMonster=} [properties] Properties to set
         */
        function MergeMonster(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MergeMonster monster.
         * @member {mykj.IMonster|null|undefined} monster
         * @memberof mykj.MergeMonster
         * @instance
         */
        MergeMonster.prototype.monster = null;

        /**
         * MergeMonster monsterOrder.
         * @member {mykj.IMonsterOrder|null|undefined} monsterOrder
         * @memberof mykj.MergeMonster
         * @instance
         */
        MergeMonster.prototype.monsterOrder = null;

        /**
         * MergeMonster maxLevel.
         * @member {mykj.IInt32Values|null|undefined} maxLevel
         * @memberof mykj.MergeMonster
         * @instance
         */
        MergeMonster.prototype.maxLevel = null;

        /**
         * Creates a new MergeMonster instance using the specified properties.
         * @function create
         * @memberof mykj.MergeMonster
         * @static
         * @param {mykj.IMergeMonster=} [properties] Properties to set
         * @returns {mykj.MergeMonster} MergeMonster instance
         */
        MergeMonster.create = function create(properties) {
            return new MergeMonster(properties);
        };

        /**
         * Encodes the specified MergeMonster message. Does not implicitly {@link mykj.MergeMonster.verify|verify} messages.
         * @function encode
         * @memberof mykj.MergeMonster
         * @static
         * @param {mykj.IMergeMonster} message MergeMonster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeMonster.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monster != null && Object.hasOwnProperty.call(message, "monster"))
                $root.mykj.Monster.encode(message.monster, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.monsterOrder != null && Object.hasOwnProperty.call(message, "monsterOrder"))
                $root.mykj.MonsterOrder.encode(message.monsterOrder, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.maxLevel != null && Object.hasOwnProperty.call(message, "maxLevel"))
                $root.mykj.Int32Values.encode(message.maxLevel, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MergeMonster message, length delimited. Does not implicitly {@link mykj.MergeMonster.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.MergeMonster
         * @static
         * @param {mykj.IMergeMonster} message MergeMonster message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MergeMonster.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MergeMonster message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.MergeMonster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.MergeMonster} MergeMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeMonster.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.MergeMonster();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.monster = $root.mykj.Monster.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.monsterOrder = $root.mykj.MonsterOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxLevel = $root.mykj.Int32Values.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MergeMonster message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.MergeMonster
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.MergeMonster} MergeMonster
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MergeMonster.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a MergeMonster message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.MergeMonster
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.MergeMonster} MergeMonster
         */
        MergeMonster.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.MergeMonster)
                return object;
            let message = new $root.mykj.MergeMonster();
            if (object.monster != null) {
                if (typeof object.monster !== "object")
                    throw TypeError(".mykj.MergeMonster.monster: object expected");
                message.monster = $root.mykj.Monster.fromObject(object.monster);
            }
            if (object.monsterOrder != null) {
                if (typeof object.monsterOrder !== "object")
                    throw TypeError(".mykj.MergeMonster.monsterOrder: object expected");
                message.monsterOrder = $root.mykj.MonsterOrder.fromObject(object.monsterOrder);
            }
            if (object.maxLevel != null) {
                if (typeof object.maxLevel !== "object")
                    throw TypeError(".mykj.MergeMonster.maxLevel: object expected");
                message.maxLevel = $root.mykj.Int32Values.fromObject(object.maxLevel);
            }
            return message;
        };

        /**
         * Creates a plain object from a MergeMonster message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.MergeMonster
         * @static
         * @param {mykj.MergeMonster} message MergeMonster
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MergeMonster.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.monster = null;
                object.monsterOrder = null;
                object.maxLevel = null;
            }
            if (message.monster != null && message.hasOwnProperty("monster"))
                object.monster = $root.mykj.Monster.toObject(message.monster, options);
            if (message.monsterOrder != null && message.hasOwnProperty("monsterOrder"))
                object.monsterOrder = $root.mykj.MonsterOrder.toObject(message.monsterOrder, options);
            if (message.maxLevel != null && message.hasOwnProperty("maxLevel"))
                object.maxLevel = $root.mykj.Int32Values.toObject(message.maxLevel, options);
            return object;
        };

        /**
         * Converts this MergeMonster to JSON.
         * @function toJSON
         * @memberof mykj.MergeMonster
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MergeMonster.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MergeMonster;
    })();

    mykj.Friends = (function() {

        /**
         * Properties of a Friends.
         * @memberof mykj
         * @interface IFriends
         * @property {Array.<mykj.IFriend>|null} [friends] Friends friends
         */

        /**
         * Constructs a new Friends.
         * @memberof mykj
         * @classdesc Represents a Friends.
         * @implements IFriends
         * @constructor
         * @param {mykj.IFriends=} [properties] Properties to set
         */
        function Friends(properties) {
            this.friends = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Friends friends.
         * @member {Array.<mykj.IFriend>} friends
         * @memberof mykj.Friends
         * @instance
         */
        Friends.prototype.friends = $util.emptyArray;

        /**
         * Creates a new Friends instance using the specified properties.
         * @function create
         * @memberof mykj.Friends
         * @static
         * @param {mykj.IFriends=} [properties] Properties to set
         * @returns {mykj.Friends} Friends instance
         */
        Friends.create = function create(properties) {
            return new Friends(properties);
        };

        /**
         * Encodes the specified Friends message. Does not implicitly {@link mykj.Friends.verify|verify} messages.
         * @function encode
         * @memberof mykj.Friends
         * @static
         * @param {mykj.IFriends} message Friends message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friends.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.friends != null && message.friends.length)
                for (let i = 0; i < message.friends.length; ++i)
                    $root.mykj.Friend.encode(message.friends[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Friends message, length delimited. Does not implicitly {@link mykj.Friends.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Friends
         * @static
         * @param {mykj.IFriends} message Friends message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friends.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Friends message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Friends
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Friends} Friends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friends.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Friends();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.friends && message.friends.length))
                        message.friends = [];
                    message.friends.push($root.mykj.Friend.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Friends message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Friends
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Friends} Friends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friends.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Friends message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Friends
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Friends} Friends
         */
        Friends.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Friends)
                return object;
            let message = new $root.mykj.Friends();
            if (object.friends) {
                if (!Array.isArray(object.friends))
                    throw TypeError(".mykj.Friends.friends: array expected");
                message.friends = [];
                for (let i = 0; i < object.friends.length; ++i) {
                    if (typeof object.friends[i] !== "object")
                        throw TypeError(".mykj.Friends.friends: object expected");
                    message.friends[i] = $root.mykj.Friend.fromObject(object.friends[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Friends message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Friends
         * @static
         * @param {mykj.Friends} message Friends
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Friends.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.friends = [];
            if (message.friends && message.friends.length) {
                object.friends = [];
                for (let j = 0; j < message.friends.length; ++j)
                    object.friends[j] = $root.mykj.Friend.toObject(message.friends[j], options);
            }
            return object;
        };

        /**
         * Converts this Friends to JSON.
         * @function toJSON
         * @memberof mykj.Friends
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Friends.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Friends;
    })();

    mykj.Friend = (function() {

        /**
         * Properties of a Friend.
         * @memberof mykj
         * @interface IFriend
         * @property {string|null} [nickname] Friend nickname
         * @property {string|null} [avatarUrl] Friend avatarUrl
         * @property {number|null} [userId] Friend userId
         * @property {number|null} [level] Friend level
         * @property {mykj.IBNumber|null} [score] Friend score
         * @property {number|null} [status] Friend status
         */

        /**
         * Constructs a new Friend.
         * @memberof mykj
         * @classdesc Represents a Friend.
         * @implements IFriend
         * @constructor
         * @param {mykj.IFriend=} [properties] Properties to set
         */
        function Friend(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Friend nickname.
         * @member {string} nickname
         * @memberof mykj.Friend
         * @instance
         */
        Friend.prototype.nickname = "";

        /**
         * Friend avatarUrl.
         * @member {string} avatarUrl
         * @memberof mykj.Friend
         * @instance
         */
        Friend.prototype.avatarUrl = "";

        /**
         * Friend userId.
         * @member {number} userId
         * @memberof mykj.Friend
         * @instance
         */
        Friend.prototype.userId = 0;

        /**
         * Friend level.
         * @member {number} level
         * @memberof mykj.Friend
         * @instance
         */
        Friend.prototype.level = 0;

        /**
         * Friend score.
         * @member {mykj.IBNumber|null|undefined} score
         * @memberof mykj.Friend
         * @instance
         */
        Friend.prototype.score = null;

        /**
         * Friend status.
         * @member {number} status
         * @memberof mykj.Friend
         * @instance
         */
        Friend.prototype.status = 0;

        /**
         * Creates a new Friend instance using the specified properties.
         * @function create
         * @memberof mykj.Friend
         * @static
         * @param {mykj.IFriend=} [properties] Properties to set
         * @returns {mykj.Friend} Friend instance
         */
        Friend.create = function create(properties) {
            return new Friend(properties);
        };

        /**
         * Encodes the specified Friend message. Does not implicitly {@link mykj.Friend.verify|verify} messages.
         * @function encode
         * @memberof mykj.Friend
         * @static
         * @param {mykj.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.userId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                $root.mykj.BNumber.encode(message.score, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Friend message, length delimited. Does not implicitly {@link mykj.Friend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Friend
         * @static
         * @param {mykj.IFriend} message Friend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Friend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Friend message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Friend();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.avatarUrl = reader.string();
                    break;
                case 3:
                    message.userId = reader.uint32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.score = $root.mykj.BNumber.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Friend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Friend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Friend} Friend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Friend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Friend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Friend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Friend} Friend
         */
        Friend.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Friend)
                return object;
            let message = new $root.mykj.Friend();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.score != null) {
                if (typeof object.score !== "object")
                    throw TypeError(".mykj.Friend.score: object expected");
                message.score = $root.mykj.BNumber.fromObject(object.score);
            }
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a Friend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Friend
         * @static
         * @param {mykj.Friend} message Friend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Friend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.nickname = "";
                object.avatarUrl = "";
                object.userId = 0;
                object.level = 0;
                object.score = null;
                object.status = 0;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = $root.mykj.BNumber.toObject(message.score, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this Friend to JSON.
         * @function toJSON
         * @memberof mykj.Friend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Friend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Friend;
    })();

    mykj.MonsterOrder = (function() {

        /**
         * Properties of a MonsterOrder.
         * @memberof mykj
         * @interface IMonsterOrder
         * @property {string|null} [id] MonsterOrder id
         * @property {number|null} [type] MonsterOrder type
         * @property {number|null} [gold] MonsterOrder gold
         * @property {number|null} [level] MonsterOrder level
         * @property {Array.<mykj.IMonster>|null} [monster] MonsterOrder monster
         */

        /**
         * Constructs a new MonsterOrder.
         * @memberof mykj
         * @classdesc Represents a MonsterOrder.
         * @implements IMonsterOrder
         * @constructor
         * @param {mykj.IMonsterOrder=} [properties] Properties to set
         */
        function MonsterOrder(properties) {
            this.monster = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MonsterOrder id.
         * @member {string} id
         * @memberof mykj.MonsterOrder
         * @instance
         */
        MonsterOrder.prototype.id = "";

        /**
         * MonsterOrder type.
         * @member {number} type
         * @memberof mykj.MonsterOrder
         * @instance
         */
        MonsterOrder.prototype.type = 0;

        /**
         * MonsterOrder gold.
         * @member {number} gold
         * @memberof mykj.MonsterOrder
         * @instance
         */
        MonsterOrder.prototype.gold = 0;

        /**
         * MonsterOrder level.
         * @member {number} level
         * @memberof mykj.MonsterOrder
         * @instance
         */
        MonsterOrder.prototype.level = 0;

        /**
         * MonsterOrder monster.
         * @member {Array.<mykj.IMonster>} monster
         * @memberof mykj.MonsterOrder
         * @instance
         */
        MonsterOrder.prototype.monster = $util.emptyArray;

        /**
         * Creates a new MonsterOrder instance using the specified properties.
         * @function create
         * @memberof mykj.MonsterOrder
         * @static
         * @param {mykj.IMonsterOrder=} [properties] Properties to set
         * @returns {mykj.MonsterOrder} MonsterOrder instance
         */
        MonsterOrder.create = function create(properties) {
            return new MonsterOrder(properties);
        };

        /**
         * Encodes the specified MonsterOrder message. Does not implicitly {@link mykj.MonsterOrder.verify|verify} messages.
         * @function encode
         * @memberof mykj.MonsterOrder
         * @static
         * @param {mykj.IMonsterOrder} message MonsterOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonsterOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gold);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.monster != null && message.monster.length)
                for (let i = 0; i < message.monster.length; ++i)
                    $root.mykj.Monster.encode(message.monster[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MonsterOrder message, length delimited. Does not implicitly {@link mykj.MonsterOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.MonsterOrder
         * @static
         * @param {mykj.IMonsterOrder} message MonsterOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonsterOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MonsterOrder message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.MonsterOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.MonsterOrder} MonsterOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonsterOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.MonsterOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.gold = reader.int32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    if (!(message.monster && message.monster.length))
                        message.monster = [];
                    message.monster.push($root.mykj.Monster.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MonsterOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.MonsterOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.MonsterOrder} MonsterOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonsterOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a MonsterOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.MonsterOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.MonsterOrder} MonsterOrder
         */
        MonsterOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.MonsterOrder)
                return object;
            let message = new $root.mykj.MonsterOrder();
            if (object.id != null)
                message.id = String(object.id);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.monster) {
                if (!Array.isArray(object.monster))
                    throw TypeError(".mykj.MonsterOrder.monster: array expected");
                message.monster = [];
                for (let i = 0; i < object.monster.length; ++i) {
                    if (typeof object.monster[i] !== "object")
                        throw TypeError(".mykj.MonsterOrder.monster: object expected");
                    message.monster[i] = $root.mykj.Monster.fromObject(object.monster[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MonsterOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.MonsterOrder
         * @static
         * @param {mykj.MonsterOrder} message MonsterOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonsterOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.monster = [];
            if (options.defaults) {
                object.id = "";
                object.type = 0;
                object.gold = 0;
                object.level = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.monster && message.monster.length) {
                object.monster = [];
                for (let j = 0; j < message.monster.length; ++j)
                    object.monster[j] = $root.mykj.Monster.toObject(message.monster[j], options);
            }
            return object;
        };

        /**
         * Converts this MonsterOrder to JSON.
         * @function toJSON
         * @memberof mykj.MonsterOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonsterOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MonsterOrder;
    })();

    mykj.TimeStamp = (function() {

        /**
         * Properties of a TimeStamp.
         * @memberof mykj
         * @interface ITimeStamp
         * @property {number|null} [value] TimeStamp value
         */

        /**
         * Constructs a new TimeStamp.
         * @memberof mykj
         * @classdesc Represents a TimeStamp.
         * @implements ITimeStamp
         * @constructor
         * @param {mykj.ITimeStamp=} [properties] Properties to set
         */
        function TimeStamp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeStamp value.
         * @member {number} value
         * @memberof mykj.TimeStamp
         * @instance
         */
        TimeStamp.prototype.value = 0;

        /**
         * Creates a new TimeStamp instance using the specified properties.
         * @function create
         * @memberof mykj.TimeStamp
         * @static
         * @param {mykj.ITimeStamp=} [properties] Properties to set
         * @returns {mykj.TimeStamp} TimeStamp instance
         */
        TimeStamp.create = function create(properties) {
            return new TimeStamp(properties);
        };

        /**
         * Encodes the specified TimeStamp message. Does not implicitly {@link mykj.TimeStamp.verify|verify} messages.
         * @function encode
         * @memberof mykj.TimeStamp
         * @static
         * @param {mykj.ITimeStamp} message TimeStamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeStamp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified TimeStamp message, length delimited. Does not implicitly {@link mykj.TimeStamp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.TimeStamp
         * @static
         * @param {mykj.ITimeStamp} message TimeStamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeStamp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeStamp message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.TimeStamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.TimeStamp} TimeStamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeStamp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.TimeStamp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimeStamp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.TimeStamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.TimeStamp} TimeStamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeStamp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a TimeStamp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.TimeStamp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.TimeStamp} TimeStamp
         */
        TimeStamp.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.TimeStamp)
                return object;
            let message = new $root.mykj.TimeStamp();
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TimeStamp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.TimeStamp
         * @static
         * @param {mykj.TimeStamp} message TimeStamp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeStamp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this TimeStamp to JSON.
         * @function toJSON
         * @memberof mykj.TimeStamp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeStamp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeStamp;
    })();

    mykj.CashOrder = (function() {

        /**
         * Properties of a CashOrder.
         * @memberof mykj
         * @interface ICashOrder
         * @property {number|null} [id] CashOrder id
         * @property {number|null} [num] CashOrder num
         * @property {number|null} [status] CashOrder status
         * @property {number|null} [timeStamp] CashOrder timeStamp
         */

        /**
         * Constructs a new CashOrder.
         * @memberof mykj
         * @classdesc Represents a CashOrder.
         * @implements ICashOrder
         * @constructor
         * @param {mykj.ICashOrder=} [properties] Properties to set
         */
        function CashOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CashOrder id.
         * @member {number} id
         * @memberof mykj.CashOrder
         * @instance
         */
        CashOrder.prototype.id = 0;

        /**
         * CashOrder num.
         * @member {number} num
         * @memberof mykj.CashOrder
         * @instance
         */
        CashOrder.prototype.num = 0;

        /**
         * CashOrder status.
         * @member {number} status
         * @memberof mykj.CashOrder
         * @instance
         */
        CashOrder.prototype.status = 0;

        /**
         * CashOrder timeStamp.
         * @member {number} timeStamp
         * @memberof mykj.CashOrder
         * @instance
         */
        CashOrder.prototype.timeStamp = 0;

        /**
         * Creates a new CashOrder instance using the specified properties.
         * @function create
         * @memberof mykj.CashOrder
         * @static
         * @param {mykj.ICashOrder=} [properties] Properties to set
         * @returns {mykj.CashOrder} CashOrder instance
         */
        CashOrder.create = function create(properties) {
            return new CashOrder(properties);
        };

        /**
         * Encodes the specified CashOrder message. Does not implicitly {@link mykj.CashOrder.verify|verify} messages.
         * @function encode
         * @memberof mykj.CashOrder
         * @static
         * @param {mykj.ICashOrder} message CashOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CashOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.num != null && Object.hasOwnProperty.call(message, "num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.timeStamp != null && Object.hasOwnProperty.call(message, "timeStamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeStamp);
            return writer;
        };

        /**
         * Encodes the specified CashOrder message, length delimited. Does not implicitly {@link mykj.CashOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.CashOrder
         * @static
         * @param {mykj.ICashOrder} message CashOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CashOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CashOrder message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.CashOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.CashOrder} CashOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CashOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.CashOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.timeStamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CashOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.CashOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.CashOrder} CashOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CashOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a CashOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.CashOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.CashOrder} CashOrder
         */
        CashOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.CashOrder)
                return object;
            let message = new $root.mykj.CashOrder();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.num != null)
                message.num = object.num | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.timeStamp != null)
                message.timeStamp = object.timeStamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a CashOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.CashOrder
         * @static
         * @param {mykj.CashOrder} message CashOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CashOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.num = 0;
                object.status = 0;
                object.timeStamp = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.timeStamp != null && message.hasOwnProperty("timeStamp"))
                object.timeStamp = message.timeStamp;
            return object;
        };

        /**
         * Converts this CashOrder to JSON.
         * @function toJSON
         * @memberof mykj.CashOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CashOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CashOrder;
    })();

    mykj.CashOrderList = (function() {

        /**
         * Properties of a CashOrderList.
         * @memberof mykj
         * @interface ICashOrderList
         * @property {Array.<mykj.ICashOrder>|null} [list] CashOrderList list
         */

        /**
         * Constructs a new CashOrderList.
         * @memberof mykj
         * @classdesc Represents a CashOrderList.
         * @implements ICashOrderList
         * @constructor
         * @param {mykj.ICashOrderList=} [properties] Properties to set
         */
        function CashOrderList(properties) {
            this.list = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CashOrderList list.
         * @member {Array.<mykj.ICashOrder>} list
         * @memberof mykj.CashOrderList
         * @instance
         */
        CashOrderList.prototype.list = $util.emptyArray;

        /**
         * Creates a new CashOrderList instance using the specified properties.
         * @function create
         * @memberof mykj.CashOrderList
         * @static
         * @param {mykj.ICashOrderList=} [properties] Properties to set
         * @returns {mykj.CashOrderList} CashOrderList instance
         */
        CashOrderList.create = function create(properties) {
            return new CashOrderList(properties);
        };

        /**
         * Encodes the specified CashOrderList message. Does not implicitly {@link mykj.CashOrderList.verify|verify} messages.
         * @function encode
         * @memberof mykj.CashOrderList
         * @static
         * @param {mykj.ICashOrderList} message CashOrderList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CashOrderList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (let i = 0; i < message.list.length; ++i)
                    $root.mykj.CashOrder.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CashOrderList message, length delimited. Does not implicitly {@link mykj.CashOrderList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.CashOrderList
         * @static
         * @param {mykj.ICashOrderList} message CashOrderList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CashOrderList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CashOrderList message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.CashOrderList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.CashOrderList} CashOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CashOrderList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.CashOrderList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.mykj.CashOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CashOrderList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.CashOrderList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.CashOrderList} CashOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CashOrderList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a CashOrderList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.CashOrderList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.CashOrderList} CashOrderList
         */
        CashOrderList.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.CashOrderList)
                return object;
            let message = new $root.mykj.CashOrderList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".mykj.CashOrderList.list: array expected");
                message.list = [];
                for (let i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".mykj.CashOrderList.list: object expected");
                    message.list[i] = $root.mykj.CashOrder.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CashOrderList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.CashOrderList
         * @static
         * @param {mykj.CashOrderList} message CashOrderList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CashOrderList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (let j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.mykj.CashOrder.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this CashOrderList to JSON.
         * @function toJSON
         * @memberof mykj.CashOrderList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CashOrderList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CashOrderList;
    })();

    mykj.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof mykj
         * @interface IPlayer
         * @property {string|null} [nickname] Player nickname
         * @property {string|null} [avatarUrl] Player avatarUrl
         * @property {number|null} [userId] Player userId
         * @property {number|null} [level] Player level
         * @property {Array.<number>|null} [paramsInt] Player paramsInt
         * @property {Array.<number>|null} [paramsStr] Player paramsStr
         */

        /**
         * Constructs a new Player.
         * @memberof mykj
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {mykj.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.paramsInt = [];
            this.paramsStr = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player nickname.
         * @member {string} nickname
         * @memberof mykj.Player
         * @instance
         */
        Player.prototype.nickname = "";

        /**
         * Player avatarUrl.
         * @member {string} avatarUrl
         * @memberof mykj.Player
         * @instance
         */
        Player.prototype.avatarUrl = "";

        /**
         * Player userId.
         * @member {number} userId
         * @memberof mykj.Player
         * @instance
         */
        Player.prototype.userId = 0;

        /**
         * Player level.
         * @member {number} level
         * @memberof mykj.Player
         * @instance
         */
        Player.prototype.level = 0;

        /**
         * Player paramsInt.
         * @member {Array.<number>} paramsInt
         * @memberof mykj.Player
         * @instance
         */
        Player.prototype.paramsInt = $util.emptyArray;

        /**
         * Player paramsStr.
         * @member {Array.<number>} paramsStr
         * @memberof mykj.Player
         * @instance
         */
        Player.prototype.paramsStr = $util.emptyArray;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof mykj.Player
         * @static
         * @param {mykj.IPlayer=} [properties] Properties to set
         * @returns {mykj.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link mykj.Player.verify|verify} messages.
         * @function encode
         * @memberof mykj.Player
         * @static
         * @param {mykj.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatarUrl);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.userId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.paramsInt != null && message.paramsInt.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.paramsInt.length; ++i)
                    writer.int32(message.paramsInt[i]);
                writer.ldelim();
            }
            if (message.paramsStr != null && message.paramsStr.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.paramsStr.length; ++i)
                    writer.int32(message.paramsStr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link mykj.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Player
         * @static
         * @param {mykj.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Player();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nickname = reader.string();
                    break;
                case 2:
                    message.avatarUrl = reader.string();
                    break;
                case 3:
                    message.userId = reader.uint32();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 6:
                    if (!(message.paramsInt && message.paramsInt.length))
                        message.paramsInt = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.paramsInt.push(reader.int32());
                    } else
                        message.paramsInt.push(reader.int32());
                    break;
                case 7:
                    if (!(message.paramsStr && message.paramsStr.length))
                        message.paramsStr = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.paramsStr.push(reader.int32());
                    } else
                        message.paramsStr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Player)
                return object;
            let message = new $root.mykj.Player();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.paramsInt) {
                if (!Array.isArray(object.paramsInt))
                    throw TypeError(".mykj.Player.paramsInt: array expected");
                message.paramsInt = [];
                for (let i = 0; i < object.paramsInt.length; ++i)
                    message.paramsInt[i] = object.paramsInt[i] | 0;
            }
            if (object.paramsStr) {
                if (!Array.isArray(object.paramsStr))
                    throw TypeError(".mykj.Player.paramsStr: array expected");
                message.paramsStr = [];
                for (let i = 0; i < object.paramsStr.length; ++i)
                    message.paramsStr[i] = object.paramsStr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Player
         * @static
         * @param {mykj.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.paramsInt = [];
                object.paramsStr = [];
            }
            if (options.defaults) {
                object.nickname = "";
                object.avatarUrl = "";
                object.userId = 0;
                object.level = 0;
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.paramsInt && message.paramsInt.length) {
                object.paramsInt = [];
                for (let j = 0; j < message.paramsInt.length; ++j)
                    object.paramsInt[j] = message.paramsInt[j];
            }
            if (message.paramsStr && message.paramsStr.length) {
                object.paramsStr = [];
                for (let j = 0; j < message.paramsStr.length; ++j)
                    object.paramsStr[j] = message.paramsStr[j];
            }
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof mykj.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    mykj.Players = (function() {

        /**
         * Properties of a Players.
         * @memberof mykj
         * @interface IPlayers
         * @property {Array.<mykj.IPlayer>|null} [players] Players players
         */

        /**
         * Constructs a new Players.
         * @memberof mykj
         * @classdesc Represents a Players.
         * @implements IPlayers
         * @constructor
         * @param {mykj.IPlayers=} [properties] Properties to set
         */
        function Players(properties) {
            this.players = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Players players.
         * @member {Array.<mykj.IPlayer>} players
         * @memberof mykj.Players
         * @instance
         */
        Players.prototype.players = $util.emptyArray;

        /**
         * Creates a new Players instance using the specified properties.
         * @function create
         * @memberof mykj.Players
         * @static
         * @param {mykj.IPlayers=} [properties] Properties to set
         * @returns {mykj.Players} Players instance
         */
        Players.create = function create(properties) {
            return new Players(properties);
        };

        /**
         * Encodes the specified Players message. Does not implicitly {@link mykj.Players.verify|verify} messages.
         * @function encode
         * @memberof mykj.Players
         * @static
         * @param {mykj.IPlayers} message Players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Players.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (let i = 0; i < message.players.length; ++i)
                    $root.mykj.Player.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Players message, length delimited. Does not implicitly {@link mykj.Players.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Players
         * @static
         * @param {mykj.IPlayers} message Players message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Players.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Players message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Players} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Players.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Players();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.mykj.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Players message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Players
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Players} Players
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Players.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Players message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Players
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Players} Players
         */
        Players.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Players)
                return object;
            let message = new $root.mykj.Players();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".mykj.Players.players: array expected");
                message.players = [];
                for (let i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".mykj.Players.players: object expected");
                    message.players[i] = $root.mykj.Player.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Players message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Players
         * @static
         * @param {mykj.Players} message Players
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Players.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (let j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.mykj.Player.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this Players to JSON.
         * @function toJSON
         * @memberof mykj.Players
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Players.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Players;
    })();

    mykj.Pyramid = (function() {

        /**
         * Properties of a Pyramid.
         * @memberof mykj
         * @interface IPyramid
         * @property {number|null} [level] Pyramid level
         * @property {number|null} [league] Pyramid league
         * @property {number|null} [optTimes] Pyramid optTimes
         * @property {number|null} [buffTime] Pyramid buffTime
         * @property {mykj.IPlayer|null} [master] Pyramid master
         * @property {Array.<mykj.IPlayer>|null} [followers] Pyramid followers
         */

        /**
         * Constructs a new Pyramid.
         * @memberof mykj
         * @classdesc Represents a Pyramid.
         * @implements IPyramid
         * @constructor
         * @param {mykj.IPyramid=} [properties] Properties to set
         */
        function Pyramid(properties) {
            this.followers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pyramid level.
         * @member {number} level
         * @memberof mykj.Pyramid
         * @instance
         */
        Pyramid.prototype.level = 0;

        /**
         * Pyramid league.
         * @member {number} league
         * @memberof mykj.Pyramid
         * @instance
         */
        Pyramid.prototype.league = 0;

        /**
         * Pyramid optTimes.
         * @member {number} optTimes
         * @memberof mykj.Pyramid
         * @instance
         */
        Pyramid.prototype.optTimes = 0;

        /**
         * Pyramid buffTime.
         * @member {number} buffTime
         * @memberof mykj.Pyramid
         * @instance
         */
        Pyramid.prototype.buffTime = 0;

        /**
         * Pyramid master.
         * @member {mykj.IPlayer|null|undefined} master
         * @memberof mykj.Pyramid
         * @instance
         */
        Pyramid.prototype.master = null;

        /**
         * Pyramid followers.
         * @member {Array.<mykj.IPlayer>} followers
         * @memberof mykj.Pyramid
         * @instance
         */
        Pyramid.prototype.followers = $util.emptyArray;

        /**
         * Creates a new Pyramid instance using the specified properties.
         * @function create
         * @memberof mykj.Pyramid
         * @static
         * @param {mykj.IPyramid=} [properties] Properties to set
         * @returns {mykj.Pyramid} Pyramid instance
         */
        Pyramid.create = function create(properties) {
            return new Pyramid(properties);
        };

        /**
         * Encodes the specified Pyramid message. Does not implicitly {@link mykj.Pyramid.verify|verify} messages.
         * @function encode
         * @memberof mykj.Pyramid
         * @static
         * @param {mykj.IPyramid} message Pyramid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pyramid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
            if (message.league != null && Object.hasOwnProperty.call(message, "league"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.league);
            if (message.optTimes != null && Object.hasOwnProperty.call(message, "optTimes"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.optTimes);
            if (message.buffTime != null && Object.hasOwnProperty.call(message, "buffTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.buffTime);
            if (message.master != null && Object.hasOwnProperty.call(message, "master"))
                $root.mykj.Player.encode(message.master, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.followers != null && message.followers.length)
                for (let i = 0; i < message.followers.length; ++i)
                    $root.mykj.Player.encode(message.followers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Pyramid message, length delimited. Does not implicitly {@link mykj.Pyramid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Pyramid
         * @static
         * @param {mykj.IPyramid} message Pyramid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pyramid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pyramid message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Pyramid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Pyramid} Pyramid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pyramid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Pyramid();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.level = reader.int32();
                    break;
                case 2:
                    message.league = reader.int32();
                    break;
                case 3:
                    message.optTimes = reader.int32();
                    break;
                case 4:
                    message.buffTime = reader.int32();
                    break;
                case 5:
                    message.master = $root.mykj.Player.decode(reader, reader.uint32());
                    break;
                case 6:
                    if (!(message.followers && message.followers.length))
                        message.followers = [];
                    message.followers.push($root.mykj.Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pyramid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Pyramid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Pyramid} Pyramid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pyramid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Pyramid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Pyramid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Pyramid} Pyramid
         */
        Pyramid.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Pyramid)
                return object;
            let message = new $root.mykj.Pyramid();
            if (object.level != null)
                message.level = object.level | 0;
            if (object.league != null)
                message.league = object.league | 0;
            if (object.optTimes != null)
                message.optTimes = object.optTimes | 0;
            if (object.buffTime != null)
                message.buffTime = object.buffTime | 0;
            if (object.master != null) {
                if (typeof object.master !== "object")
                    throw TypeError(".mykj.Pyramid.master: object expected");
                message.master = $root.mykj.Player.fromObject(object.master);
            }
            if (object.followers) {
                if (!Array.isArray(object.followers))
                    throw TypeError(".mykj.Pyramid.followers: array expected");
                message.followers = [];
                for (let i = 0; i < object.followers.length; ++i) {
                    if (typeof object.followers[i] !== "object")
                        throw TypeError(".mykj.Pyramid.followers: object expected");
                    message.followers[i] = $root.mykj.Player.fromObject(object.followers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Pyramid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Pyramid
         * @static
         * @param {mykj.Pyramid} message Pyramid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pyramid.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.followers = [];
            if (options.defaults) {
                object.level = 0;
                object.league = 0;
                object.optTimes = 0;
                object.buffTime = 0;
                object.master = null;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.league != null && message.hasOwnProperty("league"))
                object.league = message.league;
            if (message.optTimes != null && message.hasOwnProperty("optTimes"))
                object.optTimes = message.optTimes;
            if (message.buffTime != null && message.hasOwnProperty("buffTime"))
                object.buffTime = message.buffTime;
            if (message.master != null && message.hasOwnProperty("master"))
                object.master = $root.mykj.Player.toObject(message.master, options);
            if (message.followers && message.followers.length) {
                object.followers = [];
                for (let j = 0; j < message.followers.length; ++j)
                    object.followers[j] = $root.mykj.Player.toObject(message.followers[j], options);
            }
            return object;
        };

        /**
         * Converts this Pyramid to JSON.
         * @function toJSON
         * @memberof mykj.Pyramid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pyramid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pyramid;
    })();

    mykj.ErrorCode = (function() {

        /**
         * Properties of an ErrorCode.
         * @memberof mykj
         * @interface IErrorCode
         * @property {number|null} [code] ErrorCode code
         * @property {string|null} [msg] ErrorCode msg
         */

        /**
         * Constructs a new ErrorCode.
         * @memberof mykj
         * @classdesc Represents an ErrorCode.
         * @implements IErrorCode
         * @constructor
         * @param {mykj.IErrorCode=} [properties] Properties to set
         */
        function ErrorCode(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorCode code.
         * @member {number} code
         * @memberof mykj.ErrorCode
         * @instance
         */
        ErrorCode.prototype.code = 0;

        /**
         * ErrorCode msg.
         * @member {string} msg
         * @memberof mykj.ErrorCode
         * @instance
         */
        ErrorCode.prototype.msg = "";

        /**
         * Creates a new ErrorCode instance using the specified properties.
         * @function create
         * @memberof mykj.ErrorCode
         * @static
         * @param {mykj.IErrorCode=} [properties] Properties to set
         * @returns {mykj.ErrorCode} ErrorCode instance
         */
        ErrorCode.create = function create(properties) {
            return new ErrorCode(properties);
        };

        /**
         * Encodes the specified ErrorCode message. Does not implicitly {@link mykj.ErrorCode.verify|verify} messages.
         * @function encode
         * @memberof mykj.ErrorCode
         * @static
         * @param {mykj.IErrorCode} message ErrorCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified ErrorCode message, length delimited. Does not implicitly {@link mykj.ErrorCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.ErrorCode
         * @static
         * @param {mykj.IErrorCode} message ErrorCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorCode message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.ErrorCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.ErrorCode} ErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.ErrorCode();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.ErrorCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.ErrorCode} ErrorCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an ErrorCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.ErrorCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.ErrorCode} ErrorCode
         */
        ErrorCode.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.ErrorCode)
                return object;
            let message = new $root.mykj.ErrorCode();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an ErrorCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.ErrorCode
         * @static
         * @param {mykj.ErrorCode} message ErrorCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this ErrorCode to JSON.
         * @function toJSON
         * @memberof mykj.ErrorCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorCode;
    })();

    mykj.FloatValues = (function() {

        /**
         * Properties of a FloatValues.
         * @memberof mykj
         * @interface IFloatValues
         * @property {Array.<number>|null} [values] FloatValues values
         */

        /**
         * Constructs a new FloatValues.
         * @memberof mykj
         * @classdesc Represents a FloatValues.
         * @implements IFloatValues
         * @constructor
         * @param {mykj.IFloatValues=} [properties] Properties to set
         */
        function FloatValues(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FloatValues values.
         * @member {Array.<number>} values
         * @memberof mykj.FloatValues
         * @instance
         */
        FloatValues.prototype.values = $util.emptyArray;

        /**
         * Creates a new FloatValues instance using the specified properties.
         * @function create
         * @memberof mykj.FloatValues
         * @static
         * @param {mykj.IFloatValues=} [properties] Properties to set
         * @returns {mykj.FloatValues} FloatValues instance
         */
        FloatValues.create = function create(properties) {
            return new FloatValues(properties);
        };

        /**
         * Encodes the specified FloatValues message. Does not implicitly {@link mykj.FloatValues.verify|verify} messages.
         * @function encode
         * @memberof mykj.FloatValues
         * @static
         * @param {mykj.IFloatValues} message FloatValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatValues.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.float(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified FloatValues message, length delimited. Does not implicitly {@link mykj.FloatValues.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.FloatValues
         * @static
         * @param {mykj.IFloatValues} message FloatValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatValues.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FloatValues message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.FloatValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.FloatValues} FloatValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatValues.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.FloatValues();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.values.push(reader.float());
                    } else
                        message.values.push(reader.float());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FloatValues message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.FloatValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.FloatValues} FloatValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatValues.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a FloatValues message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.FloatValues
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.FloatValues} FloatValues
         */
        FloatValues.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.FloatValues)
                return object;
            let message = new $root.mykj.FloatValues();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.FloatValues.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = Number(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FloatValues message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.FloatValues
         * @static
         * @param {mykj.FloatValues} message FloatValues
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloatValues.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = options.json && !isFinite(message.values[j]) ? String(message.values[j]) : message.values[j];
            }
            return object;
        };

        /**
         * Converts this FloatValues to JSON.
         * @function toJSON
         * @memberof mykj.FloatValues
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloatValues.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FloatValues;
    })();

    mykj.DoubleValues = (function() {

        /**
         * Properties of a DoubleValues.
         * @memberof mykj
         * @interface IDoubleValues
         * @property {Array.<number>|null} [values] DoubleValues values
         */

        /**
         * Constructs a new DoubleValues.
         * @memberof mykj
         * @classdesc Represents a DoubleValues.
         * @implements IDoubleValues
         * @constructor
         * @param {mykj.IDoubleValues=} [properties] Properties to set
         */
        function DoubleValues(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DoubleValues values.
         * @member {Array.<number>} values
         * @memberof mykj.DoubleValues
         * @instance
         */
        DoubleValues.prototype.values = $util.emptyArray;

        /**
         * Creates a new DoubleValues instance using the specified properties.
         * @function create
         * @memberof mykj.DoubleValues
         * @static
         * @param {mykj.IDoubleValues=} [properties] Properties to set
         * @returns {mykj.DoubleValues} DoubleValues instance
         */
        DoubleValues.create = function create(properties) {
            return new DoubleValues(properties);
        };

        /**
         * Encodes the specified DoubleValues message. Does not implicitly {@link mykj.DoubleValues.verify|verify} messages.
         * @function encode
         * @memberof mykj.DoubleValues
         * @static
         * @param {mykj.IDoubleValues} message DoubleValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleValues.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.double(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DoubleValues message, length delimited. Does not implicitly {@link mykj.DoubleValues.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.DoubleValues
         * @static
         * @param {mykj.IDoubleValues} message DoubleValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleValues.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DoubleValues message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.DoubleValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.DoubleValues} DoubleValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleValues.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.DoubleValues();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.values.push(reader.double());
                    } else
                        message.values.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DoubleValues message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.DoubleValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.DoubleValues} DoubleValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleValues.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a DoubleValues message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.DoubleValues
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.DoubleValues} DoubleValues
         */
        DoubleValues.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.DoubleValues)
                return object;
            let message = new $root.mykj.DoubleValues();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.DoubleValues.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = Number(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DoubleValues message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.DoubleValues
         * @static
         * @param {mykj.DoubleValues} message DoubleValues
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DoubleValues.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = options.json && !isFinite(message.values[j]) ? String(message.values[j]) : message.values[j];
            }
            return object;
        };

        /**
         * Converts this DoubleValues to JSON.
         * @function toJSON
         * @memberof mykj.DoubleValues
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DoubleValues.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DoubleValues;
    })();

    mykj.StringValue = (function() {

        /**
         * Properties of a StringValue.
         * @memberof mykj
         * @interface IStringValue
         * @property {Array.<string>|null} [values] StringValue values
         */

        /**
         * Constructs a new StringValue.
         * @memberof mykj
         * @classdesc Represents a StringValue.
         * @implements IStringValue
         * @constructor
         * @param {mykj.IStringValue=} [properties] Properties to set
         */
        function StringValue(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringValue values.
         * @member {Array.<string>} values
         * @memberof mykj.StringValue
         * @instance
         */
        StringValue.prototype.values = $util.emptyArray;

        /**
         * Creates a new StringValue instance using the specified properties.
         * @function create
         * @memberof mykj.StringValue
         * @static
         * @param {mykj.IStringValue=} [properties] Properties to set
         * @returns {mykj.StringValue} StringValue instance
         */
        StringValue.create = function create(properties) {
            return new StringValue(properties);
        };

        /**
         * Encodes the specified StringValue message. Does not implicitly {@link mykj.StringValue.verify|verify} messages.
         * @function encode
         * @memberof mykj.StringValue
         * @static
         * @param {mykj.IStringValue} message StringValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length)
                for (let i = 0; i < message.values.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
            return writer;
        };

        /**
         * Encodes the specified StringValue message, length delimited. Does not implicitly {@link mykj.StringValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.StringValue
         * @static
         * @param {mykj.IStringValue} message StringValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringValue message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.StringValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.StringValue} StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.StringValue();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.StringValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.StringValue} StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.StringValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.StringValue} StringValue
         */
        StringValue.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.StringValue)
                return object;
            let message = new $root.mykj.StringValue();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.StringValue.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = String(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StringValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.StringValue
         * @static
         * @param {mykj.StringValue} message StringValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this StringValue to JSON.
         * @function toJSON
         * @memberof mykj.StringValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StringValue;
    })();

    mykj.BoolValues = (function() {

        /**
         * Properties of a BoolValues.
         * @memberof mykj
         * @interface IBoolValues
         * @property {Array.<boolean>|null} [values] BoolValues values
         */

        /**
         * Constructs a new BoolValues.
         * @memberof mykj
         * @classdesc Represents a BoolValues.
         * @implements IBoolValues
         * @constructor
         * @param {mykj.IBoolValues=} [properties] Properties to set
         */
        function BoolValues(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BoolValues values.
         * @member {Array.<boolean>} values
         * @memberof mykj.BoolValues
         * @instance
         */
        BoolValues.prototype.values = $util.emptyArray;

        /**
         * Creates a new BoolValues instance using the specified properties.
         * @function create
         * @memberof mykj.BoolValues
         * @static
         * @param {mykj.IBoolValues=} [properties] Properties to set
         * @returns {mykj.BoolValues} BoolValues instance
         */
        BoolValues.create = function create(properties) {
            return new BoolValues(properties);
        };

        /**
         * Encodes the specified BoolValues message. Does not implicitly {@link mykj.BoolValues.verify|verify} messages.
         * @function encode
         * @memberof mykj.BoolValues
         * @static
         * @param {mykj.IBoolValues} message BoolValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolValues.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.bool(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BoolValues message, length delimited. Does not implicitly {@link mykj.BoolValues.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.BoolValues
         * @static
         * @param {mykj.IBoolValues} message BoolValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BoolValues.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BoolValues message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.BoolValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.BoolValues} BoolValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolValues.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.BoolValues();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.values.push(reader.bool());
                    } else
                        message.values.push(reader.bool());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BoolValues message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.BoolValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.BoolValues} BoolValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BoolValues.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a BoolValues message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.BoolValues
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.BoolValues} BoolValues
         */
        BoolValues.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.BoolValues)
                return object;
            let message = new $root.mykj.BoolValues();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.BoolValues.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = Boolean(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BoolValues message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.BoolValues
         * @static
         * @param {mykj.BoolValues} message BoolValues
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BoolValues.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this BoolValues to JSON.
         * @function toJSON
         * @memberof mykj.BoolValues
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BoolValues.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BoolValues;
    })();

    mykj.Int32Values = (function() {

        /**
         * Properties of an Int32Values.
         * @memberof mykj
         * @interface IInt32Values
         * @property {Array.<number>|null} [values] Int32Values values
         */

        /**
         * Constructs a new Int32Values.
         * @memberof mykj
         * @classdesc Represents an Int32Values.
         * @implements IInt32Values
         * @constructor
         * @param {mykj.IInt32Values=} [properties] Properties to set
         */
        function Int32Values(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Int32Values values.
         * @member {Array.<number>} values
         * @memberof mykj.Int32Values
         * @instance
         */
        Int32Values.prototype.values = $util.emptyArray;

        /**
         * Creates a new Int32Values instance using the specified properties.
         * @function create
         * @memberof mykj.Int32Values
         * @static
         * @param {mykj.IInt32Values=} [properties] Properties to set
         * @returns {mykj.Int32Values} Int32Values instance
         */
        Int32Values.create = function create(properties) {
            return new Int32Values(properties);
        };

        /**
         * Encodes the specified Int32Values message. Does not implicitly {@link mykj.Int32Values.verify|verify} messages.
         * @function encode
         * @memberof mykj.Int32Values
         * @static
         * @param {mykj.IInt32Values} message Int32Values message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Int32Values.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.int32(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Int32Values message, length delimited. Does not implicitly {@link mykj.Int32Values.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Int32Values
         * @static
         * @param {mykj.IInt32Values} message Int32Values message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Int32Values.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Int32Values message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Int32Values
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Int32Values} Int32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Int32Values.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Int32Values();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.values.push(reader.int32());
                    } else
                        message.values.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Int32Values message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Int32Values
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Int32Values} Int32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Int32Values.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an Int32Values message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Int32Values
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Int32Values} Int32Values
         */
        Int32Values.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Int32Values)
                return object;
            let message = new $root.mykj.Int32Values();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.Int32Values.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = object.values[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an Int32Values message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Int32Values
         * @static
         * @param {mykj.Int32Values} message Int32Values
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Int32Values.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this Int32Values to JSON.
         * @function toJSON
         * @memberof mykj.Int32Values
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Int32Values.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Int32Values;
    })();

    mykj.Uint32Values = (function() {

        /**
         * Properties of an Uint32Values.
         * @memberof mykj
         * @interface IUint32Values
         * @property {Array.<number>|null} [values] Uint32Values values
         */

        /**
         * Constructs a new Uint32Values.
         * @memberof mykj
         * @classdesc Represents an Uint32Values.
         * @implements IUint32Values
         * @constructor
         * @param {mykj.IUint32Values=} [properties] Properties to set
         */
        function Uint32Values(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Uint32Values values.
         * @member {Array.<number>} values
         * @memberof mykj.Uint32Values
         * @instance
         */
        Uint32Values.prototype.values = $util.emptyArray;

        /**
         * Creates a new Uint32Values instance using the specified properties.
         * @function create
         * @memberof mykj.Uint32Values
         * @static
         * @param {mykj.IUint32Values=} [properties] Properties to set
         * @returns {mykj.Uint32Values} Uint32Values instance
         */
        Uint32Values.create = function create(properties) {
            return new Uint32Values(properties);
        };

        /**
         * Encodes the specified Uint32Values message. Does not implicitly {@link mykj.Uint32Values.verify|verify} messages.
         * @function encode
         * @memberof mykj.Uint32Values
         * @static
         * @param {mykj.IUint32Values} message Uint32Values message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Uint32Values.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.values.length; ++i)
                    writer.uint32(message.values[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Uint32Values message, length delimited. Does not implicitly {@link mykj.Uint32Values.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Uint32Values
         * @static
         * @param {mykj.IUint32Values} message Uint32Values message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Uint32Values.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Uint32Values message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Uint32Values
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Uint32Values} Uint32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Uint32Values.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Uint32Values();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.values.push(reader.uint32());
                    } else
                        message.values.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Uint32Values message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Uint32Values
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Uint32Values} Uint32Values
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Uint32Values.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an Uint32Values message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Uint32Values
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Uint32Values} Uint32Values
         */
        Uint32Values.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Uint32Values)
                return object;
            let message = new $root.mykj.Uint32Values();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.Uint32Values.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    message.values[i] = object.values[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an Uint32Values message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Uint32Values
         * @static
         * @param {mykj.Uint32Values} message Uint32Values
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Uint32Values.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this Uint32Values to JSON.
         * @function toJSON
         * @memberof mykj.Uint32Values
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Uint32Values.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Uint32Values;
    })();

    mykj.BytesValues = (function() {

        /**
         * Properties of a BytesValues.
         * @memberof mykj
         * @interface IBytesValues
         * @property {Array.<Uint8Array>|null} [values] BytesValues values
         */

        /**
         * Constructs a new BytesValues.
         * @memberof mykj
         * @classdesc Represents a BytesValues.
         * @implements IBytesValues
         * @constructor
         * @param {mykj.IBytesValues=} [properties] Properties to set
         */
        function BytesValues(properties) {
            this.values = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BytesValues values.
         * @member {Array.<Uint8Array>} values
         * @memberof mykj.BytesValues
         * @instance
         */
        BytesValues.prototype.values = $util.emptyArray;

        /**
         * Creates a new BytesValues instance using the specified properties.
         * @function create
         * @memberof mykj.BytesValues
         * @static
         * @param {mykj.IBytesValues=} [properties] Properties to set
         * @returns {mykj.BytesValues} BytesValues instance
         */
        BytesValues.create = function create(properties) {
            return new BytesValues(properties);
        };

        /**
         * Encodes the specified BytesValues message. Does not implicitly {@link mykj.BytesValues.verify|verify} messages.
         * @function encode
         * @memberof mykj.BytesValues
         * @static
         * @param {mykj.IBytesValues} message BytesValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesValues.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.values != null && message.values.length)
                for (let i = 0; i < message.values.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.values[i]);
            return writer;
        };

        /**
         * Encodes the specified BytesValues message, length delimited. Does not implicitly {@link mykj.BytesValues.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.BytesValues
         * @static
         * @param {mykj.IBytesValues} message BytesValues message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BytesValues.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BytesValues message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.BytesValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.BytesValues} BytesValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesValues.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.BytesValues();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BytesValues message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.BytesValues
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.BytesValues} BytesValues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BytesValues.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a BytesValues message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.BytesValues
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.BytesValues} BytesValues
         */
        BytesValues.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.BytesValues)
                return object;
            let message = new $root.mykj.BytesValues();
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".mykj.BytesValues.values: array expected");
                message.values = [];
                for (let i = 0; i < object.values.length; ++i)
                    if (typeof object.values[i] === "string")
                        $util.base64.decode(object.values[i], message.values[i] = $util.newBuffer($util.base64.length(object.values[i])), 0);
                    else if (object.values[i].length)
                        message.values[i] = object.values[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a BytesValues message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.BytesValues
         * @static
         * @param {mykj.BytesValues} message BytesValues
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BytesValues.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (message.values && message.values.length) {
                object.values = [];
                for (let j = 0; j < message.values.length; ++j)
                    object.values[j] = options.bytes === String ? $util.base64.encode(message.values[j], 0, message.values[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.values[j]) : message.values[j];
            }
            return object;
        };

        /**
         * Converts this BytesValues to JSON.
         * @function toJSON
         * @memberof mykj.BytesValues
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BytesValues.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BytesValues;
    })();

    mykj.OfflineReward = (function() {

        /**
         * Properties of an OfflineReward.
         * @memberof mykj
         * @interface IOfflineReward
         * @property {number|null} [time] OfflineReward time
         * @property {mykj.IBNumber|null} [count] OfflineReward count
         */

        /**
         * Constructs a new OfflineReward.
         * @memberof mykj
         * @classdesc Represents an OfflineReward.
         * @implements IOfflineReward
         * @constructor
         * @param {mykj.IOfflineReward=} [properties] Properties to set
         */
        function OfflineReward(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OfflineReward time.
         * @member {number} time
         * @memberof mykj.OfflineReward
         * @instance
         */
        OfflineReward.prototype.time = 0;

        /**
         * OfflineReward count.
         * @member {mykj.IBNumber|null|undefined} count
         * @memberof mykj.OfflineReward
         * @instance
         */
        OfflineReward.prototype.count = null;

        /**
         * Creates a new OfflineReward instance using the specified properties.
         * @function create
         * @memberof mykj.OfflineReward
         * @static
         * @param {mykj.IOfflineReward=} [properties] Properties to set
         * @returns {mykj.OfflineReward} OfflineReward instance
         */
        OfflineReward.create = function create(properties) {
            return new OfflineReward(properties);
        };

        /**
         * Encodes the specified OfflineReward message. Does not implicitly {@link mykj.OfflineReward.verify|verify} messages.
         * @function encode
         * @memberof mykj.OfflineReward
         * @static
         * @param {mykj.IOfflineReward} message OfflineReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                $root.mykj.BNumber.encode(message.count, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OfflineReward message, length delimited. Does not implicitly {@link mykj.OfflineReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.OfflineReward
         * @static
         * @param {mykj.IOfflineReward} message OfflineReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OfflineReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OfflineReward message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.OfflineReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.OfflineReward} OfflineReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.OfflineReward();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int32();
                    break;
                case 2:
                    message.count = $root.mykj.BNumber.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OfflineReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.OfflineReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.OfflineReward} OfflineReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OfflineReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an OfflineReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.OfflineReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.OfflineReward} OfflineReward
         */
        OfflineReward.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.OfflineReward)
                return object;
            let message = new $root.mykj.OfflineReward();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.count != null) {
                if (typeof object.count !== "object")
                    throw TypeError(".mykj.OfflineReward.count: object expected");
                message.count = $root.mykj.BNumber.fromObject(object.count);
            }
            return message;
        };

        /**
         * Creates a plain object from an OfflineReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.OfflineReward
         * @static
         * @param {mykj.OfflineReward} message OfflineReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OfflineReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.time = 0;
                object.count = null;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = $root.mykj.BNumber.toObject(message.count, options);
            return object;
        };

        /**
         * Converts this OfflineReward to JSON.
         * @function toJSON
         * @memberof mykj.OfflineReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OfflineReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OfflineReward;
    })();

    mykj.Rewards = (function() {

        /**
         * Properties of a Rewards.
         * @memberof mykj
         * @interface IRewards
         * @property {Array.<mykj.IReward>|null} [rewards] Rewards rewards
         */

        /**
         * Constructs a new Rewards.
         * @memberof mykj
         * @classdesc Represents a Rewards.
         * @implements IRewards
         * @constructor
         * @param {mykj.IRewards=} [properties] Properties to set
         */
        function Rewards(properties) {
            this.rewards = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rewards rewards.
         * @member {Array.<mykj.IReward>} rewards
         * @memberof mykj.Rewards
         * @instance
         */
        Rewards.prototype.rewards = $util.emptyArray;

        /**
         * Creates a new Rewards instance using the specified properties.
         * @function create
         * @memberof mykj.Rewards
         * @static
         * @param {mykj.IRewards=} [properties] Properties to set
         * @returns {mykj.Rewards} Rewards instance
         */
        Rewards.create = function create(properties) {
            return new Rewards(properties);
        };

        /**
         * Encodes the specified Rewards message. Does not implicitly {@link mykj.Rewards.verify|verify} messages.
         * @function encode
         * @memberof mykj.Rewards
         * @static
         * @param {mykj.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rewards != null && message.rewards.length)
                for (let i = 0; i < message.rewards.length; ++i)
                    $root.mykj.Reward.encode(message.rewards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Rewards message, length delimited. Does not implicitly {@link mykj.Rewards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Rewards
         * @static
         * @param {mykj.IRewards} message Rewards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rewards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Rewards();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.rewards && message.rewards.length))
                        message.rewards = [];
                    message.rewards.push($root.mykj.Reward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rewards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Rewards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Rewards} Rewards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rewards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Rewards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Rewards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Rewards} Rewards
         */
        Rewards.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Rewards)
                return object;
            let message = new $root.mykj.Rewards();
            if (object.rewards) {
                if (!Array.isArray(object.rewards))
                    throw TypeError(".mykj.Rewards.rewards: array expected");
                message.rewards = [];
                for (let i = 0; i < object.rewards.length; ++i) {
                    if (typeof object.rewards[i] !== "object")
                        throw TypeError(".mykj.Rewards.rewards: object expected");
                    message.rewards[i] = $root.mykj.Reward.fromObject(object.rewards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Rewards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Rewards
         * @static
         * @param {mykj.Rewards} message Rewards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rewards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.rewards = [];
            if (message.rewards && message.rewards.length) {
                object.rewards = [];
                for (let j = 0; j < message.rewards.length; ++j)
                    object.rewards[j] = $root.mykj.Reward.toObject(message.rewards[j], options);
            }
            return object;
        };

        /**
         * Converts this Rewards to JSON.
         * @function toJSON
         * @memberof mykj.Rewards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rewards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Rewards;
    })();

    mykj.Reward = (function() {

        /**
         * Properties of a Reward.
         * @memberof mykj
         * @interface IReward
         * @property {number|null} [type] Reward type
         * @property {mykj.IBNumber|null} [count] Reward count
         */

        /**
         * Constructs a new Reward.
         * @memberof mykj
         * @classdesc Represents a Reward.
         * @implements IReward
         * @constructor
         * @param {mykj.IReward=} [properties] Properties to set
         */
        function Reward(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reward type.
         * @member {number} type
         * @memberof mykj.Reward
         * @instance
         */
        Reward.prototype.type = 0;

        /**
         * Reward count.
         * @member {mykj.IBNumber|null|undefined} count
         * @memberof mykj.Reward
         * @instance
         */
        Reward.prototype.count = null;

        /**
         * Creates a new Reward instance using the specified properties.
         * @function create
         * @memberof mykj.Reward
         * @static
         * @param {mykj.IReward=} [properties] Properties to set
         * @returns {mykj.Reward} Reward instance
         */
        Reward.create = function create(properties) {
            return new Reward(properties);
        };

        /**
         * Encodes the specified Reward message. Does not implicitly {@link mykj.Reward.verify|verify} messages.
         * @function encode
         * @memberof mykj.Reward
         * @static
         * @param {mykj.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                $root.mykj.BNumber.encode(message.count, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Reward message, length delimited. Does not implicitly {@link mykj.Reward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Reward
         * @static
         * @param {mykj.IReward} message Reward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reward message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Reward();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.count = $root.mykj.BNumber.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Reward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Reward} Reward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Reward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Reward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Reward} Reward
         */
        Reward.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Reward)
                return object;
            let message = new $root.mykj.Reward();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.count != null) {
                if (typeof object.count !== "object")
                    throw TypeError(".mykj.Reward.count: object expected");
                message.count = $root.mykj.BNumber.fromObject(object.count);
            }
            return message;
        };

        /**
         * Creates a plain object from a Reward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Reward
         * @static
         * @param {mykj.Reward} message Reward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.count = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = $root.mykj.BNumber.toObject(message.count, options);
            return object;
        };

        /**
         * Converts this Reward to JSON.
         * @function toJSON
         * @memberof mykj.Reward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reward;
    })();

    mykj.Speed = (function() {

        /**
         * Properties of a Speed.
         * @memberof mykj
         * @interface ISpeed
         * @property {number|null} [count] Speed count
         * @property {number|null} [cd] Speed cd
         */

        /**
         * Constructs a new Speed.
         * @memberof mykj
         * @classdesc Represents a Speed.
         * @implements ISpeed
         * @constructor
         * @param {mykj.ISpeed=} [properties] Properties to set
         */
        function Speed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Speed count.
         * @member {number} count
         * @memberof mykj.Speed
         * @instance
         */
        Speed.prototype.count = 0;

        /**
         * Speed cd.
         * @member {number} cd
         * @memberof mykj.Speed
         * @instance
         */
        Speed.prototype.cd = 0;

        /**
         * Creates a new Speed instance using the specified properties.
         * @function create
         * @memberof mykj.Speed
         * @static
         * @param {mykj.ISpeed=} [properties] Properties to set
         * @returns {mykj.Speed} Speed instance
         */
        Speed.create = function create(properties) {
            return new Speed(properties);
        };

        /**
         * Encodes the specified Speed message. Does not implicitly {@link mykj.Speed.verify|verify} messages.
         * @function encode
         * @memberof mykj.Speed
         * @static
         * @param {mykj.ISpeed} message Speed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Speed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            if (message.cd != null && Object.hasOwnProperty.call(message, "cd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cd);
            return writer;
        };

        /**
         * Encodes the specified Speed message, length delimited. Does not implicitly {@link mykj.Speed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Speed
         * @static
         * @param {mykj.ISpeed} message Speed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Speed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Speed message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Speed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Speed} Speed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Speed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Speed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                case 2:
                    message.cd = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Speed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Speed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Speed} Speed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Speed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a Speed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Speed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Speed} Speed
         */
        Speed.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Speed)
                return object;
            let message = new $root.mykj.Speed();
            if (object.count != null)
                message.count = object.count | 0;
            if (object.cd != null)
                message.cd = object.cd | 0;
            return message;
        };

        /**
         * Creates a plain object from a Speed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Speed
         * @static
         * @param {mykj.Speed} message Speed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Speed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.count = 0;
                object.cd = 0;
            }
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.cd != null && message.hasOwnProperty("cd"))
                object.cd = message.cd;
            return object;
        };

        /**
         * Converts this Speed to JSON.
         * @function toJSON
         * @memberof mykj.Speed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Speed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Speed;
    })();

    mykj.Ad = (function() {

        /**
         * Properties of an Ad.
         * @memberof mykj
         * @interface IAd
         * @property {number|null} [type] Ad type
         */

        /**
         * Constructs a new Ad.
         * @memberof mykj
         * @classdesc Represents an Ad.
         * @implements IAd
         * @constructor
         * @param {mykj.IAd=} [properties] Properties to set
         */
        function Ad(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ad type.
         * @member {number} type
         * @memberof mykj.Ad
         * @instance
         */
        Ad.prototype.type = 0;

        /**
         * Creates a new Ad instance using the specified properties.
         * @function create
         * @memberof mykj.Ad
         * @static
         * @param {mykj.IAd=} [properties] Properties to set
         * @returns {mykj.Ad} Ad instance
         */
        Ad.create = function create(properties) {
            return new Ad(properties);
        };

        /**
         * Encodes the specified Ad message. Does not implicitly {@link mykj.Ad.verify|verify} messages.
         * @function encode
         * @memberof mykj.Ad
         * @static
         * @param {mykj.IAd} message Ad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified Ad message, length delimited. Does not implicitly {@link mykj.Ad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.Ad
         * @static
         * @param {mykj.IAd} message Ad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ad message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.Ad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.Ad} Ad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.Ad();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.Ad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.Ad} Ad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates an Ad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.Ad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.Ad} Ad
         */
        Ad.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.Ad)
                return object;
            let message = new $root.mykj.Ad();
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from an Ad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.Ad
         * @static
         * @param {mykj.Ad} message Ad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this Ad to JSON.
         * @function toJSON
         * @memberof mykj.Ad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ad;
    })();

    mykj.ChangeInfo = (function() {

        /**
         * Properties of a ChangeInfo.
         * @memberof mykj
         * @interface IChangeInfo
         * @property {number|null} [luck] ChangeInfo luck
         * @property {Array.<mykj.IMonster>|null} [monsters] ChangeInfo monsters
         * @property {mykj.ITimeStamp|null} [freeCDTime] ChangeInfo freeCDTime
         * @property {number|null} [adCount] ChangeInfo adCount
         * @property {number|null} [count] ChangeInfo count
         */

        /**
         * Constructs a new ChangeInfo.
         * @memberof mykj
         * @classdesc Represents a ChangeInfo.
         * @implements IChangeInfo
         * @constructor
         * @param {mykj.IChangeInfo=} [properties] Properties to set
         */
        function ChangeInfo(properties) {
            this.monsters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeInfo luck.
         * @member {number} luck
         * @memberof mykj.ChangeInfo
         * @instance
         */
        ChangeInfo.prototype.luck = 0;

        /**
         * ChangeInfo monsters.
         * @member {Array.<mykj.IMonster>} monsters
         * @memberof mykj.ChangeInfo
         * @instance
         */
        ChangeInfo.prototype.monsters = $util.emptyArray;

        /**
         * ChangeInfo freeCDTime.
         * @member {mykj.ITimeStamp|null|undefined} freeCDTime
         * @memberof mykj.ChangeInfo
         * @instance
         */
        ChangeInfo.prototype.freeCDTime = null;

        /**
         * ChangeInfo adCount.
         * @member {number} adCount
         * @memberof mykj.ChangeInfo
         * @instance
         */
        ChangeInfo.prototype.adCount = 0;

        /**
         * ChangeInfo count.
         * @member {number} count
         * @memberof mykj.ChangeInfo
         * @instance
         */
        ChangeInfo.prototype.count = 0;

        /**
         * Creates a new ChangeInfo instance using the specified properties.
         * @function create
         * @memberof mykj.ChangeInfo
         * @static
         * @param {mykj.IChangeInfo=} [properties] Properties to set
         * @returns {mykj.ChangeInfo} ChangeInfo instance
         */
        ChangeInfo.create = function create(properties) {
            return new ChangeInfo(properties);
        };

        /**
         * Encodes the specified ChangeInfo message. Does not implicitly {@link mykj.ChangeInfo.verify|verify} messages.
         * @function encode
         * @memberof mykj.ChangeInfo
         * @static
         * @param {mykj.IChangeInfo} message ChangeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.luck != null && Object.hasOwnProperty.call(message, "luck"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.luck);
            if (message.monsters != null && message.monsters.length)
                for (let i = 0; i < message.monsters.length; ++i)
                    $root.mykj.Monster.encode(message.monsters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.freeCDTime != null && Object.hasOwnProperty.call(message, "freeCDTime"))
                $root.mykj.TimeStamp.encode(message.freeCDTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.adCount != null && Object.hasOwnProperty.call(message, "adCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.adCount);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified ChangeInfo message, length delimited. Does not implicitly {@link mykj.ChangeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.ChangeInfo
         * @static
         * @param {mykj.IChangeInfo} message ChangeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.ChangeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.ChangeInfo} ChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.ChangeInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.luck = reader.int32();
                    break;
                case 2:
                    if (!(message.monsters && message.monsters.length))
                        message.monsters = [];
                    message.monsters.push($root.mykj.Monster.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.freeCDTime = $root.mykj.TimeStamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.adCount = reader.int32();
                    break;
                case 5:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.ChangeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.ChangeInfo} ChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a ChangeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.ChangeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.ChangeInfo} ChangeInfo
         */
        ChangeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.ChangeInfo)
                return object;
            let message = new $root.mykj.ChangeInfo();
            if (object.luck != null)
                message.luck = object.luck | 0;
            if (object.monsters) {
                if (!Array.isArray(object.monsters))
                    throw TypeError(".mykj.ChangeInfo.monsters: array expected");
                message.monsters = [];
                for (let i = 0; i < object.monsters.length; ++i) {
                    if (typeof object.monsters[i] !== "object")
                        throw TypeError(".mykj.ChangeInfo.monsters: object expected");
                    message.monsters[i] = $root.mykj.Monster.fromObject(object.monsters[i]);
                }
            }
            if (object.freeCDTime != null) {
                if (typeof object.freeCDTime !== "object")
                    throw TypeError(".mykj.ChangeInfo.freeCDTime: object expected");
                message.freeCDTime = $root.mykj.TimeStamp.fromObject(object.freeCDTime);
            }
            if (object.adCount != null)
                message.adCount = object.adCount | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChangeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.ChangeInfo
         * @static
         * @param {mykj.ChangeInfo} message ChangeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.monsters = [];
            if (options.defaults) {
                object.luck = 0;
                object.freeCDTime = null;
                object.adCount = 0;
                object.count = 0;
            }
            if (message.luck != null && message.hasOwnProperty("luck"))
                object.luck = message.luck;
            if (message.monsters && message.monsters.length) {
                object.monsters = [];
                for (let j = 0; j < message.monsters.length; ++j)
                    object.monsters[j] = $root.mykj.Monster.toObject(message.monsters[j], options);
            }
            if (message.freeCDTime != null && message.hasOwnProperty("freeCDTime"))
                object.freeCDTime = $root.mykj.TimeStamp.toObject(message.freeCDTime, options);
            if (message.adCount != null && message.hasOwnProperty("adCount"))
                object.adCount = message.adCount;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this ChangeInfo to JSON.
         * @function toJSON
         * @memberof mykj.ChangeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeInfo;
    })();

    mykj.MonsterChangeInfo = (function() {

        /**
         * Properties of a MonsterChangeInfo.
         * @memberof mykj
         * @interface IMonsterChangeInfo
         * @property {Array.<mykj.IMonsterChange>|null} [monsterInfo] MonsterChangeInfo monsterInfo
         */

        /**
         * Constructs a new MonsterChangeInfo.
         * @memberof mykj
         * @classdesc Represents a MonsterChangeInfo.
         * @implements IMonsterChangeInfo
         * @constructor
         * @param {mykj.IMonsterChangeInfo=} [properties] Properties to set
         */
        function MonsterChangeInfo(properties) {
            this.monsterInfo = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MonsterChangeInfo monsterInfo.
         * @member {Array.<mykj.IMonsterChange>} monsterInfo
         * @memberof mykj.MonsterChangeInfo
         * @instance
         */
        MonsterChangeInfo.prototype.monsterInfo = $util.emptyArray;

        /**
         * Creates a new MonsterChangeInfo instance using the specified properties.
         * @function create
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {mykj.IMonsterChangeInfo=} [properties] Properties to set
         * @returns {mykj.MonsterChangeInfo} MonsterChangeInfo instance
         */
        MonsterChangeInfo.create = function create(properties) {
            return new MonsterChangeInfo(properties);
        };

        /**
         * Encodes the specified MonsterChangeInfo message. Does not implicitly {@link mykj.MonsterChangeInfo.verify|verify} messages.
         * @function encode
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {mykj.IMonsterChangeInfo} message MonsterChangeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonsterChangeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.monsterInfo != null && message.monsterInfo.length)
                for (let i = 0; i < message.monsterInfo.length; ++i)
                    $root.mykj.MonsterChange.encode(message.monsterInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MonsterChangeInfo message, length delimited. Does not implicitly {@link mykj.MonsterChangeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {mykj.IMonsterChangeInfo} message MonsterChangeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonsterChangeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MonsterChangeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.MonsterChangeInfo} MonsterChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonsterChangeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.MonsterChangeInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.monsterInfo && message.monsterInfo.length))
                        message.monsterInfo = [];
                    message.monsterInfo.push($root.mykj.MonsterChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MonsterChangeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.MonsterChangeInfo} MonsterChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonsterChangeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a MonsterChangeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.MonsterChangeInfo} MonsterChangeInfo
         */
        MonsterChangeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.MonsterChangeInfo)
                return object;
            let message = new $root.mykj.MonsterChangeInfo();
            if (object.monsterInfo) {
                if (!Array.isArray(object.monsterInfo))
                    throw TypeError(".mykj.MonsterChangeInfo.monsterInfo: array expected");
                message.monsterInfo = [];
                for (let i = 0; i < object.monsterInfo.length; ++i) {
                    if (typeof object.monsterInfo[i] !== "object")
                        throw TypeError(".mykj.MonsterChangeInfo.monsterInfo: object expected");
                    message.monsterInfo[i] = $root.mykj.MonsterChange.fromObject(object.monsterInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MonsterChangeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.MonsterChangeInfo
         * @static
         * @param {mykj.MonsterChangeInfo} message MonsterChangeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonsterChangeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.monsterInfo = [];
            if (message.monsterInfo && message.monsterInfo.length) {
                object.monsterInfo = [];
                for (let j = 0; j < message.monsterInfo.length; ++j)
                    object.monsterInfo[j] = $root.mykj.MonsterChange.toObject(message.monsterInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this MonsterChangeInfo to JSON.
         * @function toJSON
         * @memberof mykj.MonsterChangeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonsterChangeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MonsterChangeInfo;
    })();

    mykj.MonsterChange = (function() {

        /**
         * Properties of a MonsterChange.
         * @memberof mykj
         * @interface IMonsterChange
         * @property {number|null} [id] MonsterChange id
         * @property {number|null} [type] MonsterChange type
         * @property {Array.<mykj.IMonster>|null} [monsters] MonsterChange monsters
         * @property {mykj.IMonsterOrder|null} [monsterOrder] MonsterChange monsterOrder
         */

        /**
         * Constructs a new MonsterChange.
         * @memberof mykj
         * @classdesc Represents a MonsterChange.
         * @implements IMonsterChange
         * @constructor
         * @param {mykj.IMonsterChange=} [properties] Properties to set
         */
        function MonsterChange(properties) {
            this.monsters = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MonsterChange id.
         * @member {number} id
         * @memberof mykj.MonsterChange
         * @instance
         */
        MonsterChange.prototype.id = 0;

        /**
         * MonsterChange type.
         * @member {number} type
         * @memberof mykj.MonsterChange
         * @instance
         */
        MonsterChange.prototype.type = 0;

        /**
         * MonsterChange monsters.
         * @member {Array.<mykj.IMonster>} monsters
         * @memberof mykj.MonsterChange
         * @instance
         */
        MonsterChange.prototype.monsters = $util.emptyArray;

        /**
         * MonsterChange monsterOrder.
         * @member {mykj.IMonsterOrder|null|undefined} monsterOrder
         * @memberof mykj.MonsterChange
         * @instance
         */
        MonsterChange.prototype.monsterOrder = null;

        /**
         * Creates a new MonsterChange instance using the specified properties.
         * @function create
         * @memberof mykj.MonsterChange
         * @static
         * @param {mykj.IMonsterChange=} [properties] Properties to set
         * @returns {mykj.MonsterChange} MonsterChange instance
         */
        MonsterChange.create = function create(properties) {
            return new MonsterChange(properties);
        };

        /**
         * Encodes the specified MonsterChange message. Does not implicitly {@link mykj.MonsterChange.verify|verify} messages.
         * @function encode
         * @memberof mykj.MonsterChange
         * @static
         * @param {mykj.IMonsterChange} message MonsterChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonsterChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.monsters != null && message.monsters.length)
                for (let i = 0; i < message.monsters.length; ++i)
                    $root.mykj.Monster.encode(message.monsters[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.monsterOrder != null && Object.hasOwnProperty.call(message, "monsterOrder"))
                $root.mykj.MonsterOrder.encode(message.monsterOrder, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MonsterChange message, length delimited. Does not implicitly {@link mykj.MonsterChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.MonsterChange
         * @static
         * @param {mykj.IMonsterChange} message MonsterChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MonsterChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MonsterChange message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.MonsterChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.MonsterChange} MonsterChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonsterChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.MonsterChange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    if (!(message.monsters && message.monsters.length))
                        message.monsters = [];
                    message.monsters.push($root.mykj.Monster.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.monsterOrder = $root.mykj.MonsterOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MonsterChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.MonsterChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.MonsterChange} MonsterChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MonsterChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a MonsterChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.MonsterChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.MonsterChange} MonsterChange
         */
        MonsterChange.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.MonsterChange)
                return object;
            let message = new $root.mykj.MonsterChange();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.monsters) {
                if (!Array.isArray(object.monsters))
                    throw TypeError(".mykj.MonsterChange.monsters: array expected");
                message.monsters = [];
                for (let i = 0; i < object.monsters.length; ++i) {
                    if (typeof object.monsters[i] !== "object")
                        throw TypeError(".mykj.MonsterChange.monsters: object expected");
                    message.monsters[i] = $root.mykj.Monster.fromObject(object.monsters[i]);
                }
            }
            if (object.monsterOrder != null) {
                if (typeof object.monsterOrder !== "object")
                    throw TypeError(".mykj.MonsterChange.monsterOrder: object expected");
                message.monsterOrder = $root.mykj.MonsterOrder.fromObject(object.monsterOrder);
            }
            return message;
        };

        /**
         * Creates a plain object from a MonsterChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.MonsterChange
         * @static
         * @param {mykj.MonsterChange} message MonsterChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MonsterChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.monsters = [];
            if (options.defaults) {
                object.id = 0;
                object.type = 0;
                object.monsterOrder = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.monsters && message.monsters.length) {
                object.monsters = [];
                for (let j = 0; j < message.monsters.length; ++j)
                    object.monsters[j] = $root.mykj.Monster.toObject(message.monsters[j], options);
            }
            if (message.monsterOrder != null && message.hasOwnProperty("monsterOrder"))
                object.monsterOrder = $root.mykj.MonsterOrder.toObject(message.monsterOrder, options);
            return object;
        };

        /**
         * Converts this MonsterChange to JSON.
         * @function toJSON
         * @memberof mykj.MonsterChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MonsterChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MonsterChange;
    })();

    mykj.LuckInfo = (function() {

        /**
         * Properties of a LuckInfo.
         * @memberof mykj
         * @interface ILuckInfo
         * @property {boolean|null} [sign] LuckInfo sign
         * @property {mykj.ICountData|null} [video] LuckInfo video
         * @property {mykj.ICountData|null} [share] LuckInfo share
         */

        /**
         * Constructs a new LuckInfo.
         * @memberof mykj
         * @classdesc Represents a LuckInfo.
         * @implements ILuckInfo
         * @constructor
         * @param {mykj.ILuckInfo=} [properties] Properties to set
         */
        function LuckInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LuckInfo sign.
         * @member {boolean} sign
         * @memberof mykj.LuckInfo
         * @instance
         */
        LuckInfo.prototype.sign = false;

        /**
         * LuckInfo video.
         * @member {mykj.ICountData|null|undefined} video
         * @memberof mykj.LuckInfo
         * @instance
         */
        LuckInfo.prototype.video = null;

        /**
         * LuckInfo share.
         * @member {mykj.ICountData|null|undefined} share
         * @memberof mykj.LuckInfo
         * @instance
         */
        LuckInfo.prototype.share = null;

        /**
         * Creates a new LuckInfo instance using the specified properties.
         * @function create
         * @memberof mykj.LuckInfo
         * @static
         * @param {mykj.ILuckInfo=} [properties] Properties to set
         * @returns {mykj.LuckInfo} LuckInfo instance
         */
        LuckInfo.create = function create(properties) {
            return new LuckInfo(properties);
        };

        /**
         * Encodes the specified LuckInfo message. Does not implicitly {@link mykj.LuckInfo.verify|verify} messages.
         * @function encode
         * @memberof mykj.LuckInfo
         * @static
         * @param {mykj.ILuckInfo} message LuckInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LuckInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sign != null && Object.hasOwnProperty.call(message, "sign"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.sign);
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                $root.mykj.CountData.encode(message.video, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.share != null && Object.hasOwnProperty.call(message, "share"))
                $root.mykj.CountData.encode(message.share, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LuckInfo message, length delimited. Does not implicitly {@link mykj.LuckInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.LuckInfo
         * @static
         * @param {mykj.ILuckInfo} message LuckInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LuckInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LuckInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.LuckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.LuckInfo} LuckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LuckInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.LuckInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sign = reader.bool();
                    break;
                case 2:
                    message.video = $root.mykj.CountData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.share = $root.mykj.CountData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LuckInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.LuckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.LuckInfo} LuckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LuckInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a LuckInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.LuckInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.LuckInfo} LuckInfo
         */
        LuckInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.LuckInfo)
                return object;
            let message = new $root.mykj.LuckInfo();
            if (object.sign != null)
                message.sign = Boolean(object.sign);
            if (object.video != null) {
                if (typeof object.video !== "object")
                    throw TypeError(".mykj.LuckInfo.video: object expected");
                message.video = $root.mykj.CountData.fromObject(object.video);
            }
            if (object.share != null) {
                if (typeof object.share !== "object")
                    throw TypeError(".mykj.LuckInfo.share: object expected");
                message.share = $root.mykj.CountData.fromObject(object.share);
            }
            return message;
        };

        /**
         * Creates a plain object from a LuckInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.LuckInfo
         * @static
         * @param {mykj.LuckInfo} message LuckInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LuckInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sign = false;
                object.video = null;
                object.share = null;
            }
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = $root.mykj.CountData.toObject(message.video, options);
            if (message.share != null && message.hasOwnProperty("share"))
                object.share = $root.mykj.CountData.toObject(message.share, options);
            return object;
        };

        /**
         * Converts this LuckInfo to JSON.
         * @function toJSON
         * @memberof mykj.LuckInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LuckInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LuckInfo;
    })();

    mykj.CountData = (function() {

        /**
         * Properties of a CountData.
         * @memberof mykj
         * @interface ICountData
         * @property {number|null} [now] CountData now
         * @property {number|null} [max] CountData max
         */

        /**
         * Constructs a new CountData.
         * @memberof mykj
         * @classdesc Represents a CountData.
         * @implements ICountData
         * @constructor
         * @param {mykj.ICountData=} [properties] Properties to set
         */
        function CountData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CountData now.
         * @member {number} now
         * @memberof mykj.CountData
         * @instance
         */
        CountData.prototype.now = 0;

        /**
         * CountData max.
         * @member {number} max
         * @memberof mykj.CountData
         * @instance
         */
        CountData.prototype.max = 0;

        /**
         * Creates a new CountData instance using the specified properties.
         * @function create
         * @memberof mykj.CountData
         * @static
         * @param {mykj.ICountData=} [properties] Properties to set
         * @returns {mykj.CountData} CountData instance
         */
        CountData.create = function create(properties) {
            return new CountData(properties);
        };

        /**
         * Encodes the specified CountData message. Does not implicitly {@link mykj.CountData.verify|verify} messages.
         * @function encode
         * @memberof mykj.CountData
         * @static
         * @param {mykj.ICountData} message CountData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CountData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.now != null && Object.hasOwnProperty.call(message, "now"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.now);
            if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.max);
            return writer;
        };

        /**
         * Encodes the specified CountData message, length delimited. Does not implicitly {@link mykj.CountData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.CountData
         * @static
         * @param {mykj.ICountData} message CountData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CountData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CountData message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.CountData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.CountData} CountData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CountData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.CountData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.now = reader.int32();
                    break;
                case 2:
                    message.max = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CountData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.CountData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.CountData} CountData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CountData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a CountData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.CountData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.CountData} CountData
         */
        CountData.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.CountData)
                return object;
            let message = new $root.mykj.CountData();
            if (object.now != null)
                message.now = object.now | 0;
            if (object.max != null)
                message.max = object.max | 0;
            return message;
        };

        /**
         * Creates a plain object from a CountData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.CountData
         * @static
         * @param {mykj.CountData} message CountData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CountData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.now = 0;
                object.max = 0;
            }
            if (message.now != null && message.hasOwnProperty("now"))
                object.now = message.now;
            if (message.max != null && message.hasOwnProperty("max"))
                object.max = message.max;
            return object;
        };

        /**
         * Converts this CountData to JSON.
         * @function toJSON
         * @memberof mykj.CountData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CountData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CountData;
    })();

    mykj.RedPacketInfo = (function() {

        /**
         * Properties of a RedPacketInfo.
         * @memberof mykj
         * @interface IRedPacketInfo
         * @property {Array.<mykj.IMonsterOrder>|null} [redPackets] RedPacketInfo redPackets
         */

        /**
         * Constructs a new RedPacketInfo.
         * @memberof mykj
         * @classdesc Represents a RedPacketInfo.
         * @implements IRedPacketInfo
         * @constructor
         * @param {mykj.IRedPacketInfo=} [properties] Properties to set
         */
        function RedPacketInfo(properties) {
            this.redPackets = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedPacketInfo redPackets.
         * @member {Array.<mykj.IMonsterOrder>} redPackets
         * @memberof mykj.RedPacketInfo
         * @instance
         */
        RedPacketInfo.prototype.redPackets = $util.emptyArray;

        /**
         * Creates a new RedPacketInfo instance using the specified properties.
         * @function create
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {mykj.IRedPacketInfo=} [properties] Properties to set
         * @returns {mykj.RedPacketInfo} RedPacketInfo instance
         */
        RedPacketInfo.create = function create(properties) {
            return new RedPacketInfo(properties);
        };

        /**
         * Encodes the specified RedPacketInfo message. Does not implicitly {@link mykj.RedPacketInfo.verify|verify} messages.
         * @function encode
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {mykj.IRedPacketInfo} message RedPacketInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPacketInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.redPackets != null && message.redPackets.length)
                for (let i = 0; i < message.redPackets.length; ++i)
                    $root.mykj.MonsterOrder.encode(message.redPackets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RedPacketInfo message, length delimited. Does not implicitly {@link mykj.RedPacketInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {mykj.IRedPacketInfo} message RedPacketInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPacketInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedPacketInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.RedPacketInfo} RedPacketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPacketInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.RedPacketInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.redPackets && message.redPackets.length))
                        message.redPackets = [];
                    message.redPackets.push($root.mykj.MonsterOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RedPacketInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.RedPacketInfo} RedPacketInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPacketInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a RedPacketInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.RedPacketInfo} RedPacketInfo
         */
        RedPacketInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.RedPacketInfo)
                return object;
            let message = new $root.mykj.RedPacketInfo();
            if (object.redPackets) {
                if (!Array.isArray(object.redPackets))
                    throw TypeError(".mykj.RedPacketInfo.redPackets: array expected");
                message.redPackets = [];
                for (let i = 0; i < object.redPackets.length; ++i) {
                    if (typeof object.redPackets[i] !== "object")
                        throw TypeError(".mykj.RedPacketInfo.redPackets: object expected");
                    message.redPackets[i] = $root.mykj.MonsterOrder.fromObject(object.redPackets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RedPacketInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.RedPacketInfo
         * @static
         * @param {mykj.RedPacketInfo} message RedPacketInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedPacketInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.redPackets = [];
            if (message.redPackets && message.redPackets.length) {
                object.redPackets = [];
                for (let j = 0; j < message.redPackets.length; ++j)
                    object.redPackets[j] = $root.mykj.MonsterOrder.toObject(message.redPackets[j], options);
            }
            return object;
        };

        /**
         * Converts this RedPacketInfo to JSON.
         * @function toJSON
         * @memberof mykj.RedPacketInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedPacketInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedPacketInfo;
    })();

    mykj.RedPointList = (function() {

        /**
         * Properties of a RedPointList.
         * @memberof mykj
         * @interface IRedPointList
         * @property {Array.<mykj.IRedPoint>|null} [RedPoint] RedPointList RedPoint
         */

        /**
         * Constructs a new RedPointList.
         * @memberof mykj
         * @classdesc Represents a RedPointList.
         * @implements IRedPointList
         * @constructor
         * @param {mykj.IRedPointList=} [properties] Properties to set
         */
        function RedPointList(properties) {
            this.RedPoint = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedPointList RedPoint.
         * @member {Array.<mykj.IRedPoint>} RedPoint
         * @memberof mykj.RedPointList
         * @instance
         */
        RedPointList.prototype.RedPoint = $util.emptyArray;

        /**
         * Creates a new RedPointList instance using the specified properties.
         * @function create
         * @memberof mykj.RedPointList
         * @static
         * @param {mykj.IRedPointList=} [properties] Properties to set
         * @returns {mykj.RedPointList} RedPointList instance
         */
        RedPointList.create = function create(properties) {
            return new RedPointList(properties);
        };

        /**
         * Encodes the specified RedPointList message. Does not implicitly {@link mykj.RedPointList.verify|verify} messages.
         * @function encode
         * @memberof mykj.RedPointList
         * @static
         * @param {mykj.IRedPointList} message RedPointList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPointList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RedPoint != null && message.RedPoint.length)
                for (let i = 0; i < message.RedPoint.length; ++i)
                    $root.mykj.RedPoint.encode(message.RedPoint[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RedPointList message, length delimited. Does not implicitly {@link mykj.RedPointList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.RedPointList
         * @static
         * @param {mykj.IRedPointList} message RedPointList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPointList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedPointList message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.RedPointList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.RedPointList} RedPointList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPointList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.RedPointList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RedPoint && message.RedPoint.length))
                        message.RedPoint = [];
                    message.RedPoint.push($root.mykj.RedPoint.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RedPointList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.RedPointList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.RedPointList} RedPointList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPointList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a RedPointList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.RedPointList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.RedPointList} RedPointList
         */
        RedPointList.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.RedPointList)
                return object;
            let message = new $root.mykj.RedPointList();
            if (object.RedPoint) {
                if (!Array.isArray(object.RedPoint))
                    throw TypeError(".mykj.RedPointList.RedPoint: array expected");
                message.RedPoint = [];
                for (let i = 0; i < object.RedPoint.length; ++i) {
                    if (typeof object.RedPoint[i] !== "object")
                        throw TypeError(".mykj.RedPointList.RedPoint: object expected");
                    message.RedPoint[i] = $root.mykj.RedPoint.fromObject(object.RedPoint[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RedPointList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.RedPointList
         * @static
         * @param {mykj.RedPointList} message RedPointList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedPointList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.RedPoint = [];
            if (message.RedPoint && message.RedPoint.length) {
                object.RedPoint = [];
                for (let j = 0; j < message.RedPoint.length; ++j)
                    object.RedPoint[j] = $root.mykj.RedPoint.toObject(message.RedPoint[j], options);
            }
            return object;
        };

        /**
         * Converts this RedPointList to JSON.
         * @function toJSON
         * @memberof mykj.RedPointList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedPointList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedPointList;
    })();

    mykj.RedPoint = (function() {

        /**
         * Properties of a RedPoint.
         * @memberof mykj
         * @interface IRedPoint
         * @property {number|null} [key] RedPoint key
         * @property {boolean|null} [value] RedPoint value
         */

        /**
         * Constructs a new RedPoint.
         * @memberof mykj
         * @classdesc Represents a RedPoint.
         * @implements IRedPoint
         * @constructor
         * @param {mykj.IRedPoint=} [properties] Properties to set
         */
        function RedPoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedPoint key.
         * @member {number} key
         * @memberof mykj.RedPoint
         * @instance
         */
        RedPoint.prototype.key = 0;

        /**
         * RedPoint value.
         * @member {boolean} value
         * @memberof mykj.RedPoint
         * @instance
         */
        RedPoint.prototype.value = false;

        /**
         * Creates a new RedPoint instance using the specified properties.
         * @function create
         * @memberof mykj.RedPoint
         * @static
         * @param {mykj.IRedPoint=} [properties] Properties to set
         * @returns {mykj.RedPoint} RedPoint instance
         */
        RedPoint.create = function create(properties) {
            return new RedPoint(properties);
        };

        /**
         * Encodes the specified RedPoint message. Does not implicitly {@link mykj.RedPoint.verify|verify} messages.
         * @function encode
         * @memberof mykj.RedPoint
         * @static
         * @param {mykj.IRedPoint} message RedPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.value);
            return writer;
        };

        /**
         * Encodes the specified RedPoint message, length delimited. Does not implicitly {@link mykj.RedPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mykj.RedPoint
         * @static
         * @param {mykj.IRedPoint} message RedPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedPoint message from the specified reader or buffer.
         * @function decode
         * @memberof mykj.RedPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mykj.RedPoint} RedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.mykj.RedPoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.int32();
                    break;
                case 2:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RedPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mykj.RedPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mykj.RedPoint} RedPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Creates a RedPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mykj.RedPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mykj.RedPoint} RedPoint
         */
        RedPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.mykj.RedPoint)
                return object;
            let message = new $root.mykj.RedPoint();
            if (object.key != null)
                message.key = object.key | 0;
            if (object.value != null)
                message.value = Boolean(object.value);
            return message;
        };

        /**
         * Creates a plain object from a RedPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mykj.RedPoint
         * @static
         * @param {mykj.RedPoint} message RedPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.key = 0;
                object.value = false;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this RedPoint to JSON.
         * @function toJSON
         * @memberof mykj.RedPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedPoint;
    })();

    return mykj;
})();


