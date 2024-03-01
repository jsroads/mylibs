/**
 * Created by jsroads on 2023/06/05 15:45
 * Note:
 */
declare namespace DouYinMinigame {
    interface AccessFailCallbackResult {

        errMsg: string;
    }

    interface AccessOption {

        path: string;

        complete?: AccessCompleteCallback;

        fail?: AccessFailCallback;

        success?: AccessSuccessCallback;
    }

    interface AccountInfo {

        miniProgram: MiniProgram;

        plugin: Plugin;
    }

    interface AddCardOption {

        cardList: AddCardRequestInfo[];

        complete?: AddCardCompleteCallback;

        fail?: AddCardFailCallback;

        success?: AddCardSuccessCallback;
    }

    interface AddCardRequestInfo {

        cardExt: string;

        cardId: string;
    }

    interface AddCardResponseInfo {

        cardExt: string;

        cardId: string;

        code: string;

        isSuccess: boolean;
    }

    interface AddCardSuccessCallbackResult {

        cardList: AddCardResponseInfo[];
        errMsg: string;
    }

    interface AddServiceOption {

        service: BLEPeripheralService;

        complete?: AddServiceCompleteCallback;

        fail?: AddServiceFailCallback;

        success?: AddServiceSuccessCallback;
    }

    interface AdvertiseReqObj {

        connectable?: boolean;

        deviceName?: string;

        manufacturerData?: ManufacturerData[];

        serviceUuids?: string[];
    }

    interface AppendFileFailCallbackResult {

        errMsg: string;
    }

    interface AppendFileOption {

        data: string | ArrayBuffer;

        filePath: string;

        complete?: AppendFileCompleteCallback;

        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";

        fail?: AppendFileFailCallback;

        success?: AppendFileSuccessCallback;
    }

    interface AuthPrivateMessageOption {

        shareTicket: string;

        complete?: AuthPrivateMessageCompleteCallback;

        fail?: AuthPrivateMessageFailCallback;

        success?: AuthPrivateMessageSuccessCallback;
    }

    interface AuthPrivateMessageSuccessCallbackResult {

        encryptedData: string;

        errMsg: string;

        iv: string;

        valid: boolean;
    }

    interface AuthSetting {

        "scope.userInfo"?: boolean;

        "scope.userLocation"?: boolean;

        "scope.werun"?: boolean;

        "scope.writePhotosAlbum"?: boolean;
    }

    interface AuthorizeOption {

        scope: string;

        complete?: AuthorizeCompleteCallback;

        fail?: AuthorizeFailCallback;

        success?: AuthorizeSuccessCallback;
    }

    interface BLECharacteristic {

        properties: BLECharacteristicProperties;

        uuid: string;
    }

    interface BLECharacteristicProperties {

        indicate: boolean;

        notify: boolean;

        read: boolean;

        write: boolean;
    }

    interface BLEPeripheralService {

        characteristics: Characteristic[];

        uuid: string;
    }

    interface BLEService {

        isPrimary: boolean;

        uuid: string;
    }

    interface BannerAd {

        style: BannerAdStyle;
    }

    interface BannerAdOnErrorCallbackResult {

        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;

        errMsg: string;
    }

    interface BannerAdStyle {

        height: number;

        left: number;

        realHeight: number;

        realWidth: number;

        top: number;

        width: number;
    }

    interface BlueToothDevice {

        RSSI: number;

        advertisData: ArrayBuffer;

        advertisServiceUUIDs: string[];

        deviceId: string;

        localName: string;

        name: string;

        serviceData: IAnyObject;
    }

    interface BluetoothDeviceInfo {

        deviceId: string;

        name: string;
    }

    interface BroadcastInRoomOption {

        msg: string;

        toPosNumList: number[];

        complete?: BroadcastInRoomCompleteCallback;

        fail?: BroadcastInRoomFailCallback;

        success?: BroadcastInRoomSuccessCallback;
    }

    interface ButtonShare {

        template?: "enter" | "challenge" | "play";
    }

    interface ButtonShareOption {

        template?: "enter" | "challenge" | "play";
    }

    interface Camera {

        devicePosition: string;

        flash: string;

        height: number;

        size: string;

        width: number;

        x: number;

        y: number;
    }

    interface CancelMatchOption {

        matchId: string;

        complete?: CancelMatchCompleteCallback;

        fail?: CancelMatchFailCallback;

        success?: CancelMatchSuccessCallback;
    }

    interface Canvas {

        height: number;

        width: number;
    }

    interface ChangeSeatOption {

        posNum: number;

        complete?: ChangeSeatCompleteCallback;

        fail?: ChangeSeatFailCallback;

        success?: ChangeSeatSuccessCallback;
    }

    interface Characteristic {

        uuid: string;

        descriptors?: Descriptor[];

        permission?: CharacteristicPermission;

        properties?: CharacteristicProperties;

        value?: ArrayBuffer;
    }

    interface CharacteristicPermission {

        readEncryptionRequired?: boolean;

        readable?: boolean;

        writeEncryptionRequired?: boolean;

        writeable?: boolean;
    }

    interface CharacteristicProperties {

        indicate?: boolean;

        notify?: boolean;

        read?: boolean;

        write?: boolean;
    }

    interface CheckHandoffEnabledOption {

        complete?: CheckHandoffEnabledCompleteCallback;

        fail?: CheckHandoffEnabledFailCallback;

        success?: CheckHandoffEnabledSuccessCallback;
    }

    interface CheckHandoffEnabledSuccessCallbackResult {

        isEnabled: boolean;
        errMsg: string;
    }

    interface CheckIsUserAdvisedToRestOption {

        todayPlayedTime: number;

        complete?: CheckIsUserAdvisedToRestCompleteCallback;

        fail?: CheckIsUserAdvisedToRestFailCallback;

        success?: CheckIsUserAdvisedToRestSuccessCallback;
    }

    interface CheckIsUserAdvisedToRestSuccessCallbackResult {

        result: boolean;
        errMsg: string;
    }

    interface CheckSessionOption {

        complete?: CheckSessionCompleteCallback;

        fail?: CheckSessionFailCallback;

        success?: CheckSessionSuccessCallback;
    }

    interface ChooseImageOption {

        complete?: ChooseImageCompleteCallback;

        count?: number;

        fail?: ChooseImageFailCallback;

        sizeType?: Array<"original" | "compressed">;

        sourceType?: Array<"album" | "camera">;

        success?: ChooseImageSuccessCallback;
    }

    interface ChooseImageSuccessCallbackResult {

        tempFilePaths: string[];

        tempFiles: ImageFile[];
        errMsg: string;
    }

    interface ClearStorageOption {

        complete?: ClearStorageCompleteCallback;

        fail?: ClearStorageFailCallback;

        success?: ClearStorageSuccessCallback;
    }

    interface CloseBLEConnectionOption {

        deviceId: string;

        complete?: CloseBLEConnectionCompleteCallback;

        fail?: CloseBLEConnectionFailCallback;

        success?: CloseBLEConnectionSuccessCallback;
    }

    interface CloseBluetoothAdapterOption {

        complete?: CloseBluetoothAdapterCompleteCallback;

        fail?: CloseBluetoothAdapterFailCallback;

        success?: CloseBluetoothAdapterSuccessCallback;
    }

    interface CloseOption {

        code?: number;

        complete?: CloseCompleteCallback;

        fail?: CloseFailCallback;

        reason?: string;

        success?: CloseSuccessCallback;
    }

    interface CloseSocketOption {

        code?: number;

        complete?: CloseSocketCompleteCallback;

        fail?: CloseSocketFailCallback;

        reason?: string;

        success?: CloseSocketSuccessCallback;
    }

    interface ConnectSocketOption {

        url: string;

        complete?: ConnectSocketCompleteCallback;

        fail?: ConnectSocketFailCallback;

        header?: IAnyObject;

        perMessageDeflate?: boolean;

        protocols?: string[];

        success?: ConnectSocketSuccessCallback;

        tcpNoDelay?: boolean;

        timeout?: number;
    }

    interface ContextAttributes {

        alpha?: number;

        antialias?: boolean;

        antialiasSamples?: number;

        preserveDrawingBuffer?: boolean;
    }

    interface CopyFileFailCallbackResult {

        errMsg: string;
    }

    interface CopyFileOption {

        destPath: string;

        srcPath: string;

        complete?: CopyFileCompleteCallback;

        fail?: CopyFileFailCallback;

        success?: CopyFileSuccessCallback;
    }

    interface CreateBLEConnectionOption {

        deviceId: string;

        complete?: CreateBLEConnectionCompleteCallback;

        fail?: CreateBLEConnectionFailCallback;

        success?: CreateBLEConnectionSuccessCallback;

        timeout?: number;
    }

    interface CreateBLEPeripheralServerOption {

        complete?: CreateBLEPeripheralServerCompleteCallback;

        fail?: CreateBLEPeripheralServerFailCallback;

        success?: CreateBLEPeripheralServerSuccessCallback;
    }

    interface CreateBLEPeripheralServerSuccessCallbackResult {

        server: BLEPeripheralServer;
        errMsg: string;
    }

    interface CreateBannerAdOption {

        adUnitId: string;

        style?: CreateBannerAdStyleOption;

        adIntervals?: number;
    }

    interface CreateBannerAdStyleOption {

        height: number;

        left: number;

        top: number;

        width: number;
    }

    interface CreateCameraOption {

        complete?: CreateCameraCompleteCallback;

        devicePosition?: string;

        fail?: CreateCameraFailCallback;

        flash?: string;

        height?: number;

        size?: string;

        success?: CreateCameraSuccessCallback;

        width?: number;

        x?: number;

        y?: number;
    }

    interface CreateCustomAdOption {

        adIntervals: number;

        adUnitId: string;

        style: CreateCustomAdStyleOption;
    }

    interface CreateCustomAdStyleOption {

        fixed: boolean;

        left: number;

        top: number;
    }

    interface CreateGameBannerOption {

        adUnitId: string;

        style: CreateGameBannerStyleOption;
    }

    interface CreateGameBannerStyleOption {

        left: number;

        top: number;
    }

    interface CreateGameClubButtonOption {

        icon: "green" | "white" | "dark" | "light";

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        text?: string;
    }

    interface CreateGameIconOption {

        adUnitId: string;

        count: number;

        style: any[];
    }

    interface CreateGamePortalOption {

        adUnitId: string;
    }

    interface CreateGameRecorderShareButtonOption {

        share: ShareOption;

        style: CreateGameRecorderShareButtonStyleOption;

        icon?: string;

        image?: string;

        text?: string;
    }

    interface CreateGameRecorderShareButtonStyleOption {

        color?: string;

        fontSize?: number;

        height?: number;

        iconMarginRight?: number;

        left?: number;

        paddingLeft?: number;

        paddingRight?: number;

        top?: number;
    }

    interface CreateGridAdOption {

        adTheme: string;

        adUnitId: string;

        gridCount: number;

        style: CreateGridAdStyleOption;

        adIntervals?: number;
    }

    interface CreateGridAdStyleOption {

        height: number;

        left: number;

        top: number;

        width: number;
    }

    interface CreateInterstitialAdOption {

        adUnitId: string;
    }

    interface CreateOpenSettingButtonOption {

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        text?: string;
    }

    interface CreateRewardedVideoAdOption {

        adUnitId: string;

        multiton?: boolean;
        multitonRewardMsg?: string[];
        multitonRewardTimes?: number;
        progressTip?: boolean;
    }

    interface CreateRoomOption {

        maxMemberNum: number;

        complete?: CreateRoomCompleteCallback;

        fail?: CreateRoomFailCallback;

        gameLastTime?: number;

        memberExtInfo?: string;

        needGameSeed?: boolean;

        needUserInfo?: "true" | "false";

        roomExtInfo?: string;

        startPercent?: number;

        success?: CreateRoomSuccessCallback;
    }

    interface CreateRoomSuccessCallbackDataResult {

        accessInfo: string;

        clientId: number;
    }

    interface CreateRoomSuccessCallbackResult {
        data: CreateRoomSuccessCallbackDataResult;
        errMsg: string;
    }

    interface CreateUserInfoButtonOption {

        withCredentials: boolean;

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        lang?: "en" | "zh_CN" | "zh_TW";

        text?: string;
    }

    interface CreateVideoOption {

        src: string;

        autoplay?: boolean;

        backgroundColor?: boolean;

        controls?: boolean;

        enablePlayGesture?: boolean;

        enableProgressGesture?: boolean;

        height?: number;

        initialTime?: number;

        live?: boolean;

        loop?: boolean;

        muted?: boolean;

        obeyMuteSwitch?: boolean;

        objectFit?: "fill" | "contain" | "cover";

        playbackRate?: number;

        poster?: string;

        showCenterPlayBtn?: boolean;

        showProgress?: boolean;

        showProgressInControlMode?: boolean;

        underGameView?: boolean;

        width?: number;

        x?: number;

        y?: number;
    }

    interface CreateWorkerOption {

        useExperimentalWorker?: boolean;
    }

    interface CustomAd {

        style: CustomAdStyle;
    }

    interface CustomAdOnErrorCallbackResult {

        errCode:
            | 1000
            | 1001
            | 1002
            | 1003
            | 1004
            | 1005
            | 1006
            | 1007
            | 1008
            | 2001
            | 2002
            | 2003
            | 2004
            | 2005;

        errMsg: string;
    }

    interface CustomAdStyle {

        fixed: boolean;

        left: number;

        top: number;
    }

    interface Descriptor {

        uuid: string;

        permission?: DescriptorPermission;

        value?: ArrayBuffer;
    }

    interface DescriptorPermission {

        read?: boolean;

        write?: boolean;
    }

    interface DownloadFileOption {

        url: string;

        complete?: DownloadFileCompleteCallback;

        fail?: DownloadFileFailCallback;

        filePath?: string;

        header?: IAnyObject;

        success?: DownloadFileSuccessCallback;

        timeout?: number;
    }

    interface DownloadFileSuccessCallbackResult {

        filePath: string;

        profile: DownloadProfile;

        statusCode: number;

        tempFilePath: string;
        errMsg: string;
    }

    interface DownloadProfile {

        SSLconnectionEnd: number;

        SSLconnectionStart: number;

        connectEnd: number;

        connectStart: number;

        domainLookupEnd: number;

        domainLookupStart: number;

        downstreamThroughputKbpsEstimate: number;

        estimate_nettype: string;

        fetchStart: number;

        httpRttEstimate: number;

        peerIP: string;

        port: number;

        receivedBytedCount: number;

        redirectEnd: number;

        redirectStart: number;

        requestEnd: number;

        requestStart: number;

        responseEnd: number;

        responseStart: number;

        rtt: number;

        sendBytesCount: number;

        socketReused: boolean;

        throughputKbps: number;

        transportRttEstimate: number;
    }

    interface DownloadTaskOnProgressUpdateCallbackResult {

        progress: number;

        totalBytesExpectedToWrite: number;

        totalBytesWritten: number;
    }

    interface EndGameOption {

        complete?: EndGameCompleteCallback;

        fail?: EndGameFailCallback;

        success?: EndGameSuccessCallback;
    }

    interface EndStateServiceOption {

        complete?: EndStateServiceCompleteCallback;

        fail?: EndStateServiceFailCallback;

        success?: EndStateServiceSuccessCallback;
    }

    interface EnterOptionsGame {

        query: IAnyObject;

        referrerInfo: EnterOptionsGameReferrerInfo;

        scene: number;

        shareTicket?: string;
    }

    interface EnterOptionsGameReferrerInfo {

        appId: string;

        extraData: IAnyObject;
    }

    interface ExitMiniProgramOption {

        complete?: ExitMiniProgramCompleteCallback;

        fail?: ExitMiniProgramFailCallback;

        success?: ExitMiniProgramSuccessCallback;
    }

    interface ExitVoIPChatOption {

        complete?: ExitVoIPChatCompleteCallback;

        fail?: ExitVoIPChatFailCallback;

        success?: ExitVoIPChatSuccessCallback;
    }

    interface FeedbackButton {

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        text?: string;
    }

    interface FileItem {

        createTime: number;

        filePath: string;

        size: number;
    }

    interface FileSystemManagerGetFileInfoOption {

        filePath: string;

        complete?: GetFileInfoCompleteCallback;

        fail?: FileSystemManagerGetFileInfoFailCallback;

        success?: FileSystemManagerGetFileInfoSuccessCallback;
    }

    interface FileSystemManagerGetFileInfoSuccessCallbackResult {

        size: number;
        errMsg: string;
    }

    interface FrameDataOptions {

        data: ArrayBuffer;

        height: number;

        pkDts: number;

        pkPts: number;

        width: number;
    }

    interface FriendInfo {

        avatarUrl: string;

        nickname: string;

        openid: string;
    }

    interface GameBanner {

        isDestroyed: boolean;

        style: GameBannerStyle;
    }

    interface GameBannerOnErrorCallbackResult {

        errCode: 1000 | 1001 | 1002 | 1004 | 1008;

        errMsg: string;
    }

    interface GameBannerStyle {

        left: number;

        top: number;
    }

    interface GameClubButton {

        icon: "green" | "white" | "dark" | "light";

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        text?: string;
    }

    interface GameIcon {

        iconItem: IconItem;

        icons: any[];

        isDestroyed: boolean;
    }

    interface GamePortal {

        isDestroyed: boolean;
    }

    interface GamePortalOnErrorCallbackResult {

        errCode: 1000 | 1001 | 1002 | 1004 | 1008;

        errMsg: string;
    }

    interface GameRecorderShareButton {

        share: Share;

        style: GameRecorderShareButtonStyle;

        icon?: string;

        image?: string;

        text?: string;
    }

    interface GameRecorderShareButtonStyle {

        backgroundColor?: string;

        borderRadius?: number;

        color?: string;

        fontSize?: number;

        height?: number;

        iconMarginRight?: number;

        left?: number;

        paddingLeft?: number;

        paddingRight?: number;

        top?: number;
    }

    interface GameRecorderStartOption {

        bitrate?: number;

        duration?: number;

        fps?: number;

        gop?: number;

        hookBgm?: boolean;
    }

    interface GameServerManagerOnDisconnectCallbackResult {
        res: OnDisconnectCallbackResult;
    }

    interface GameServerManagerOnMatchCallbackResult {
        res: OnMatchCallbackResult;
    }

    interface GameServerManagerOnRoomInfoChangeCallbackResult {
        res: OnRoomInfoChangeCallbackResult;
    }

    interface GameServerManagerOnStateUpdateCallbackResult {
        res: OnStateUpdateCallbackResult;
    }

    interface GetAvailableAudioSourcesOption {

        complete?: GetAvailableAudioSourcesCompleteCallback;

        fail?: GetAvailableAudioSourcesFailCallback;

        success?: GetAvailableAudioSourcesSuccessCallback;
    }

    interface GetAvailableAudioSourcesSuccessCallbackResult {

        audioSources: Array<| "auto"
            | "buildInMic"
            | "headsetMic"
            | "mic"
            | "camcorder"
            | "voice_communication"
            | "voice_recognition">;
        errMsg: string;
    }

    interface GetBLEDeviceCharacteristicsOption {

        deviceId: string;

        serviceId: string;

        complete?: GetBLEDeviceCharacteristicsCompleteCallback;

        fail?: GetBLEDeviceCharacteristicsFailCallback;

        success?: GetBLEDeviceCharacteristicsSuccessCallback;
    }

    interface GetBLEDeviceCharacteristicsSuccessCallbackResult {

        characteristics: BLECharacteristic[];
        errMsg: string;
    }

    interface GetBLEDeviceRSSIOption {

        deviceId: string;

        complete?: GetBLEDeviceRSSICompleteCallback;

        fail?: GetBLEDeviceRSSIFailCallback;

        success?: GetBLEDeviceRSSISuccessCallback;
    }

    interface GetBLEDeviceRSSISuccessCallbackResult {

        RSSI: number;
        errMsg: string;
    }

    interface GetBLEDeviceServicesOption {

        deviceId: string;

        complete?: GetBLEDeviceServicesCompleteCallback;

        fail?: GetBLEDeviceServicesFailCallback;

        success?: GetBLEDeviceServicesSuccessCallback;
    }

    interface GetBLEDeviceServicesSuccessCallbackResult {

        services: BLEService[];
        errMsg: string;
    }

    interface GetBatteryInfoOption {

        complete?: GetBatteryInfoCompleteCallback;

        fail?: GetBatteryInfoFailCallback;

        success?: GetBatteryInfoSuccessCallback;
    }

    interface GetBatteryInfoSuccessCallbackResult {

        isCharging: boolean;

        level: string;
        errMsg: string;
    }

    interface GetBatteryInfoSyncResult {

        isCharging: boolean;

        level: string;
    }

    interface GetBeaconsOption {

        complete?: GetBeaconsCompleteCallback;

        fail?: GetBeaconsFailCallback;

        success?: GetBeaconsSuccessCallback;
    }

    interface GetBeaconsSuccessCallbackResult {

        beacons: IBeaconInfo[];
        errMsg: string;
    }

    interface GetBluetoothAdapterStateOption {

        complete?: GetBluetoothAdapterStateCompleteCallback;

        fail?: GetBluetoothAdapterStateFailCallback;

        success?: GetBluetoothAdapterStateSuccessCallback;
    }

    interface GetBluetoothAdapterStateSuccessCallbackResult {

        available: boolean;

        discovering: boolean;
        errMsg: string;
    }

    interface GetBluetoothDevicesOption {

        complete?: GetBluetoothDevicesCompleteCallback;

        fail?: GetBluetoothDevicesFailCallback;

        success?: GetBluetoothDevicesSuccessCallback;
    }

    interface GetBluetoothDevicesSuccessCallbackResult {

        devices: BlueToothDevice[];
        errMsg: string;
    }

    interface GetClipboardDataOption {

        complete?: GetClipboardDataCompleteCallback;

        fail?: GetClipboardDataFailCallback;

        success?: GetClipboardDataSuccessCallback;
    }

    interface GetClipboardDataSuccessCallbackOption {

        data: string;
    }

    interface GetConnectedBluetoothDevicesOption {

        services: string[];

        complete?: GetConnectedBluetoothDevicesCompleteCallback;

        fail?: GetConnectedBluetoothDevicesFailCallback;

        success?: GetConnectedBluetoothDevicesSuccessCallback;
    }

    interface GetConnectedBluetoothDevicesSuccessCallbackResult {

        devices: BluetoothDeviceInfo[];
        errMsg: string;
    }

    interface GetExtConfigOption {

        complete?: GetExtConfigCompleteCallback;

        fail?: GetExtConfigFailCallback;

        success?: GetExtConfigSuccessCallback;
    }

    interface GetExtConfigSuccessCallbackResult {

        extConfig: IAnyObject;
        errMsg: string;
    }

    interface GetFileInfoFailCallbackResult {

        errMsg: string;
    }

    interface GetFriendCloudStorageOption {

        keyList: string[];

        complete?: GetFriendCloudStorageCompleteCallback;

        fail?: GetFriendCloudStorageFailCallback;

        success?: GetFriendCloudStorageSuccessCallback;
    }

    interface GetFriendCloudStorageSuccessCallbackResult {

        data: UserGameData[];
        errMsg: string;
    }

    interface GetFriendsStateDataOption {

        complete?: GetFriendsStateDataCompleteCallback;

        fail?: GetFriendsStateDataFailCallback;

        success?: GetFriendsStateDataSuccessCallback;
    }

    interface GetGroupCloudStorageOption {

        keyList: string[];

        shareTicket: string;

        complete?: GetGroupCloudStorageCompleteCallback;

        fail?: GetGroupCloudStorageFailCallback;

        success?: GetGroupCloudStorageSuccessCallback;
    }

    interface GetGroupCloudStorageSuccessCallbackResult {

        data: UserGameData[];
        errMsg: string;
    }

    interface GetGroupEnterInfoOption {

        complete?: GetGroupEnterInfoCompleteCallback;

        fail?: GetGroupEnterInfoFailCallback;

        success?: GetGroupEnterInfoSuccessCallback;
    }

