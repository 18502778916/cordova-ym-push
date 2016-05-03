cordova.define("org.apache.cordova.ympush.YmPushPlugin",function(require,exports,module){
var exec=require('cordova/exec');
module.exports={
ympush:function(content,type,success){
exec(success,null,"ympush","ympush",[content,type]);
}
};
});