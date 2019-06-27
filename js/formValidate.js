//for form validation
function init() {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', formValidate);
}

init();

function formValidate() {
    "use strict";
    var name = document.getElementById('in_nm'),
        email = document.getElementById('in_em'),
        subject = document.getElementById('in_sub'),
        message = document.getElementById('in_msg'),
        phone = document.getElementById('in_phone');

    if (name.value === "") {
        alert("Please, Enter Your Name!");
        name.focus;
        return false;
    }
    if (email.value === "") {
        alert("Please, Enter Your Email");
        email.focus;
        return false;
    }
    if (phone.value === "") {
        alert('Please, Enter Your Phone Number!');
        phone.focus;
        return false;
    }
    if (subject.value === "") {
        alert("Please, Enter Your subject!");
        subject.focus;
        return false;
    }

    if (message.value === "") {
        alert('Please, Enter Your Messages!');
        mess.focus;
        return false;
    }
}