    interface GetGroupEnterInfoSuccessCallbackResult {

        cloudID: string;

        encryptedData: string;

        errMsg: string;

        iv: string;
    }

    interface GetGroupInfoOption {

        openGId: string;

        complete?: GetGroupInfoCompleteCallback;

        fail?: GetGroupInfoFailCallback;

        success?: GetGroupInfoSuccessCallback;
    }

    interface GetGroupInfoSuccessCallbackResult {

        name: string;
        errMsg: string;
    }

    interface GetLastRoomInfoOption {

        complete?: GetLastRoomInfoCompleteCallback;

        fail?: GetLastRoomInfoFailCallback;

        success?: GetLastRoomInfoSuccessCallback;
    }

    interface GetLastRoomInfoSuccessCallbackDataResult {

        accessInfo: string;

        roomInfo: RoomInfo;
    }

    interface GetLastRoomInfoSuccessCallbackResult {
        data: GetLastRoomInfoSuccessCallbackDataResult;
        errMsg: string;
    }

    interface GetLocationOption {

        altitude?: string;

        complete?: GetLocationCompleteCallback;

        fail?: GetLocationFailCallback;

        highAccuracyExpireTime?: number;

        isHighAccuracy?: boolean;

        success?: GetLocationSuccessCallback;

        type?: string;
    }

    interface GetLocationSuccessCallbackResult {

        accuracy: number;

        altitude: number;

        horizontalAccuracy: number;

        latitude: number;

        longitude: number;

        speed: number;

        verticalAccuracy: number;
        errMsg: string;
    }

    interface GetLogManagerOption {

        level?: number;
    }

    interface GetLostFramesOption {

        beginFrameId: number;

        endFrameId: number;

        complete?: GetLostFramesCompleteCallback;

        fail?: GetLostFramesFailCallback;

        success?: GetLostFramesSuccessCallback;
    }

    interface GetLostFramesSuccessCallbackDataResult {

        frameList: any[];
    }

    interface GetLostFramesSuccessCallbackResult {
        data: GetLostFramesSuccessCallbackDataResult;
        errMsg: string;
    }

    interface GetNetworkTypeOption {

        complete?: GetNetworkTypeCompleteCallback;

        fail?: GetNetworkTypeFailCallback;

        success?: GetNetworkTypeSuccessCallback;
    }

    interface GetNetworkTypeSuccessCallbackResult {

        networkType: "wifi" | "2g" | "3g" | "4g" | "5g" | "unknown" | "none";
        errMsg: string;
    }

    interface GetPotentialFriendListOption {

        complete?: GetPotentialFriendListCompleteCallback;

        fail?: GetPotentialFriendListFailCallback;

        success?: GetPotentialFriendListSuccessCallback;
    }

    interface GetPotentialFriendListSuccessCallbackResult {

        list: FriendInfo[];
        errMsg: string;
    }

    interface GetRoomInfoOption {

        complete?: GetRoomInfoCompleteCallback;

        fail?: GetRoomInfoFailCallback;

        success?: GetRoomInfoSuccessCallback;
    }

    interface GetRoomInfoSuccessCallbackDataResult {
        roomInfo: RoomInfo;
    }

    interface GetRoomInfoSuccessCallbackResult {
        data: GetRoomInfoSuccessCallbackDataResult;
        errMsg: string;
    }

    interface GetSavedFileListOption {

        complete?: GetSavedFileListCompleteCallback;

        fail?: GetSavedFileListFailCallback;

        success?: GetSavedFileListSuccessCallback;
    }

    interface GetSavedFileListSuccessCallbackResult {

        fileList: FileItem[];
        errMsg: string;
    }

    interface GetScreenBrightnessOption {

        complete?: GetScreenBrightnessCompleteCallback;

        fail?: GetScreenBrightnessFailCallback;

        success?: GetScreenBrightnessSuccessCallback;
    }

    interface GetScreenBrightnessSuccessCallbackOption {

        value: number;
    }

    interface GetSettingOption {

        complete?: GetSettingCompleteCallback;

        fail?: GetSettingFailCallback;

        success?: GetSettingSuccessCallback;

        withSubscriptions?: boolean;
    }

    interface GetSettingSuccessCallbackResult {

        authSetting: AuthSetting;

        subscriptionsSetting: SubscriptionsSetting;

        miniprogramAuthSetting?: AuthSetting;
        errMsg: string;
    }

    interface GetShareInfoOption {

        shareTicket: string;

        complete?: GetShareInfoCompleteCallback;

        fail?: GetShareInfoFailCallback;

        success?: GetShareInfoSuccessCallback;

        timeout?: number;
    }

    interface GetStorageInfoOption {

        complete?: GetStorageInfoCompleteCallback;

        fail?: GetStorageInfoFailCallback;

        success?: GetStorageInfoSuccessCallback;
    }

    interface GetStorageInfoSuccessCallbackOption {

        currentSize: number;

        keys: string[];

        limitSize: number;
    }

    interface GetStorageInfoSyncOption {

        currentSize: number;

        keys: string[];

        limitSize: number;
    }

    interface GetStorageOption<T = any> {

        key: string;

        complete?: GetStorageCompleteCallback;

        fail?: GetStorageFailCallback;

        success?: GetStorageSuccessCallback<T>;
    }

    interface GetStorageSuccessCallbackResult<T = any> {

        data: T;
        errMsg: string;
    }

    interface GetSystemInfoAsyncOption {

        complete?: GetSystemInfoAsyncCompleteCallback;

        fail?: GetSystemInfoAsyncFailCallback;

        success?: GetSystemInfoAsyncSuccessCallback;
    }

    interface GetSystemInfoOption {

        complete?: GetSystemInfoCompleteCallback;

        fail?: GetSystemInfoFailCallback;

        success?: GetSystemInfoSuccessCallback;
    }

    interface GetTextLineHeightOption {

        fontFamily: string;

        text: string;

        complete?: GetTextLineHeightCompleteCallback;

        fail?: GetTextLineHeightFailCallback;

        fontSize?: number;

        fontStyle?: "normal" | "italic";

        fontWeight?: "normal" | "bold";

        success?: GetTextLineHeightSuccessCallback;
    }

    interface GetUserCloudStorageKeysOption {

        complete?: GetUserCloudStorageKeysCompleteCallback;

        fail?: GetUserCloudStorageKeysFailCallback;

        success?: GetUserCloudStorageKeysSuccessCallback;
    }

    interface GetUserCloudStorageKeysSuccessCallbackResult {

        keys: string[];
        errMsg: string;
    }

    interface GetUserCloudStorageOption {

        keyList: string[];

        complete?: GetUserCloudStorageCompleteCallback;

        fail?: GetUserCloudStorageFailCallback;

        success?: GetUserCloudStorageSuccessCallback;
    }

    interface GetUserCloudStorageSuccessCallbackResult {

        KVDataList: KVData[];
        errMsg: string;
    }

    interface GetUserInfoOption {

        complete?: GetUserInfoCompleteCallback;

        fail?: GetUserInfoFailCallback;

        lang?: "en" | "zh_CN" | "zh_TW";

        success?: GetUserInfoSuccessCallback;

        withCredentials?: boolean;
    }

    interface GetUserInfoSuccessCallbackResult {

        cloudID: string;

        encryptedData: string;

        iv: string;

        rawData: string;

        signature: string;

        userInfo: UserInfo;
        errMsg: string;
    }

    interface GetUserInteractiveStorageFailCallbackResult {

        errCode: -17008;

        errMsg: string;
    }

    interface GetUserInteractiveStorageOption {

        keyList: string;

        complete?: GetUserInteractiveStorageCompleteCallback;

        fail?: GetUserInteractiveStorageFailCallback;

        success?: GetUserInteractiveStorageSuccessCallback;
    }

    interface GetUserInteractiveStorageSuccessCallbackResult {

        cloudID: string;

        encryptedData: string;
        errMsg: string;
    }

    interface GetUserProfileOption {

        desc: string;

        complete?: GetUserProfileCompleteCallback;

        fail?: GetUserProfileFailCallback;

        lang?: "en" | "zh_CN" | "zh_TW";

        success?: GetUserProfileSuccessCallback;
    }

    interface GetUserProfileSuccessCallbackResult {

        userInfo: UserInfo;
        errMsg: string;
    }

    interface GetWeRunDataOption {

        complete?: GetWeRunDataCompleteCallback;

        fail?: GetWeRunDataFailCallback;

        success?: GetWeRunDataSuccessCallback;
    }

    interface GetWeRunDataSuccessCallbackResult {

        cloudID: string;

        encryptedData: string;

        iv: string;
        errMsg: string;
    }

    interface GridAd {

        adTheme: string;

        gridCount: number;

        style: GridAdStyle;
    }

    interface GridAdStyle {

        height: number;

        left: number;

        realHeight: number;

        realWidth: number;

        top: number;

        width: number;
    }

    interface HideKeyboardOption {

        complete?: HideKeyboardCompleteCallback;

        fail?: HideKeyboardFailCallback;

        success?: HideKeyboardSuccessCallback;
    }

    interface HideLoadingOption {

        complete?: HideLoadingCompleteCallback;

        fail?: HideLoadingFailCallback;

        success?: HideLoadingSuccessCallback;
    }

    interface HideShareMenuOption {

        complete?: HideShareMenuCompleteCallback;

        fail?: HideShareMenuFailCallback;

        menus?: string[];

        success?: HideShareMenuSuccessCallback;
    }

    interface HideToastOption {

        complete?: HideToastCompleteCallback;

        fail?: HideToastFailCallback;

        success?: HideToastSuccessCallback;
    }

    interface IBeaconInfo {

        accuracy: number;

        major: string;

        minor: string;

        proximity: number;

        rssi: number;

        uuid: string;
    }

    interface IconItem {

        appNameHidden: boolean;

        borderColor: string;

        borderWidth: number;

        color: string;

        left: number;

        size: number;

        top: number;
    }

    interface Image {

        height: number;

        onerror: (...args: any[]) => any;

        onload: (...args: any[]) => any;

        src: string;

        width: number;
    }

    interface ImageFile {

        path: string;

        size: number;
    }

    interface InnerAudioContext {

        autoplay: boolean;

        buffered: number;

        currentTime: number;

        duration: number;

        loop: boolean;

        obeyMuteSwitch: boolean;

        paused: boolean;

        playbackRate: number;

        src: string;

        startTime: number;

        volume: number;
    }

    interface InnerAudioContextOnErrorCallbackResult {

        errCode: 10001 | 10002 | 10003 | 10004 | -1;
        errMsg: string;
    }

    interface InterstitialAdOnErrorCallbackResult {

        errCode: 1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008;

        errMsg: string;
    }

    interface InviteFriendOption {

        openId: string;

        complete?: InviteFriendCompleteCallback;

        fail?: InviteFriendFailCallback;

        success?: InviteFriendSuccessCallback;
    }

    interface JoinRoomOption {

        accessInfo: string;

        complete?: JoinRoomCompleteCallback;

        fail?: JoinRoomFailCallback;

        memberExtInfo?: string;

        success?: JoinRoomSuccessCallback;
    }

    interface JoinRoomSuccessCallbackDataResult {

        clientId: number;

        myPos: number;
    }

    interface JoinRoomSuccessCallbackResult {
        data: JoinRoomSuccessCallbackDataResult;
        errMsg: string;
    }

    interface JoinVoIPChatOption {

        groupId: string;

        nonceStr: string;

        signature: string;

        timeStamp: number;

        complete?: JoinVoIPChatCompleteCallback;

        fail?: JoinVoIPChatFailCallback;

        muteConfig?: MuteConfig;

        roomType?: "voice" | "video";

        success?: JoinVoIPChatSuccessCallback;
    }

    interface JoinVoIPChatSuccessCallbackResult {

        errCode: number;

        errMsg: string;

        openIdList: string[];
    }

    interface KVData {

        key: string;

        value: string;
    }

    interface KickoutMemberOption {

        kickoutPos: number;

        complete?: KickoutMemberCompleteCallback;

        fail?: KickoutMemberFailCallback;

        success?: KickoutMemberSuccessCallback;
    }

    interface LaunchOptionsGame {

        query: IAnyObject;

        referrerInfo: EnterOptionsGameReferrerInfo;

        scene: string;

        shareTicket?: string;
        extra?:any
    }

    interface LoadSubpackageOption {

        complete: (...args: any[]) => any;

        fail: (...args: any[]) => any;

        name: string;

        success: (...args: any[]) => any;
    }

    interface LoadSubpackageTaskOnProgressUpdateCallbackResult {

        progress: number;

        totalBytesExpectedToWrite: number;

        totalBytesWritten: number;
    }

    interface LoginOption {

        complete?: LoginCompleteCallback;

        fail?: LoginFailCallback;

        success?: LoginSuccessCallback;

        timeout?: number;
    }

    interface LoginSuccessCallbackResult {

        code: string;
        errMsg: string;
    }

    interface MakeBluetoothPairOption {

        deviceId: string;

        pin: string;

        complete?: MakeBluetoothPairCompleteCallback;

        fail?: MakeBluetoothPairFailCallback;

        success?: MakeBluetoothPairSuccessCallback;

        timeout?: number;
    }

    interface ManufacturerData {

        manufacturerId: string;

        manufacturerSpecificData?: ArrayBuffer;
    }

    interface MatchGroupInfo {

        groupIndex: number;

        memberInfoList: MatchMemberInfo[];
    }

    interface MatchMemberInfo {

        avatarUrl: string;

        memberIndex: number;

        nickName: string;

        openId: string;
    }

    interface MediaAudioPlayer {

        volume: number;
    }

    interface MediaSource {

        url: string;

        poster?: string;

        type?: "image" | "video";
    }

    interface MemberLeaveRoomOption {

        accessInfo: string;

        complete?: MemberLeaveRoomCompleteCallback;

        fail?: MemberLeaveRoomFailCallback;

        success?: MemberLeaveRoomSuccessCallback;
    }

    interface MiniProgram {

        appId: string;

        envVersion: "develop" | "trial" | "release";

        version: string;
    }

    interface MkdirFailCallbackResult {

        errMsg: string;
    }

    interface MkdirOption {

        dirPath: string;

        complete?: MkdirCompleteCallback;

        fail?: MkdirFailCallback;

        recursive?: boolean;

        success?: MkdirSuccessCallback;
    }

    interface ModifyFriendInteractiveStorageFailCallbackResult {

        errCode: -17006 | -17007 | -17008 | -17009 | -17010 | -17011;

        errMsg: string;
    }

    interface ModifyFriendInteractiveStorageOption {

        key: string;

        opNum: number;

        operation: "add";

        complete?: ModifyFriendInteractiveStorageCompleteCallback;

        fail?: ModifyFriendInteractiveStorageFailCallback;

        imageUrl?: string;

        imageUrlId?: string;

        quiet?: boolean;

        success?: ModifyFriendInteractiveStorageSuccessCallback;

        title?: string;

        toUser?: string;
    }

    interface MuteConfig {

        muteEarphone?: boolean;

        muteMicrophone?: boolean;
    }

    interface NavigateToMiniProgramOption {

        appId: string;

        complete?: NavigateToMiniProgramCompleteCallback;

        envVersion?: "develop" | "trial" | "release";

        extraData?: IAnyObject;

        fail?: NavigateToMiniProgramFailCallback;

        path?: string;

        success?: NavigateToMiniProgramSuccessCallback;
    }

    interface NotifyBLECharacteristicValueChangeOption {

        characteristicId: string;

        deviceId: string;

        serviceId: string;

        state: boolean;

        complete?: NotifyBLECharacteristicValueChangeCompleteCallback;

        fail?: NotifyBLECharacteristicValueChangeFailCallback;

        success?: NotifyBLECharacteristicValueChangeSuccessCallback;
    }

    interface OnAccelerometerChangeCallbackResult {

        x: number;

        y: number;

        z: number;
    }

    interface OnAddToFavoritesCallbackResult {

        disableForward: boolean;

        imageUrl: string;

        query: string;

        title: string;
    }

    interface OnBLECharacteristicValueChangeCallbackResult {

        characteristicId: string;

        deviceId: string;

        serviceId: string;

        value: ArrayBuffer;
    }

    interface OnBLEConnectionStateChangeCallbackResult {

        connected: boolean;

        deviceId: string;
    }

    interface OnBLEPeripheralConnectionStateChangedCallbackResult {

        connected: boolean;

        deviceId: string;

        serverId: string;
    }

    interface OnBeKickedOutCallbackResult {
        res: IAnyObject;
    }

    interface OnBeaconServiceChangeCallbackResult {

        available: boolean;

        discovering: boolean;
    }

    interface OnBeaconUpdateCallbackResult {

        beacons: IBeaconInfo[];
    }

    interface OnBluetoothAdapterStateChangeCallbackResult {

        available: boolean;

        discovering: boolean;
    }

    interface OnBluetoothDeviceFoundCallbackResult {

        devices: BlueToothDevice[];
    }

    interface OnBroadcastCallbackResult {

        msg: string;
    }

    interface OnCameraFrameCallbackResult {

        data: ArrayBuffer;

        height: number;

        width: number;
    }

    interface OnCharacteristicReadRequestCallbackResult {

        callbackId: number;

        characteristicId: string;

        serviceId: string;
    }

    interface OnCharacteristicSubscribedCallbackResult {

        characteristicId: string;

        serviceId: string;
    }

    interface OnCharacteristicWriteRequestCallbackResult {

        callbackId: number;

        characteristicId: string;

        serviceId: string;

        value: ArrayBuffer;
    }

    interface OnCheckForUpdateCallbackResult {

        hasUpdate: boolean;
    }

    interface OnCompassChangeCallbackResult {

        accuracy: number | string;

        direction: number;
    }

    interface OnCopyUrlCallbackResult {

        query: string;
    }

    interface OnDeviceMotionChangeCallbackResult {

        alpha: number;

        beta: number;

        gamma: number;
    }

    interface OnDeviceOrientationChangeCallbackResult {

        value: "portrait" | "landscape" | "landscapeReverse";
    }

    interface OnDisconnectCallbackResult {

        type: "room" | "game";
    }

    interface OnFrameRecordedCallbackResult {

        frameBuffer: ArrayBuffer;

        isLastFrame: boolean;
    }

    interface OnGameEndCallbackResult {

        gameAccessInfo: string;
    }

    interface OnGyroscopeChangeCallbackResult {

        x: number;

        y: number;

        z: number;
    }

    interface OnHandoffCallbackResult {

        query: string;
    }

    interface OnHeadersReceivedCallbackResult {

        header: IAnyObject;
    }

    interface OnInviteCallbackResult {

        data: string;

        openId: string;
        res: IAnyObject;
    }

    interface OnKeyDownCallbackResult {

        code: string;

        key: string;

        timeStamp: number;
    }

    interface OnKeyboardConfirmCallbackResult {

        value: string;
    }

    interface OnKeyboardInputCallbackResult {

        value: IAnyObject;
    }

    interface OnLockStepErrorCallbackResult {

        errCode: number;

        errMsg: string;
    }

    interface OnMatchCallbackResult {

        groupInfoList: MatchGroupInfo[];

        matchId: string;

        openId: string;

        raceId: string;

        roomServiceAccessInfo: string;
    }

    interface OnMemoryWarningCallbackResult {

        level: 5 | 10 | 15;
    }

    interface OnMouseDownCallbackResult {

        button: number;

        timeStamp: number;

        x: number;

        y: number;
    }

    interface OnMouseMoveCallbackResult {

        timeStamp: number;

        x: number;

        y: number;
    }

    interface OnNetworkStatusChangeCallbackResult {

        isConnected: boolean;

        networkType: "wifi" | "2g" | "3g" | "4g" | "unknown" | "none";
    }

    interface OnOpenCallbackResult {

        header: IAnyObject;

        profile: SocketProfile;
    }

    interface OnProgressCallbackResult {

        buffered: number;

        duration: number;
    }

    interface OnResizeCallbackResult {

        height: number;

        width: number;
    }

    interface OnRoomInfoChangeCallbackResult {

        appId: string;

        createTimestamp: number;

        gameLastTime: number;

        gameTick: number;

        maxMemberNum: number;

        memberList: RoomMemberInfo[];

        roomExtInfo: string;

        roomIdStr: number;

        roomState: 1 | 2 | 3 | 4 | 5;

        seed: string;

        startPercent: number;

        udpReliabilityStrategy: number;

        updateTimestamp: number;
    }

    interface OnShareAppMessageCallbackResult {

        imageUrl: string;

        query: string;

        title: string;

        imageUrlId?: string;

        path?: string;

        promise?: Promise<any>;

        toCurrentGroup?: boolean;
    }

    interface OnShareMessageToFriendCallbackResult {

        errMsg: string;

        success: boolean;
    }

    interface OnShareTimelineCallbackResult {

        imageUrl: string;

        imagePreviewUrl?: string;

        imagePreviewUrlId?: string;

        imageUrlId?: string;

        path?: string;

        query?: string;

        title?: string;
    }

    interface OnShowCallbackResult {

        query: IAnyObject;

        referrerInfo: ResultReferrerInfo;

        scene: string;

        shareTicket?: string;

        launch_from: string;

        location: string;
    }

    interface OnSocketOpenCallbackResult {

        header: IAnyObject;
    }

    interface OnStateUpdateCallbackResult {

        openId: string;

        sysState: number;

        userState: string;
    }

    interface OnStopCallbackResult {

        duration: number;

        fileSize: number;

        tempFilePath: string;
    }

    interface OnSyncFrameCallbackResult {

        actionList: string[] | ArrayBuffer[];

        frameId: number;
    }

    interface OnTapCallbackResult {

        encryptedData: string;

        iv: string;

        rawData: string;

        signature: string;

        userInfo: UserInfo;
    }

    interface OnTimeUpdateCallbackResult {

        duration: number;

        position: number;
    }

    interface OnTouchStartCallbackResult {

        changedTouches: Touch[];

        timeStamp: number;

        touches: Touch[];
    }

    interface OnUnhandledRejectionCallbackResult {

        promise: string;

        reason: string;
    }

    interface OnVoIPChatInterruptedCallbackResult {

        errCode: number;

        errMsg: string;
    }

    interface OnVoIPChatMembersChangedCallbackResult {

        errCode: number;

        errMsg: string;

        openIdList: string[];
    }

    interface OnVoIPChatSpeakersChangedCallbackResult {

        errCode: number;

        errMsg: string;

        openIdList: string[];
    }

    interface OnWheelCallbackResult {

        deltaX: number;

        deltaY: number;

        deltaZ: number;

        timeStamp: number;

        x: number;

        y: number;
    }

    interface OnWindowResizeCallbackResult {

        windowHeight: number;

        windowWidth: number;
    }

    interface OpenBluetoothAdapterOption {

        complete?: OpenBluetoothAdapterCompleteCallback;

        fail?: OpenBluetoothAdapterFailCallback;

        mode?: "central" | "peripheral";

        success?: OpenBluetoothAdapterSuccessCallback;
    }

    interface OpenCardOption {

        cardList: OpenCardRequestInfo[];

        complete?: OpenCardCompleteCallback;

        fail?: OpenCardFailCallback;

        success?: OpenCardSuccessCallback;
    }

    interface OpenCardRequestInfo {

        cardId: string;

        code: string;
    }

    interface OpenCustomerServiceConversationOption {

        complete?: OpenCustomerServiceConversationCompleteCallback;

        fail?: OpenCustomerServiceConversationFailCallback;

        sendMessageImg?: string;

        sendMessagePath?: string;

        sendMessageTitle?: string;

        sessionFrom?: string;

        showMessageCard?: boolean;

        success?: OpenCustomerServiceConversationSuccessCallback;
    }

    interface OpenDataContext {

        canvas: Canvas;
    }

    interface OpenSettingButton {

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        text?: string;
    }

    interface OpenSettingOption {

        complete?: OpenSettingCompleteCallback;

        fail?: OpenSettingFailCallback;

        success?: OpenSettingSuccessCallback;

        withSubscriptions?: boolean;
    }

    interface OpenSettingSuccessCallbackResult {

