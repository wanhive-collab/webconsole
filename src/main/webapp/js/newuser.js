/**
 * New user sign up
 */

$(document).ready(function() {
	var consentMessage = "Please indicate that you have read and agree to the Terms & Conditions and Privacy Policy.";
	var activationMessage = "Activation code has been sent to your email.";
	var errorMessage = activationMessage;
	$("#logonform").on("submit", function() {
		if (!$("#agreement").prop('checked')) {
			alert(consentMessage);
			return false;
		}
		var email = $("#email").val();
		var alias = $("#alias").val();
		var captcha = $("#recaptcha-response")
			.val();
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "api/user",
			"method": "POST",
			"headers": {
				"Content-Type": "application/x-www-form-urlencoded",
				"cache-control": "no-cache"
			},
			"data": {
				"email": email,
				"alias": alias,
				"captcha": captcha
			}
		}

		$.ajax(settings).done(function(_) {
			alert(activationMessage);
		}).fail(function() {
			alert(errorMessage);
		}).always(function() {
		});

		return false;
	});

	$(document).ajaxStart(function() {
		$("#wait-veil").css("display", "block");
	});
	$(document).ajaxComplete(function() {
		$("#wait-veil").css("display", "none");
	});
});
