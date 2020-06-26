$(function() {

	$('#unsubscribeButton').on('click', unsubscribeButtonHandler);

	function unsubscribeButtonHandler(e) {

		if ( $('#unsubscribe')[0].checkValidity() ) {

		       	var formData = {
	        	        'page': $( '#unsubPage' ).val(),
		                'u': $( '#unsubUser' ).val(),
		                'c': $( '#unsubCode' ).val(),
		                'unsubscribePhone': $( '#unsubscribePhone' ).val()
		            };

	            $.ajax({
        	        type: 'POST',
	                url: '/c/index',
	                data: formData,
        	        success: function(data, textStatus, jQxhr) {

                		$('#unsubscribe')[0].reset($(function() {

        	                setTimeout(function() {
	                            $('.success').fadeIn(500);
                        	}, 400);

                	        setTimeout(function() {
        	                    $('.success').fadeOut(500);
	                        }, 5000);

	                    }));

                	},

	                error: function(XMLHttpRequest, textStatus, errorThrown) {

        	            $('#unsubscribe')[0].reset($(function() {

	                        setTimeout(function() {
        	                    $('.error').fadeIn(500);
	                        }, 400);

        	                setTimeout(function() {
                	            $('.error').fadeOut(500);
                        	}, 5000);

	                    }));
                    
        	        }
	            })
	            e.preventDefault();
        	}
	}

});
