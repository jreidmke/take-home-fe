$(document).ready(function() {
    async function getUsers() {
        const result = await $.ajax({
            url: 'http://localhost:3000/users',
            type: "GET"
        });
        result.map(u => $("#user-list").append(`<li><a href="/users/${u.id}"><span class=${u.state==="pending" ? "text-warning" : "text-success"}>${u.firstName} ${u.lastName}</span></a>, <a href="mailto:${u.email}">${u.email}</a>  
        </li>`))
    };
    getUsers();
});



$("#user-list").append
