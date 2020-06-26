$(function() {

	if ($('#getContentButton')) { $('#getContentButton').on('click', getContentButtonHandler); }
	if ($('#getContentButton2')) { $('#getContentButton2').on('click', getContentButtonHandler); }

	function getContentButtonHandler(e) {

		var login = $('#loginUser').val();
		var accessCode = $('#accessCode').val();

		if ( $('#getContent')[0].checkValidity() ) {
			var formData = {
				'ajax': '1',
				'page': $('#loginPage').val(),
				'u': login,
				'c': accessCode
			};

			$.ajax({
				type: 'POST',
				url: '/c/index',
				data: formData,
				success: function(data, textStatus, jQxhr) {
					location.href = '/c/index?u='+login+"&c="+accessCode;
				},

				error: function(XMLHttpRequest, textStatus, errorThrown) {
					//$('#getContent')[0].reset($(function() {
						setTimeout(function() {
							$('.error').fadeIn(500);
						}, 400);

						setTimeout(function() {
							$('.error').fadeOut(500);
						}, 5000);
					//}));
				}
			})
			e.preventDefault();
		}
	}
});
