$().ready(function () {
	$('.continer div').hide();
	$('.continer').find($('.continer div')[0]).show();
	$('.tab ul li').on('click',selectChange);
	
	
	
	
})


function selectChange (e) {
//	alert($(this).attr('target'));
	
	$('.tab ul li').removeClass('selectLi');
	$(this).addClass('selectLi');
	$('.continer div').hide();
	$('#'+$(this).attr('target')).show();
	
}