        authSetting: AuthSetting;

        subscriptionsSetting: SubscriptionsSetting;
        errMsg: string;
    }

    interface OptionStyle {

        backgroundColor: string;

        borderColor: string;

        borderRadius: number;

        borderWidth: number;

        color: string;

        fontSize: number;

        height: number;

        left: number;

        lineHeight: number;

        textAlign: "left" | "center" | "right";

        top: number;

        width: number;
    }

    interface OwnerLeaveRoomOption {

        accessInfo: string;

        assignOwnerToPosNum?: boolean;

        assignToMinPosNum?: boolean;

        complete?: OwnerLeaveRoomCompleteCallback;

        fail?: OwnerLeaveRoomFailCallback;

        success?: OwnerLeaveRoomSuccessCallback;
    }

    interface Plugin {

        appId: string;

        version: string;
    }

    interface PreviewImageOption {

        urls: string[];

        complete?: PreviewImageCompleteCallback;

        current?: string;

        fail?: PreviewImageFailCallback;

        showmenu?: boolean;

        success?: PreviewImageSuccessCallback;
    }

    interface PreviewMediaOption {

        sources: MediaSource[];

        complete?: PreviewMediaCompleteCallback;

        current?: number;

        fail?: PreviewMediaFailCallback;

        showmenu?: boolean;

        success?: PreviewMediaSuccessCallback;
    }

    interface ReadBLECharacteristicValueOption {

        characteristicId: string;

        deviceId: string;

        serviceId: string;

        complete?: ReadBLECharacteristicValueCompleteCallback;

        fail?: ReadBLECharacteristicValueFailCallback;

        success?: ReadBLECharacteristicValueSuccessCallback;
    }

    interface ReadFileFailCallbackResult {

        errMsg: string;
    }

    interface ReadFileOption {

        filePath: string;

        complete?: ReadFileCompleteCallback;

        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";

        fail?: ReadFileFailCallback;

        length?: number;

        position?: number;

        success?: ReadFileSuccessCallback;
    }

    interface ReadFileSuccessCallbackResult {

        data: string | ArrayBuffer;
        errMsg: string;
    }

    interface ReaddirFailCallbackResult {

        errMsg: string;
    }

    interface ReaddirOption {

        dirPath: string;

        complete?: ReaddirCompleteCallback;

        fail?: ReaddirFailCallback;

        success?: ReaddirSuccessCallback;
    }

    interface ReaddirSuccessCallbackResult {

        files: string[];
        errMsg: string;
    }

    interface ReconnectOption {

        accessInfo: number;

        complete?: ReconnectCompleteCallback;

        fail?: ReconnectFailCallback;

        success?: ReconnectSuccessCallback;
    }

    interface ReconnectSuccessCallbackDataResult {

        maxFrameId: any[];
    }

    interface ReconnectSuccessCallbackResult {
        data: ReconnectSuccessCallbackDataResult;
        errMsg: string;
    }

    interface RecorderManagerStartOption {

        audioSource?:
            | "auto"
            | "buildInMic"
            | "headsetMic"
            | "mic"
            | "camcorder"
            | "voice_communication"
            | "voice_recognition";

        duration?: number;

        encodeBitRate?: number;

        format?: "mp3" | "aac" | "wav" | "PCM";

        frameSize?: number;

        numberOfChannels?: 1 | 2;

        sampleRate?:
            | 8000
            | 11025
            | 12000
            | 16000
            | 22050
            | 24000
            | 32000
            | 44100
            | 48000;
    }

    interface Rect {

        bottom: number;

        height: number;

        left: number;

        right: number;

        top: number;

        width: number;
    }

    interface RemoteInfo {

        address: string;

        family: string;

        port: number;

        size: number;
    }

    interface RemoveSavedFileFailCallbackResult {

        errMsg: string;
    }

    interface RemoveSavedFileOption {

        filePath: string;

        complete?: RemoveSavedFileCompleteCallback;

        fail?: RemoveSavedFileFailCallback;

        success?: RemoveSavedFileSuccessCallback;
    }

    interface RemoveServiceOption {

        serviceId: string;

        complete?: RemoveServiceCompleteCallback;

        fail?: RemoveServiceFailCallback;

        success?: RemoveServiceSuccessCallback;
    }

    interface RemoveStorageOption {

        key: string;

        complete?: RemoveStorageCompleteCallback;

        fail?: RemoveStorageFailCallback;

        success?: RemoveStorageSuccessCallback;
    }

    interface RemoveUserCloudStorageOption {

        keyList: string[];

        complete?: RemoveUserCloudStorageCompleteCallback;

        fail?: RemoveUserCloudStorageFailCallback;

        success?: RemoveUserCloudStorageSuccessCallback;
    }

    interface RenameFailCallbackResult {

        errMsg: string;
    }

    interface RenameOption {

        newPath: string;

        oldPath: string;

        complete?: RenameCompleteCallback;

        fail?: RenameFailCallback;

        success?: RenameSuccessCallback;
    }

    interface RenderingContext {
    }

    interface ReportUserBehaviorBranchAnalyticsOption {

        branchId: string;

        eventType: number;

        branchDim?: string;
    }

    interface RequestMidasFriendPaymentOption {

        buyQuantity: number;

        currencyType: "CNY";

        env: 0 | 1;

        mode: "game";

        nonceStr: string;

        offerId: string;

        outTradeNo: string;

        platform: "android";

        signature: string;

        timeStamp: number;

        zoneId: string;

        complete?: RequestMidasFriendPaymentCompleteCallback;

        fail?: RequestMidasFriendPaymentFailCallback;

        success?: RequestMidasFriendPaymentSuccessCallback;
    }

    interface RequestMidasPaymentOption {

        currencyType: "CNY";

        mode: "game";

        offerId: string;

        buyQuantity?: number;

        complete?: RequestMidasPaymentCompleteCallback;

        env?: 0 | 1;

        fail?: RequestMidasPaymentFailCallback;

        platform?: "android";

        success?: RequestMidasPaymentSuccessCallback;

        zoneId?: string;
    }

    interface RequestOption<T extends string | IAnyObject | ArrayBuffer =
            | string
        | IAnyObject
        | ArrayBuffer> {

        url: string;

        complete?: RequestCompleteCallback;

        data?: string | IAnyObject | ArrayBuffer;

        dataType?: "json" | "其他";

        enableCache?: boolean;

        enableHttp2?: boolean;

        enableQuic?: boolean;

        fail?: RequestFailCallback;

        header?: IAnyObject;

        method?:
            | "OPTIONS"
            | "GET"
            | "HEAD"
            | "POST"
            | "PUT"
            | "DELETE"
            | "TRACE"
            | "CONNECT";

        responseType?: "text" | "arraybuffer";

        success?: RequestSuccessCallback<T>;

        timeout?: number;
    }

    interface RequestProfile {

        SSLconnectionEnd: number;

        SSLconnectionStart: number;

        connectEnd: number;

        connectStart: number;

        domainLookupEnd: number;

        domainLookupStart: number;

        downstreamThroughputKbpsEstimate: number;

        estimate_nettype: string;

        fetchStart: number;

        httpRttEstimate: number;

        peerIP: string;

        port: number;

        receivedBytedCount: number;

        redirectEnd: number;

        redirectStart: number;

        requestEnd: number;

        requestStart: number;

        responseEnd: number;

        responseStart: number;

        rtt: number;

        sendBytesCount: number;

        socketReused: boolean;

        throughputKbps: number;

        transportRttEstimate: number;
    }

    interface RequestSubscribeMessageFailCallbackResult {

        errCode: number;

        errMsg: string;
    }

    interface RequestSubscribeMessageOption {

        tmplIds: any[];

        complete?: RequestSubscribeMessageCompleteCallback;

        fail?: RequestSubscribeMessageFailCallback;

        success?: RequestSubscribeMessageSuccessCallback;
    }

    interface RequestSubscribeMessageSuccessCallbackResult {

        errMsg: string;

        [TEMPLATE_ID: string]: string;
    }

    interface RequestSubscribeSystemMessageOption {

        msgTypeList: string[];

        complete?: RequestSubscribeSystemMessageCompleteCallback;

        fail?: RequestSubscribeSystemMessageFailCallback;

        success?: RequestSubscribeSystemMessageSuccessCallback;
    }

    interface RequestSubscribeSystemMessageSuccessCallbackResult {

        MSG_TYPE: string;

        errMsg: string;
    }

    interface RequestSuccessCallbackResult<T extends string | IAnyObject | ArrayBuffer =
            | string
        | IAnyObject
        | ArrayBuffer> {

        cookies: string[];

        data: T;

        header: IAnyObject;

        profile: RequestProfile;

        statusCode: number;
        errMsg: string;
    }

    interface Res {

        list: StateData[];
    }

    interface RestartOption {

        complete?: RestartCompleteCallback;

        fail?: RestartFailCallback;

        success?: RestartSuccessCallback;
    }

    interface ResultReferrerInfo {

        appId: string;

        extraData: IAnyObject;
    }

    interface RewardedVideoAdOnCloseCallbackResult {

        isEnded: boolean;
        count: number;
    }

    interface RmdirFailCallbackResult {

        errMsg: string;
    }

    interface RmdirOption {

        dirPath: string;

        complete?: RmdirCompleteCallback;

        fail?: RmdirFailCallback;

        recursive?: boolean;

        success?: RmdirSuccessCallback;
    }

    interface RoomInfo {

        appId: string;

        createTimestamp: number;

        gameLastTime: number;

        gameTick: number;

        maxMemberNum: number;

        memberList: RoomMemberInfo[];

        roomExtInfo: string;

        roomIdStr: number;

        roomState: 1 | 2 | 3 | 4 | 5;

        seed: string;

        startPercent: number;

        udpReliabilityStrategy: number;

        updateTimestamp: number;
    }

    interface RoomMemberInfo {

        clientId: number;

        enableToStart: boolean;

        headimg: string;

        isReady: boolean;

        memberExtInfo: string;

        nickname: string;

        posNum: number;

        role: 0 | 1;
    }

    interface SafeArea {

        bottom: number;

        height: number;

        left: number;

        right: number;

        top: number;

        width: number;
    }

    interface SaveFileFailCallbackResult {

        errMsg: string;
    }

    interface SaveFileOption {

        tempFilePath: string;

        complete?: SaveFileCompleteCallback;

        fail?: SaveFileFailCallback;

        filePath?: string;

        success?: SaveFileSuccessCallback;
    }

    interface SaveFileSuccessCallbackResult {

        savedFilePath: string;
        errMsg: string;
    }

    interface SaveFileToDiskOption {

        filePath: string;

        complete?: SaveFileToDiskCompleteCallback;

        fail?: SaveFileToDiskFailCallback;

        success?: SaveFileToDiskSuccessCallback;
    }

    interface SaveImageToPhotosAlbumOption {

        filePath: string;

        complete?: SaveImageToPhotosAlbumCompleteCallback;

        fail?: SaveImageToPhotosAlbumFailCallback;

        success?: SaveImageToPhotosAlbumSuccessCallback;
    }

    interface SendSocketMessageOption {

        data: string | ArrayBuffer;

        complete?: SendSocketMessageCompleteCallback;

        fail?: SendSocketMessageFailCallback;

        success?: SendSocketMessageSuccessCallback;
    }

    interface SetBLEMTUOption {

        deviceId: string;

        mtu: number;

        complete?: SetBLEMTUCompleteCallback;

        fail?: SetBLEMTUFailCallback;

        success?: SetBLEMTUSuccessCallback;
    }

    interface SetClipboardDataOption {

        data: string;

        complete?: SetClipboardDataCompleteCallback;

        fail?: SetClipboardDataFailCallback;

        success?: SetClipboardDataSuccessCallback;
    }

    interface SetEnableDebugOption {

        enableDebug: boolean;

        complete?: SetEnableDebugCompleteCallback;

        fail?: SetEnableDebugFailCallback;

        success?: SetEnableDebugSuccessCallback;
    }

    interface SetInnerAudioOption {

        complete?: SetInnerAudioOptionCompleteCallback;

        fail?: SetInnerAudioOptionFailCallback;

        mixWithOther?: boolean;

        obeyMuteSwitch?: boolean;

        speakerOn?: boolean;

        success?: SetInnerAudioOptionSuccessCallback;
    }

    interface SetKeepScreenOnOption {

        keepScreenOn: boolean;

        complete?: SetKeepScreenOnCompleteCallback;

        fail?: SetKeepScreenOnFailCallback;

        success?: SetKeepScreenOnSuccessCallback;
    }

    interface SetMenuStyleOption {

        style: "light" | "dark";

        complete?: SetMenuStyleCompleteCallback;

        fail?: SetMenuStyleFailCallback;

        success?: SetMenuStyleSuccessCallback;
    }

    interface SetMessageToFriendQueryOption {

        shareMessageToFriendScene: number;
    }

    interface SetScreenBrightnessOption {

        value: number;

        complete?: SetScreenBrightnessCompleteCallback;

        fail?: SetScreenBrightnessFailCallback;

        success?: SetScreenBrightnessSuccessCallback;
    }

    interface SetStateOption {

        userState: string;

        complete?: SetStateCompleteCallback;

        fail?: SetStateFailCallback;

        success?: SetStateSuccessCallback;
    }

    interface SetStatusBarStyleOption {

        style: "white" | "black";

        complete?: SetStatusBarStyleCompleteCallback;

        fail?: SetStatusBarStyleFailCallback;

        success?: SetStatusBarStyleSuccessCallback;
    }

    interface SetStorageOption<T = any> {

        data: T;

        key: string;

        complete?: SetStorageCompleteCallback;

        fail?: SetStorageFailCallback;

        success?: SetStorageSuccessCallback;
    }

    interface SetUserCloudStorageOption {

        KVDataList: KVData[];

        complete?: SetUserCloudStorageCompleteCallback;

        fail?: SetUserCloudStorageFailCallback;

        success?: SetUserCloudStorageSuccessCallback;
    }

    interface SetWindowSizeOption {

        height: number;

        width: number;

        complete?: SetWindowSizeCompleteCallback;

        fail?: SetWindowSizeFailCallback;

        success?: SetWindowSizeSuccessCallback;
    }

    interface Share {

        timeRange: number[];

        atempo?: number;

        audioMix?: boolean;

        bgm?: string;

        button?: ButtonShare;

        path?: string;

        query?: string;

        title?: TitleShare;

        volume?: number;
    }

    interface ShareAppMessageOption {

        channel?: "invite" | "video" | "token" | "article";

        templateId?: string;

        desc?: string;

        title?: string;

        imageUrl?: string;

        path?: string;

        query?: string;

        extra?: any;

        complete?: ShareMessageToFriendCompleteCallback;

        fail?: ShareMessageToFriendFailCallback;

        imageUrlId?: string;

        success?: ShareMessageToFriendSuccessCallback;
    }

    interface ShareMessageToFriendOption {

        openId: string;

        complete?: ShareMessageToFriendCompleteCallback;

        fail?: ShareMessageToFriendFailCallback;

        imageUrl?: string;

        imageUrlId?: string;

        success?: ShareMessageToFriendSuccessCallback;

        title?: string;
    }

    interface ShareOption {

        bgm: string;

        timeRange: number[];

        atempo?: number;

        audioMix?: boolean;

        button?: ButtonShareOption;

        path?: string;

        query?: string;

        title?: TitleShareOption;

        volume?: number;
    }

    interface ShowActionSheetOption {

        itemList: string[];

        alertText?: string;

        complete?: ShowActionSheetCompleteCallback;

        fail?: ShowActionSheetFailCallback;

        itemColor?: string;

        success?: ShowActionSheetSuccessCallback;
    }

    interface ShowActionSheetSuccessCallbackResult {

        tapIndex: number;
        errMsg: string;
    }

    interface ShowKeyboardOption {

        confirmHold: boolean;

        confirmType: "done" | "next" | "search" | "go" | "send";

        defaultValue: string;

        maxLength: number;

        multiple: boolean;

        complete?: ShowKeyboardCompleteCallback;

        fail?: ShowKeyboardFailCallback;

        success?: ShowKeyboardSuccessCallback;
    }

    interface ShowLoadingOption {

        title: string;

        complete?: ShowLoadingCompleteCallback;

        fail?: ShowLoadingFailCallback;

        mask?: boolean;

        success?: ShowLoadingSuccessCallback;
    }

    interface ShowModalOption {

        cancelColor?: string;

        cancelText?: string;

        complete?: ShowModalCompleteCallback;

        confirmColor?: string;

        confirmText?: string;

        content?: string;

        editable?: boolean;

        fail?: ShowModalFailCallback;

        placeholderText?: string;

        showCancel?: boolean;

        success?: ShowModalSuccessCallback;

        title?: string;
    }

    interface ShowModalSuccessCallbackResult {

        cancel: boolean;

        confirm: boolean;

        content: string;
        errMsg: string;
    }

    interface ShowShareImageMenuOption {

        path: string;

        complete?: ShowShareImageMenuCompleteCallback;

        fail?: ShowShareImageMenuFailCallback;

        success?: ShowShareImageMenuSuccessCallback;
    }

    interface ShowShareMenuOption {

        complete?: ShowShareMenuCompleteCallback;

        fail?: ShowShareMenuFailCallback;

        menus?: string[];

        success?: ShowShareMenuSuccessCallback;

        withShareTicket?: boolean;
    }

    interface ShowToastOption {

        title: string;

        complete?: ShowToastCompleteCallback;

        duration?: number;

        fail?: ShowToastFailCallback;

        icon?: "success" | "error" | "loading" | "none";

        image?: string;

        mask?: boolean;

        success?: ShowToastSuccessCallback;
    }

    interface SocketProfile {

        connectEnd: number;

        connectStart: number;

        cost: number;

        domainLookupEnd: number;

        domainLookupStart: number;

        fetchStart: number;

        handshakeCost: number;

        rtt: number;
    }

    interface SocketTaskOnCloseCallbackResult {

        code: number;

        reason: string;
    }

    interface SocketTaskOnMessageCallbackResult {

        data: string | ArrayBuffer;
    }

    interface SocketTaskSendOption {

        data: string | ArrayBuffer;

        complete?: SendCompleteCallback;

        fail?: SendFailCallback;

        success?: SendSuccessCallback;
    }

    interface StartAccelerometerOption {

        complete?: StartAccelerometerCompleteCallback;

        fail?: StartAccelerometerFailCallback;

        interval?: "game" | "ui" | "normal";

        success?: StartAccelerometerSuccessCallback;
    }

    interface StartAdvertisingObject {

        advertiseRequest: AdvertiseReqObj;

        complete?: StartAdvertisingCompleteCallback;

        fail?: StartAdvertisingFailCallback;

        powerLevel?: "low" | "medium" | "high";

        success?: StartAdvertisingSuccessCallback;
    }

    interface StartBeaconDiscoveryOption {

        uuids: string[];

        complete?: StartBeaconDiscoveryCompleteCallback;

        fail?: StartBeaconDiscoveryFailCallback;

        ignoreBluetoothAvailable?: boolean;

        success?: StartBeaconDiscoverySuccessCallback;
    }

    interface StartBluetoothDevicesDiscoveryOption {

        allowDuplicatesKey?: boolean;

        complete?: StartBluetoothDevicesDiscoveryCompleteCallback;

        fail?: StartBluetoothDevicesDiscoveryFailCallback;

        interval?: number;

        powerLevel?: "low" | "medium" | "high";

        services?: string[];

        success?: StartBluetoothDevicesDiscoverySuccessCallback;
    }

    interface StartCompassOption {

        complete?: StartCompassCompleteCallback;

        fail?: StartCompassFailCallback;

        success?: StartCompassSuccessCallback;
    }

    interface StartDeviceMotionListeningOption {

        complete?: StartDeviceMotionListeningCompleteCallback;

        fail?: StartDeviceMotionListeningFailCallback;

        interval?: "game" | "ui" | "normal";

        success?: StartDeviceMotionListeningSuccessCallback;
    }

    interface StartGameOption {

        complete?: StartGameCompleteCallback;

        fail?: StartGameFailCallback;

        success?: StartGameSuccessCallback;
    }

    interface StartGyroscopeOption {

        complete?: StartGyroscopeCompleteCallback;

        fail?: StartGyroscopeFailCallback;

        interval?: "game" | "ui" | "normal";

        success?: StartGyroscopeSuccessCallback;
    }

    interface StartHandoffOption {

        complete?: StartHandoffCompleteCallback;

        fail?: StartHandoffFailCallback;

        success?: StartHandoffSuccessCallback;
    }

    interface StartMatchOption {

        matchId: string;

        complete?: StartMatchCompleteCallback;

        fail?: StartMatchFailCallback;

        fillType?: number;

        success?: StartMatchSuccessCallback;
    }

    interface StartStateServiceOption {

        userState: string;

        complete?: StartStateServiceCompleteCallback;

        fail?: StartStateServiceFailCallback;

        success?: StartStateServiceSuccessCallback;
    }

    interface StatFailCallbackResult {

        errMsg: string;
    }

    interface StatOption {

        path: string;

        complete?: StatCompleteCallback;

        fail?: StatFailCallback;

        recursive?: boolean;

        success?: StatSuccessCallback;
    }

    interface StatSuccessCallbackResult {

        stats: Stats | IAnyObject;
        errMsg: string;
    }

    interface StateData {

        avatarUrl: string;

        gender: number;

        nickName: string;

        openid: string;

        sysState: number;

        userState: string;
    }

    interface Stats {

        lastAccessedTime: number;

        lastModifiedTime: number;

        mode: string;

        size: number;
    }

    interface StopAccelerometerOption {

        complete?: StopAccelerometerCompleteCallback;

        fail?: StopAccelerometerFailCallback;

        success?: StopAccelerometerSuccessCallback;
    }

    interface StopAdvertisingOption {

        complete?: StopAdvertisingCompleteCallback;

        fail?: StopAdvertisingFailCallback;

        success?: StopAdvertisingSuccessCallback;
    }

    interface StopBeaconDiscoveryOption {

        complete?: StopBeaconDiscoveryCompleteCallback;

        fail?: StopBeaconDiscoveryFailCallback;

        success?: StopBeaconDiscoverySuccessCallback;
    }

    interface StopBluetoothDevicesDiscoveryOption {

        complete?: StopBluetoothDevicesDiscoveryCompleteCallback;

        fail?: StopBluetoothDevicesDiscoveryFailCallback;

        success?: StopBluetoothDevicesDiscoverySuccessCallback;
    }

    interface StopCompassOption {

        complete?: StopCompassCompleteCallback;

        fail?: StopCompassFailCallback;

        success?: StopCompassSuccessCallback;
    }

    interface StopDeviceMotionListeningOption {

        complete?: StopDeviceMotionListeningCompleteCallback;

        fail?: StopDeviceMotionListeningFailCallback;

        success?: StopDeviceMotionListeningSuccessCallback;
    }

    interface StopGyroscopeOption {

        complete?: StopGyroscopeCompleteCallback;

        fail?: StopGyroscopeFailCallback;

        success?: StopGyroscopeSuccessCallback;
    }

    interface StyleItem {

        appNameHidden: boolean;

        borderColor: string;

        borderWidth: number;

        color: string;

        left: number;

        size: number;

        top: number;
    }

    interface SubscriptionsSetting {

        mainSwitch: boolean;

        itemSettings?: IAnyObject;
    }

    interface SystemInfo {

        appName: string;

        SDKVersion: string;

        albumAuthorized: boolean;

        benchmarkLevel: number;

        bluetoothEnabled: boolean;

        brand: string;

        cameraAuthorized: boolean;

        deviceOrientation: "portrait" | "landscape";

        enableDebug: boolean;

        fontSizeSetting: number;

        language: string;

        locationAuthorized: boolean;

        locationEnabled: boolean;

        locationReducedAccuracy: boolean;

        microphoneAuthorized: boolean;

        model: string;

        notificationAlertAuthorized: boolean;

        notificationAuthorized: boolean;

        notificationBadgeAuthorized: boolean;

        notificationSoundAuthorized: boolean;

