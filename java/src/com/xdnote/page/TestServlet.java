package com.xdnote.page;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TestServlet extends HttpServlet{

	public static String[] list1 = {"item1","item2","item3"};
	public static String[] list2 = {"item4","item5","item6","item7"};

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException
	{
		this.doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException
	{
		response.setHeader("Content-type","application/json");
		String action = request.getParameter("action")==null?"home":request.getParameter("action");
		StringBuffer sb = new StringBuffer();
		if(action.equals("list")){
			String id = request.getParameter("id");
			String[] list = id.equals("1")?list1:list2;
			sb.append("{\"item\":[");
			for(int i=0;i<list.length;i++){
				sb.append("{\"name\":\""+list[i]+"\"}");
				if((i+1)!=list.length){
					sb.append(",");
				}
			}
			sb.append("]}");
		}else if(action.equals("item")){
			sb.append("{\"name\":\""+request.getParameter("name")+"\"}");
		}else{
			sb.append("{\"list\":[{\"id\":\"1\"},{\"id\":\"2\"}]}");
		}
		response.getWriter().println(sb.toString());
		
	}

}
