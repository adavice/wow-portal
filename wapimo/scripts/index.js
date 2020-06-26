$(function() {

	$('#getContentButton').on('click', getContentButtonHandler);

	function getContentButtonHandler(e) {

		var contactUsForm = $('#getContentButton');

		var login = $('#login').val();
        var accessСode = $('#accessСode').val();

        if ( !contactUsForm[0].checkValidity() ) {

        	var formData = {
                'login': $('#login').val(),
                'accessСode': $('#accessСode').val()
            };

            $.ajax({
                type: 'POST',
                url: ' ',
                data: formData,
                success: function(data, textStatus, jQxhr) {

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {

                    $('#getContent')[0].reset($(function() {

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


	$('#unsubscribeButton').on('click', unsubscribeButtonHandler);

	function unsubscribeButtonHandler(e) {

		var unsubscribeButton = $('#unsubscribeButton');

		var unsubscribePhone = $('#unsubscribePhone').val();

		if ( !contactUsForm[0].checkValidity() ) {

        	var formData = {
                'unsubscribePhone': $( '#unsubscribePhone' ).val()
            };

            $.ajax({
                type: 'POST',
                url: ' ',
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