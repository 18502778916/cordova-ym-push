var exec=require('cordova/exec');
module.exports={
ympush:function(content,type,success){
exec(success,null,"ympush","ympush",[content,type]);
}
};