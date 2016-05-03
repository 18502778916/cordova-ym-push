cordova.define("org.apache.cordova.ympush.YmPushResult",function(require,exports,module){
var exec=require('cordova/exec');
module.exports={
ympushResult:function(content){
exec(null,null,"ympushResult","ympushResult",[content]);
}
};
});