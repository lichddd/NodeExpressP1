$().ready(function () {

                getIncedent();
})

function getIncedent () {
	

$.ajax({ 
            type:"GET", 
            url:"http://sky:8080/trojan-web/user/users", 
            dataType : 'jsonp',  
        	jsonp:"jsoncallback",
        	jsonpCallback:"success_jsonpCallback",
            success:getIncedentSuss,
            error:ajaxErr
         }); 


}
function getIncedentSuss(a)
{
	
	
	cname=new Array();
	cobjs=new Array();
	pobjs=new Array();
//	var jo=JSON.parse(a);
	$.each(a, function(i,item) {    
		if (item) {
			console.log(item.toString());
			var st =setTimeout(function () {
		creatuserlist (item);
	},100*i);
			
//			
		}
		else
		{
			
		}
	});

}


function del (id) {
	
delid=id;
$.ajax({ 
            type:"GET", 
            url:"http://sky:8080/trojan-web/user/"+id+"/delete", 
            dataType : 'jsonp',  
        	jsonp:"jsoncallback",
        	jsonpCallback:"success_jsonpCallback",
            success:delSuss,
            error:ajaxErr
         }); 


}

var delid="";



function delSuss(a)
{
	
	
	
	$.each(a, function(i,item) {    
		if (item) {
			if (item.status==0) {
				_my_alert.showAlert("删除失败");
			} else if(item.status==-1){
				_my_alert.showHint("系统用户无法删除");
			}
			else
			{
//				_my_alert.showSuccess("删除成功");
				_my_shark.shark($("[userID="+delid+"]"),function () {
					$("[userID="+delid+"]").remove();
				});
				
			}


		}

	});

}

function ondelClick (event) {
	del(event.data.id);
}


function creatuserlist (item) {
	
	
	
	var tempitem=$('<a href="#" class="list-group-item userlistitem"><span class="glyphicon glyphicon-remove deleteSpan" ></span>	    <h4 class="list-group-item-heading">List group item heading</h4><p class="list-group-item-text"></p></a>');
//	tempitem.prop("userID",item.id);
	tempitem.attr("userID",item.id);
//	tempitem.find("span").attr("userID",item.id);
	tempitem.find("span").on("click",{id:item.id},ondelClick);
	tempitem.find("h4").text(item.name);
	tempitem.find("p").text("email:"+item.email);
	$("#userlistDIV").append(tempitem);
	if (item.name=="(system)") {
		
		
		tempitem.addClass("list-group-item-success");
	}
	if (item.name=="sysadmin"||item.name=="useradmin"||item.name=="auditadmin") {

		tempitem.addClass("list-group-item-info");
	}
	
	
	
	var st =setTimeout(function () {
		tempitem.addClass("userlistitemafter");
	},10);

	
}


var cname;
var cobjs;
var pobjs;



function ajaxErr(a,b,c)
{
	_my_alert.showAlert("网络故障");
	$("#loginbtn").removeAttr("disabled");
	$("#loginbtn").text("登录");
}

