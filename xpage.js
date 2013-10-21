var $x,$b;
$.readyPage=function(fn){
	$(document).on(
		'xdpageinit',
		function(){
			fn.call(fn,$x);
		})
}
XBrowser=function(){
	this.init();
}
XBrowser.prototype={
	h5:false;
	root:window.location;
	_init:function(){
		
	},
	change:function(rote){
		if(typeof setting.rote =='string'){
			XdPage.prototype.
		}else if(typeof setting.rote =='object'){

		}
	}
}
var XPage=function(){
	this._init();
}
XPage.prototype={
	_init:function(){
		$.ajaxSetup({beforeSend:this._rerote});
	},
	_rerote:function(xhr,setting){
		if(setting.rote){
			$b.change(setting.rote);
		}
	}
}
$(document).ready(
	function(){
		$b = new XBrowser();
		$x = new XPage();
		$(document).trigger("xdpageinit");
	}
);