        pixelRatio: number;

        platform: string;

        safeArea: SafeArea;

        screenHeight: number;

        screenWidth: number;

        statusBarHeight: number;

        system: string;

        version: string;

        wifiEnabled: boolean;

        windowHeight: number;

        windowWidth: number;

        theme?: "dark" | "light";
    }

    interface TitleShare {

        data?: IAnyObject;

        template?:
            | "default.score"
            | "default.level"
            | "default.opponent"
            | "default.cost";
    }

    interface TitleShareOption {

        data?: IAnyObject;

        template?:
            | "default.score"
            | "default.level"
            | "default.opponent"
            | "default.cost";
    }

    interface ToTempFilePathOption {

        complete?: ToTempFilePathCompleteCallback;

        destHeight?: number;

        destWidth?: number;

        fail?: ToTempFilePathFailCallback;

        fileType?: "jpg" | "png";

        height?: number;

        quality?: number;

        success?: ToTempFilePathSuccessCallback;

        width?: number;

        x?: number;

        y?: number;
    }

    interface ToTempFilePathSuccessCallbackResult {

        tempFilePath: string;
        errMsg: string;
    }

    interface ToTempFilePathSyncOption {

        destHeight?: number;

        destWidth?: number;

        fileType?: "jpg" | "png";

        height?: number;

        quality?: number;

        width?: number;

        x?: number;

        y?: number;
    }

    interface Touch {

        clientX: number;

        clientY: number;

        force: number;

        identifier: number;

        pageX: number;

        pageY: number;
    }

    interface UDPSocketOnErrorCallbackResult {

        errMsg: string;
    }

    interface UDPSocketOnMessageCallbackResult {

        message: ArrayBuffer;

        remoteInfo: RemoteInfo;
    }

    interface UDPSocketSendOption {

        address: string;

        message: string | ArrayBuffer;

        port: number;

        length?: number;

        offset?: number;
    }

    interface UnlinkFailCallbackResult {

        errMsg: string;
    }

    interface UnlinkOption {

        filePath: string;

        complete?: UnlinkCompleteCallback;

        fail?: UnlinkFailCallback;

        success?: UnlinkSuccessCallback;
    }

    interface UnzipFailCallbackResult {

        errMsg: string;
    }

    interface UnzipOption {

        targetPath: string;

        zipFilePath: string;

        complete?: UnzipCompleteCallback;

        fail?: UnzipFailCallback;

        success?: UnzipSuccessCallback;
    }

    interface UpdatableMessageFrontEndParameter {

        name: string;

        value: string;
    }

    interface UpdatableMessageFrontEndTemplateInfo {

        parameterList: UpdatableMessageFrontEndParameter[];
    }

    interface UpdateKeyboardOption {

        value: string;

        complete?: UpdateKeyboardCompleteCallback;

        fail?: UpdateKeyboardFailCallback;

        success?: UpdateKeyboardSuccessCallback;
    }

    interface UpdateReadyStatusOption {

        accessInfo: string;

        isReady: boolean;

        complete?: UpdateReadyStatusCompleteCallback;

        fail?: UpdateReadyStatusFailCallback;

        success?: UpdateReadyStatusSuccessCallback;
    }

    interface UpdateShareMenuOption {

        activityId?: string;

        complete?: UpdateShareMenuCompleteCallback;

        fail?: UpdateShareMenuFailCallback;

        isPrivateMessage?: boolean;

        isUpdatableMessage?: boolean;

        success?: UpdateShareMenuSuccessCallback;

        templateInfo?: UpdatableMessageFrontEndTemplateInfo;

        toDoActivityId?: string;

        withShareTicket?: boolean;
    }

    interface UpdateVoIPChatMuteConfigOption {

        muteConfig: MuteConfig;

        complete?: UpdateVoIPChatMuteConfigCompleteCallback;

        fail?: UpdateVoIPChatMuteConfigFailCallback;

        success?: UpdateVoIPChatMuteConfigSuccessCallback;
    }

    interface UpdateDouYinAppOption {

        complete?: UpdateDouYinAppCompleteCallback;

        fail?: UpdateDouYinAppFailCallback;

        success?: UpdateDouYinAppSuccessCallback;
    }

    interface UploadFileOption {

        filePath: string;

        name: string;

        url: string;

        complete?: UploadFileCompleteCallback;

        fail?: UploadFileFailCallback;

        formData?: IAnyObject;

        header?: IAnyObject;

        success?: UploadFileSuccessCallback;

        timeout?: number;
    }

    interface UploadFileSuccessCallbackResult {

        data: string;

        statusCode: number;
        errMsg: string;
    }

    interface UploadFrameOption {

        actionList: string[] | ArrayBuffer[];

        complete?: UploadFrameCompleteCallback;

        fail?: UploadFrameFailCallback;

        success?: UploadFrameSuccessCallback;
    }

    interface UploadTaskOnProgressUpdateCallbackResult {

        progress: number;

        totalBytesExpectedToSend: number;

        totalBytesSent: number;
    }

    interface UserGameData {

        KVDataList: KVData[];

        avatarUrl: string;

        nickname: string;

        openid: string;
    }

    interface UserInfo {

        avatarUrl: string;

        city: string;

        country: string;

        gender: 0 | 1 | 2;

        language: "en" | "zh_CN" | "zh_TW";

        nickName: string;

        province: string;
    }

    interface UserInfoButton {

        style: OptionStyle;

        type: "text" | "image";

        image?: string;

        text?: string;
    }

    interface VibrateLongOption {

        complete?: VibrateLongCompleteCallback;

        fail?: VibrateLongFailCallback;

        success?: VibrateLongSuccessCallback;
    }

    interface VibrateShortOption {

        type: string;

        complete?: VibrateShortCompleteCallback;

        fail?: VibrateShortFailCallback;

        success?: VibrateShortSuccessCallback;
    }

    interface Video {

        autoplay: boolean;

        backgroundColor: boolean;

        controls: boolean;

        enablePlayGesture: boolean;

        enableProgressGesture: boolean;

        height: number;

        initialTime: number;

        live: boolean;

        loop: boolean;

        muted: boolean;

        obeyMuteSwitch: boolean;

        objectFit: string;

        onended: (...args: any[]) => any;

        onerror: (...args: any[]) => any;

        onpause: (...args: any[]) => any;

        onplay: (...args: any[]) => any;

        onprogress: (...args: any[]) => any;

        ontimeupdate: (...args: any[]) => any;

        onwaiting: (...args: any[]) => any;

        playbackRate: number;

        poster: string;

        showCenterPlayBtn: boolean;

        showProgress: boolean;

        showProgressInControlMode: boolean;

        src: string;

        width: number;

        x: number;

        y: number;
    }

    interface VideoDecoderStartOption {

        source: string;

        mode?: number;
    }

    interface VideoOnErrorCallbackResult {

        errMsg: string;
    }

    interface WorkerOnMessageCallbackResult {

        message: IAnyObject;
    }

    interface WriteBLECharacteristicValueOption {

        characteristicId: string;

        deviceId: string;

        serviceId: string;

        value: ArrayBuffer;

        complete?: WriteBLECharacteristicValueCompleteCallback;

        fail?: WriteBLECharacteristicValueFailCallback;

        success?: WriteBLECharacteristicValueSuccessCallback;
    }

    interface WriteCharacteristicValueObject {

        characteristicId: string;

        needNotify: boolean;

        serviceId: string;

        value: ArrayBuffer;

        callbackId?: number;

        complete?: WriteCharacteristicValueCompleteCallback;

        fail?: WriteCharacteristicValueFailCallback;

        success?: WriteCharacteristicValueSuccessCallback;
    }

    interface WriteFileFailCallbackResult {

        errMsg: string;
    }

    interface WriteFileOption {

        data: string | ArrayBuffer;

        filePath: string;

        complete?: WriteFileCompleteCallback;

        encoding?:
            | "ascii"
            | "base64"
            | "binary"
            | "hex"
            | "ucs2"
            | "ucs-2"
            | "utf16le"
            | "utf-16le"
            | "utf-8"
            | "utf8"
            | "latin1";

        fail?: WriteFileFailCallback;

        success?: WriteFileSuccessCallback;
    }

    interface WxGetFileInfoOption {

        filePath: string;

        complete?: GetFileInfoCompleteCallback;

        digestAlgorithm?: "md5" | "sha1";

        fail?: WxGetFileInfoFailCallback;

        success?: WxGetFileInfoSuccessCallback;
    }

    interface WxGetFileInfoSuccessCallbackResult {

        digest: string;

        size: number;
        errMsg: string;
    }

    interface WxOnErrorCallbackResult {

        message: string;

        stack: string;
    }

    interface BLEPeripheralServer {

        addService(option: AddServiceOption): void;

        offCharacteristicReadRequest(
            callback?: OffCharacteristicReadRequestCallback
        ): void;

        offCharacteristicSubscribed(
            callback?: OffCharacteristicSubscribedCallback
        ): void;

        offCharacteristicUnsubscribed(
            callback?: OffCharacteristicUnsubscribedCallback
        ): void;

        offCharacteristicWriteRequest(
            callback?: OffCharacteristicWriteRequestCallback
        ): void;

        onCharacteristicReadRequest(
            callback: OnCharacteristicReadRequestCallback
        ): void;

        onCharacteristicSubscribed(
            callback: OnCharacteristicSubscribedCallback
        ): void;

        onCharacteristicUnsubscribed(
            callback: OnCharacteristicUnsubscribedCallback
        ): void;

        onCharacteristicWriteRequest(
            callback: OnCharacteristicWriteRequestCallback
        ): void;

        removeService(option: RemoveServiceOption): void;

        startAdvertising(Object: StartAdvertisingObject): void;

        stopAdvertising(option?: StopAdvertisingOption): void;

        writeCharacteristicValue(Object: WriteCharacteristicValueObject): void;
    }

    interface BannerAd {

        destroy(): void;

        hide(): void;

