function validateForm(event) {
    event.preventDefault(); // Prevent from submission

    // clear previous error message
    const errorMessages = document.getElementById('errorMessages').value;
    // get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // validate name
    if (name === '') {
        showError('Name is required');
    }
    // validate email
    if (email === '') {
        showError("Email address can't be empty");
    } else if (!validateEmail(email)) {
        showError(`Please enter a valid email format`);
    }
    // validate password
    if (password === '') {
        showError('Password field cannot be blank.');
    } else if (password.length < 6) {
        showError('Your Password must contain at least six characters.')
    }

    // simple email validation using regular expression
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    // if no errors, submit the form
    // if (errorMessages.innerHTML === '') {
    //   document.getElementById('myForm').submit();
    // }

    function showError(errorMessage) {
        const errorMessages = document.getElementById('errorMessages');
        const error = document.createElement('p');
        error.innerHTML = errorMessage;
        errorMessages.appendChild(error);
    }
}