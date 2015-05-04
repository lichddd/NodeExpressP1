$().ready(function () {
//	$.fn.bootstrapTable.locales='zh-CN';
//createChart ();
                getIncedent();
//              createChart3();
                getIncedent1();
})



function getRows() {
	var rows = [];

var id = 0;

                    for (var i = 0; i < 23; i++) {
                        rows.push({
                            id: id,
                            name: 'test' + id,
                            price: '$' + id
                        });
                        id++;
                    }
                    return rows;
}


//function getIncedent () {
//	
//
//	var userList = new Array();  
//userList.push({username: $("#username").val(),password: $("#inputPassword").val()});   
//$.ajax({ 
//          type:"POST", 
//          url:"http://sky:8080/trojan-web/rptMalincident/show", 
//          dataType:"json",      
//          contentType:"application/json",               
//          data:JSON.stringify(userList), 
//          success:getIncedentSuss,
//          error:ajaxErr
//       }); 
//
//
//}
function getIncedent () {
	

$.ajax({ 
            type:"GET", 
            url:"http://sky:8080/trojan-web/rptMalincident/0/show", 
            dataType : 'jsonp',  
        	jsonp:"jsoncallback",
        	jsonpCallback:"success_jsonpCallback",
            success:getIncedentSuss,
            error:ajaxErr
         }); 


}
function getIncedent1 () {
	

$.ajax({ 
            type:"GET", 
            url:"http://sky:8080/trojan-web/rptMalincident/1/show", 
            dataType : 'jsonp',  
        	jsonp:"jsoncallback",
        	jsonpCallback:"success_jsonpCallback",
            success:getIncedentSuss1,
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
//			_my_alert.showAlert("登录失败,用户名或密码错误");
//			$("#loginbtn").removeAttr("disabled");
//			$("#loginbtn").text("登录");
			cname.push(item.geographicalArea);
			
			cobjs.push({value:item.count,name:item.geographicalArea});
			if(item.geographicalArea=="韩国"||item.geographicalArea=="美国")
			{
				pobjs.push({value:item.count,name:item.geographicalArea});
			}
			
			console.log(cname);
		}
		else
		{
			
		}
	});
	$("#my_table").bootstrapTable({
                    data: a
                });
                createChart();
    createChart1(); 

}
function getIncedentSuss1(a)
{
	
	
	cc=new Array();
	cv=new Array();
//	var jo=JSON.parse(a);
	$.each(a, function(i,item) {    
		if (item) {
			console.log(item.toString());
			cc.push(item.recordDate.date);
			cv.push(item.count);
//			
		}
		else
		{
			
		}
	});

    createChart3(); 
}

var cc;
var cv;

var cname;
var cobjs;
var pobjs;


function createChart () {
	var myChart = echarts.init(document.getElementById('main'));

// 过渡---------------------
myChart.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});

// ajax getting data...............

// ajax callback
myChart.hideLoading();

