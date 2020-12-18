// // 全部
// $('#grid').isotope({ filter: '*' });
// class 中包含 transition
// $('#grid').isotope({ filter: '.transition' });
// // class 中包含 metal
// $('#grid').isotope({ filter: '.metal' });

// jQuery 代码过滤
// $('#grid').isotope({
//   filter: function() {
//     var number = $(this).find('.number').text();
//     return parseInt( number, 10 ) > 50;
//   }
// })

function maintest() {
	$('#grid').isotope({
		filter: "*"
	});
}

maintest()
$('.button-group').on('click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$('#grid').isotope({
		filter: filterValue
	});
});

