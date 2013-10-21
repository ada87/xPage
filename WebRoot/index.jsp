<%@ page language="java" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>

	<head>
		<meta charset="utf-8" />
		<title>Xpage Location</title>
		<script type="text/javascript" src="<%=path %>/jquery.js"></script>
		<script type="text/javascript" src="<%=path %>/xpage.js"></script>
	</head>
	<body>
	<div id="test"></div>
	
	<article>
		<h1>Xpage</h1>
		<p>
			discription
		</p>
		<div>
			how to use：
			<div>
				step 1 : include the xpage.js after jquery.js
			</div>
			<div>
				step 2 : init your page config
		<div>
			structure of rote param (object/string)：
<h4>Init</h4>
<pre>
$.readyPage(function(o)){
	o.init(config)
}
structure of config 
name 			type 				description
basepath		string				home's entry path, if not specify ,use current URI default
before			boolean				change uri before or after the ajax sent, default is false
</pre>
		</div>				
			</div>
			<div>
				step 3 : use it, add the param "rote" for the $.ajax method
			</div>
		<div>
			structure of rote param (object/string)：
<h4>The String Type</h4>
<pre>
	ep.
	rote:'/ttt'
</pre>
<h4>The Object Type</h4>
<pre>
	
	{
		
	}
	
	ep.
</pre>
		</div>			
		</div>

	</article>
	
	</body>
	<script type="text/javascript">
	$.readyPage(
		function(o){
			//此处只支持绝对路径
			var path=o.getPath('/Xpage/');
			if(path){
				locs = path.split('/');
				if(locs[0]=='list'){
					list(locs[1]);
					return;
				}else if(locs[0]=='item'){
					item(locs[1]);
					return;
				}
			}
			home();
		}
	);
	function home(){
		var param={'action':'home'};
		$.ajax({
			url:'/Xpage/test',
			data:param,
			success:function(res){
				var str='<ul>';
				for(var i=0;i<res.list.length;i++){
					var obj=res.list[i];
					str+='<li onclick="list('+obj.id+')">list'+obj.id+'</li>';
				}
				str+='</ul>';
				$('#test').html(str);
			}
			,rote:'home'
		});
	}
	function list(id){		
		var param={'action':'list','id':id};
		$.ajax({
			url:'/Xpage/test',
			data:param,
			success:function(res){
				var str='<ul>';
				for(var i=0;i<res.item.length;i++){
					var obj=res.item[i];
					str+='<li onclick="item(\''+obj.name+'\')">'+obj.name+'</li>';
				}
				str+='</ul>';
				$('#test').html(str);
			}
			,rote:'list/'+id
		});
	}
	function item(name){
		var param={'action':'item','name':name};			
		$.ajax({
			url:'/Xpage/test',
			data:param,
			success:function(data){
				$('#test').html("view the "+data.name);
			}
			,rote:'item/'+name
		});
	
	}

	</script>
</html>
