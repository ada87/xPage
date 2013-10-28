var $b;
/**
*	设置初始化事件，可以回调设置的方法，并把浏览器对象做为参数传回
*/
$.listenMethod={};
$.readyPage=function(load,href){
	$.listenMethod.load=load;
	$.listenMethod.href=href;
	$.listenMethod.load.call($.listenMethod,$b);
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
		var temp=window.location.href;
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
		}else{				//absolute
			return this.root+path;
		}
	},
/**
*	改变浏览器链接
*/
	change:function(rote){
		rote=rote.replace(this.root,'');
		if(!this.h5){
			window.location.href=this.basepath+"#"+rote;
		}else{
			roteurl=this._roteUrl(rote)
			if(window.location.href==roteurl){
				return;
			}
			window.history.pushState(rote,null,roteurl);
		}
		
	}
}
/**
*	扩展Jquery的Ajax特性，使支持方法
*/
$b = new XBrowser();
(function(){
	var _rerote=function(xhr,setting){
		if(setting.rote){$b.change(setting.rote);}
	};
	$.ajaxSetup({beforeSend:_rerote});
	window.onpopstate=function(evt){
		$.listenMethod.load.call($.listenMethod.load,$b);
	}
})();
$(document).ready(
	function(){
		$('a.xpage').click(
			function(e){
				var target=e.srcElement||e.currentTarget||e.target;
				$b.change(target.href);
				$.listenMethod.href.call($.listenMethod.href,$b,target.href.replace($b.basepath,''));
				return false;
			}
		);
	}
);
