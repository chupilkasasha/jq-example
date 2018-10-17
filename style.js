function hideCommends(){
	$('#comments').hide(1000, function(){
	$('#hide').hide();
	$('#show').show();

});
}

function showCommets(){
	$('#comments').show(1000, function(){
		$('#hide').show();
		$('#show').hide();
	});
}

$(document).ready (function(){
	$('#hide').bind('click', hideCommends);
	$('#show').bind('click', showCommets);
});







