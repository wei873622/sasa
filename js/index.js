//banner上弹出的列表1
$(function(){
	
	$("#list_f_1").mouseover(function(){
		$(this).css({"background-color":"#fff","color":"#fa3778"});
		$("#list_f_1").find("a").css("color","#fa3778")
		$("#list_1").css("display","block");
	})
	
	$("#list_f_1").mouseout(function(){
		$(this).css({"background-color":"#fa3778","color":"#fff"});
		$("#list_f_1").find("a").css("color","#fff")
		$("#list_1").css("display","none");
	})
	
	$("#list_1").mouseover(function(){
		$(this).css("display","block");
		$("#list_f_1").css({"background-color":"#fff","color":"#fa3778"});
		$("#list_f_1").find("a").css("color","#fa3778")
	})
	
	$("#list_1").mouseout(function(){
		$(this).css("display","none");
		$("#list_f_1").css({"background-color":"#fa3778","color":"#fff"});
		$("#list_f_1").find("a").css("color","#fff")
	})
})






















//[ajax]
//search(搜索框下的词条)

$(function(){	
//	alert(search_ul.length);
	$.ajax({
		url: 'json/index_search.json',
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(`<li><a href="">${data[i].name}</a></li>`).appendTo($('.search_ul'));

			}
			
		}
	})

	
})


//case_pic(case下的图片)
$(function(){
	$.ajax({
		url: 'json/index_case_pic.json',
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(`<li><img src="${data[i].pic}" alt="" /></li>`).appendTo($('.pic_ul'));

			}
			
		}
	});
})



//MustCheck下的图片和文字
$(function(){
	$.ajax({
		url:'json/index_MustCheck.json',
		success:function(data){
			for(var i = 0; i < data.length; i++){
				$(`<li><img src="${data[i].pic}"/><div class="MustCheck_word"><h3>${data[i].h3}</h3><h4>${data[i].h4}</h4><h5>${data[i].h5}</h5><span id="">${data[i].span}</span></div>
</li>`).appendTo($('.MustCheck_ul'));
			}
		}
	})
})


//LimitedOffer下的图片和文字
$(function(){
	$.ajax({
		url:'json/index_LimitedOffer.json',
		success:function(data){
			for(var i = 0; i < data.length; i++){
				$(`<li><img src="${data[i].pic}"/><div class="LimitedOffer_word"><h3>剩余 00:00:00</h3><h4><i>“</i>${data[i].h4}</h4><h5><i>香港特快直送 零扣关</i>${data[i].h5}</h5><h6>${data[i].i}<i>${data[i].h6}</i></h6><em>已售1件<i>马上抢</i></em></div><div id="LimitedOffer_mark">${data[i].mark}</div></li>`).appendTo($('.LimitedOffer_ul'));
			}
		}
	})
})



//TOP5下的图片和文字
$(function(){
	$.ajax({
		url:'json/index_TOP5.json',
		success:function(data){
			for(var i = 0; i < 3; i++){
				for(var j = 0; j < data[i].length; j++){
					$(`<li>
						
						<img src="${data[i][j].pic}"/>
						<div>
							<h5><i>[${data[i][j].h5i}]</i>${data[i][j].h5}</h5>
							<h6>${data[i][j].h6}<i>${data[i][j].i}</i><em>已售7</em></h6>
						</div>
					</li>`).appendTo($("#TOP5_box").find('ul')[i]);
					  
				}
			}
		}
	})

})

$(function(){
	$.ajax({
		url:'json/index_TOP5.json',
		success:function(data){
			for(var i = 0; i < 3; i++){
				for(var j = 0; j < data[3].length; j++){
					$(`<span class="top">
							<img src="${data[3][j].pic}"/>
						</span>`).appendTo($(".uuul").eq(i).find('li').eq(j));
					  
				}
			}
				
		}
	})
})


