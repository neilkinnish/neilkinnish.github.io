$(function() {

	$("article").on("click", function() { 
		var url = $(this).find("a").prop("href");

		if (url != undefined)
			window.location.href = url;
	});

});