        offError(
            callback?: BannerAdOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        offResize(
            callback?: BannerAdOffResizeCallback
        ): void;

        onError(
            callback: BannerAdOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        onResize(
            callback: BannerAdOnResizeCallback
        ): void;

        show(): Promise<any>;
    }

    interface BluetoothError {
        errMsg: string;
        errCode: number;
    }

    interface Camera {

        closeFrameChange(): void;

        destroy(): void;

        listenFrameChange(): void;

        onAuthCancel(
            callback: (...args: any[]) => any
        ): void;

        onCameraFrame(
            callback: OnCameraFrameCallback
        ): void;

        onStop(
            callback: (...args: any[]) => any
        ): void;

        startRecord(): Promise<any>;

        stopRecord(
            compressed?: boolean
        ): Promise<any>;

        takePhoto(
            quality?: string
        ): Promise<any>;
    }

    interface Canvas {

        toTempFilePath(option: ToTempFilePathOption): void;

        getContext(
            contextType: "2d" | "webgl",
            contextAttributes?: ContextAttributes
        ): any;

        toDataURL(): string;

        toTempFilePathSync(option: ToTempFilePathSyncOption): string;
    }

    interface Console {

        debug(
            ...args: any[]
        ): void;

        error(
            ...args: any[]
        ): void;

        group(
            label?: string
        ): void;

        groupEnd(): void;

        info(
            ...args: any[]
        ): void;

        log(
            ...args: any[]
        ): void;

        warn(
            ...args: any[]
        ): void;
    }

    interface CustomAd {

        destroy(): void;

        offClose(
            callback?: UDPSocketOffCloseCallback
        ): void;

        offError(
            callback?: CustomAdOffErrorCallback
        ): void;

        offHide(
            callback?: OffHideCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        onClose(
            callback: UDPSocketOnCloseCallback
        ): void;

        onError(
            callback: CustomAdOnErrorCallback
        ): void;

        onHide(
            callback: OnHideCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        hide(): Promise<any>;

        show(): Promise<any>;

        isShow(): boolean;
    }

    interface DownloadTask {

        abort(): void;

        offHeadersReceived(
            callback?: OffHeadersReceivedCallback
        ): void;

        offProgressUpdate(
            callback?: DownloadTaskOffProgressUpdateCallback
        ): void;

        onHeadersReceived(
            callback: OnHeadersReceivedCallback
        ): void;

        onProgressUpdate(
            callback: DownloadTaskOnProgressUpdateCallback
        ): void;
    }

    interface FeedbackButton {

        destroy(): void;

        hide(): void;

        offTap(
            callback?: GameClubButtonOffTapCallback
        ): void;

        onTap(
            callback: GameClubButtonOnTapCallback
        ): void;

        show(): void;
    }

    interface FileSystemManager {

        readdirSync(
            dirPath: string
        ): string[];

        access(option: AccessOption): void;

        accessSync(
            path: string
        ): void;

        appendFile(option: AppendFileOption): void;

        appendFileSync(
            filePath: string,
            data: string | ArrayBuffer,
            encoding?:
                | "ascii"
                | "base64"
                | "binary"
                | "hex"
                | "ucs2"
                | "ucs-2"
                | "utf16le"
                | "utf-16le"
                | "utf-8"
                | "utf8"
                | "latin1"
        ): void;

        copyFile(option: CopyFileOption): void;

        copyFileSync(
            srcPath: string,
            destPath: string
        ): void;

        getFileInfo(option: FileSystemManagerGetFileInfoOption): void;

        getSavedFileList(option?: GetSavedFileListOption): void;

        mkdir(option: MkdirOption): void;

        mkdirSync(
            dirPath: string,
            recursive?: boolean
        ): void;

        readFile(option: ReadFileOption): void;

        readdir(option: ReaddirOption): void;

        removeSavedFile(option: RemoveSavedFileOption): void;

        rename(option: RenameOption): void;

        renameSync(
            oldPath: string,
            newPath: string
        ): void;

        rmdir(option: RmdirOption): void;

        rmdirSync(
            dirPath: string,
            recursive?: boolean
        ): void;

        saveFile(option: SaveFileOption): void;

        stat(option: StatOption): void;

        unlink(option: UnlinkOption): void;

        unlinkSync(
            filePath: string
        ): void;

        unzip(option: UnzipOption): void;

        writeFile(option: WriteFileOption): void;

        writeFileSync(
            filePath: string,
            data: string | ArrayBuffer,
            encoding?:
                | "ascii"
                | "base64"
                | "binary"
                | "hex"
                | "ucs2"
                | "ucs-2"
                | "utf16le"
                | "utf-16le"
                | "utf-8"
                | "utf8"
                | "latin1"
        ): void;

        statSync(
            path: string,
            recursive?: boolean
        ): Stats | IAnyObject;

        saveFileSync(
            tempFilePath: string,
            filePath?: string
        ): string;

        readFileSync(
            filePath: string,
            encoding?:
                | "ascii"
                | "base64"
                | "binary"
                | "hex"
                | "ucs2"
                | "ucs-2"
                | "utf16le"
                | "utf-16le"
                | "utf-8"
                | "utf8"
                | "latin1",
            position?: number,
            length?: number
        ): string | ArrayBuffer;
    }

    interface GameBanner {

        offError(
            callback?: GameBannerOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        offResize(
            callback?: GameBannerOffResizeCallback
        ): void;

        onError(
            callback: GameBannerOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        onResize(
            callback: GameBannerOnResizeCallback
        ): void;

        destroy(): Promise<any>;

        hide(): Promise<any>;

        show(): Promise<any>;
    }

    interface GameClubButton {

        destroy(): void;

        hide(): void;

        offTap(
            callback?: GameClubButtonOffTapCallback
        ): void;

        onTap(
            callback: GameClubButtonOnTapCallback
        ): void;

        show(): void;
    }

    interface GameIcon {

        offError(
            callback?: GameBannerOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        offResize(
            callback?: GameBannerOffResizeCallback
        ): void;

        onError(
            callback: GameBannerOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        onResize(
            callback: GameBannerOnResizeCallback
        ): void;

        destroy(): Promise<any>;

        hide(): Promise<any>;

        load(): Promise<any>;

        show(): Promise<any>;
    }

    interface GamePortal {

        offClose(
            callback?: UDPSocketOffCloseCallback
        ): void;

        offError(
            callback?: GamePortalOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        onClose(
            callback: UDPSocketOnCloseCallback
        ): void;

        onError(
            callback: GamePortalOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        destroy(): Promise<any>;

        load(): Promise<any>;

        show(): Promise<any>;
    }

    interface GameRecorder {

        off(
            event:
                | "start"
                | "stop"
                | "pause"
                | "resume"
                | "abort"
                | "timeUpdate"
                | "error",
            callback: (...args: any[]) => any
        ): void;

        on(
            event:
                | "start"
                | "stop"
                | "pause"
                | "resume"
                | "abort"
                | "timeUpdate"
                | "error",
            callback: (...args: any[]) => any
        ): void;

        start(option: GameRecorderStartOption): void;

        abort(): Promise<any>;

        pause(): Promise<any>;

        resume(): Promise<any>;

        stop(): Promise<any>;

        isAtempoSupported(): boolean;

        isFrameSupported(): boolean;

        isSoundSupported(): boolean;

        isVolumeSupported(): boolean;
    }

    interface GameRecorderError {
        errMsg: string;
        errCode: number;
    }

    interface GameRecorderShareButton {

        hide(): void;

        offTap(
            callback?: GameClubButtonOffTapCallback
        ): void;

        onTap(
            callback: GameClubButtonOnTapCallback
        ): void;

        show(): void;
    }

    interface GameServerManager {

        getFriendsStateData(option?: GetFriendsStateDataOption): void;

        offBeKickedOut(
            callback?: OffBeKickedOutCallback
        ): void;

        offBroadcast(
            callback?: OffBroadcastCallback
        ): void;

        offDisconnect(
            callback?: OffDisconnectCallback
        ): void;

        offGameEnd(
            callback?: OffGameEndCallback
        ): void;

        offGameStart(
            callback?: OffGameStartCallback
        ): void;

        offInvite(
            callback?: OffInviteCallback
        ): void;

        offLockStepError(
            callback?: OffLockStepErrorCallback
        ): void;

        offLogout(
            callback?: OffLogoutCallback
        ): void;

        offMatch(
            callback?: OffMatchCallback
        ): void;

        offRoomInfoChange(
            callback?: OffRoomInfoChangeCallback
        ): void;

        offStateUpdate(
            callback?: OffStateUpdateCallback
        ): void;

        offSyncFrame(
            callback?: OffSyncFrameCallback
        ): void;

        onBeKickedOut(
            callback: OnBeKickedOutCallback
        ): void;

        onBroadcast(
            callback: OnBroadcastCallback
        ): void;

        onDisconnect(
            callback: OnDisconnectCallback
        ): void;

        onGameEnd(
            callback: OnGameEndCallback
        ): void;

        onGameStart(
            callback: OnGameStartCallback
        ): void;

        onInvite(
            callback: OnInviteCallback
        ): void;

        onLockStepError(
            callback: OnLockStepErrorCallback
        ): void;

        onLogout(
            callback: OnLogoutCallback
        ): void;

        onMatch(
            callback: OnMatchCallback
        ): void;

        onRoomInfoChange(
            callback: OnRoomInfoChangeCallback
        ): void;

        onStateUpdate(
            callback: OnStateUpdateCallback
        ): void;

        onSyncFrame(
            callback: OnSyncFrameCallback
        ): void;

        startGame(option?: StartGameOption): void;

        broadcastInRoom(option: BroadcastInRoomOption): Promise<any>;

        cancelMatch(option: CancelMatchOption): Promise<any>;

        changeSeat(option: ChangeSeatOption): Promise<any>;

        createRoom(option: CreateRoomOption): Promise<any>;

        endGame(option?: EndGameOption): Promise<any>;

        endStateService(option?: EndStateServiceOption): Promise<any>;

        getLastRoomInfo(option?: GetLastRoomInfoOption): Promise<any>;

        getLostFrames(option: GetLostFramesOption): Promise<any>;

        getRoomInfo(option?: GetRoomInfoOption): Promise<any>;

        inviteFriend(option: InviteFriendOption): Promise<any>;

        joinRoom(option: JoinRoomOption): Promise<any>;

        kickoutMember(option: KickoutMemberOption): Promise<any>;

        login(): Promise<any>;

        logout(): Promise<any>;

        memberLeaveRoom(option: MemberLeaveRoomOption): Promise<any>;

        ownerLeaveRoom(option: OwnerLeaveRoomOption): Promise<any>;

        reconnect(option: ReconnectOption): Promise<any>;

        restart(option?: RestartOption): Promise<any>;

        setState(option: SetStateOption): Promise<any>;

        startMatch(option: StartMatchOption): Promise<any>;

        startStateService(option: StartStateServiceOption): Promise<any>;

        updateReadyStatus(option: UpdateReadyStatusOption): Promise<any>;

        uploadFrame(option: UploadFrameOption): Promise<any>;

        setInviteData(
            data: string
        ): boolean;
    }

    interface GameServerManagerError {
        errMsg: string;
        errCode: number;
    }

    interface GeneralCallbackResult {
        errMsg: string;
    }

    interface GamePaymentOptions {
        mode: string
        env: number
        currencyType: string
        platform: string
        buyQuantity: number
        zoneId?:string
        customId: string
        extraInfo?: string
        success?: (res: any) => void;
        fail?: (errCode:number) => void;
        complete?: (res: any) => void;
    }

    interface GridAd {

        destroy(): void;

        hide(): void;

        offError(
            callback?: BannerAdOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        offResize(
            callback?: BannerAdOffResizeCallback
        ): void;

        onError(
            callback: BannerAdOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        onResize(
            callback: BannerAdOnResizeCallback
        ): void;

        show(): Promise<any>;
    }

    interface IBeaconError {
        errMsg: string;
        errCode: number;
    }

    interface InnerAudioContext {

        destroy(): void;

        offCanplay(
            callback?: OffCanplayCallback
        ): void;

        offEnded(
            callback?: OffEndedCallback
        ): void;

        offError(
            callback?: InnerAudioContextOffErrorCallback
        ): void;

        offPause(
            callback?: OffPauseCallback
        ): void;

        offPlay(
            callback?: OffPlayCallback
        ): void;

        offSeeked(
            callback?: OffSeekedCallback
        ): void;

        offSeeking(
            callback?: OffSeekingCallback
        ): void;

        offStop(
            callback?: OffStopCallback
        ): void;

        offTimeUpdate(
            callback?: InnerAudioContextOffTimeUpdateCallback
        ): void;

        offWaiting(
            callback?: OffWaitingCallback
        ): void;

        onCanplay(
            callback: OnCanplayCallback
        ): void;

        onEnded(
            callback: OnEndedCallback
        ): void;

        onError(
            callback: InnerAudioContextOnErrorCallback
        ): void;

        onPause(
            callback: OnPauseCallback
        ): void;

        onPlay(
            callback: OnPlayCallback
        ): void;

        onSeeked(
            callback: OnSeekedCallback
        ): void;

        onSeeking(
            callback: OnSeekingCallback
        ): void;

        onStop(
            callback: InnerAudioContextOnStopCallback
        ): void;

        onTimeUpdate(
            callback: InnerAudioContextOnTimeUpdateCallback
        ): void;

        onWaiting(
            callback: OnWaitingCallback
        ): void;

        pause(): void;

        play(): void;

        seek(
            position: number
        ): void;

        stop(): void;
    }

    interface InterstitialAd {

        destroy(): void;

        offClose(
            callback?: UDPSocketOffCloseCallback
        ): void;

        offError(
            callback?: InterstitialAdOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        onClose(
            callback: UDPSocketOnCloseCallback
        ): void;

        onError(
            callback: InterstitialAdOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;

        load(): Promise<any>;

        show(): Promise<any>;
    }

    interface JoinVoIPChatError {
        errMsg: string;
        errCode: number;
    }

    interface LoadSubpackageTask {

        onProgressUpdate(
            callback: LoadSubpackageTaskOnProgressUpdateCallback
        ): void;
    }

    interface LogManager {

        debug(
            ...args: any[]
        ): void;

        info(
            ...args: any[]
        ): void;

        log(
            ...args: any[]
        ): void;

        warn(
            ...args: any[]
        ): void;
    }

    interface MediaAudioPlayer {

        addAudioSource(
            source: VideoDecoder
        ): Promise<any>;

        destroy(): Promise<any>;

        removeAudioSource(
            source: VideoDecoder
        ): Promise<any>;

        start(): Promise<any>;

        stop(): Promise<any>;
    }

    interface MidasFriendPaymentError {
        errMsg: string;
        errCode: number;
    }

    interface MidasPaymentError {
        errMsg: string;
        errCode: number;
    }

    interface OpenDataContext {

        postMessage(
            message: IAnyObject
        ): void;
    }

    interface OpenSettingButton {

        destroy(): void;

        hide(): void;

        offTap(
            callback?: GameClubButtonOffTapCallback
        ): void;

        onTap(
            callback: GameClubButtonOnTapCallback
        ): void;

        show(): void;
    }

    interface Performance {

        now(): number;
    }

    interface RealtimeLogManager {

        addFilterMsg(
            msg: string
        ): void;

        error(
            ...args: any[]
        ): void;

        info(
            ...args: any[]
        ): void;

        setFilterMsg(
            msg: string
        ): void;

        warn(
            ...args: any[]
        ): void;
    }

    interface RecorderManager {

        onError(
            callback: UDPSocketOnErrorCallback
        ): void;

        onFrameRecorded(
            callback: OnFrameRecordedCallback
        ): void;

        onInterruptionBegin(
            callback: OnInterruptionBeginCallback
        ): void;

        onInterruptionEnd(
            callback: OnInterruptionEndCallback
        ): void;

        onPause(
            callback: OnPauseCallback
        ): void;

        onResume(
            callback: OnResumeCallback
        ): void;

        onStart(
            callback: OnStartCallback
        ): void;

        onStop(
            callback: RecorderManagerOnStopCallback
        ): void;

        pause(): void;

        resume(): void;

        start(option: RecorderManagerStartOption): void;

        stop(): void;
    }

    interface RequestTask {

        abort(): void;

        offHeadersReceived(
            callback?: OffHeadersReceivedCallback
        ): void;

        onHeadersReceived(
            callback: OnHeadersReceivedCallback
        ): void;
    }

    interface RewardedVideoAd {

        load(): Promise<any>;

        show(): Promise<any>;

        destroy(): void;

        offClose(
            callback?: RewardedVideoAdOffCloseCallback
        ): void;

        offError(
            callback?: BannerAdOffErrorCallback
        ): void;

        offLoad(
            callback?: OffLoadCallback
        ): void;

        onClose(
            callback: RewardedVideoAdOnCloseCallback
        ): void;

        onError(
            callback: BannerAdOnErrorCallback
        ): void;

        onLoad(
            callback: OnLoadCallback
        ): void;
    }

    interface SocketTask {

        close(option: CloseOption): void;

        onClose(
            callback: SocketTaskOnCloseCallback
        ): void;

        onError(
            callback: UDPSocketOnErrorCallback
        ): void;

        onMessage(
            callback: SocketTaskOnMessageCallback
        ): void;

        onOpen(
            callback: OnOpenCallback
        ): void;

        send(option: SocketTaskSendOption): void;
    }

    interface Stats {

        isDirectory(): boolean;

        isFile(): boolean;
    }

    interface UDPSocket {

        close(): void;

        offClose(
            callback?: UDPSocketOffCloseCallback
        ): void;

        offError(
            callback?: UDPSocketOffErrorCallback
        ): void;

        offListening(
            callback?: OffListeningCallback
        ): void;

        offMessage(
            callback?: OffMessageCallback
        ): void;

        onClose(
            callback: UDPSocketOnCloseCallback
        ): void;

        onError(
            callback: UDPSocketOnErrorCallback
        ): void;

        onListening(
            callback: OnListeningCallback
        ): void;

        onMessage(
            callback: UDPSocketOnMessageCallback
        ): void;

        send(option: UDPSocketSendOption): void;

        bind(
            port?: number
        ): number;
    }

    interface UpdateManager {

        applyUpdate(): void;

        onCheckForUpdate(
            callback: OnCheckForUpdateCallback
        ): void;

        onUpdateFailed(
            callback: OnUpdateFailedCallback
        ): void;

        onUpdateReady(
            callback: OnUpdateReadyCallback
        ): void;
    }

    interface UploadTask {

        abort(): void;

        offHeadersReceived(
            callback?: OffHeadersReceivedCallback
        ): void;

        offProgressUpdate(
            callback?: UploadTaskOffProgressUpdateCallback
        ): void;

        onHeadersReceived(
            callback: OnHeadersReceivedCallback
        ): void;

        onProgressUpdate(
            callback: UploadTaskOnProgressUpdateCallback
        ): void;
    }

    interface UserInfoButton {

        destroy(): void;

        hide(): void;

        offTap(
            callback?: UserInfoButtonOffTapCallback
        ): void;

        onTap(
            callback: UserInfoButtonOnTapCallback
        ): void;

        show(): void;
    }

    interface Video {

        exitFullScreen(): Promise<any>;

        pause(): Promise<any>;

        play(): Promise<any>;

        requestFullScreen(
            direction: 0 | 90 | -90
        ): Promise<any>;

        seek(
            time: number
        ): Promise<any>;

        stop(): Promise<any>;

        destroy(): void;

        offEnded(
            callback?: OffEndedCallback
        ): void;

        offError(
            callback?: VideoOffErrorCallback
        ): void;

        offPause(
            callback?: OffPauseCallback
        ): void;

        offPlay(
            callback?: OffPlayCallback
        ): void;

        offProgress(
            callback?: OffProgressCallback
        ): void;

        offTimeUpdate(
            callback?: VideoOffTimeUpdateCallback
        ): void;

        offWaiting(
            callback?: OffWaitingCallback
        ): void;

        onEnded(
            callback: OnEndedCallback
        ): void;

        onError(
            callback: VideoOnErrorCallback
        ): void;

        onPause(
            callback: OnPauseCallback
        ): void;

        onPlay(
            callback: OnPlayCallback
        ): void;

        onProgress(
            callback: OnProgressCallback
        ): void;

        onTimeUpdate(
            callback: VideoOnTimeUpdateCallback
        ): void;

        onWaiting(
            callback: OnWaitingCallback
        ): void;
    }

    interface VideoDecoder {

        getFrameData(): FrameDataOptions;

        off(
            eventName: string,
            callback: (...args: any[]) => any
        ): void;

        on(
            eventName: "start" | "stop" | "seek" | "bufferchange" | "ended",
            callback: (...args: any[]) => any
        ): void;

        remove(): void;

        seek(
            position: number
        ): void;

        start(option: VideoDecoderStartOption): void;

        stop(): void;
    }

    interface WebGLRenderingContext {

        wxBindCanvasTexture(
            texture: number,
            canvas: Canvas
        ): void;
    }

    interface Worker {

        onMessage(
            callback: WorkerOnMessageCallback
        ): void;

        onProcessKilled(
            callback: OnProcessKilledCallback
        ): void;

        postMessage(
            message: IAnyObject
        ): void;

        terminate(): void;
    }

    interface AddShortcutOption {
        success?: (res: { "errMsg": "addShortcut:ok" }) => void;//裁剪片段的唯一索引，用于 tt.clipVideo 接口调用时指定裁剪拼接顺序。
        fail?: (res: { "errMsg": string }) => void;
        complete?: () => void;
    }

    interface ContactButtonOption {
        onTap?: () => void;
        offTap?: () => void;
        show?: () => void;
        hide?: () => void;
    }

    interface AwemeCustomerServiceOption {
        currencyType: string;
        buyQuantity: number;
        zoneId: string;
        customId: string;
        extraInfo: string;
        success?: (res: any) => void;
        fail?: (res: { "errMsg": string }) => void;
        complete?: () => void;
    }

    interface CheckShortcutOption {
        success?: (res: { "errMsg": "addShortcut:ok", "status": { "exist": boolean, needUpdate: boolean } }) => void;//裁剪片段的唯一索引，用于 tt.clipVideo 接口调用时指定裁剪拼接顺序。
        fail?: (res: { "errMsg": string }) => void;
        complete?: () => void;
    }

    interface FavoriteGuideOption {
        type: "bar" | "tip" | "customize";
        content?: string;
        position?: string;
        success?: (res: { "errMsg": "showFavoriteGuide:ok",isFavorited:boolean}) => void;//裁剪片段的唯一索引，用于 tt.clipVideo 接口调用时指定裁剪拼接顺序。
        fail?: (res: { "errMsg": "showFavoriteGuide:fail" }) => void;
        complete?: () => void;
    }

    interface Tt {

        showFavoriteGuide(FavoriteGuideOption);

        cloud: any;
        env: { USER_DATA_PATH: string };

        canIUse(fun: string): boolean;
        //跳转侧边栏API https://bytedance.feishu.cn/docx/NkzOdcUPXo02bdxl6zqcemGinzb
        /*确认当前宿主版本是否支持跳转某个小游戏入口场景*/
        checkScene(options: {scene:string,success:(res:{isExist:boolean,errMsg:"checkScene:ok"})=>void,fail?:(errMsg:string,errNo:number)=>void,complete?:()=>void}): void;

        navigateToScene(options: {scene:string,success:(res:any)=>void,fail?:(errMsg:any)=>void}): void;

        createContactButton(options: {
            type: string
            image: string
            style: {
                left: number
                top: number
                width: number
                height: number
                lineHeight: number
                backgroundColor: string
                textAlign: string
                fontSize: number
                borderRadius: number
                borderColor: string
                borderWidth: number
                textColor: string
            },
            success:(res:any)=>void,
            fail?:(res:any)=>void,
            complete?:(res:any)=>void
        }): ContactButtonOption;

        addShortcut(options: AddShortcutOption): void;

        openAwemeCustomerService(options: AwemeCustomerServiceOption): void;

        checkShortcut(options: CheckShortcutOption): void;

        reportAnalytics(eventName, data);

        setHandoffQuery(
            query: string
        ): boolean;

        getAccountInfoSync(): AccountInfo;

        getBatteryInfoSync(): GetBatteryInfoSyncResult;

        getEnterOptionsSync(): EnterOptionsGame;

        getExptInfoSync(
            keys?: string[]
        ): IAnyObject;

        getExtConfigSync(): IAnyObject;

        getLaunchOptionsSync(): LaunchOptionsGame;

        getMenuButtonBoundingClientRect(): Rect;

        getStorageInfoSync(): GetStorageInfoSyncOption;

        getSystemInfoSync(): SystemInfo;

        createBannerAd(option: CreateBannerAdOption): BannerAd;

        createCamera(option: CreateCameraOption): Camera;

        createCanvas(): Canvas;

        getSharedCanvas(): Canvas;

        downloadFile(option: DownloadFileOption): DownloadTask;

        createFeedbackButton(
            option: CreateOpenSettingButtonOption
        ): FeedbackButton;

        getFileSystemManager(): FileSystemManager;

        createGameBanner(option: CreateGameBannerOption): GameBanner;

        createGameClubButton(option: CreateGameClubButtonOption): GameClubButton;

        createGameIcon(
            option: CreateGameIconOption,
            styleItem: StyleItem
        ): GameIcon;

        createGamePortal(option: CreateGamePortalOption): GamePortal;

        createGameRecorderShareButton(
            option: CreateGameRecorderShareButtonOption
        ): GameRecorderShareButton;

        getGameRecorder(): GameRecorder;

        getGameServerManager(): GameServerManager;

        createGridAd(option: CreateGridAdOption): GridAd;

        createImage(): Image;

        createInnerAudioContext(): InnerAudioContext;

        createInterstitialAd(option: CreateInterstitialAdOption): InterstitialAd;

        loadSubpackage(option: LoadSubpackageOption): LoadSubpackageTask;

        getLogManager(option: GetLogManagerOption): LogManager;

        createMediaAudioPlayer(): MediaAudioPlayer;

        getOpenDataContext(): OpenDataContext;

        createOpenSettingButton(
            option: CreateOpenSettingButtonOption
        ): OpenSettingButton;

        getPerformance(): Performance;

        getRealtimeLogManager(): RealtimeLogManager;

        getRecorderManager(): RecorderManager;

        request<T extends string | IAnyObject | ArrayBuffer =
                | string
            | IAnyObject
            | ArrayBuffer>(
            option: RequestOption<T>
        ): RequestTask;

        createRewardedVideoAd(
            option: CreateRewardedVideoAdOption
        ): RewardedVideoAd;

        connectSocket(option: ConnectSocketOption): SocketTask;

        createUDPSocket(): UDPSocket;

        getUpdateManager(): UpdateManager;

        uploadFile(option: UploadFileOption): UploadTask;

        createUserInfoButton(option: CreateUserInfoButtonOption): UserInfoButton;

        createVideoDecoder(): VideoDecoder;

        createVideo(option: CreateVideoOption): Video;

        createWorker(
            scriptPath: string,
            options?: CreateWorkerOption
        ): Worker;

        getStorageSync<T = any>(
            key: string
        ): T;

        setCursor(
            path: string
        ): boolean;

        setMessageToFriendQuery(option: SetMessageToFriendQueryOption): boolean;

        getTextLineHeight(option: GetTextLineHeightOption): number;

        loadFont(
            path: string
        ): string;

        addCard<T extends AddCardOption = AddCardOption>(
            option: T
        ): PromisifySuccessResult<T, AddCardOption>;

        authPrivateMessage(option?: AuthPrivateMessageOption): void;

        authorize<T extends AuthorizeOption = AuthorizeOption>(
            option: T
        ): PromisifySuccessResult<T, AuthorizeOption>;

        checkHandoffEnabled(option?: CheckHandoffEnabledOption): void;

        checkIsUserAdvisedToRest<T extends CheckIsUserAdvisedToRestOption = CheckIsUserAdvisedToRestOption>(
            option: T
        ): PromisifySuccessResult<T, CheckIsUserAdvisedToRestOption>;

        checkSession<T extends CheckSessionOption = CheckSessionOption>(
            option?: T
        ): PromisifySuccessResult<T, CheckSessionOption>;

        chooseImage<T extends ChooseImageOption = ChooseImageOption>(
            option?: T
        ): PromisifySuccessResult<T, ChooseImageOption>;

        clearStorage<T extends ClearStorageOption = ClearStorageOption>(
            option?: T
        ): PromisifySuccessResult<T, ClearStorageOption>;

        clearStorageSync(): void;

        closeBLEConnection<T extends CloseBLEConnectionOption = CloseBLEConnectionOption>(
            option: T
        ): PromisifySuccessResult<T, CloseBLEConnectionOption>;

        closeBluetoothAdapter<T extends CloseBluetoothAdapterOption = CloseBluetoothAdapterOption>(
            option?: T
        ): PromisifySuccessResult<T, CloseBluetoothAdapterOption>;

        closeSocket<T extends CloseSocketOption = CloseSocketOption>(
            option?: T
        ): PromisifySuccessResult<T, CloseSocketOption>;

        createBLEConnection<T extends CreateBLEConnectionOption = CreateBLEConnectionOption>(
            option: T
        ): PromisifySuccessResult<T, CreateBLEConnectionOption>;

        createBLEPeripheralServer<T extends CreateBLEPeripheralServerOption = CreateBLEPeripheralServerOption>(
            option?: T
        ): PromisifySuccessResult<T, CreateBLEPeripheralServerOption>;

        createCustomAd(option: CreateCustomAdOption): void;

        exitMiniProgram<T extends ExitMiniProgramOption = ExitMiniProgramOption>(
            option?: T
        ): PromisifySuccessResult<T, ExitMiniProgramOption>;

        exitVoIPChat<T extends ExitVoIPChatOption = ExitVoIPChatOption>(
            option?: T
        ): PromisifySuccessResult<T, ExitVoIPChatOption>;

        getAvailableAudioSources<T extends GetAvailableAudioSourcesOption = GetAvailableAudioSourcesOption>(
            option?: T
        ): PromisifySuccessResult<T, GetAvailableAudioSourcesOption>;

        getBLEDeviceCharacteristics<T extends GetBLEDeviceCharacteristicsOption = GetBLEDeviceCharacteristicsOption>(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceCharacteristicsOption>;

        getBLEDeviceRSSI<T extends GetBLEDeviceRSSIOption = GetBLEDeviceRSSIOption>(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceRSSIOption>;

        getBLEDeviceServices<T extends GetBLEDeviceServicesOption = GetBLEDeviceServicesOption>(
            option: T
        ): PromisifySuccessResult<T, GetBLEDeviceServicesOption>;

        getBatteryInfo<T extends GetBatteryInfoOption = GetBatteryInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBatteryInfoOption>;

        getBeacons<T extends GetBeaconsOption = GetBeaconsOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBeaconsOption>;

        getBluetoothAdapterState<T extends GetBluetoothAdapterStateOption = GetBluetoothAdapterStateOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBluetoothAdapterStateOption>;

        getBluetoothDevices<T extends GetBluetoothDevicesOption = GetBluetoothDevicesOption>(
            option?: T
        ): PromisifySuccessResult<T, GetBluetoothDevicesOption>;

        getClipboardData<T extends GetClipboardDataOption = GetClipboardDataOption>(
            option?: T
        ): PromisifySuccessResult<T, GetClipboardDataOption>;

        getConnectedBluetoothDevices<T extends GetConnectedBluetoothDevicesOption = GetConnectedBluetoothDevicesOption>(
            option: T
        ): PromisifySuccessResult<T, GetConnectedBluetoothDevicesOption>;

        getExtConfig<T extends GetExtConfigOption = GetExtConfigOption>(
            option?: T
        ): PromisifySuccessResult<T, GetExtConfigOption>;

        getFileInfo<T extends WxGetFileInfoOption = WxGetFileInfoOption>(
            option: T
        ): PromisifySuccessResult<T, WxGetFileInfoOption>;

        getFriendCloudStorage<T extends GetFriendCloudStorageOption = GetFriendCloudStorageOption>(
            option: T
        ): PromisifySuccessResult<T, GetFriendCloudStorageOption>;

        getGroupCloudStorage<T extends GetGroupCloudStorageOption = GetGroupCloudStorageOption>(
            option: T
        ): PromisifySuccessResult<T, GetGroupCloudStorageOption>;

        getGroupEnterInfo(option: GetGroupEnterInfoOption): void;

        getGroupInfo<T extends GetGroupInfoOption = GetGroupInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetGroupInfoOption>;

        getLocation<T extends GetLocationOption = GetLocationOption>(
            option: T
        ): PromisifySuccessResult<T, GetLocationOption>;

        getNetworkType<T extends GetNetworkTypeOption = GetNetworkTypeOption>(
            option?: T
        ): PromisifySuccessResult<T, GetNetworkTypeOption>;

        getPotentialFriendList<T extends GetPotentialFriendListOption = GetPotentialFriendListOption>(
            option?: T
        ): PromisifySuccessResult<T, GetPotentialFriendListOption>;

        getScreenBrightness<T extends GetScreenBrightnessOption = GetScreenBrightnessOption>(
            option?: T
        ): PromisifySuccessResult<T, GetScreenBrightnessOption>;

        getSetting<T extends GetSettingOption = GetSettingOption>(
            option?: T
        ): PromisifySuccessResult<T, GetSettingOption>;

        getShareInfo<T extends GetShareInfoOption = GetShareInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetShareInfoOption>;

        getStorage<T = any,
            U extends GetStorageOption<T> = GetStorageOption<T>>(
            option: U
        ): PromisifySuccessResult<U, GetStorageOption<T>>;

        getStorageInfo<T extends GetStorageInfoOption = GetStorageInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetStorageInfoOption>;

        getSystemInfo<T extends GetSystemInfoOption = GetSystemInfoOption>(
            option?: T
        ): PromisifySuccessResult<T, GetSystemInfoOption>;

        getSystemInfoAsync(option?: GetSystemInfoAsyncOption): void;

        getUserCloudStorage<T extends GetUserCloudStorageOption = GetUserCloudStorageOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserCloudStorageOption>;

        getUserCloudStorageKeys(option?: GetUserCloudStorageKeysOption): void;

        getUserInfo<T extends GetUserInfoOption = GetUserInfoOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserInfoOption>;

        getUserInteractiveStorage<T extends GetUserInteractiveStorageOption = GetUserInteractiveStorageOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserInteractiveStorageOption>;

        getUserProfile<T extends GetUserProfileOption = GetUserProfileOption>(
            option: T
        ): PromisifySuccessResult<T, GetUserProfileOption>;

        getWeRunData<T extends GetWeRunDataOption = GetWeRunDataOption>(
            option?: T
        ): PromisifySuccessResult<T, GetWeRunDataOption>;

        hideKeyboard<T extends HideKeyboardOption = HideKeyboardOption>(
            option?: T
        ): PromisifySuccessResult<T, HideKeyboardOption>;

        hideLoading<T extends HideLoadingOption = HideLoadingOption>(
            option?: T
        ): PromisifySuccessResult<T, HideLoadingOption>;

        hideShareMenu<T extends HideShareMenuOption = HideShareMenuOption>(
            option?: T
        ): PromisifySuccessResult<T, HideShareMenuOption>;

        hideToast<T extends HideToastOption = HideToastOption>(
            option?: T
        ): PromisifySuccessResult<T, HideToastOption>;

        joinVoIPChat<T extends JoinVoIPChatOption = JoinVoIPChatOption>(
            option: T
        ): PromisifySuccessResult<T, JoinVoIPChatOption>;

        login<T extends LoginOption = LoginOption>(
            option?: T
        ): PromisifySuccessResult<T, LoginOption>;

        makeBluetoothPair<T extends MakeBluetoothPairOption = MakeBluetoothPairOption>(
            option: T
        ): PromisifySuccessResult<T, MakeBluetoothPairOption>;

        modifyFriendInteractiveStorage<T extends ModifyFriendInteractiveStorageOption = ModifyFriendInteractiveStorageOption>(
            option: T
        ): PromisifySuccessResult<T, ModifyFriendInteractiveStorageOption>;

        navigateToMiniProgram<T extends NavigateToMiniProgramOption = NavigateToMiniProgramOption>(
            option: T
        ): PromisifySuccessResult<T, NavigateToMiniProgramOption>;

        notifyBLECharacteristicValueChange<T extends NotifyBLECharacteristicValueChangeOption = NotifyBLECharacteristicValueChangeOption>(
            option: T
        ): PromisifySuccessResult<T, NotifyBLECharacteristicValueChangeOption>;

        offAccelerometerChange(
            callback: (...args: any[]) => any
        ): void;

        offAddToFavorites(
            callback?: OffAddToFavoritesCallback
        ): void;

        offAudioInterruptionBegin(
            callback?: OffAudioInterruptionBeginCallback
        ): void;

        offAudioInterruptionEnd(
            callback?: OffAudioInterruptionEndCallback
        ): void;

        offBLEPeripheralConnectionStateChanged(
            callback?: OffBLEPeripheralConnectionStateChangedCallback
        ): void;

        offBeaconServiceChange(
            callback?: OffBeaconServiceChangeCallback
        ): void;

        offBeaconUpdate(
            callback?: OffBeaconUpdateCallback
        ): void;

        offCompassChange(
            callback: (...args: any[]) => any
        ): void;

        offCopyUrl(
            callback?: OffCopyUrlCallback
        ): void;

        offDeviceMotionChange(
            callback: (...args: any[]) => any
        ): void;

        offDeviceOrientationChange(
            callback?: OffDeviceOrientationChangeCallback
        ): void;

        offError(
            callback?: WxOffErrorCallback
        ): void;

        offGyroscopeChange(
            callback: (...args: any[]) => any
        ): void;

        offHandoff(
            callback?: OffHandoffCallback
        ): void;

        offHide(
            callback?: OffHideCallback
        ): void;

        offInteractiveStorageModified(
            callback?: (...args: any[]) => any
        ): void;

        offKeyDown(
            callback?: OffKeyDownCallback
        ): void;

        offKeyUp(
            callback?: OffKeyUpCallback
        ): void;

        offKeyboardComplete(
            callback?: OffKeyboardCompleteCallback
        ): void;

        offKeyboardConfirm(
            callback?: OffKeyboardConfirmCallback
        ): void;

        offKeyboardInput(
            callback?: OffKeyboardInputCallback
        ): void;

        offMemoryWarning(
            callback: (...args: any[]) => any
        ): void;

        offMouseDown(
            callback?: OffMouseDownCallback
        ): void;

        offMouseMove(
            callback?: OffMouseMoveCallback
        ): void;

        offMouseUp(
            callback?: OffMouseUpCallback
        ): void;

        offNetworkStatusChange(
            callback: (...args: any[]) => any
        ): void;

        offShareAppMessage(
            callback?: OffShareAppMessageCallback
        ): void;

        offShareTimeline(
            callback?: OffShareTimelineCallback
        ): void;

        offShow(
            callback?: OffShowCallback
        ): void;

        offTouchCancel(
            callback?: OffTouchCancelCallback
        ): void;

        offTouchEnd(
            callback?: OffTouchEndCallback
        ): void;

        offTouchMove(
            callback?: OffTouchMoveCallback
        ): void;

        offTouchStart(
            callback?: OffTouchStartCallback
        ): void;

        offUnhandledRejection(
            callback?: OffUnhandledRejectionCallback
        ): void;

        offVoIPChatInterrupted(
            callback: (...args: any[]) => any
        ): void;

        offVoIPChatMembersChanged(
            callback: (...args: any[]) => any
        ): void;

        offVoIPChatSpeakersChanged(
            callback: (...args: any[]) => any
        ): void;

        offWheel(
            callback?: OffWheelCallback
        ): void;

        offWindowResize(
            callback?: OffWindowResizeCallback
        ): void;

        onAccelerometerChange(
            callback: OnAccelerometerChangeCallback
        ): void;

        onAddToFavorites(
            callback: OnAddToFavoritesCallback
        ): void;

        onAudioInterruptionBegin(
            callback: OnAudioInterruptionBeginCallback
        ): void;

        onAudioInterruptionEnd(
            callback: OnAudioInterruptionEndCallback
        ): void;

        onBLECharacteristicValueChange(
            callback: OnBLECharacteristicValueChangeCallback
        ): void;

        onBLEConnectionStateChange(
            callback: OnBLEConnectionStateChangeCallback
        ): void;

        onBLEPeripheralConnectionStateChanged(
            callback: OnBLEPeripheralConnectionStateChangedCallback
        ): void;

        onBeaconServiceChange(
            callback: OnBeaconServiceChangeCallback
        ): void;

        onBeaconUpdate(
            callback: OnBeaconUpdateCallback
        ): void;

        onBluetoothAdapterStateChange(
            callback: OnBluetoothAdapterStateChangeCallback
        ): void;

        onBluetoothDeviceFound(
            callback: OnBluetoothDeviceFoundCallback
        ): void;

        onCompassChange(
            callback: OnCompassChangeCallback
        ): void;

        onCopyUrl(
            callback: OnCopyUrlCallback
        ): void;

        onDeviceMotionChange(
            callback: OnDeviceMotionChangeCallback
        ): void;

        onDeviceOrientationChange(
            callback: OnDeviceOrientationChangeCallback
        ): void;

        onError(
            callback: WxOnErrorCallback
        ): void;

        onGyroscopeChange(
            callback: OnGyroscopeChangeCallback
        ): void;

        onHandoff(
            callback: OnHandoffCallback
        ): void;

        onHide(
            callback: OnHideCallback
        ): void;

        onInteractiveStorageModified(
            callback: (...args: any[]) => any
        ): void;

        onKeyDown(
            callback: OnKeyDownCallback
        ): void;

        onKeyUp(
            callback: OnKeyUpCallback
        ): void;

        onKeyboardComplete(
            callback: OnKeyboardCompleteCallback
        ): void;

        onKeyboardConfirm(
            callback: OnKeyboardConfirmCallback
        ): void;

        onKeyboardInput(
            callback: OnKeyboardInputCallback
        ): void;

        onMemoryWarning(
            callback: OnMemoryWarningCallback
        ): void;

        onMessage(
            callback: (...args: any[]) => any
        ): void;

        onMouseDown(
            callback: OnMouseDownCallback
        ): void;

        onMouseMove(
            callback: OnMouseMoveCallback
        ): void;

        onMouseUp(
            callback: OnMouseUpCallback
        ): void;

        onNetworkStatusChange(
            callback: OnNetworkStatusChangeCallback
        ): void;

        onShareAppMessage(
            callback: OnShareAppMessageCallback
        ): void;

        onShareMessageToFriend(
            callback: OnShareMessageToFriendCallback
        ): void;

        onShareTimeline(
            callback: OnShareTimelineCallback
        ): void;

        onShow(
            callback: OnShowCallback
        ): void;

        onSocketClose(
            callback: OnSocketCloseCallback
        ): void;

        onSocketError(
            callback: OnSocketErrorCallback
        ): void;

        onSocketMessage(
            callback: OnSocketMessageCallback
        ): void;

        onSocketOpen(
            callback: OnSocketOpenCallback
        ): void;

        onTouchCancel(
            callback: OnTouchCancelCallback
        ): void;

        onTouchEnd(
            callback: OnTouchEndCallback
        ): void;

        onTouchMove(
            callback: OnTouchMoveCallback
        ): void;

        onTouchStart(
            callback: OnTouchStartCallback
        ): void;

        onUnhandledRejection(
            callback: OnUnhandledRejectionCallback
        ): void;

        onUserCaptureScreen(
            callback: OnUserCaptureScreenCallback
        ): void;

        onVoIPChatInterrupted(
            callback: OnVoIPChatInterruptedCallback
        ): void;

        onVoIPChatMembersChanged(
            callback: OnVoIPChatMembersChangedCallback
        ): void;

        onVoIPChatSpeakersChanged(
            callback: OnVoIPChatSpeakersChangedCallback
        ): void;

        onWheel(
            callback: OnWheelCallback
        ): void;

        onWindowResize(
            callback: OnWindowResizeCallback
        ): void;

        openBluetoothAdapter<T extends OpenBluetoothAdapterOption = OpenBluetoothAdapterOption>(
            option?: T
        ): PromisifySuccessResult<T, OpenBluetoothAdapterOption>;

        openCard<T extends OpenCardOption = OpenCardOption>(
            option: T
        ): PromisifySuccessResult<T, OpenCardOption>;

        openCustomerServiceConversation<T extends OpenCustomerServiceConversationOption = OpenCustomerServiceConversationOption>(
            option: T
        ): PromisifySuccessResult<T, OpenCustomerServiceConversationOption>;

        openSetting<T extends OpenSettingOption = OpenSettingOption>(
            option?: T
        ): PromisifySuccessResult<T, OpenSettingOption>;

        previewImage<T extends PreviewImageOption = PreviewImageOption>(
            option: T
        ): PromisifySuccessResult<T, PreviewImageOption>;

        previewMedia<T extends PreviewMediaOption = PreviewMediaOption>(
            option: T
        ): PromisifySuccessResult<T, PreviewMediaOption>;

        readBLECharacteristicValue<T extends ReadBLECharacteristicValueOption = ReadBLECharacteristicValueOption>(
            option: T
        ): PromisifySuccessResult<T, ReadBLECharacteristicValueOption>;

        removeStorage<T extends RemoveStorageOption = RemoveStorageOption>(
            option: T
        ): PromisifySuccessResult<T, RemoveStorageOption>;

        removeStorageSync(
            key: string
        ): void;

        removeUserCloudStorage<T extends RemoveUserCloudStorageOption = RemoveUserCloudStorageOption>(
            option: T
        ): PromisifySuccessResult<T, RemoveUserCloudStorageOption>;

        reportEvent(
            eventId: string
        ): void;

        reportMonitor(
            name: string,
            value: number
        ): void;

        reportPerformance(
            id: number,
            value: number,
            dimensions?: string | any[]
        ): void;

        reportUserBehaviorBranchAnalytics(
            option: ReportUserBehaviorBranchAnalyticsOption
        ): void;

        requestMidasFriendPayment(option: RequestMidasFriendPaymentOption): void;

        requestMidasPayment<T extends RequestMidasPaymentOption = RequestMidasPaymentOption>(
            option: T
        ): PromisifySuccessResult<T, RequestMidasPaymentOption>;

        requestSubscribeMessage<T extends RequestSubscribeMessageOption = RequestSubscribeMessageOption>(
            option: T
        ): PromisifySuccessResult<T, RequestSubscribeMessageOption>;

        requestSubscribeSystemMessage<T extends RequestSubscribeSystemMessageOption = RequestSubscribeSystemMessageOption>(
            option: T
        ): PromisifySuccessResult<T, RequestSubscribeSystemMessageOption>;

        saveFileToDisk(option: SaveFileToDiskOption): void;

        saveImageToPhotosAlbum<T extends SaveImageToPhotosAlbumOption = SaveImageToPhotosAlbumOption>(
            option: T
        ): PromisifySuccessResult<T, SaveImageToPhotosAlbumOption>;

        sendSocketMessage<T extends SendSocketMessageOption = SendSocketMessageOption>(
            option: T
        ): PromisifySuccessResult<T, SendSocketMessageOption>;

        setBLEMTU<T extends SetBLEMTUOption = SetBLEMTUOption>(
            option: T
        ): PromisifySuccessResult<T, SetBLEMTUOption>;

        setClipboardData<T extends SetClipboardDataOption = SetClipboardDataOption>(
            option: T
        ): PromisifySuccessResult<T, SetClipboardDataOption>;

        setEnableDebug<T extends SetEnableDebugOption = SetEnableDebugOption>(
            option: T
        ): PromisifySuccessResult<T, SetEnableDebugOption>;

        setInnerAudioOption<T extends SetInnerAudioOption = SetInnerAudioOption>(
            option: T
        ): PromisifySuccessResult<T, SetInnerAudioOption>;

        setKeepScreenOn<T extends SetKeepScreenOnOption = SetKeepScreenOnOption>(
            option: T
        ): PromisifySuccessResult<T, SetKeepScreenOnOption>;

        setMenuStyle<T extends SetMenuStyleOption = SetMenuStyleOption>(
            option: T
        ): PromisifySuccessResult<T, SetMenuStyleOption>;

        setPreferredFramesPerSecond(
            fps: number
        ): void;

        setScreenBrightness<T extends SetScreenBrightnessOption = SetScreenBrightnessOption>(
            option: T
        ): PromisifySuccessResult<T, SetScreenBrightnessOption>;

        setStatusBarStyle<T extends SetStatusBarStyleOption = SetStatusBarStyleOption>(
            option: T
        ): PromisifySuccessResult<T, SetStatusBarStyleOption>;

        setStorage<T = any,
            U extends SetStorageOption<T> = SetStorageOption<T>>(
            option: U
        ): PromisifySuccessResult<U, SetStorageOption<T>>;

        setStorageSync<T = any>(
            key: string,
            data: T
        ): void;

        setUserCloudStorage<T extends SetUserCloudStorageOption = SetUserCloudStorageOption>(
            option: T
        ): PromisifySuccessResult<T, SetUserCloudStorageOption>;

        setWindowSize(option: SetWindowSizeOption): void;

        shareAppMessage(option: ShareAppMessageOption): void;

        shareMessageToFriend(option: ShareMessageToFriendOption): void;

        showActionSheet<T extends ShowActionSheetOption = ShowActionSheetOption>(
            option: T
        ): PromisifySuccessResult<T, ShowActionSheetOption>;

        showKeyboard<T extends ShowKeyboardOption = ShowKeyboardOption>(
            option: T
        ): PromisifySuccessResult<T, ShowKeyboardOption>;

        showLoading<T extends ShowLoadingOption = ShowLoadingOption>(
            option: T
        ): PromisifySuccessResult<T, ShowLoadingOption>;

        showModal<T extends ShowModalOption = ShowModalOption>(
            option: T
        ): PromisifySuccessResult<T, ShowModalOption>;

        showShareImageMenu<T extends ShowShareImageMenuOption = ShowShareImageMenuOption>(
            option: T
        ): PromisifySuccessResult<T, ShowShareImageMenuOption>;

        showShareMenu<T extends ShowShareMenuOption = ShowShareMenuOption>(
            option: T
        ): PromisifySuccessResult<T, ShowShareMenuOption>;

        showToast<T extends ShowToastOption = ShowToastOption>(
            option: T
        ): PromisifySuccessResult<T, ShowToastOption>;

        startAccelerometer<T extends StartAccelerometerOption = StartAccelerometerOption>(
            option?: T
        ): PromisifySuccessResult<T, StartAccelerometerOption>;

        startBeaconDiscovery<T extends StartBeaconDiscoveryOption = StartBeaconDiscoveryOption>(
            option: T
        ): PromisifySuccessResult<T, StartBeaconDiscoveryOption>;

        startBluetoothDevicesDiscovery<T extends StartBluetoothDevicesDiscoveryOption = StartBluetoothDevicesDiscoveryOption>(
            option: T
        ): PromisifySuccessResult<T, StartBluetoothDevicesDiscoveryOption>;

        startCompass<T extends StartCompassOption = StartCompassOption>(
            option?: T
        ): PromisifySuccessResult<T, StartCompassOption>;

        startDeviceMotionListening<T extends StartDeviceMotionListeningOption = StartDeviceMotionListeningOption>(
            option?: T
        ): PromisifySuccessResult<T, StartDeviceMotionListeningOption>;

        startGyroscope<T extends StartGyroscopeOption = StartGyroscopeOption>(
            option?: T
        ): PromisifySuccessResult<T, StartGyroscopeOption>;

        startHandoff(option?: StartHandoffOption): void;

        stopAccelerometer<T extends StopAccelerometerOption = StopAccelerometerOption>(
            option?: T
        ): PromisifySuccessResult<T, StopAccelerometerOption>;

        stopBeaconDiscovery<T extends StopBeaconDiscoveryOption = StopBeaconDiscoveryOption>(
            option?: T
        ): PromisifySuccessResult<T, StopBeaconDiscoveryOption>;

        stopBluetoothDevicesDiscovery<T extends StopBluetoothDevicesDiscoveryOption = StopBluetoothDevicesDiscoveryOption>(
            option?: T
        ): PromisifySuccessResult<T, StopBluetoothDevicesDiscoveryOption>;

        stopCompass<T extends StopCompassOption = StopCompassOption>(
            option?: T
        ): PromisifySuccessResult<T, StopCompassOption>;

        stopDeviceMotionListening<T extends StopDeviceMotionListeningOption = StopDeviceMotionListeningOption>(
            option?: T
        ): PromisifySuccessResult<T, StopDeviceMotionListeningOption>;

        stopGyroscope<T extends StopGyroscopeOption = StopGyroscopeOption>(
            option?: T
        ): PromisifySuccessResult<T, StopGyroscopeOption>;

        triggerGC(): void;

        updateKeyboard<T extends UpdateKeyboardOption = UpdateKeyboardOption>(
            option: T
        ): PromisifySuccessResult<T, UpdateKeyboardOption>;

        updateShareMenu<T extends UpdateShareMenuOption = UpdateShareMenuOption>(
            option: T
        ): PromisifySuccessResult<T, UpdateShareMenuOption>;

        updateVoIPChatMuteConfig<T extends UpdateVoIPChatMuteConfigOption = UpdateVoIPChatMuteConfigOption>(
            option: T
        ): PromisifySuccessResult<T, UpdateVoIPChatMuteConfigOption>;

        updateDouYinApp<T extends UpdateDouYinAppOption = UpdateDouYinAppOption>(
            option?: T
        ): PromisifySuccessResult<T, UpdateDouYinAppOption>;

        vibrateLong<T extends VibrateLongOption = VibrateLongOption>(
            option?: T
        ): PromisifySuccessResult<T, VibrateLongOption>;

        vibrateShort<T extends VibrateShortOption = VibrateShortOption>(
            option: T
        ): PromisifySuccessResult<T, VibrateShortOption>;

        writeBLECharacteristicValue<T extends WriteBLECharacteristicValueOption = WriteBLECharacteristicValueOption>(
            option: T
        ): PromisifySuccessResult<T, WriteBLECharacteristicValueOption>;


        requestGamePayment(options: GamePaymentOptions);

    }


    type AccessCompleteCallback = (res: GeneralCallbackResult) => void

    type AccessFailCallback = (result: AccessFailCallbackResult) => void

    type AccessSuccessCallback = (res: GeneralCallbackResult) => void

    type AddCardCompleteCallback = (res: GeneralCallbackResult) => void

    type AddCardFailCallback = (res: GeneralCallbackResult) => void

    type AddCardSuccessCallback = (result: AddCardSuccessCallbackResult) => void

    type AddServiceCompleteCallback = (res: GeneralCallbackResult) => void

    type AddServiceFailCallback = (res: GeneralCallbackResult) => void

    type AddServiceSuccessCallback = (res: GeneralCallbackResult) => void

    type AppendFileCompleteCallback = (res: GeneralCallbackResult) => void

    type AppendFileFailCallback = (result: AppendFileFailCallbackResult) => void

    type AppendFileSuccessCallback = (res: GeneralCallbackResult) => void

    type AuthPrivateMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type AuthPrivateMessageFailCallback = (res: GeneralCallbackResult) => void

    type AuthPrivateMessageSuccessCallback = (
        result: AuthPrivateMessageSuccessCallbackResult
    ) => void

    type AuthorizeCompleteCallback = (res: GeneralCallbackResult) => void

    type AuthorizeFailCallback = (res: GeneralCallbackResult) => void

    type AuthorizeSuccessCallback = (res: GeneralCallbackResult) => void
    type BannerAdOffErrorCallback = (
        result: BannerAdOnErrorCallbackResult
    ) => void
    type BannerAdOffResizeCallback = (result: OnResizeCallbackResult) => void
    type BannerAdOnErrorCallback = (
        result: BannerAdOnErrorCallbackResult
    ) => void
    type BannerAdOnResizeCallback = (result: OnResizeCallbackResult) => void

    type BroadcastInRoomCompleteCallback = (res: GeneralCallbackResult) => void

    type BroadcastInRoomFailCallback = (res: GeneralCallbackResult) => void

    type BroadcastInRoomSuccessCallback = (res: GeneralCallbackResult) => void

    type CancelMatchCompleteCallback = (res: GeneralCallbackResult) => void

    type CancelMatchFailCallback = (res: GeneralCallbackResult) => void

    type CancelMatchSuccessCallback = (res: GeneralCallbackResult) => void

    type ChangeSeatCompleteCallback = (res: GeneralCallbackResult) => void

    type ChangeSeatFailCallback = (res: GeneralCallbackResult) => void

    type ChangeSeatSuccessCallback = (res: GeneralCallbackResult) => void

    type CheckHandoffEnabledCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type CheckHandoffEnabledFailCallback = (res: GeneralCallbackResult) => void

    type CheckHandoffEnabledSuccessCallback = (
        result: CheckHandoffEnabledSuccessCallbackResult
    ) => void

    type CheckIsUserAdvisedToRestCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type CheckIsUserAdvisedToRestFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type CheckIsUserAdvisedToRestSuccessCallback = (
        result: CheckIsUserAdvisedToRestSuccessCallbackResult
    ) => void

    type CheckSessionCompleteCallback = (res: GeneralCallbackResult) => void

    type CheckSessionFailCallback = (res: GeneralCallbackResult) => void

    type CheckSessionSuccessCallback = (res: GeneralCallbackResult) => void

    type ChooseImageCompleteCallback = (res: GeneralCallbackResult) => void

    type ChooseImageFailCallback = (res: GeneralCallbackResult) => void

    type ChooseImageSuccessCallback = (
        result: ChooseImageSuccessCallbackResult
    ) => void

    type ClearStorageCompleteCallback = (res: GeneralCallbackResult) => void

    type ClearStorageFailCallback = (res: GeneralCallbackResult) => void

    type ClearStorageSuccessCallback = (res: GeneralCallbackResult) => void

    type CloseBLEConnectionCompleteCallback = (res: BluetoothError) => void

    type CloseBLEConnectionFailCallback = (res: BluetoothError) => void

    type CloseBLEConnectionSuccessCallback = (res: BluetoothError) => void

    type CloseBluetoothAdapterCompleteCallback = (res: BluetoothError) => void

    type CloseBluetoothAdapterFailCallback = (res: BluetoothError) => void

    type CloseBluetoothAdapterSuccessCallback = (res: BluetoothError) => void

    type CloseCompleteCallback = (res: GeneralCallbackResult) => void

    type CloseFailCallback = (res: GeneralCallbackResult) => void

    type CloseSocketCompleteCallback = (res: GeneralCallbackResult) => void

    type CloseSocketFailCallback = (res: GeneralCallbackResult) => void

    type CloseSocketSuccessCallback = (res: GeneralCallbackResult) => void

    type CloseSuccessCallback = (res: GeneralCallbackResult) => void

    type ConnectSocketCompleteCallback = (res: GeneralCallbackResult) => void

    type ConnectSocketFailCallback = (res: GeneralCallbackResult) => void

    type ConnectSocketSuccessCallback = (res: GeneralCallbackResult) => void

    type CopyFileCompleteCallback = (res: GeneralCallbackResult) => void

    type CopyFileFailCallback = (result: CopyFileFailCallbackResult) => void

    type CopyFileSuccessCallback = (res: GeneralCallbackResult) => void

    type CreateBLEConnectionCompleteCallback = (res: BluetoothError) => void

    type CreateBLEConnectionFailCallback = (res: BluetoothError) => void

    type CreateBLEConnectionSuccessCallback = (res: BluetoothError) => void

    type CreateBLEPeripheralServerCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type CreateBLEPeripheralServerFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type CreateBLEPeripheralServerSuccessCallback = (
        result: CreateBLEPeripheralServerSuccessCallbackResult
    ) => void

    type CreateCameraCompleteCallback = (res: GeneralCallbackResult) => void

    type CreateCameraFailCallback = (res: GeneralCallbackResult) => void

    type CreateCameraSuccessCallback = (res: GeneralCallbackResult) => void

    type CreateRoomCompleteCallback = (res: GeneralCallbackResult) => void

    type CreateRoomFailCallback = (res: GeneralCallbackResult) => void

    type CreateRoomSuccessCallback = (
        result: CreateRoomSuccessCallbackResult
    ) => void

    type CustomAdOffErrorCallback = (
        result: CustomAdOnErrorCallbackResult
    ) => void

    type CustomAdOnErrorCallback = (
        result: CustomAdOnErrorCallbackResult
    ) => void

    type DownloadFileCompleteCallback = (res: GeneralCallbackResult) => void

    type DownloadFileFailCallback = (res: GeneralCallbackResult) => void

    type DownloadFileSuccessCallback = (
        result: DownloadFileSuccessCallbackResult
    ) => void

    type DownloadTaskOffProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult
    ) => void

    type DownloadTaskOnProgressUpdateCallback = (
        result: DownloadTaskOnProgressUpdateCallbackResult
    ) => void

    type EndGameCompleteCallback = (res: GeneralCallbackResult) => void

    type EndGameFailCallback = (res: GeneralCallbackResult) => void

    type EndGameSuccessCallback = (res: GeneralCallbackResult) => void

    type EndStateServiceCompleteCallback = (res: GeneralCallbackResult) => void

    type EndStateServiceFailCallback = (res: GeneralCallbackResult) => void

    type EndStateServiceSuccessCallback = (res: GeneralCallbackResult) => void

    type ExitMiniProgramCompleteCallback = (res: GeneralCallbackResult) => void

    type ExitMiniProgramFailCallback = (res: GeneralCallbackResult) => void

    type ExitMiniProgramSuccessCallback = (res: GeneralCallbackResult) => void

    type ExitVoIPChatCompleteCallback = (res: GeneralCallbackResult) => void

    type ExitVoIPChatFailCallback = (res: GeneralCallbackResult) => void

    type ExitVoIPChatSuccessCallback = (res: GeneralCallbackResult) => void

    type FileSystemManagerGetFileInfoFailCallback = (
        result: GetFileInfoFailCallbackResult
    ) => void

    type FileSystemManagerGetFileInfoSuccessCallback = (
        result: FileSystemManagerGetFileInfoSuccessCallbackResult
    ) => void
    type GameBannerOffErrorCallback = (
        result: GameBannerOnErrorCallbackResult
    ) => void
    type GameBannerOffResizeCallback = (res: GeneralCallbackResult) => void
    type GameBannerOnErrorCallback = (
        result: GameBannerOnErrorCallbackResult
    ) => void
    type GameBannerOnResizeCallback = (res: GeneralCallbackResult) => void
    type GameClubButtonOffTapCallback = (res: GeneralCallbackResult) => void
    type GameClubButtonOnTapCallback = (res: GeneralCallbackResult) => void

    type GamePortalOffErrorCallback = (
        result: GamePortalOnErrorCallbackResult
    ) => void

    type GamePortalOnErrorCallback = (
        result: GamePortalOnErrorCallbackResult
    ) => void

    type GetAvailableAudioSourcesCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetAvailableAudioSourcesFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetAvailableAudioSourcesSuccessCallback = (
        result: GetAvailableAudioSourcesSuccessCallbackResult
    ) => void

    type GetBLEDeviceCharacteristicsCompleteCallback = (
        res: BluetoothError
    ) => void

    type GetBLEDeviceCharacteristicsFailCallback = (res: BluetoothError) => void

    type GetBLEDeviceCharacteristicsSuccessCallback = (
        result: GetBLEDeviceCharacteristicsSuccessCallbackResult
    ) => void

    type GetBLEDeviceRSSICompleteCallback = (res: GeneralCallbackResult) => void

    type GetBLEDeviceRSSIFailCallback = (res: GeneralCallbackResult) => void

    type GetBLEDeviceRSSISuccessCallback = (
        result: GetBLEDeviceRSSISuccessCallbackResult
    ) => void

    type GetBLEDeviceServicesCompleteCallback = (res: BluetoothError) => void

    type GetBLEDeviceServicesFailCallback = (res: BluetoothError) => void

    type GetBLEDeviceServicesSuccessCallback = (
        result: GetBLEDeviceServicesSuccessCallbackResult
    ) => void

    type GetBatteryInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetBatteryInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetBatteryInfoSuccessCallback = (
        result: GetBatteryInfoSuccessCallbackResult
    ) => void

    type GetBeaconsCompleteCallback = (res: IBeaconError) => void

    type GetBeaconsFailCallback = (res: IBeaconError) => void

    type GetBeaconsSuccessCallback = (
        result: GetBeaconsSuccessCallbackResult
    ) => void

    type GetBluetoothAdapterStateCompleteCallback = (
        res: BluetoothError
    ) => void

    type GetBluetoothAdapterStateFailCallback = (res: BluetoothError) => void

    type GetBluetoothAdapterStateSuccessCallback = (
        result: GetBluetoothAdapterStateSuccessCallbackResult
    ) => void

    type GetBluetoothDevicesCompleteCallback = (res: BluetoothError) => void

    type GetBluetoothDevicesFailCallback = (res: BluetoothError) => void

    type GetBluetoothDevicesSuccessCallback = (
        result: GetBluetoothDevicesSuccessCallbackResult
    ) => void

    type GetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void

    type GetClipboardDataFailCallback = (res: GeneralCallbackResult) => void

    type GetClipboardDataSuccessCallback = (
        option: GetClipboardDataSuccessCallbackOption
    ) => void

    type GetConnectedBluetoothDevicesCompleteCallback = (
        res: BluetoothError
    ) => void

    type GetConnectedBluetoothDevicesFailCallback = (
        res: BluetoothError
    ) => void

    type GetConnectedBluetoothDevicesSuccessCallback = (
        result: GetConnectedBluetoothDevicesSuccessCallbackResult
    ) => void

    type GetExtConfigCompleteCallback = (res: GeneralCallbackResult) => void

    type GetExtConfigFailCallback = (res: GeneralCallbackResult) => void

    type GetExtConfigSuccessCallback = (
        result: GetExtConfigSuccessCallbackResult
    ) => void

    type GetFileInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetFriendCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetFriendCloudStorageFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetFriendCloudStorageSuccessCallback = (
        result: GetFriendCloudStorageSuccessCallbackResult
    ) => void

    type GetFriendsStateDataCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetFriendsStateDataFailCallback = (res: GeneralCallbackResult) => void

    type GetFriendsStateDataSuccessCallback = (result: Res) => void

    type GetGroupCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetGroupCloudStorageFailCallback = (res: GeneralCallbackResult) => void

    type GetGroupCloudStorageSuccessCallback = (
        result: GetGroupCloudStorageSuccessCallbackResult
    ) => void

    type GetGroupEnterInfoCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetGroupEnterInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetGroupEnterInfoSuccessCallback = (
        result: GetGroupEnterInfoSuccessCallbackResult
    ) => void

    type GetGroupInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetGroupInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetGroupInfoSuccessCallback = (
        result: GetGroupInfoSuccessCallbackResult
    ) => void

    type GetLastRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetLastRoomInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetLastRoomInfoSuccessCallback = (
        result: GetLastRoomInfoSuccessCallbackResult
    ) => void

    type GetLocationCompleteCallback = (res: GeneralCallbackResult) => void

    type GetLocationFailCallback = (res: GeneralCallbackResult) => void

    type GetLocationSuccessCallback = (
        result: GetLocationSuccessCallbackResult
    ) => void

    type GetLostFramesCompleteCallback = (res: GeneralCallbackResult) => void

    type GetLostFramesFailCallback = (res: GeneralCallbackResult) => void

    type GetLostFramesSuccessCallback = (
        result: GetLostFramesSuccessCallbackResult
    ) => void

    type GetNetworkTypeCompleteCallback = (res: GeneralCallbackResult) => void

    type GetNetworkTypeFailCallback = (res: GeneralCallbackResult) => void

    type GetNetworkTypeSuccessCallback = (
        result: GetNetworkTypeSuccessCallbackResult
    ) => void

    type GetPotentialFriendListCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetPotentialFriendListFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetPotentialFriendListSuccessCallback = (
        result: GetPotentialFriendListSuccessCallbackResult
    ) => void

    type GetRoomInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetRoomInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetRoomInfoSuccessCallback = (
        result: GetRoomInfoSuccessCallbackResult
    ) => void

    type GetSavedFileListCompleteCallback = (res: GeneralCallbackResult) => void

    type GetSavedFileListFailCallback = (res: GeneralCallbackResult) => void

    type GetSavedFileListSuccessCallback = (
        result: GetSavedFileListSuccessCallbackResult
    ) => void

    type GetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void

    type GetScreenBrightnessSuccessCallback = (
        option: GetScreenBrightnessSuccessCallbackOption
    ) => void

    type GetSettingCompleteCallback = (res: GeneralCallbackResult) => void

    type GetSettingFailCallback = (res: GeneralCallbackResult) => void

    type GetSettingSuccessCallback = (
        result: GetSettingSuccessCallbackResult
    ) => void

    type GetShareInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetShareInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetShareInfoSuccessCallback = (
        result: GetGroupEnterInfoSuccessCallbackResult
    ) => void

    type GetStorageCompleteCallback = (res: GeneralCallbackResult) => void

    type GetStorageFailCallback = (res: GeneralCallbackResult) => void

    type GetStorageInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetStorageInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetStorageInfoSuccessCallback = (
        option: GetStorageInfoSuccessCallbackOption
    ) => void

    type GetStorageSuccessCallback<T = any> = (
        result: GetStorageSuccessCallbackResult<T>
    ) => void

    type GetSystemInfoAsyncCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetSystemInfoAsyncFailCallback = (res: GeneralCallbackResult) => void

    type GetSystemInfoAsyncSuccessCallback = (result: SystemInfo) => void

    type GetSystemInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetSystemInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetSystemInfoSuccessCallback = (result: SystemInfo) => void

    type GetTextLineHeightCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetTextLineHeightFailCallback = (res: GeneralCallbackResult) => void

    type GetTextLineHeightSuccessCallback = (res: GeneralCallbackResult) => void

    type GetUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void

    type GetUserCloudStorageKeysCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetUserCloudStorageKeysFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetUserCloudStorageKeysSuccessCallback = (
        result: GetUserCloudStorageKeysSuccessCallbackResult
    ) => void

    type GetUserCloudStorageSuccessCallback = (
        result: GetUserCloudStorageSuccessCallbackResult
    ) => void

    type GetUserInfoCompleteCallback = (res: GeneralCallbackResult) => void

    type GetUserInfoFailCallback = (res: GeneralCallbackResult) => void

    type GetUserInfoSuccessCallback = (
        result: GetUserInfoSuccessCallbackResult
    ) => void

    type GetUserInteractiveStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type GetUserInteractiveStorageFailCallback = (
        result: GetUserInteractiveStorageFailCallbackResult
    ) => void

    type GetUserInteractiveStorageSuccessCallback = (
        result: GetUserInteractiveStorageSuccessCallbackResult,
        iv: string
    ) => void

    type GetUserProfileCompleteCallback = (res: GeneralCallbackResult) => void

    type GetUserProfileFailCallback = (res: GeneralCallbackResult) => void

    type GetUserProfileSuccessCallback = (
        result: GetUserProfileSuccessCallbackResult
    ) => void

    type GetWeRunDataCompleteCallback = (res: GeneralCallbackResult) => void

    type GetWeRunDataFailCallback = (res: GeneralCallbackResult) => void

    type GetWeRunDataSuccessCallback = (
        result: GetWeRunDataSuccessCallbackResult
    ) => void

    type HideKeyboardCompleteCallback = (res: GeneralCallbackResult) => void

    type HideKeyboardFailCallback = (res: GeneralCallbackResult) => void

    type HideKeyboardSuccessCallback = (res: GeneralCallbackResult) => void

    type HideLoadingCompleteCallback = (res: GeneralCallbackResult) => void

    type HideLoadingFailCallback = (res: GeneralCallbackResult) => void

    type HideLoadingSuccessCallback = (res: GeneralCallbackResult) => void

    type HideShareMenuCompleteCallback = (res: GeneralCallbackResult) => void

    type HideShareMenuFailCallback = (res: GeneralCallbackResult) => void

    type HideShareMenuSuccessCallback = (res: GeneralCallbackResult) => void

    type HideToastCompleteCallback = (res: GeneralCallbackResult) => void

    type HideToastFailCallback = (res: GeneralCallbackResult) => void

    type HideToastSuccessCallback = (res: GeneralCallbackResult) => void

    type InnerAudioContextOffErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult
    ) => void

    type InnerAudioContextOffTimeUpdateCallback = (
        res: GeneralCallbackResult
    ) => void

    type InnerAudioContextOnErrorCallback = (
        result: InnerAudioContextOnErrorCallbackResult
    ) => void

    type InnerAudioContextOnStopCallback = (res: GeneralCallbackResult) => void

    type InnerAudioContextOnTimeUpdateCallback = (
        res: GeneralCallbackResult
    ) => void

    type InterstitialAdOffErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult
    ) => void

    type InterstitialAdOnErrorCallback = (
        result: InterstitialAdOnErrorCallbackResult
    ) => void

    type InviteFriendCompleteCallback = (res: GeneralCallbackResult) => void

    type InviteFriendFailCallback = (res: GeneralCallbackResult) => void

    type InviteFriendSuccessCallback = (res: GeneralCallbackResult) => void

    type JoinRoomCompleteCallback = (res: GeneralCallbackResult) => void

    type JoinRoomFailCallback = (res: GeneralCallbackResult) => void

    type JoinRoomSuccessCallback = (
        result: JoinRoomSuccessCallbackResult
    ) => void

    type JoinVoIPChatCompleteCallback = (res: JoinVoIPChatError) => void

    type JoinVoIPChatFailCallback = (res: JoinVoIPChatError) => void

    type JoinVoIPChatSuccessCallback = (
        result: JoinVoIPChatSuccessCallbackResult
    ) => void

    type KickoutMemberCompleteCallback = (res: GeneralCallbackResult) => void

    type KickoutMemberFailCallback = (res: GeneralCallbackResult) => void

    type KickoutMemberSuccessCallback = (res: GeneralCallbackResult) => void

    type LoadSubpackageTaskOnProgressUpdateCallback = (
        result: LoadSubpackageTaskOnProgressUpdateCallbackResult
    ) => void

    type LoginCompleteCallback = (res: GeneralCallbackResult) => void

    type LoginFailCallback = (res: GeneralCallbackResult) => void

    type LoginSuccessCallback = (result: LoginSuccessCallbackResult) => void

    type MakeBluetoothPairCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type MakeBluetoothPairFailCallback = (res: GeneralCallbackResult) => void

    type MakeBluetoothPairSuccessCallback = (res: GeneralCallbackResult) => void

    type MemberLeaveRoomCompleteCallback = (res: GeneralCallbackResult) => void

    type MemberLeaveRoomFailCallback = (res: GeneralCallbackResult) => void

    type MemberLeaveRoomSuccessCallback = (res: GeneralCallbackResult) => void

    type MkdirCompleteCallback = (res: GeneralCallbackResult) => void

    type MkdirFailCallback = (result: MkdirFailCallbackResult) => void

    type MkdirSuccessCallback = (res: GeneralCallbackResult) => void

    type ModifyFriendInteractiveStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type ModifyFriendInteractiveStorageFailCallback = (
        result: ModifyFriendInteractiveStorageFailCallbackResult
    ) => void

    type ModifyFriendInteractiveStorageSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type NavigateToMiniProgramCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type NavigateToMiniProgramFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type NavigateToMiniProgramSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type NotifyBLECharacteristicValueChangeCompleteCallback = (
        res: BluetoothError
    ) => void

    type NotifyBLECharacteristicValueChangeFailCallback = (
        res: BluetoothError
    ) => void

    type NotifyBLECharacteristicValueChangeSuccessCallback = (
        res: BluetoothError
    ) => void

    type OffAddToFavoritesCallback = (
        result: OnAddToFavoritesCallbackResult
    ) => void

    type OffAudioInterruptionBeginCallback = (
        res: GeneralCallbackResult
    ) => void

    type OffAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void

    type OffBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedCallbackResult
    ) => void

    type OffBeKickedOutCallback = (result: OnBeKickedOutCallbackResult) => void

    type OffBeaconServiceChangeCallback = (res: GeneralCallbackResult) => void

    type OffBeaconUpdateCallback = (res: GeneralCallbackResult) => void

    type OffBroadcastCallback = (result: OnBroadcastCallbackResult) => void

    type OffCanplayCallback = (res: GeneralCallbackResult) => void

    type OffCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestCallbackResult
    ) => void

    type OffCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void

    type OffCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void

    type OffCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestCallbackResult
    ) => void

    type OffCopyUrlCallback = (result: OnCopyUrlCallbackResult) => void

    type OffDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeCallbackResult
    ) => void

    type OffDisconnectCallback = (
        result: GameServerManagerOnDisconnectCallbackResult
    ) => void
    type OffEndedCallback = (res: GeneralCallbackResult) => void

    type OffGameEndCallback = (result: OnGameEndCallbackResult) => void

    type OffGameStartCallback = (res: GeneralCallbackResult) => void

    type OffHandoffCallback = (result: OnHandoffCallbackResult) => void

    type OffHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult
    ) => void
    type OffHideCallback = (res: GeneralCallbackResult) => void

    type OffInviteCallback = (result: OnInviteCallbackResult) => void

    type OffKeyDownCallback = (result: OnKeyDownCallbackResult) => void

    type OffKeyUpCallback = (result: OnKeyDownCallbackResult) => void

    type OffKeyboardCompleteCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void

    type OffKeyboardConfirmCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void

    type OffKeyboardInputCallback = (
        result: OnKeyboardInputCallbackResult
    ) => void

    type OffListeningCallback = (res: GeneralCallbackResult) => void
    type OffLoadCallback = (res: GeneralCallbackResult) => void

    type OffLockStepErrorCallback = (
        result: OnLockStepErrorCallbackResult
    ) => void

    type OffLogoutCallback = (res: GeneralCallbackResult) => void

    type OffMatchCallback = (
        result: GameServerManagerOnMatchCallbackResult
    ) => void

    type OffMessageCallback = (result: UDPSocketOnMessageCallbackResult) => void

    type OffMouseDownCallback = (result: OnMouseDownCallbackResult) => void

    type OffMouseMoveCallback = (result: OnMouseMoveCallbackResult) => void

    type OffMouseUpCallback = (result: OnMouseDownCallbackResult) => void
    type OffPauseCallback = (res: GeneralCallbackResult) => void
    type OffPlayCallback = (res: GeneralCallbackResult) => void

    type OffProgressCallback = (result: OnProgressCallbackResult) => void

    type OffRoomInfoChangeCallback = (
        result: GameServerManagerOnRoomInfoChangeCallbackResult
    ) => void

    type OffSeekedCallback = (res: GeneralCallbackResult) => void

    type OffSeekingCallback = (res: GeneralCallbackResult) => void

    type OffShareAppMessageCallback = (
        result: OnShareAppMessageCallbackResult
    ) => void

    type OffShareTimelineCallback = (
        result: OnShareTimelineCallbackResult
    ) => void

    type OffShowCallback = (result: OnShowCallbackResult) => void

    type OffStateUpdateCallback = (
        result: GameServerManagerOnStateUpdateCallbackResult
    ) => void

    type OffStopCallback = (res: GeneralCallbackResult) => void

    type OffSyncFrameCallback = (result: OnSyncFrameCallbackResult) => void

    type OffTouchCancelCallback = (result: OnTouchStartCallbackResult) => void

    type OffTouchEndCallback = (result: OnTouchStartCallbackResult) => void

    type OffTouchMoveCallback = (result: OnTouchStartCallbackResult) => void

    type OffTouchStartCallback = (result: OnTouchStartCallbackResult) => void

    type OffUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult
    ) => void
    type OffWaitingCallback = (res: GeneralCallbackResult) => void

    type OffWheelCallback = (result: OnWheelCallbackResult) => void

    type OffWindowResizeCallback = (
        result: OnWindowResizeCallbackResult
    ) => void

    type OnAccelerometerChangeCallback = (
        result: OnAccelerometerChangeCallbackResult
    ) => void

    type OnAddToFavoritesCallback = (
        result: OnAddToFavoritesCallbackResult
    ) => void

    type OnAudioInterruptionBeginCallback = (res: GeneralCallbackResult) => void

    type OnAudioInterruptionEndCallback = (res: GeneralCallbackResult) => void

    type OnBLECharacteristicValueChangeCallback = (
        result: OnBLECharacteristicValueChangeCallbackResult
    ) => void

    type OnBLEConnectionStateChangeCallback = (
        result: OnBLEConnectionStateChangeCallbackResult
    ) => void

    type OnBLEPeripheralConnectionStateChangedCallback = (
        result: OnBLEPeripheralConnectionStateChangedCallbackResult
    ) => void

    type OnBeKickedOutCallback = (result: OnBeKickedOutCallbackResult) => void

    type OnBeaconServiceChangeCallback = (
        result: OnBeaconServiceChangeCallbackResult
    ) => void

    type OnBeaconUpdateCallback = (result: OnBeaconUpdateCallbackResult) => void

    type OnBluetoothAdapterStateChangeCallback = (
        result: OnBluetoothAdapterStateChangeCallbackResult
    ) => void

    type OnBluetoothDeviceFoundCallback = (
        result: OnBluetoothDeviceFoundCallbackResult
    ) => void

    type OnBroadcastCallback = (result: OnBroadcastCallbackResult) => void

    type OnCameraFrameCallback = (result: OnCameraFrameCallbackResult) => void

    type OnCanplayCallback = (res: GeneralCallbackResult) => void

    type OnCharacteristicReadRequestCallback = (
        result: OnCharacteristicReadRequestCallbackResult
    ) => void

    type OnCharacteristicSubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void

    type OnCharacteristicUnsubscribedCallback = (
        result: OnCharacteristicSubscribedCallbackResult
    ) => void

    type OnCharacteristicWriteRequestCallback = (
        result: OnCharacteristicWriteRequestCallbackResult
    ) => void

    type OnCheckForUpdateCallback = (
        result: OnCheckForUpdateCallbackResult
    ) => void

    type OnCompassChangeCallback = (
        result: OnCompassChangeCallbackResult
    ) => void

    type OnCopyUrlCallback = (result: OnCopyUrlCallbackResult) => void

    type OnDeviceMotionChangeCallback = (
        result: OnDeviceMotionChangeCallbackResult
    ) => void

    type OnDeviceOrientationChangeCallback = (
        result: OnDeviceOrientationChangeCallbackResult
    ) => void

    type OnDisconnectCallback = (
        result: GameServerManagerOnDisconnectCallbackResult
    ) => void
    type OnEndedCallback = (res: GeneralCallbackResult) => void

    type OnFrameRecordedCallback = (
        result: OnFrameRecordedCallbackResult
    ) => void

    type OnGameEndCallback = (result: OnGameEndCallbackResult) => void

    type OnGameStartCallback = (res: GeneralCallbackResult) => void

    type OnGyroscopeChangeCallback = (
        result: OnGyroscopeChangeCallbackResult
    ) => void

    type OnHandoffCallback = (result: OnHandoffCallbackResult) => void

    type OnHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult
    ) => void
    type OnHideCallback = (res: GeneralCallbackResult) => void

    type OnInterruptionBeginCallback = (res: GeneralCallbackResult) => void

    type OnInterruptionEndCallback = (res: GeneralCallbackResult) => void

    type OnInviteCallback = (result: OnInviteCallbackResult) => void

    type OnKeyDownCallback = (result: OnKeyDownCallbackResult) => void

    type OnKeyUpCallback = (result: OnKeyDownCallbackResult) => void

    type OnKeyboardCompleteCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void

    type OnKeyboardConfirmCallback = (
        result: OnKeyboardConfirmCallbackResult
    ) => void

    type OnKeyboardInputCallback = (
        result: OnKeyboardInputCallbackResult
    ) => void

    type OnListeningCallback = (res: GeneralCallbackResult) => void
    type OnLoadCallback = (res: GeneralCallbackResult) => void

    type OnLockStepErrorCallback = (
        result: OnLockStepErrorCallbackResult
    ) => void

    type OnLogoutCallback = (res: GeneralCallbackResult) => void

    type OnMatchCallback = (
        result: GameServerManagerOnMatchCallbackResult
    ) => void

    type OnMemoryWarningCallback = (
        result: OnMemoryWarningCallbackResult
    ) => void

    type OnMouseDownCallback = (result: OnMouseDownCallbackResult) => void

    type OnMouseMoveCallback = (result: OnMouseMoveCallbackResult) => void

    type OnMouseUpCallback = (result: OnMouseDownCallbackResult) => void

    type OnNetworkStatusChangeCallback = (
        result: OnNetworkStatusChangeCallbackResult
    ) => void

    type OnOpenCallback = (result: OnOpenCallbackResult) => void
    type OnPauseCallback = (res: GeneralCallbackResult) => void
    type OnPlayCallback = (res: GeneralCallbackResult) => void

    type OnProcessKilledCallback = (res: GeneralCallbackResult) => void

    type OnProgressCallback = (result: OnProgressCallbackResult) => void

    type OnResumeCallback = (res: GeneralCallbackResult) => void

    type OnRoomInfoChangeCallback = (
        result: GameServerManagerOnRoomInfoChangeCallbackResult
    ) => void

    type OnSeekedCallback = (res: GeneralCallbackResult) => void

    type OnSeekingCallback = (res: GeneralCallbackResult) => void

    type OnShareAppMessageCallback = (
        result: OnShareAppMessageCallbackResult
    ) => void

    type OnShareMessageToFriendCallback = (
        result: OnShareMessageToFriendCallbackResult
    ) => void

    type OnShareTimelineCallback = (
        result: OnShareTimelineCallbackResult
    ) => void

    type OnShowCallback = (result: OnShowCallbackResult) => void

    type OnSocketCloseCallback = (
        result: SocketTaskOnCloseCallbackResult
    ) => void

    type OnSocketErrorCallback = (
        result: UDPSocketOnErrorCallbackResult
    ) => void

    type OnSocketMessageCallback = (
        result: SocketTaskOnMessageCallbackResult
    ) => void

    type OnSocketOpenCallback = (result: OnSocketOpenCallbackResult) => void

    type OnStartCallback = (res: GeneralCallbackResult) => void

    type OnStateUpdateCallback = (
        result: GameServerManagerOnStateUpdateCallbackResult
    ) => void

    type OnSyncFrameCallback = (result: OnSyncFrameCallbackResult) => void

    type OnTouchCancelCallback = (result: OnTouchStartCallbackResult) => void

    type OnTouchEndCallback = (result: OnTouchStartCallbackResult) => void

    type OnTouchMoveCallback = (result: OnTouchStartCallbackResult) => void

    type OnTouchStartCallback = (result: OnTouchStartCallbackResult) => void

    type OnUnhandledRejectionCallback = (
        result: OnUnhandledRejectionCallbackResult
    ) => void

    type OnUpdateFailedCallback = (res: GeneralCallbackResult) => void

    type OnUpdateReadyCallback = (res: GeneralCallbackResult) => void

    type OnUserCaptureScreenCallback = (res: GeneralCallbackResult) => void

    type OnVoIPChatInterruptedCallback = (
        result: OnVoIPChatInterruptedCallbackResult
    ) => void

    type OnVoIPChatMembersChangedCallback = (
        result: OnVoIPChatMembersChangedCallbackResult
    ) => void

    type OnVoIPChatSpeakersChangedCallback = (
        result: OnVoIPChatSpeakersChangedCallbackResult
    ) => void
    type OnWaitingCallback = (res: GeneralCallbackResult) => void

    type OnWheelCallback = (result: OnWheelCallbackResult) => void

    type OnWindowResizeCallback = (result: OnWindowResizeCallbackResult) => void

    type OpenBluetoothAdapterCompleteCallback = (res: BluetoothError) => void

    type OpenBluetoothAdapterFailCallback = (res: BluetoothError) => void

    type OpenBluetoothAdapterSuccessCallback = (res: BluetoothError) => void

    type OpenCardCompleteCallback = (res: GeneralCallbackResult) => void

    type OpenCardFailCallback = (res: GeneralCallbackResult) => void

    type OpenCardSuccessCallback = (res: GeneralCallbackResult) => void

    type OpenCustomerServiceConversationCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type OpenCustomerServiceConversationFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type OpenCustomerServiceConversationSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type OpenSettingCompleteCallback = (res: GeneralCallbackResult) => void

    type OpenSettingFailCallback = (res: GeneralCallbackResult) => void

    type OpenSettingSuccessCallback = (
        result: OpenSettingSuccessCallbackResult
    ) => void

    type OwnerLeaveRoomCompleteCallback = (res: GeneralCallbackResult) => void

    type OwnerLeaveRoomFailCallback = (res: GeneralCallbackResult) => void

    type OwnerLeaveRoomSuccessCallback = (res: GeneralCallbackResult) => void

    type PreviewImageCompleteCallback = (res: GeneralCallbackResult) => void

    type PreviewImageFailCallback = (res: GeneralCallbackResult) => void

    type PreviewImageSuccessCallback = (res: GeneralCallbackResult) => void

    type PreviewMediaCompleteCallback = (res: GeneralCallbackResult) => void

    type PreviewMediaFailCallback = (res: GeneralCallbackResult) => void

    type PreviewMediaSuccessCallback = (res: GeneralCallbackResult) => void

    type ReadBLECharacteristicValueCompleteCallback = (
        res: BluetoothError
    ) => void

    type ReadBLECharacteristicValueFailCallback = (res: BluetoothError) => void

    type ReadBLECharacteristicValueSuccessCallback = (
        res: BluetoothError
    ) => void

    type ReadFileCompleteCallback = (res: GeneralCallbackResult) => void

    type ReadFileFailCallback = (result: ReadFileFailCallbackResult) => void

    type ReadFileSuccessCallback = (
        result: ReadFileSuccessCallbackResult
    ) => void

    type ReaddirCompleteCallback = (res: GeneralCallbackResult) => void

    type ReaddirFailCallback = (result: ReaddirFailCallbackResult) => void

    type ReaddirSuccessCallback = (result: ReaddirSuccessCallbackResult) => void

    type ReconnectCompleteCallback = (res: GeneralCallbackResult) => void

    type ReconnectFailCallback = (res: GeneralCallbackResult) => void

    type ReconnectSuccessCallback = (
        result: ReconnectSuccessCallbackResult
    ) => void

    type RecorderManagerOnStopCallback = (result: OnStopCallbackResult) => void

    type RemoveSavedFileCompleteCallback = (res: GeneralCallbackResult) => void

    type RemoveSavedFileFailCallback = (
        result: RemoveSavedFileFailCallbackResult
    ) => void

    type RemoveSavedFileSuccessCallback = (res: GeneralCallbackResult) => void

    type RemoveServiceCompleteCallback = (res: GeneralCallbackResult) => void

    type RemoveServiceFailCallback = (res: GeneralCallbackResult) => void

    type RemoveServiceSuccessCallback = (res: GeneralCallbackResult) => void

    type RemoveStorageCompleteCallback = (res: GeneralCallbackResult) => void

    type RemoveStorageFailCallback = (res: GeneralCallbackResult) => void

    type RemoveStorageSuccessCallback = (res: GeneralCallbackResult) => void

    type RemoveUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type RemoveUserCloudStorageFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type RemoveUserCloudStorageSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type RenameCompleteCallback = (res: GeneralCallbackResult) => void

    type RenameFailCallback = (result: RenameFailCallbackResult) => void

    type RenameSuccessCallback = (res: GeneralCallbackResult) => void

    type RequestCompleteCallback = (res: GeneralCallbackResult) => void

    type RequestFailCallback = (res: GeneralCallbackResult) => void

    type RequestMidasFriendPaymentCompleteCallback = (
        res: MidasFriendPaymentError
    ) => void

    type RequestMidasFriendPaymentFailCallback = (
        res: MidasFriendPaymentError
    ) => void

    type RequestMidasFriendPaymentSuccessCallback = (
        res: MidasFriendPaymentError
    ) => void

    type RequestMidasPaymentCompleteCallback = (res: MidasPaymentError) => void

    type RequestMidasPaymentFailCallback = (res: MidasPaymentError) => void

    type RequestMidasPaymentSuccessCallback = (res: MidasPaymentError) => void

    type RequestSubscribeMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type RequestSubscribeMessageFailCallback = (
        result: RequestSubscribeMessageFailCallbackResult
    ) => void

    type RequestSubscribeMessageSuccessCallback = (
        result: RequestSubscribeMessageSuccessCallbackResult
    ) => void

    type RequestSubscribeSystemMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type RequestSubscribeSystemMessageFailCallback = (
        result: RequestSubscribeMessageFailCallbackResult
    ) => void

    type RequestSubscribeSystemMessageSuccessCallback = (
        result: RequestSubscribeSystemMessageSuccessCallbackResult
    ) => void

    type RequestSuccessCallback<T extends string | IAnyObject | ArrayBuffer =
            | string
        | IAnyObject
        | ArrayBuffer> = (result: RequestSuccessCallbackResult<T>) => void

    type RestartCompleteCallback = (res: GeneralCallbackResult) => void

    type RestartFailCallback = (res: GeneralCallbackResult) => void

    type RestartSuccessCallback = (res: GeneralCallbackResult) => void

    type RewardedVideoAdOffCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult
    ) => void

    type RewardedVideoAdOnCloseCallback = (
        result: RewardedVideoAdOnCloseCallbackResult
    ) => void

    type RmdirCompleteCallback = (res: GeneralCallbackResult) => void

    type RmdirFailCallback = (result: RmdirFailCallbackResult) => void

    type RmdirSuccessCallback = (res: GeneralCallbackResult) => void

    type SaveFileCompleteCallback = (res: GeneralCallbackResult) => void

    type SaveFileFailCallback = (result: SaveFileFailCallbackResult) => void

    type SaveFileSuccessCallback = (
        result: SaveFileSuccessCallbackResult
    ) => void

    type SaveFileToDiskCompleteCallback = (res: GeneralCallbackResult) => void

    type SaveFileToDiskFailCallback = (res: GeneralCallbackResult) => void

    type SaveFileToDiskSuccessCallback = (res: GeneralCallbackResult) => void

    type SaveImageToPhotosAlbumCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type SaveImageToPhotosAlbumFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type SaveImageToPhotosAlbumSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type SendCompleteCallback = (res: GeneralCallbackResult) => void

    type SendFailCallback = (res: GeneralCallbackResult) => void

    type SendSocketMessageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type SendSocketMessageFailCallback = (res: GeneralCallbackResult) => void

    type SendSocketMessageSuccessCallback = (res: GeneralCallbackResult) => void

    type SendSuccessCallback = (res: GeneralCallbackResult) => void

    type SetBLEMTUCompleteCallback = (res: GeneralCallbackResult) => void

    type SetBLEMTUFailCallback = (res: GeneralCallbackResult) => void

    type SetBLEMTUSuccessCallback = (res: GeneralCallbackResult) => void

    type SetClipboardDataCompleteCallback = (res: GeneralCallbackResult) => void

    type SetClipboardDataFailCallback = (res: GeneralCallbackResult) => void

    type SetClipboardDataSuccessCallback = (res: GeneralCallbackResult) => void

    type SetEnableDebugCompleteCallback = (res: GeneralCallbackResult) => void

    type SetEnableDebugFailCallback = (res: GeneralCallbackResult) => void

    type SetEnableDebugSuccessCallback = (res: GeneralCallbackResult) => void

    type SetInnerAudioOptionCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetInnerAudioOptionFailCallback = (res: GeneralCallbackResult) => void

    type SetInnerAudioOptionSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetKeepScreenOnCompleteCallback = (res: GeneralCallbackResult) => void

    type SetKeepScreenOnFailCallback = (res: GeneralCallbackResult) => void

    type SetKeepScreenOnSuccessCallback = (res: GeneralCallbackResult) => void

    type SetMenuStyleCompleteCallback = (res: GeneralCallbackResult) => void

    type SetMenuStyleFailCallback = (res: GeneralCallbackResult) => void

    type SetMenuStyleSuccessCallback = (res: GeneralCallbackResult) => void

    type SetScreenBrightnessCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetScreenBrightnessFailCallback = (res: GeneralCallbackResult) => void

    type SetScreenBrightnessSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetStateCompleteCallback = (res: GeneralCallbackResult) => void

    type SetStateFailCallback = (res: GeneralCallbackResult) => void

    type SetStateSuccessCallback = (res: GeneralCallbackResult) => void

    type SetStatusBarStyleCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetStatusBarStyleFailCallback = (res: GeneralCallbackResult) => void

    type SetStatusBarStyleSuccessCallback = (res: GeneralCallbackResult) => void

    type SetStorageCompleteCallback = (res: GeneralCallbackResult) => void

    type SetStorageFailCallback = (res: GeneralCallbackResult) => void

    type SetStorageSuccessCallback = (res: GeneralCallbackResult) => void

    type SetUserCloudStorageCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetUserCloudStorageFailCallback = (res: GeneralCallbackResult) => void

    type SetUserCloudStorageSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type SetWindowSizeCompleteCallback = (res: GeneralCallbackResult) => void

    type SetWindowSizeFailCallback = (res: GeneralCallbackResult) => void

    type SetWindowSizeSuccessCallback = (res: GeneralCallbackResult) => void

    type ShareMessageToFriendCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type ShareMessageToFriendFailCallback = (res: GeneralCallbackResult) => void

    type ShareMessageToFriendSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type ShowActionSheetCompleteCallback = (res: GeneralCallbackResult) => void

    type ShowActionSheetFailCallback = (res: GeneralCallbackResult) => void

    type ShowActionSheetSuccessCallback = (
        result: ShowActionSheetSuccessCallbackResult
    ) => void

    type ShowKeyboardCompleteCallback = (res: GeneralCallbackResult) => void

    type ShowKeyboardFailCallback = (res: GeneralCallbackResult) => void

    type ShowKeyboardSuccessCallback = (res: GeneralCallbackResult) => void

    type ShowLoadingCompleteCallback = (res: GeneralCallbackResult) => void

    type ShowLoadingFailCallback = (res: GeneralCallbackResult) => void

    type ShowLoadingSuccessCallback = (res: GeneralCallbackResult) => void

    type ShowModalCompleteCallback = (res: GeneralCallbackResult) => void

    type ShowModalFailCallback = (res: GeneralCallbackResult) => void

    type ShowModalSuccessCallback = (
        result: ShowModalSuccessCallbackResult
    ) => void

    type ShowShareImageMenuCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type ShowShareImageMenuFailCallback = (res: GeneralCallbackResult) => void

    type ShowShareImageMenuSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type ShowShareMenuCompleteCallback = (res: GeneralCallbackResult) => void

    type ShowShareMenuFailCallback = (res: GeneralCallbackResult) => void

    type ShowShareMenuSuccessCallback = (res: GeneralCallbackResult) => void

    type ShowToastCompleteCallback = (res: GeneralCallbackResult) => void

    type ShowToastFailCallback = (res: GeneralCallbackResult) => void

    type ShowToastSuccessCallback = (res: GeneralCallbackResult) => void

    type SocketTaskOnCloseCallback = (
        result: SocketTaskOnCloseCallbackResult
    ) => void

    type SocketTaskOnMessageCallback = (
        result: SocketTaskOnMessageCallbackResult
    ) => void

    type StartAccelerometerCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type StartAccelerometerFailCallback = (res: GeneralCallbackResult) => void

    type StartAccelerometerSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type StartAdvertisingCompleteCallback = (res: GeneralCallbackResult) => void

    type StartAdvertisingFailCallback = (res: GeneralCallbackResult) => void

    type StartAdvertisingSuccessCallback = (res: GeneralCallbackResult) => void

    type StartBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void

    type StartBeaconDiscoveryFailCallback = (res: IBeaconError) => void

    type StartBeaconDiscoverySuccessCallback = (res: IBeaconError) => void

    type StartBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError
    ) => void

    type StartBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError
    ) => void

    type StartBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError
    ) => void

    type StartCompassCompleteCallback = (res: GeneralCallbackResult) => void

    type StartCompassFailCallback = (res: GeneralCallbackResult) => void

    type StartCompassSuccessCallback = (res: GeneralCallbackResult) => void

    type StartDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type StartDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type StartDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type StartGameCompleteCallback = (res: GeneralCallbackResult) => void

    type StartGameFailCallback = (res: GeneralCallbackResult) => void

    type StartGameSuccessCallback = (res: GeneralCallbackResult) => void

    type StartGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void

    type StartGyroscopeFailCallback = (res: GeneralCallbackResult) => void

    type StartGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void

    type StartHandoffCompleteCallback = (res: GeneralCallbackResult) => void

    type StartHandoffFailCallback = (res: GeneralCallbackResult) => void

    type StartHandoffSuccessCallback = (res: GeneralCallbackResult) => void

    type StartMatchCompleteCallback = (res: GeneralCallbackResult) => void

    type StartMatchFailCallback = (res: GeneralCallbackResult) => void

    type StartMatchSuccessCallback = (res: GeneralCallbackResult) => void

    type StartStateServiceCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type StartStateServiceFailCallback = (res: GeneralCallbackResult) => void

    type StartStateServiceSuccessCallback = (res: GeneralCallbackResult) => void

    type StatCompleteCallback = (res: GeneralCallbackResult) => void

    type StatFailCallback = (result: StatFailCallbackResult) => void

    type StatSuccessCallback = (result: StatSuccessCallbackResult) => void

    type StopAccelerometerCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type StopAccelerometerFailCallback = (res: GeneralCallbackResult) => void

    type StopAccelerometerSuccessCallback = (res: GeneralCallbackResult) => void

    type StopAdvertisingCompleteCallback = (res: GeneralCallbackResult) => void

    type StopAdvertisingFailCallback = (res: GeneralCallbackResult) => void

    type StopAdvertisingSuccessCallback = (res: GeneralCallbackResult) => void

    type StopBeaconDiscoveryCompleteCallback = (res: IBeaconError) => void

    type StopBeaconDiscoveryFailCallback = (res: IBeaconError) => void

    type StopBeaconDiscoverySuccessCallback = (res: IBeaconError) => void

    type StopBluetoothDevicesDiscoveryCompleteCallback = (
        res: BluetoothError
    ) => void

    type StopBluetoothDevicesDiscoveryFailCallback = (
        res: BluetoothError
    ) => void

    type StopBluetoothDevicesDiscoverySuccessCallback = (
        res: BluetoothError
    ) => void

    type StopCompassCompleteCallback = (res: GeneralCallbackResult) => void

    type StopCompassFailCallback = (res: GeneralCallbackResult) => void

    type StopCompassSuccessCallback = (res: GeneralCallbackResult) => void

    type StopDeviceMotionListeningCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type StopDeviceMotionListeningFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type StopDeviceMotionListeningSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type StopGyroscopeCompleteCallback = (res: GeneralCallbackResult) => void

    type StopGyroscopeFailCallback = (res: GeneralCallbackResult) => void

    type StopGyroscopeSuccessCallback = (res: GeneralCallbackResult) => void

    type ToTempFilePathCompleteCallback = (res: GeneralCallbackResult) => void

    type ToTempFilePathFailCallback = (res: GeneralCallbackResult) => void

    type ToTempFilePathSuccessCallback = (
        result: ToTempFilePathSuccessCallbackResult
    ) => void
    type UDPSocketOffCloseCallback = (res: GeneralCallbackResult) => void

    type UDPSocketOffErrorCallback = (
        result: UDPSocketOnErrorCallbackResult
    ) => void
    type UDPSocketOnCloseCallback = (res: GeneralCallbackResult) => void
    type UDPSocketOnErrorCallback = (
        result: UDPSocketOnErrorCallbackResult
    ) => void

    type UDPSocketOnMessageCallback = (
        result: UDPSocketOnMessageCallbackResult
    ) => void

    type UnlinkCompleteCallback = (res: GeneralCallbackResult) => void

    type UnlinkFailCallback = (result: UnlinkFailCallbackResult) => void

    type UnlinkSuccessCallback = (res: GeneralCallbackResult) => void

    type UnzipCompleteCallback = (res: GeneralCallbackResult) => void

    type UnzipFailCallback = (result: UnzipFailCallbackResult) => void

    type UnzipSuccessCallback = (res: GeneralCallbackResult) => void

    type UpdateKeyboardCompleteCallback = (res: GeneralCallbackResult) => void

    type UpdateKeyboardFailCallback = (res: GeneralCallbackResult) => void

    type UpdateKeyboardSuccessCallback = (res: GeneralCallbackResult) => void

    type UpdateReadyStatusCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type UpdateReadyStatusFailCallback = (res: GeneralCallbackResult) => void

    type UpdateReadyStatusSuccessCallback = (res: GeneralCallbackResult) => void

    type UpdateShareMenuCompleteCallback = (res: GeneralCallbackResult) => void

    type UpdateShareMenuFailCallback = (res: GeneralCallbackResult) => void

    type UpdateShareMenuSuccessCallback = (res: GeneralCallbackResult) => void

    type UpdateVoIPChatMuteConfigCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type UpdateVoIPChatMuteConfigFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type UpdateVoIPChatMuteConfigSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type UpdateDouYinAppCompleteCallback = (res: GeneralCallbackResult) => void

    type UpdateDouYinAppFailCallback = (res: GeneralCallbackResult) => void

    type UpdateDouYinAppSuccessCallback = (res: GeneralCallbackResult) => void

    type UploadFileCompleteCallback = (res: GeneralCallbackResult) => void

    type UploadFileFailCallback = (res: GeneralCallbackResult) => void

    type UploadFileSuccessCallback = (
        result: UploadFileSuccessCallbackResult
    ) => void

    type UploadFrameCompleteCallback = (res: GeneralCallbackResult) => void

    type UploadFrameFailCallback = (res: GeneralCallbackResult) => void

    type UploadFrameSuccessCallback = (res: GeneralCallbackResult) => void

    type UploadTaskOffProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult
    ) => void

