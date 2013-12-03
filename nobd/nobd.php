<?php
/*
Plugin Name: 抵制百度
Plugin URI: http://www.xdnote.com/nobd
Description: 注意：本插件会抵制百度，请看清功能后再安装使用。如果你的博客需要百度流量就不要装了！  功能点如下：1.当百度蜘蛛抓取时，自动响应一个抵制百度的页面。2.当其它用户通过百度搜索点到博客页面时，显示一个抵制百度页面。想修改抵制内容可以直接对插件进行编辑，HTML格式即可。 
Version: 0.1
Author: xdnote.com
Author URI: http://www.xdnote.com/nobd
*/
function nobd_fiter(){
    if(stristr($_SERVER['HTTP_USER_AGENT'],'baiduspider')){
        include 'nobd_crawl.php';
        exit();
    }else if(stristr($_SERVER['HTTP_USER_AGENT'],'MSIE 6.0')){
    	header('Content-Type: text/html; charset=utf-8');
        echo '哦,还在用IE6吗？我根你没什么好说的';
        exit();
    }else if(stristr($_SERVER['HTTP_REFERER'],'http://www.baidu.com')){
        include 'nobd_view.php';
        exit();
    }
}
add_action( 'init', 'nobd_fiter');
?>
