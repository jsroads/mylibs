//
//  jsb_extension_manual.cpp
//  poker-mobile
//
//  Created by 宋怡博 on 15/07/2021.
//

#include "js-bindings-custom/jsb_cocos2dx_custom_manual.h"
#include "js-bindings-custom/jsb_cocos2dx_custom_auto.hpp"
#include "GameSysData/DeviceModel.h"
#include "NativeUtils/UnZipUtils.h"
#include "NativeUtils/EncryptUtils.h"
#include "scripting/js-bindings/manual/jsb_conversions.hpp"
#include "scripting/js-bindings/manual/jsb_global.h"
#include "scripting/js-bindings/auto/jsb_cocos2dx_auto.hpp"
#include "spine-creator-support/spine-cocos2dx.h"
#include "cocos/scripting/js-bindings/auto/jsb_cocos2dx_spine_auto.hpp"
#include "xxtea/xxtea.h"
#include "cocos2d.h"
using namespace cocos2d;

extern se::Object* __jsb_DeviceModel_proto;
extern se::Object* __jsb_UnZipUtils_proto;
static bool JSB_DeviceModel_getGameConfig(se::State& s)
{
    se::Object* __gameConfigObject = nullptr;
    std::string byteCodePath = FileUtils::getInstance()->fullPathForFilename("project.jsone");
    const std::string stringPath = FileUtils::getInstance()->fullPathForFilename("project.json");
    
    if (FileUtils::getInstance()->isFileExist(byteCodePath)) {
        Data fileData = FileUtils::getInstance()->getDataFromFile(byteCodePath);
        size_t dataLen = 0;
        uint8_t* data = xxtea_decrypt((unsigned char*)fileData.getBytes(), (uint32_t)fileData.getSize(), (unsigned char*)EncryptUtils::XXTEA_KEY.c_str(), (uint32_t)EncryptUtils::XXTEA_KEY.size(), (uint32_t*)&dataLen);

        if (data == nullptr) {
            SE_REPORT_ERROR("Can't decrypt code for %s", byteCodePath.c_str());
            s.rval().setNull();
            return true;
        }
        
        std::string ret(reinterpret_cast<const char*>(data), dataLen);
        free(data);
        __gameConfigObject = se::Object::createJSONObject(ret);
    } else if(FileUtils::getInstance()->isFileExist(stringPath)) {
        const std::string& jsonText = FileUtils::getInstance()->getStringFromFile(stringPath);
        __gameConfigObject = se::Object::createJSONObject(jsonText);
    } else {
        SE_REPORT_ERROR("project.json read fail!");
        s.rval().setNull();
    }
    
    if (__gameConfigObject) {
        se::HandleObject seObj(__gameConfigObject);
        if (!seObj.isEmpty()) {
            s.rval().setObject(seObj);
        }else{
            SE_REPORT_ERROR("project.json read fail!");
            s.rval().setNull();
        }
    } else {
        SE_REPORT_ERROR("project.json read fail!");
        s.rval().setNull();
    }
    return true;
}
SE_BIND_FUNC(JSB_DeviceModel_getGameConfig)

static bool js_register_device_utils_ext(se::Object* obj)
{
    __jsb_DeviceModel_proto->defineFunction("getGameConfig", _SE(JSB_DeviceModel_getGameConfig));
    return true;
}


