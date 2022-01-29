#include "js-bindings-custom/jsb_cocos2dx_custom_auto.hpp"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "GameSysData/DeviceModel.h"
#include "NativeUtils/UnZipUtils.h"

se::Object* __jsb_DeviceModel_proto = nullptr;
se::Class* __jsb_DeviceModel_class = nullptr;

static bool js_cocos2dx_custom_DeviceModel_cheackPath(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_cheackPath : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= seval_to_std_string(args[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_cheackPath : Error processing arguments");
        bool result = cobj->cheackPath(arg0);
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_cheackPath : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_cheackPath)

static bool js_cocos2dx_custom_DeviceModel_getDeviceIDFA(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceIDFA : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceIDFA();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceIDFA : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceIDFA)

static bool js_cocos2dx_custom_DeviceModel_getDeviceIdentifier(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceIdentifier : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceIdentifier();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceIdentifier : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceIdentifier)

static bool js_cocos2dx_custom_DeviceModel_setStringToPasteBoard(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_setStringToPasteBoard : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        const char* arg0 = nullptr;
        std::string arg0_tmp; ok &= seval_to_std_string(args[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_setStringToPasteBoard : Error processing arguments");
        bool result = cobj->setStringToPasteBoard(arg0);
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_setStringToPasteBoard : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_setStringToPasteBoard)

static bool js_cocos2dx_custom_DeviceModel_getDeviceIP(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceIP : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceIP();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceIP : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceIP)

static bool js_cocos2dx_custom_DeviceModel_getApkPath(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getApkPath : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getApkPath();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getApkPath : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getApkPath)

static bool js_cocos2dx_custom_DeviceModel_getPackageName(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getPackageName : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getPackageName();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getPackageName : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getPackageName)

static bool js_cocos2dx_custom_DeviceModel_getGameUsedMemory(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getGameUsedMemory : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getGameUsedMemory();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getGameUsedMemory : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getGameUsedMemory)

static bool js_cocos2dx_custom_DeviceModel_getSystemVersion(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getSystemVersion : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getSystemVersion();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getSystemVersion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getSystemVersion)

static bool js_cocos2dx_custom_DeviceModel_getObbPath(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getObbPath : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getObbPath();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getObbPath : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getObbPath)

static bool js_cocos2dx_custom_DeviceModel_getDeviceTotalMemory(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceTotalMemory : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceTotalMemory();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceTotalMemory : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceTotalMemory)

static bool js_cocos2dx_custom_DeviceModel_getWritablePath2(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getWritablePath2 : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getWritablePath2();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getWritablePath2 : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getWritablePath2)

static bool js_cocos2dx_custom_DeviceModel_getDeviceId(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceId : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceId();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceId : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceId)

static bool js_cocos2dx_custom_DeviceModel_getDeviceCPU(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceCPU : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceCPU();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceCPU : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceCPU)

static bool js_cocos2dx_custom_DeviceModel_getDeviceAvailMemory(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceAvailMemory : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceAvailMemory();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceAvailMemory : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceAvailMemory)

static bool js_cocos2dx_custom_DeviceModel_getDeviceWifiName(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceWifiName : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceWifiName();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceWifiName : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceWifiName)

static bool js_cocos2dx_custom_DeviceModel_getDeviceTotalInternalStorageSize(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceTotalInternalStorageSize : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceTotalInternalStorageSize();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceTotalInternalStorageSize : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceTotalInternalStorageSize)

static bool js_cocos2dx_custom_DeviceModel_getDeviceAvailInternalStorageSize(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceAvailInternalStorageSize : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceAvailInternalStorageSize();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceAvailInternalStorageSize : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceAvailInternalStorageSize)

static bool js_cocos2dx_custom_DeviceModel_makePackageName(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_makePackageName : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->makePackageName();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_makePackageName : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_makePackageName)

static bool js_cocos2dx_custom_DeviceModel_getAppName(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getAppName : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getAppName();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getAppName : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getAppName)

static bool js_cocos2dx_custom_DeviceModel_getDeviceModel(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getDeviceModel : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getDeviceModel();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getDeviceModel : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getDeviceModel)

static bool js_cocos2dx_custom_DeviceModel_getInstance(se::State& s)
{
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        DeviceModel* result = DeviceModel::getInstance();
        ok &= native_ptr_to_seval<DeviceModel>((DeviceModel*)result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getInstance : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getInstance)



static bool js_DeviceModel_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (DeviceModel)", s.nativeThisObject());
    auto iter = se::NonRefNativePtrCreatedByCtorMap::find(s.nativeThisObject());
    if (iter != se::NonRefNativePtrCreatedByCtorMap::end())
    {
        se::NonRefNativePtrCreatedByCtorMap::erase(iter);
        DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
        delete cobj;
    }
    return true;
}
SE_BIND_FINALIZE_FUNC(js_DeviceModel_finalize)

static bool js_cocos2dx_custom_DeviceModel_getAppSignature(se::State& s)
{
    DeviceModel* cobj = (DeviceModel*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_DeviceModel_getSignature : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 0) {
        std::string result = cobj->getAppSignature();
        ok &= std_string_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_DeviceModel_getAppSignature : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_DeviceModel_getAppSignature)

bool js_register_cocos2dx_custom_DeviceModel(se::Object* obj)
{
    auto cls = se::Class::create("DeviceModel", obj, nullptr, nullptr);

    cls->defineFunction("cheackPath", _SE(js_cocos2dx_custom_DeviceModel_cheackPath));
    cls->defineFunction("getDeviceIDFA", _SE(js_cocos2dx_custom_DeviceModel_getDeviceIDFA));
    cls->defineFunction("getDeviceIdentifier", _SE(js_cocos2dx_custom_DeviceModel_getDeviceIdentifier));
    cls->defineFunction("setStringToPasteBoard", _SE(js_cocos2dx_custom_DeviceModel_setStringToPasteBoard));
    cls->defineFunction("getDeviceIP", _SE(js_cocos2dx_custom_DeviceModel_getDeviceIP));
    cls->defineFunction("getApkPath", _SE(js_cocos2dx_custom_DeviceModel_getApkPath));
    cls->defineFunction("getPackageName", _SE(js_cocos2dx_custom_DeviceModel_getPackageName));
    cls->defineFunction("getGameUsedMemory", _SE(js_cocos2dx_custom_DeviceModel_getGameUsedMemory));
    cls->defineFunction("getSystemVersion", _SE(js_cocos2dx_custom_DeviceModel_getSystemVersion));
    cls->defineFunction("getObbPath", _SE(js_cocos2dx_custom_DeviceModel_getObbPath));
    cls->defineFunction("getDeviceTotalMemory", _SE(js_cocos2dx_custom_DeviceModel_getDeviceTotalMemory));
    cls->defineFunction("getWritablePath2", _SE(js_cocos2dx_custom_DeviceModel_getWritablePath2));
    cls->defineFunction("getDeviceId", _SE(js_cocos2dx_custom_DeviceModel_getDeviceId));
    cls->defineFunction("getDeviceCPU", _SE(js_cocos2dx_custom_DeviceModel_getDeviceCPU));
    cls->defineFunction("getDeviceAvailMemory", _SE(js_cocos2dx_custom_DeviceModel_getDeviceAvailMemory));
    cls->defineFunction("getDeviceWifiName", _SE(js_cocos2dx_custom_DeviceModel_getDeviceWifiName));
    cls->defineFunction("getDeviceTotalInternalStorageSize", _SE(js_cocos2dx_custom_DeviceModel_getDeviceTotalInternalStorageSize));
    cls->defineFunction("getDeviceAvailInternalStorageSize", _SE(js_cocos2dx_custom_DeviceModel_getDeviceAvailInternalStorageSize));
    cls->defineFunction("makePackageName", _SE(js_cocos2dx_custom_DeviceModel_makePackageName));
    cls->defineFunction("getAppName", _SE(js_cocos2dx_custom_DeviceModel_getAppName));
    cls->defineFunction("getDeviceModel", _SE(js_cocos2dx_custom_DeviceModel_getDeviceModel));
    cls->defineStaticFunction("getInstance", _SE(js_cocos2dx_custom_DeviceModel_getInstance));
    cls->defineFinalizeFunction(_SE(js_DeviceModel_finalize));
    cls->defineFunction("getAppSignature", _SE(js_cocos2dx_custom_DeviceModel_getAppSignature));
    cls->install();
    JSBClassType::registerClass<DeviceModel>(cls);

    __jsb_DeviceModel_proto = cls->getProto();
    __jsb_DeviceModel_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

se::Object* __jsb_UnZipUtils_proto = nullptr;
se::Class* __jsb_UnZipUtils_class = nullptr;

static bool js_cocos2dx_custom_UnZipUtils_setOnUnZipProgress(se::State& s)
{
    UnZipUtils* cobj = (UnZipUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_UnZipUtils_setOnUnZipProgress : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (unsigned long, unsigned long, std::string)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](unsigned long larg0, unsigned long larg1, std::string larg2) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(3);
                    ok &= ulong_to_seval(larg0, &args[0]);
                    ok &= ulong_to_seval(larg1, &args[1]);
                    ok &= std_string_to_seval(larg2, &args[2]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_UnZipUtils_setOnUnZipProgress : Error processing arguments");
        cobj->setOnUnZipProgress(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_UnZipUtils_setOnUnZipProgress)

static bool js_cocos2dx_custom_UnZipUtils_unZipFile(se::State& s)
{
    UnZipUtils* cobj = (UnZipUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_custom_UnZipUtils_unZipFile : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        unZipTask arg0;
        #pragma warning NO CONVERSION TO NATIVE FOR unZipTask
        ok = false;
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_UnZipUtils_unZipFile : Error processing arguments");
        int result = cobj->unZipFile(arg0);
        ok &= int32_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_custom_UnZipUtils_unZipFile : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_custom_UnZipUtils_unZipFile)

SE_DECLARE_FINALIZE_FUNC(js_UnZipUtils_finalize)

static bool js_cocos2dx_custom_UnZipUtils_constructor(se::State& s)
{
    UnZipUtils* cobj = new (std::nothrow) UnZipUtils();
    s.thisObject()->setPrivateData(cobj);
    se::NonRefNativePtrCreatedByCtorMap::emplace(cobj);
    return true;
}
SE_BIND_CTOR(js_cocos2dx_custom_UnZipUtils_constructor, __jsb_UnZipUtils_class, js_UnZipUtils_finalize)




static bool js_UnZipUtils_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (UnZipUtils)", s.nativeThisObject());
    auto iter = se::NonRefNativePtrCreatedByCtorMap::find(s.nativeThisObject());
    if (iter != se::NonRefNativePtrCreatedByCtorMap::end())
    {
        se::NonRefNativePtrCreatedByCtorMap::erase(iter);
        UnZipUtils* cobj = (UnZipUtils*)s.nativeThisObject();
        delete cobj;
    }
    return true;
}
SE_BIND_FINALIZE_FUNC(js_UnZipUtils_finalize)

bool js_register_cocos2dx_custom_UnZipUtils(se::Object* obj)
{
    auto cls = se::Class::create("UnZipUtils", obj, nullptr, _SE(js_cocos2dx_custom_UnZipUtils_constructor));

    cls->defineFunction("setOnUnZipProgress", _SE(js_cocos2dx_custom_UnZipUtils_setOnUnZipProgress));
    cls->defineFunction("unZipFile", _SE(js_cocos2dx_custom_UnZipUtils_unZipFile));
    cls->defineFinalizeFunction(_SE(js_UnZipUtils_finalize));
    cls->install();
    JSBClassType::registerClass<UnZipUtils>(cls);

    __jsb_UnZipUtils_proto = cls->getProto();
    __jsb_UnZipUtils_class = cls;

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_cocos2dx_custom(se::Object* obj)
{
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("jsb", &nsVal))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("jsb", nsVal);
    }
    se::Object* ns = nsVal.toObject();

    js_register_cocos2dx_custom_DeviceModel(ns);
    js_register_cocos2dx_custom_UnZipUtils(ns);
    return true;
}

