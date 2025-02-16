//Record input from the html forms
const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const confirm_password_input = document.getElementById('confirm-password-input')
const error_messages = document.getElementById('errors')
const db_handle = import('./database_handler.js')
const user = null
const is_new_user = false

form.addEventListener('submit', (e) => {
    let errors = []
    
    //Checks to see if we are in login or create-profile
    if(confirm_password_input)
    {
        //If in create profile
        errors = getSignUpErrors(password_input.value, confirm_password_input.value)
        user = {
            name: username_input.value,
            password: password_input.value
        }
        is_new_user = true
    }
    else
    {
        //If in login
        errors = getLoginErrors(username_input.value, password_input.value)
    }

    //If there are any errors, do not allow submission and throw error messages
    if(errors.length > 0)
    {
        e.preventDefault()
        error_messages.innerText = errors.join(". ")
        is_new_user = false
    }

})

//Check for user error in the sign up process
function getSignUpErrors(password, confirmPass)
{
    let errors = []

    if(password !== confirmPass)
    {
        errors.push("Password and Confirmation Password do not match")
    }

    return errors
}

//Check for user errors in the login process
function getLoginErrors(username, password)
{
    let errors = []



    return errors
}

if(is_new_user)
{
    db_handle.insert(user)
}

document.addEventListener('DOMContentLoaded',function(){

    var params=(0||'defaultSubmit')+'='+'submit';console.log(params);
    var page=window.location.href;
    sendRequest(params,
                ('get'.toLowerCase()=='get'?1:2), 
                autoPageAjax_cb,
                (U_R_L)
                );
    
        const COLUMN_DAYMONTH_START = 2;
        const MAXIMUM_DAYMONTH = 32;
        testSetCalendarDates(COLUMN_DAYMONTH_START, 
                             MAXIMUM_DAYMONTH,
                             DEBUG_GLOBAL);
    //	document.getElementsByName('NOTANAME')[0].addEventListener('click',function(event){event.preventDefault();});
    
    });