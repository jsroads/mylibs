package com.muyou.jjkp;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.ActivityManager;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.ContentResolver;
import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Environment;
import android.os.StatFs;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.telephony.TelephonyManager;
import java.io.File;
import java.io.FilenameFilter;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Enumeration;
import java.util.Locale;

import android.text.format.Formatter;
import android.util.Log;

import static android.content.Context.ACTIVITY_SERVICE;
import static android.support.v4.content.ContextCompat.getSystemService;

public class SystemUtils {
    public static int phoneSystemVersion;

    static {
        phoneSystemVersion = 19;
    }

    public static Context context = AppActivity.getContext();

    public static void checkcontext() {
        if (context == null) {
            context = AppActivity.getContext();
        }
    }

    /**
     * 当前手机系统版本
     * @return 系统版本号
     */
    public static String getSystemVersion() {
        return Build.VERSION.RELEASE;
    }

    /**
     * 当前手机型号
     * @return 手机型号
     */
    public static String getPhoneModel() {
        return Build.MODEL;
    }

    /**
     * 获取手机IMEI(需要“android.permission.READ_PHONE_STATE”权限)
     * @return 手机IMEI
     */
    public static String getDeviceID() {
        checkcontext();
        TelephonyManager tm = (TelephonyManager) context.getSystemService(Activity.TELEPHONY_SERVICE);
        if (ActivityCompat.checkSelfPermission(AppActivity.getContext(), android.Manifest.permission.READ_PHONE_STATE) == PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            assert tm != null;
            @SuppressLint("HardwareIds") String id = "" + tm.getDeviceId();
            return id;
        }
        return "";
    }

