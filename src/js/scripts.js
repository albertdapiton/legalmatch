(function($) {
	$(function() {
		$('.select-items div').on('click', function() {
			console.log('test');
			$('#addCategory').modal('show');
		});
	});
})(jQuery);