// 图表使用-------------------
option = {
    backgroundColor: '#1b1b1b',
    color: ['gold','aqua','lime'],

    title : {
        text: '安全事件',
        subtext:'世界范围发生区域',
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter : function (params) {
            var value = (params.value + '').split('.');
//          value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
//                  + '.' + value[1];
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataRange: {
        min: 0,
        max: 100,
        text:['High','Low'],
        realtime: false,
        calculable : true,
       color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
    },
    series : [
        {
            name: '风险事件',
            type: 'map',
            mapType: 'world',
            roam: true,
            mapLocation: {
                y : 60
            },
            itemStyle:{
                emphasis:{label:{show:true}}
            },
          
          nameMap : {
                'Afghanistan':'阿富汗',
                'Angola':'安哥拉',
                'Albania':'阿尔巴尼亚',
                'United Arab Emirates':'阿联酋',
                'Argentina':'阿根廷',
                'Armenia':'亚美尼亚',
                'French Southern and Antarctic Lands':'法属南半球和南极领地',
                'Australia':'澳大利亚',
                'Austria':'奥地利',
                'Azerbaijan':'阿塞拜疆',
                'Burundi':'布隆迪',
                'Belgium':'比利时',
                'Benin':'贝宁',
                'Burkina Faso':'布基纳法索',
                'Bangladesh':'孟加拉国',
                'Bulgaria':'保加利亚',
                'The Bahamas':'巴哈马',
                'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
                'Belarus':'白俄罗斯',
                'Belize':'伯利兹',
                'Bermuda':'百慕大',
                'Bolivia':'玻利维亚',
                'Brazil':'巴西',
                'Brunei':'文莱',
                'Bhutan':'不丹',
                'Botswana':'博茨瓦纳',
                'Central African Republic':'中非共和国',
                'Canada':'加拿大',
                'Switzerland':'瑞士',
                'Chile':'智利',
                'China':'中国',
                'Ivory Coast':'象牙海岸',
                'Cameroon':'喀麦隆',
                'Democratic Republic of the Congo':'刚果民主共和国',
                'Republic of the Congo':'刚果共和国',
                'Colombia':'哥伦比亚',
                'Costa Rica':'哥斯达黎加',
                'Cuba':'古巴',
                'Northern Cyprus':'北塞浦路斯',
                'Cyprus':'塞浦路斯',
                'Czech Republic':'捷克共和国',
                'Germany':'德国',
                'Djibouti':'吉布提',
                'Denmark':'丹麦',
                'Dominican Republic':'多明尼加共和国',
                'Algeria':'阿尔及利亚',
                'Ecuador':'厄瓜多尔',
                'Egypt':'埃及',
                'Eritrea':'厄立特里亚',
                'Spain':'西班牙',
                'Estonia':'爱沙尼亚',
                'Ethiopia':'埃塞俄比亚',
                'Finland':'芬兰',
                'Fiji':'斐',
                'Falkland Islands':'福克兰群岛',
                'France':'法国',
                'Gabon':'加蓬',
                'United Kingdom':'英国',
                'Georgia':'格鲁吉亚',
                'Ghana':'加纳',
                'Guinea':'几内亚',
                'Gambia':'冈比亚',
                'Guinea Bissau':'几内亚比绍',
                'Equatorial Guinea':'赤道几内亚',
                'Greece':'希腊',
                'Greenland':'格陵兰',
                'Guatemala':'危地马拉',
                'French Guiana':'法属圭亚那',
                'Guyana':'圭亚那',
                'Honduras':'洪都拉斯',
                'Croatia':'克罗地亚',
                'Haiti':'海地',
                'Hungary':'匈牙利',
                'Indonesia':'印尼',
                'India':'印度',
                'Ireland':'爱尔兰',
                'Iran':'伊朗',
                'Iraq':'伊拉克',
                'Iceland':'冰岛',
                'Israel':'以色列',
                'Italy':'意大利',
                'Jamaica':'牙买加',
                'Jordan':'约旦',
                'Japan':'日本',
                'Kazakhstan':'哈萨克斯坦',
                'Kenya':'肯尼亚',
                'Kyrgyzstan':'吉尔吉斯斯坦',
                'Cambodia':'柬埔寨',
                'South Korea':'韩国',
                'Kosovo':'科索沃',
                'Kuwait':'科威特',
                'Laos':'老挝',
                'Lebanon':'黎巴嫩',
                'Liberia':'利比里亚',
                'Libya':'利比亚',
                'Sri Lanka':'斯里兰卡',
                'Lesotho':'莱索托',
                'Lithuania':'立陶宛',
                'Luxembourg':'卢森堡',
                'Latvia':'拉脱维亚',
                'Morocco':'摩洛哥',
                'Moldova':'摩尔多瓦',
                'Madagascar':'马达加斯加',
                'Mexico':'墨西哥',
                'Macedonia':'马其顿',
                'Mali':'马里',
                'Myanmar':'缅甸',
                'Montenegro':'黑山',
                'Mongolia':'蒙古',
                'Mozambique':'莫桑比克',
                'Mauritania':'毛里塔尼亚',
                'Malawi':'马拉维',
                'Malaysia':'马来西亚',
                'Namibia':'纳米比亚',
                'New Caledonia':'新喀里多尼亚',
                'Niger':'尼日尔',
                'Nigeria':'尼日利亚',
                'Nicaragua':'尼加拉瓜',
                'Netherlands':'荷兰',
                'Norway':'挪威',
                'Nepal':'尼泊尔',
                'New Zealand':'新西兰',
                'Oman':'阿曼',
                'Pakistan':'巴基斯坦',
                'Panama':'巴拿马',
                'Peru':'秘鲁',
                'Philippines':'菲律宾',
                'Papua New Guinea':'巴布亚新几内亚',
                'Poland':'波兰',
                'Puerto Rico':'波多黎各',
                'North Korea':'北朝鲜',
                'Portugal':'葡萄牙',
                'Paraguay':'巴拉圭',
                'Qatar':'卡塔尔',
                'Romania':'罗马尼亚',
                'Russia':'俄罗斯',
                'Rwanda':'卢旺达',
                'Western Sahara':'西撒哈拉',
                'Saudi Arabia':'沙特阿拉伯',
                'Sudan':'苏丹',
                'South Sudan':'南苏丹',
                'Senegal':'塞内加尔',
                'Solomon Islands':'所罗门群岛',
                'Sierra Leone':'塞拉利昂',
                'El Salvador':'萨尔瓦多',
                'Somaliland':'索马里兰',
                'Somalia':'索马里',
                'Republic of Serbia':'塞尔维亚共和国',
                'Suriname':'苏里南',
                'Slovakia':'斯洛伐克',
                'Slovenia':'斯洛文尼亚',
                'Sweden':'瑞典',
                'Swaziland':'斯威士兰',
                'Syria':'叙利亚',
                'Chad':'乍得',
                'Togo':'多哥',
                'Thailand':'泰国',
                'Tajikistan':'塔吉克斯坦',
                'Turkmenistan':'土库曼斯坦',
                'East Timor':'东帝汶',
                'Trinidad and Tobago':'特里尼达和多巴哥',
                'Tunisia':'突尼斯',
                'Turkey':'土耳其',
                'United Republic of Tanzania':'坦桑尼亚联合共和国',
                'Uganda':'乌干达',
                'Ukraine':'乌克兰',
                'Uruguay':'乌拉圭',
                'United States of America':'美国',
                'Uzbekistan':'乌兹别克斯坦',
                'Venezuela':'委内瑞拉',
                'Vietnam':'越南',
                'Vanuatu':'瓦努阿图',
                'West Bank':'西岸',
                'Yemen':'也门',
                'South Africa':'南非',
                'Zambia':'赞比亚',
                'Zimbabwe':'津巴布韦'
            },
          geoCoord: {
                '韩国': [128,36],
                '美国': [-76,39]
                
            },
//          data:[
//          	  {name:'韩国',value:95},
//                  {name:'美国',value:90}]

			data:cobjs
        }
      ,
      
      {
            name: '',
            type: 'map',
            mapType: 'world',
            data:[],

            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/100
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    }
//                  ,
//                  emphasis: {
//                      label:{position:'top'}
//                  }
                },
                
                
                
                
                
                
                
                data : pobjs
            
//              data : [
//                  {name:'韩国',value:95},
//                  {name:'美国',value:90}
//              ]
            }
            
            
            
        }
    ]
};
                    
                    
myChart.setOption(option);
}

