$(document).ready(function() {
    $("#submit-btn").on("click", function(e) {
        e.preventDefault();
        $("#register-form").ajaxSubmit({url: 'http://localhost:3000/users', type: 'POST'});
    });
});