static bool js_unzip_utils_UnZipUtils_setOnUnZipSuccess(se::State& s)
{
    UnZipUtils* cobj = (UnZipUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_unzip_utils_UnZipUtils_setOnUnZipSuccess : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void ()> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=]() -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(se::EmptyValueArray, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                    thisObj->unroot();
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_setOnUnZipSuccess : Error processing arguments");
        cobj->setOnUnZipSuccess(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_unzip_utils_UnZipUtils_setOnUnZipSuccess)

static bool js_unzip_utils_UnZipUtils_setOnUnZipError(se::State& s)
{
    UnZipUtils* cobj = (UnZipUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_unzip_utils_UnZipUtils_setOnUnZipError : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        std::function<void (int, std::string)> arg0;
        do {
            if (args[0].isObject() && args[0].toObject()->isFunction())
            {
                se::Value jsThis(s.thisObject());
                se::Value jsFunc(args[0]);
                jsThis.toObject()->attachObject(jsFunc.toObject());
                auto lambda = [=](int larg0, std::string larg1) -> void {
                    se::ScriptEngine::getInstance()->clearException();
                    se::AutoHandleScope hs;
        
                    CC_UNUSED bool ok = true;
                    se::ValueArray args;
                    args.resize(2);
                    ok &= int32_to_seval(larg0, &args[0]);
                    ok &= std_string_to_seval(larg1, &args[1]);
                    se::Value rval;
                    se::Object* thisObj = jsThis.isObject() ? jsThis.toObject() : nullptr;
                    se::Object* funcObj = jsFunc.toObject();
                    bool succeed = funcObj->call(args, thisObj, &rval);
                    if (!succeed) {
                        se::ScriptEngine::getInstance()->clearException();
                    }
                    thisObj->unroot();
                };
                arg0 = lambda;
            }
            else
            {
                arg0 = nullptr;
            }
        } while(false)
        ;
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_setOnUnZipError : Error processing arguments");
        cobj->setOnUnZipError(arg0);
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_unzip_utils_UnZipUtils_setOnUnZipError)

static bool js_unzip_utils_UnZipUtils_createUnZipTask(se::State& s)
{
    UnZipUtils* cobj = (UnZipUtils*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 2) {
        const char* arg0 = nullptr;
        const char* arg1 = nullptr;
        std::string arg0_tmp; ok &= seval_to_std_string(args[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
        std::string arg1_tmp; ok &= seval_to_std_string(args[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Error processing arguments");
        int result = cobj->createUnZipTask(arg0, arg1);
        ok &= int32_to_seval(result, &s.rval());
        
        s.thisObject()->root();
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Error processing arguments");
        return true;
    }
    if (argc == 3) {
        const char* arg0 = nullptr;
        const char* arg1 = nullptr;
        int arg2 = 0;
        std::string arg0_tmp; ok &= seval_to_std_string(args[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
        std::string arg1_tmp; ok &= seval_to_std_string(args[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
        do { int32_t tmp = 0; ok &= seval_to_int32(args[2], &tmp); arg2 = (int)tmp; } while(false);
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Error processing arguments");
        int result = cobj->createUnZipTask(arg0, arg1, arg2);
        ok &= int32_to_seval(result, &s.rval());
        
        s.thisObject()->root();
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Error processing arguments");
        return true;
    }
    if (argc == 4) {
        const char* arg0 = nullptr;
        const char* arg1 = nullptr;
        int arg2 = 0;
        const char* arg3 = nullptr;
        std::string arg0_tmp; ok &= seval_to_std_string(args[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
        std::string arg1_tmp; ok &= seval_to_std_string(args[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
        do { int32_t tmp = 0; ok &= seval_to_int32(args[2], &tmp); arg2 = (int)tmp; } while(false);
        std::string arg3_tmp; ok &= seval_to_std_string(args[3], &arg3_tmp); arg3 = arg3_tmp.c_str();
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Error processing arguments");
        int result = cobj->createUnZipTask(arg0, arg1, arg2, arg3);
        ok &= int32_to_seval(result, &s.rval());
        
        s.thisObject()->root();
        SE_PRECONDITION2(ok, false, "js_unzip_utils_UnZipUtils_createUnZipTask : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 4);
    return false;
}
SE_BIND_FUNC(js_unzip_utils_UnZipUtils_createUnZipTask)


/*
 * 控制 UnZipUtils对象 引用计数 解决Android可能自动释放问题
 */
static bool js_register_unzip_utils_ext(se::Object* obj)
{
    __jsb_UnZipUtils_proto->defineFunction("setOnUnZipSuccess", _SE(js_unzip_utils_UnZipUtils_setOnUnZipSuccess));
    __jsb_UnZipUtils_proto->defineFunction("setOnUnZipError", _SE(js_unzip_utils_UnZipUtils_setOnUnZipError));
    __jsb_UnZipUtils_proto->defineFunction("createUnZipTask", _SE(js_unzip_utils_UnZipUtils_createUnZipTask));
    return true;
}


static bool js_cocos2dx_spine_RegionAttachment_setRegion(se::State& s)
{
    spine::RegionAttachment* cobj = (spine::RegionAttachment*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_spine_RegionAttachment_setRegion : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        spine::AtlasRegion* arg0 = nullptr;
        ok &= seval_to_native_ptr(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_cocos2dx_spine_RegionAttachment_setRegion : Error processing arguments");
        bool result = spine::SkeletonRenderer::replaceAttachmentByRegion(cobj,arg0);
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_spine_RegionAttachment_setRegion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_spine_RegionAttachment_setRegion)

static bool js_cocos2dx_spine_MeshAttachment_setRegion(se::State& s)
{
    spine::MeshAttachment* cobj = (spine::MeshAttachment*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_spine_RegionAttachment_setRegion : Invalid Native Object");
    const auto& args = s.args();
    size_t argc = args.size();
    CC_UNUSED bool ok = true;
    if (argc == 1) {
        spine::AtlasRegion* arg0 = nullptr;
        ok &= seval_to_native_ptr(args[0], &arg0);
        SE_PRECONDITION2(ok, false, "js_cocos2dx_spine_RegionAttachment_setRegion : Error processing arguments");
        bool result = spine::SkeletonRenderer::replaceAttachmentByRegion(cobj,arg0);
        ok &= boolean_to_seval(result, &s.rval());
        SE_PRECONDITION2(ok, false, "js_cocos2dx_spine_RegionAttachment_setRegion : Error processing arguments");
        return true;
    }
    SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 1);
    return false;
}
SE_BIND_FUNC(js_cocos2dx_spine_MeshAttachment_setRegion)

static bool js_cocos2dx_spine_Attachment_getRegion(se::State& s)
{
    spine::Attachment* cobj = (spine::Attachment*)s.nativeThisObject();
    spine::AtlasRegion* result;
    if (cobj->getRTTI().isExactly(spine::RegionAttachment::rtti)) {
        result = ((spine::RegionAttachment*)cobj)->region;
    } else if (cobj->getRTTI().isExactly(spine::MeshAttachment::rtti)) {
        result = ((spine::MeshAttachment*)cobj)->region;
    }
    native_ptr_to_seval<spine::AtlasRegion>((spine::AtlasRegion*)result, &s.rval());
    return true;
}
SE_BIND_PROP_GET(js_cocos2dx_spine_Attachment_getRegion)

static bool js_cocos2dx_spine_Attachment_setRegion(se::State& s)
{
    const auto& args = s.args();
    spine::Attachment* cobj = (spine::Attachment*)s.nativeThisObject();
    SE_PRECONDITION2(cobj, false, "js_cocos2dx_spine_Attachment_setRegion : Invalid Native Object");
    CC_UNUSED bool ok = true;
    spine::AtlasRegion* arg0 = nullptr;
    ok &= seval_to_native_ptr(args[0], &arg0);
    spine::SkeletonRenderer::replaceAttachmentByRegion(cobj,arg0);
    return true;
}
SE_BIND_PROP_SET(js_cocos2dx_spine_Attachment_setRegion)

extern se::Object* __jsb_spine_MeshAttachment_proto;
extern se::Object* __jsb_spine_RegionAttachment_proto;

static bool js_register_spine_attachment_ext(se::Object* obj)
{
    __jsb_spine_RegionAttachment_proto->defineFunction("setRegion", _SE(js_cocos2dx_spine_RegionAttachment_setRegion));
    __jsb_spine_MeshAttachment_proto->defineFunction("setRegion", _SE(js_cocos2dx_spine_MeshAttachment_setRegion));
    __jsb_spine_RegionAttachment_proto->defineProperty("region", _SE(js_cocos2dx_spine_Attachment_getRegion),_SE(js_cocos2dx_spine_Attachment_setRegion));
    __jsb_spine_MeshAttachment_proto->defineProperty("region", _SE(js_cocos2dx_spine_Attachment_getRegion),_SE(js_cocos2dx_spine_Attachment_setRegion));
    return true;
}

bool register_all_cocos2dx_custom_manual(se::Object* obj)
{
    se::Value nsVal;
    if (!obj->getProperty("jsb", &nsVal))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("jsb", nsVal);
    }
    se::Object* ns = nsVal.toObject();
    
    js_register_device_utils_ext(ns);
    js_register_unzip_utils_ext(ns);
    js_register_spine_attachment_ext(ns);
    return true;
}
