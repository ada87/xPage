<?php 
    //nobd_view.php
    header('Content-Type: text/html; charset=utf-8');
 ?>
<html>
<head>
<meta charset="utf-8" />
<title>广告贴：请勿使用百度</title>
<style type="text/css">
body{
    margin:0;
}
article{
    width: 600px;
    margin: 30px auto;
    font-family: 华文黑体,微软雅黑;
}
.warning{
    background: none repeat scroll 0 0 #FFFBCF;
    border-bottom: 1px solid #F0ECCF;
    font-size: 16px;
    text-align: center;
    height:80px;
    line-height:80px;
}
a{
    color:#0000CC;
}
</style>
</head>
<body>
    <div class="warning" >
        <a href="<?php echo $_SERVER['REQUEST_URI']?>">检测到你正在使用百度垃圾搜索引擎，点击继续访问&gt;&gt;</a>
    </div>
    <article>
    <h1>广告贴：请勿使用百度</h1>
    <p>
        百度是一个充满假广告，假药，假公司而且还专业帮助这些假货们推广的网站。如果你经常使用Baidu和任何一个其它搜索引擎，对比体验就感觉到了。经常是东西搜不到，垃圾广告一大堆，最可恨的是垃圾广告还搞个权威网站的样式。
    </p>
    <p>
        互联网上像各位意识高的技术人士们毕竟只有一少部分，不少涉网不深的朋友被Baidu骗后，你们“高手”还去骂人SB，可有想到受骗者的心情。
    </p>
    <p>
        即使这些被骗的人与我无关，我也不愿使用。搜东西那叫一个不准确，搜到的东西排前面的大多都是商业垃圾站，要么就是自家或给百度钱的网站，毫无公平性可言，经常想要的结果排不到前10或更低，可有想过你在找东西时在百度浪费的时间？可以经常使用GOOGLE与百度对比一下，用一段时间就会体会到天地区别了。
    </p>
    <p>
        标题叫广告贴，但我不是在做广告，虽然推荐了Google，鄙视了下Baidu，但也是个人的心得与建议，并非广告和诬蔑，你可以鄙视我，我无所谓~。
    </p>
    <p>
        最后，本人把这个反baidu的功能做成了wordPress插件，功能很简单。各位有wp博客还想屏蔽百度的可以去下载插件，地址：<a href="http://www.xdnote.com/nobd/">http://www.xdnote.com/nobd/</a>。另外推荐一下贝壳网<a href="http://coolshell.cn/articles/7186.html">《做个环保主义的程序员》</a>
    </p>
    </article>
</body>
</html>
