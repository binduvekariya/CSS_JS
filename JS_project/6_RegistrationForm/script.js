const form = document.getElementById('form');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const agree = document.getElementById('agree');

form.addEventListener('submit', (e) => {
   
    e.preventDefault();
    validateInputs();

    // setTimeout(resetFunc, 5000);
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email1 => {
    const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return e.test(email1);
}


const validateInputs = () => {

    const nameValue = name1.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    const agreeValue = agree.checked;

    // For name
    if (nameValue === '') 
    {
        setError(name1, '*Username is required'); 
    }
    else if(nameValue.length < 5)
    {
        setError(name1, '*Username should be at least 5 characters');
    }
    else 
    {
        setSuccess(name1);
    }

    // For Email
    if (emailValue === '') 
    {
        setError(email, '*Email is required')
    }
    else if(!isValidEmail(emailValue))
    {
        setError(email, '*Provide a valid Email address');
    }
    else
    {
        setSuccess(email);
    }

    // For password
    if (passwordValue === '')
    {
        setError(password, '*Password is required');
    }
    else if(passwordValue.length < 8)
    {
        setError(password, '*Password must be at least 8 characters');  
    }
    else
    {
        setSuccess(password);
    }


    // For Confirm password
    if (cpasswordValue === '')
    {
        setError(cpassword, '*Confirm password is required'); 
    }
    else if(cpasswordValue !== passwordValue)
    {
        setError(cpassword, '*Password does not match');
    }
    else 
    {
        setSuccess(cpassword);  
    }

    // For agree CheckBox
    if(!agreeValue) 
    {
        setError(agree, '*Please agree to the terms and conditions');
    }
    else
    {
        setSuccess(agree);
    }
}

const resetFunc = () => {
    name1.value = '';
    email.value = '';
    password.value = '';
    cpassword.value = '';
    agree.checked = false;

    const inputs = [name1, email, password, cpassword, agree];

    inputs.forEach((itr) => {
        itr.parentElement.classList.remove('success');
    })

}

