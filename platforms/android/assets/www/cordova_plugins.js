cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },{
                      "file":"plugins/cordova-plugin-ympush/ympush.js",
                      "id":"org.apache.cordova.ympush.YmPushPlugin",
                      "clobbers":[
                      "navigator.ympush"
                      ]
                  },{
                                          "file":"plugins/cordova-plugin-ympush/ympushResult.js",
                                          "id":"org.apache.cordova.ympush.YmPushResult",
                                          "clobbers":[
                                          "navigator.ympushResult"
                                          ]
                                      }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1"
};
// BOTTOM OF METADATA
});