    /**
     * 获取AndroidID
     * @return AndroidID
     */
    public static String getAndroidID() {
        String androidID = "";
        try {
            checkcontext();

            ApplicationInfo info = context.getApplicationInfo();
            if (info!=null){
                if (phoneSystemVersion<16){
                    return "";
                }else{
                    ContentResolver resolver =  context.getContentResolver();
                    if (resolver!=null){
                        androidID = Settings.System.getString(resolver, Settings.System.ANDROID_ID);
                    }
                    if (androidID == null){
                        androidID = "";
                    }
                }
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return androidID;
    }

    /**
     * 获取应用名
     * @return 应用名
     */
    public static String getAppName() {
        checkcontext();
        PackageManager pm = context.getPackageManager();
        try {
            PackageInfo pi = pm.getPackageInfo(context.getPackageName(),0);
            int labelres = pi.applicationInfo.labelRes;
            return context.getResources().getString(labelres);
        } catch (NameNotFoundException e) {
            e.printStackTrace();
        }

        return "unknown";
    }

    /**
     * 获取包名
     * @return 包名
     */
    public static String getPackageName() {
        checkcontext();
        return context.getPackageName();
    }

    /**
     * 当前手机连接wifi名称
     * @return wifi名称，无则为""
     */
    public static String getWifiName() {
        checkcontext();
        WifiManager wifiManager = (WifiManager) context.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
        assert wifiManager != null;
        WifiInfo wifiInfo = wifiManager.getConnectionInfo();  //wifiInfo.toString()
        return ""+wifiInfo.getSSID();
    }

    public static  String intToIp(int i) {
        return (i & 0xFF ) + "." + ((i >> 8 ) & 0xFF) + "." + ((i >> 16 ) & 0xFF) + "." + ( i >> 24 & 0xFF);
    }

    /**
     * 当前手机ip
     * @return ip地址
     */
    public static String getIP() {
        checkcontext();
        WifiManager wifiManager = (WifiManager) context.getSystemService(context.WIFI_SERVICE);
        //判断wifi是否开启
        WifiInfo wifiInfo = wifiManager.getConnectionInfo();
        int ipAddress = wifiInfo.getIpAddress();
        String mobileIP = intToIp(ipAddress);
        if (mobileIP == null || mobileIP.equals("0.0.0.0")) {
            try {
                for (Enumeration<NetworkInterface> en = NetworkInterface.getNetworkInterfaces(); en.hasMoreElements();) {
                    NetworkInterface intf = en.nextElement();
                    for (Enumeration<InetAddress> enumIpAddr = intf.getInetAddresses(); enumIpAddr.hasMoreElements();) {
                        InetAddress inetAddress = enumIpAddr.nextElement();
                        if (!inetAddress.isLoopbackAddress()) {
                            return inetAddress.getHostAddress().toString();
                        }
                    }
                }
            } catch (SocketException ex) {
                Log.e("  yyz mobile ---> ", ex.toString());
            }
            return "无网络连接";
        }
        return mobileIP;
    }

    /**
     * 当前手机ip
     * @return 网络状态  0:未联网  1:数据流量  2:wifi
     */
    public static int getNetworkSt(){
        checkcontext();
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo info = cm.getActiveNetworkInfo();
        if(info != null && info.getType() == ConnectivityManager.TYPE_WIFI){
            return 2;
        }else if(info != null && info.getType() == ConnectivityManager.TYPE_MOBILE){
            return 1;
        }else{
            return 0;
        }
    }

    public static String getApkPath()
    {
        checkcontext();
        String sAssetsPath = context.getApplicationInfo().sourceDir;
        return sAssetsPath;
    }

    // This function returns the absolute path to the OBB if it exists,
    // else it returns the absolute path to the APK.
    public static String getObbPath()
    {
        String sAssetsPath = "";
        String pathToOBB = Environment.getExternalStorageDirectory().getAbsolutePath() + "/Android/obb/" + context.getPackageName();

        // Listing all files inside the folder (pathToOBB) where OBB files are expected to be found.
        String[] fileNames = new File(pathToOBB).list(new FilenameFilter() { // Using filter to pick up only main OBB file name.
            public boolean accept(File dir, String name) {
                return name.startsWith("main.") && name.endsWith(".obb");  // It's possible to filter only by extension here to get path to patch OBB file also.
            }
        });

        String fullPathToOBB = "";
        if (fileNames != null && fileNames.length > 0)  // If there is at least 1 element inside the array with OBB file names, then we may think fileNames[0] will have desired main OBB file name.
            fullPathToOBB = pathToOBB + "/" + fileNames[0];  // Composing full file name for main OBB file.

        File obbFile = new File(fullPathToOBB);
        if (obbFile.exists())
            sAssetsPath = fullPathToOBB;
        else
            sAssetsPath = context.getApplicationInfo().sourceDir;

        return sAssetsPath;
    }

    /**
     * 复制内容到粘贴板
     * @param text
     */
    public static void Clipboard(String text){
        try {
            final ClipboardManager clipboard = (ClipboardManager)context.getSystemService(context.CLIPBOARD_SERVICE);
            ClipData textCd = ClipData.newPlainText("data", text);
            clipboard.setPrimaryClip(textCd);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取系统总运行内存
     * @return
     */
    public static String getTotalMemory() {
        checkcontext();
        // 获取android当前可用内存大小
        ActivityManager am = (ActivityManager) context.getSystemService(ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo mi = new ActivityManager.MemoryInfo();
        am.getMemoryInfo(mi);
        //mi.availMem; 当前系统的可用内存
        return Formatter.formatFileSize(context, mi.totalMem);// 将获取的内存大小规格化
    }

    /**
     * 当前占用内存
     * @return
     */
    public static String getGameUsedMemory() {
        checkcontext();
        ActivityManager activityManager = (ActivityManager) context.getSystemService(ACTIVITY_SERVICE);
        //最大分配内存
        int memory = activityManager.getMemoryClass();
        System.out.println("memory: "+memory);
        //最大分配内存获取方法2
        long maxMemory = Runtime.getRuntime().maxMemory();
        //当前分配的总内存
        long totalMemory = Runtime.getRuntime().totalMemory();
        //剩余内存
        long freeMemory = Runtime.getRuntime().freeMemory();
        System.out.println("maxMemory: "+maxMemory);
        System.out.println("totalMemory: "+totalMemory);
        System.out.println("freeMemory: "+freeMemory);
        return Formatter.formatFileSize(context, totalMemory);// 将获取的内存大小规格化
    }


    /**
     * 获取内存
     * @return
     */
    public static String getTotalStorageInternalSize() {
        checkcontext();
        //获取内部存储根目录
        File path = Environment.getDataDirectory();
        //系统的空间描述类
        StatFs stat = new StatFs(path.getPath());
        //每个区块占字节数
        long blockSize = stat.getBlockSizeLong();
        //区块总数
        long totalBlocks = stat.getBlockCountLong();

        return Formatter.formatFileSize(context, totalBlocks * blockSize);// 将获取的内存大小规格化
    }

    /**
     * 获取可用内存
     * @return
     */
    public static String getAvailStorageInternalSize() {
        checkcontext();
        File path = Environment.getDataDirectory();
        StatFs stat = new StatFs(path.getPath());
        long blockSize = stat.getBlockSizeLong();
        //获取可用区块数量
        long availableBlocks = stat.getAvailableBlocksLong();

        return Formatter.formatFileSize(context, availableBlocks * blockSize);// 将获取的内存大小规格化
    }

    //cpu指令集
    public static String getDeviceCPU(){
        String tmpCPU = android.os.Build.CPU_ABI;
        return tmpCPU;
    }

    /** 包签名*/
    public static String getAppSignature(){
        checkcontext();
        try {
            PackageInfo info = context.getPackageManager().getPackageInfo(context.getPackageName(), PackageManager.GET_SIGNATURES);

            byte[] cert = info.signatures[0].toByteArray();
            MessageDigest md = MessageDigest.getInstance("SHA1");
            byte[] publicKey = md.digest(cert);
            StringBuilder hexString = new StringBuilder();
            for (int i = 0; i < publicKey.length; i++) {
                String appendString = Integer.toHexString(0xFF & publicKey[i])
                        .toUpperCase(Locale.US);
                if (appendString.length() == 1)
                    hexString.append("0");
                hexString.append(appendString);
                hexString.append(":");
            }
            return hexString.toString();
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
}
