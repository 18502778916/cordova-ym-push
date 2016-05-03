package org.apache.cordova.ympush;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by zhangchong on 16/4/19.
 */
public class YmPushResult extends CordovaPlugin {
    CordovaInterface cordovaInterface;

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        cordovaInterface=this.cordova;
        if ("ympushResult".equals(action)) {
            Log.e("xxx", "" + args.get(0));
            return true;
        }
        return false;
    }
}
