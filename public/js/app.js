$(document).ready(function() {

    getUsers();

    //Submit Button Adds New User
    $("#submit-btn").on("click", function(e) {
        let alertStr = "";
        if($("#email").val() === "") alertStr += " Email ";
        if($("#firstName").val() === "") alertStr += " First Name ";
        if($("#lastName").val() === "") alertStr += " Last Name ";
        if(alertStr.length > 0) {
            alert(`You must fill properties: ${alertStr} to create an account`);
            return;
        }
        $("#register-form").ajaxSubmit({
            url: 'http://localhost:3000/users', 
            type: 'POST'
        });
    });
});


//AJAX Req to Populate Admin List of Users
async function getUsers() {
    const result = await $.ajax({
        url: 'http://localhost:3000/users',
        type: "GET"
    });
    console.log(result);
    result.map(u => $("#user-list").append(`<li><a href="/users/${u.id}"><span class=${u.state==="pending" ? "text-warning" : "text-success"}>${u.firstName} ${u.lastName}</a>, <a href="mailto:${u.email}">${u.email}</a>  
        </small></li>`))
    };