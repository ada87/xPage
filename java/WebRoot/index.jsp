<%@ page language="java" pageEncoding="utf-8"%>
<%
response.setHeader("Content-Type","text/html;charset=utf-8" );
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>

	<head>
		<meta charset="utf-8" />
		<title>Xpage Location</title>
		<script type="text/javascript" src="<%=path %>/jQuery.js"></script>
		<script type="text/javascript" src="<%=path %>/xPage.js"></script>
		<style>
		#test{
			width:200px;
			height:100px;
			display:block;
		}
		</style>
	</head>
	<body>
	<div id="test"></div>
	<a href="/Xpage/item/item9" class="xpage">item</a>
	</body>
	<script type="text/javascript">
	function toPath(path){
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
	$.readyPage(
		function(browser){
			//此处只支持绝对路径
			var path=browser.getPath(
				{basePath:'/Xpage/',index:'home'}
			);
			toPath(path)

		},
		function(browser,path){
			toPath(path)
		}
	);
	</script>
</html>