    type UploadTaskOnProgressUpdateCallback = (
        result: UploadTaskOnProgressUpdateCallbackResult
    ) => void

    type UserInfoButtonOffTapCallback = (result: OnTapCallbackResult) => void

    type UserInfoButtonOnTapCallback = (result: OnTapCallbackResult) => void

    type VibrateLongCompleteCallback = (res: GeneralCallbackResult) => void

    type VibrateLongFailCallback = (res: GeneralCallbackResult) => void

    type VibrateLongSuccessCallback = (res: GeneralCallbackResult) => void

    type VibrateShortCompleteCallback = (res: GeneralCallbackResult) => void

    type VibrateShortFailCallback = (res: GeneralCallbackResult) => void

    type VibrateShortSuccessCallback = (res: GeneralCallbackResult) => void

    type VideoOffErrorCallback = (result: VideoOnErrorCallbackResult) => void

    type VideoOffTimeUpdateCallback = (
        result: OnTimeUpdateCallbackResult
    ) => void

    type VideoOnErrorCallback = (result: VideoOnErrorCallbackResult) => void

    type VideoOnTimeUpdateCallback = (
        result: OnTimeUpdateCallbackResult
    ) => void

    type WorkerOnMessageCallback = (
        result: WorkerOnMessageCallbackResult
    ) => void

