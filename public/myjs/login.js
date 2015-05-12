


$().ready(function()
{

console.log(title);
//$.fn.bootstrapSwitch.defaults.size='mini';
//$("[name='my-checkbox']").bootstrapSwitch();


if (localStorage.getItem("auto")=="true") {
	autoLogin();
}


}
)

function autoLogin () {

//$("#save_me").prop("checked","true");
$("#save_me").prop("checked",true);
//$("[name='my-checkbox']").toggleState();
$("#username").attr("value",localStorage.getItem("username"));
$("#inputPassword").attr("value",localStorage.getItem("password"));


}


function loginbtnClick (event) {
	
	
//	console.log("ajax_login");
//	event.currentTarget.setAttribute("disabled","disabled");
	$("#loginbtn").attr("disabled","disabled");
	$("#loginbtn").text("登录中...");
//	_my_progress.progress();
	var userList = new Array();  
userList.push({username: $("#username").val(),password: $("#inputPassword").val()});   
$.ajax({ 
            type:"POST", 
            url:"login/ajax_login",
            dataType:"json",      
            contentType:"application/json",               
            data:JSON.stringify(userList),
            success:loginSuss,
            error:ajaxErr
         }); 


}

function loginSuss(a,b,c)
{
	
//		_my_progress.finish();
//	
//	var jo=JSON.parse(a);
	$.each(a, function(i,item) {    
		if (item.res==0) {
			_my_alert.showAlert("登录失败,用户名或密码错误");
			$("#loginbtn").removeAttr("disabled");
			$("#loginbtn").text("登录");
			_my_shark.shark($("#loginform"));
		}
		else
		{
			if ($("#save_me").prop("checked")==true) {
				localStorage.setItem("auto","true");
				localStorage.setItem("username",$("#username").val());
				localStorage.setItem("password",$("#inputPassword").val());
				
			}
			
			
			getSysInfo();
//			$("#loginform").submit();
		}
	});

}
function getSysInfoSuss(a,b,c)
{

//		_my_progress.finish();
//	
//	var jo=JSON.parse(a);
	$.each(a, function(i,item) {    
		if (item) {
//			alert(i.toLocaleString());
			sessionStorage.setItem("trodata",JSON.stringify(item.success));
		}
		else
		{
		
			
		}
	});
	
	$("#loginform").css("transform","scale(1.5)");
	$("#loginform").css("opacity","0");
	var st =setTimeout(function () {
		$("#loginform").submit();
	},1000);
//	clearTimeout(st);
}
function getSysInfo () {
	$("#loginbtn").attr("disabled","disabled");
	$("#loginbtn").text("获取系统数据...");
//		_my_progress.progress();
	$.ajax({ 
            type:"POST", 
            url:"ajax_readsysteminfo", 
            dataType:"json",      
            contentType:"application/json",               
            data:JSON.stringify(new Array()), 
            success:getSysInfoSuss,
            error:ajaxErr
         }); 
}

function ajaxErr(a,b,c)
{
	_my_alert.showAlert("网络故障");
	$("#loginbtn").removeAttr("disabled");
	$("#loginbtn").text("登录");
//	_my_progress.finish();
}
