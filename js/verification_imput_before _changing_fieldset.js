
// initialize variables
var current_fs, next_fs, previous_fs;
var left, opacity, scale; //fieldset properties which we will animate
var animating = false;

// add click event listeners to next and previous buttons
var currentIndex = 0; // Commence par le premier fieldset
var fieldsets = $("fieldset");
$(fieldsets[0]).show(); // Affiche seulement le premier au début
$(".next").click(function() {
    // Remove any previous error messages and styling
    $(fieldsets[currentIndex]).find('.error-message').remove();
    $(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").css("border-color", "");

    // Validation flag
    var isValid = true;

    // Check if any input field is empty or invalid
    $(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").each(function() {
        if ($(this).is("select") && $(this).prop('required') && $(this).val() === '') {
            isValid = false;
            // Change background color of empty select elements to red
            $(this).css("background-color", "red");
        } else if ($(this).is("input")) {
            // Validate input based on type
            var inputValue = $(this).val().trim();
            var inputType = $(this).attr("type");
            switch (inputType) {
                case "text":
                    // Add your text input validation conditions here
                    break;
                case "email":
                    // Check if input is a valid email address
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(inputValue)) {
                        isValid = false;
                    }
                    break;
                case "time":
                    // Add your time input validation conditions here
                    break;
                case "tel":
                    // Add your telephone input validation conditions here
                    break;
                case "number":
                    // Add your number input validation conditions here
                    break;
                case "date":
                    // Add your date input validation conditions here
                    break;
            }
            if (inputValue === '') {
                isValid = false;
            }
            // Change background color of empty or invalid input fields to red
            if (!isValid) {
                $(this).css("background-color", "red");
            } else {
                $(this).css("background-color", "green");
            }
        }
    });

    // Proceed to the next page only if all inputs are filled and valid
    if (isValid) {
        if (currentIndex < fieldsets.length - 1) {
            $(fieldsets[currentIndex]).hide();
            currentIndex++;
            $(fieldsets[currentIndex]).show();
        }
    } else {
        // Show browser's built-in form validation message
        var form = $(fieldsets[currentIndex]).closest('form')[0];
        if (form) {
            form.reportValidity();
        }
    }
});

// Update "Next" button state based on input validity
$(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").on('input change', function() {
    var isValid = true;
    $(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").each(function() {
        if ($(this).is("select") && $(this).prop('required') && $(this).val() === '') {
            isValid = false;
        } else if ($(this).is("input")) {
            var inputValue = $(this).val().trim();
            var inputType = $(this).attr("type");
            switch (inputType) {
                case "text":
                    // Add your text input validation conditions here
                    break;
                case "email":
                    // Check if input is a valid email address
                    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(inputValue)) {
                        isValid = false;
                    }
                    break;
                case "time":
                    // Add your time input validation conditions here
                    break;
                case "tel":
                    // Add your telephone input validation conditions here
                    break;
                case "number":
                    // Add your number input validation conditions here
                    break;
                case "date":
                    // Add your date input validation conditions here
                    break;
            }
            if (inputValue === '') {
                isValid = false;
            }
        }
    });
    if (isValid) {
        $(".next").prop("disabled", false);
    } else {
        $(".next").prop("disabled", true);
    }
});

// Add event listener to input and select elements to dynamically change background color
$(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").on('input change', function() {
    if ($(this).is("select")) {
        if ($(this).prop('required') && $(this).val() === '') {
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "green");
        }
    } else if ($(this).is("input")) {
        if ($(this).prop('required') && $(this).val() === '') {
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "green");
        }
    }
});

// Update background color when field loses focus
$(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").on('blur', function() {
    if ($(this).is("select")) {
        if ($(this).prop('required') && $(this).val() === '') {
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "green");
        }
    } else if ($(this).is("input")) {
        if ($(this).prop('required') && $(this).val() === '') {
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "green");
        }
    }
});

// Initialize background color on page load
$(fieldsets[currentIndex]).find("input[type='text'], input[type='email'], input[type='time'], input[type='tel'], input[type='number'], input[type='date'], select").each(function() {
    if ($(this).is("select")) {
        if ($(this).prop('required') && $(this).val() === '') {
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "green");
        }
    } else if ($(this).is("input")) {
        if ($(this).prop('required') && $(this).val() === '') {
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "green");
        }
    }
});



$(".previous").click(function() {
    if (currentIndex > 0) {
        $(fieldsets[currentIndex]).hide();
        currentIndex--;
        $(fieldsets[currentIndex]).show();
    }
});

//submit

// Add event listener to form submit
// Add event listener to the submit button
$("#submitButton").click(function() {
    // Disable the submit button
    $(this).prop("disabled", true);
    
    // Submit the form
    $("#msform").submit();
});