function createChart1 () {
	option = {
    title : {
        text: '威胁地域分布',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:cname
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', 200],
            roseType : 'radius',
            width: '40%',       // for funnel
            max: 40,            // for funnel
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true
                    },
                    labelLine : {
                        show : true
                    }
                }
            },
            data:cobjs
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', 200],
            roseType : 'area',
            x: '50%',               // for funnel
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            data:cobjs
        }
    ]
};

var myChart = echarts.init(document.getElementById('main2'));

// 过渡---------------------
myChart.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});

// ajax getting data...............

// ajax callback
myChart.hideLoading();

myChart.setOption(option);
}

function createChart3 () {
option = {
    title : {
        text: '风险次数变化',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
//          data : ['周一','周二','周三','周四','周五','周六','周日']
			data : cc
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} 次'
            }
        }
    ],
    series : [
        {
            name:'发生次数',
            type:'line',
//          data:[11, 11, 15, 13, 12, 13, 10],
            data:cv,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
       
    ]
};
                    
var myChart = echarts.init(document.getElementById('main3'));

// 过渡---------------------
myChart.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});

// ajax getting data...............

// ajax callback
myChart.hideLoading();

myChart.setOption(option);
}


function ajaxErr(a,b,c)
{
	_my_alert.showAlert("网络故障");
	$("#loginbtn").removeAttr("disabled");
	$("#loginbtn").text("登录");
}

