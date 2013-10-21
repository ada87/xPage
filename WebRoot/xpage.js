var $b=null;
/**
*	设置初始化事件，可以回调设置的方法，并把浏览器对象做为参数传回
*/
$.readyPage=function(fn){
	fn.call(fn,$b);
}
/**
*	浏览器对象，用来控制URL
*/
XBrowser=function(){
	this._init();
}
XBrowser.prototype={
	h5:false,
	root:window.location.href,
	basepath:window.location.href,
	_init:function(){
		this.h5=window.history.pushState?true:false;
	},
/**
*	初始化，兼返回链接拼装信息
*/
	getPath:function(config){
		var temp=this.root;
		var strRegex = "^(https://|http://)"							// url使用的协议	
		+ "([^:/]+)" 													// 主机
		+ "(:[0-9]{1,4})?" 												// 端口- :80
		+ "([^?#]*)" 													// 请求路径 “？前面的一串”
		+ "([^#]*)" 													// 请求路径 “#前面的一串”
		+ "(.*)$";														// 请求参数 “最后面的一串”
		var RegUrl = new RegExp(); 
		RegUrl.compile(strRegex);
		if(RegUrl.test(temp)){
			this.root=RegExp.$1+RegExp.$2+RegExp.$3;
			this.basepath=RegExp.$1+RegExp.$2+RegExp.$3+RegExp.$4+RegExp.$5;
			if(!this.h5){return;}	
			var address=RegExp.$4;
			if(typeof config =='string'){
				address=config;
			}else if(typeof config =='object'){
				address=config.basePath;
			}
//			相对路径设置，如果页面刷新会有BUG，不再使用，如果要传PATH参数必须为绝对路径 ，如 '/home'		
			this.basepath=this.root+address;
			return temp.replace(this.basepath,'');
		}
		

	},
/**
*	路由规则
*/
	_roteUrl:function(path){
		var paths=path.split('/');
		if(paths[0]){		//relative
			return this.basepath.substring(0,this.basepath.lastIndexOf('/'))+'/'+path;
			this.basepath;
		}else{				//absolute
			return this.root+path;
		}
	},
/**
*	改变浏览器链接
*/
	change:function(rote){
		var url=typeof rote =='string'?rote:rote.url;
		this.h5?window.history.pushState(rote,null,this._roteUrl(url)):window.location.href=this.basepath+"#"+url;
	}
}
/**
*	扩展Jquery的Ajax特性，使支持方法
*/
XPage=function(){
	this._init();
}
XPage.prototype={
	_init:function(){
		$.ajaxSetup({beforeSend:this._rerote,complete:this._rerote});
		window.onpopstate=function(evt){
			console.log(evt);
		}
	},
	_rerote:function(xhr,setting){
		if(setting.rote){
			$b.change(setting.rote);
		}
	}
}
$b = new XBrowser();
new XPage();