    type WriteBLECharacteristicValueCompleteCallback = (
        res: BluetoothError
    ) => void

    type WriteBLECharacteristicValueFailCallback = (res: BluetoothError) => void

    type WriteBLECharacteristicValueSuccessCallback = (
        res: BluetoothError
    ) => void

    type WriteCharacteristicValueCompleteCallback = (
        res: GeneralCallbackResult
    ) => void

    type WriteCharacteristicValueFailCallback = (
        res: GeneralCallbackResult
    ) => void

    type WriteCharacteristicValueSuccessCallback = (
        res: GeneralCallbackResult
    ) => void

    type WriteFileCompleteCallback = (res: GeneralCallbackResult) => void

    type WriteFileFailCallback = (result: WriteFileFailCallbackResult) => void

    type WriteFileSuccessCallback = (res: GeneralCallbackResult) => void

    type WxGetFileInfoFailCallback = (res: GeneralCallbackResult) => void

    type WxGetFileInfoSuccessCallback = (
        result: WxGetFileInfoSuccessCallbackResult
    ) => void

    type WxOffErrorCallback = (result: WxOnErrorCallbackResult) => void

    type WxOnErrorCallback = (result: WxOnErrorCallbackResult) => void
}


declare function cancelAnimationFrame(requestID: number): void

declare function clearInterval(
    intervalID: number
): void

declare function clearTimeout(
    timeoutID: number
): void

declare function requestAnimationFrame(
    callback: (...args: any[]) => any
): number

declare function setInterval(
    callback: (...args: any[]) => any,
    delay?: number,
    rest?: any
): number

declare function setTimeout(
    callback: (...args: any[]) => any,
    delay?: number,
    rest?: any
): number

//---------------------------------------------------------------------------------------------------------------------


declare namespace DouYinMinigame {
    type IAnyObject = Record<string, any>
    type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F
    type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }

    interface AsyncMethodOptionLike {
        success?: (...args: any[]) => void;
    }

    type PromisifySuccessResult<P,
        T extends AsyncMethodOptionLike> = P extends { success: any }
        ? void
        : P extends { fail: any }
            ? void
            : P extends { complete: any }
                ? void
                : Promise<Parameters<Exclude<T["success"], undefined>>[0]>

}

declare const console: DouYinMinigame.Console;
declare const tt: DouYinMinigame.Tt;

declare function require(
    module: string
): any

declare function requirePlugin(
    module: string
): any

declare let module: {

    exports: any
};

declare let exports: any;
declare let GameGlobal: DouYinMinigame.IAnyObject;