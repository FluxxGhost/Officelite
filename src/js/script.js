function countdown() {
    const endDate = new Date(document.getElementById('launch-date').textContent).getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft >= 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('min').textContent = minutes;
        document.getElementById('sec').textContent = seconds;
    } else {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('min').textContent = '0';
        document.getElementById('sec').textContent = '0';
    }
};

setInterval(countdown, 1000);



const buttons = document.querySelectorAll('.getButton');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'sign-up.html';
    });
});




const form = document.getElementById('form');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const userphone = document.getElementById('userphone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const useremailValue = useremail.value.trim();
    const userphoneValue = userphone.value.trim();

    if(usernameValue === '') {
        setErrorFor(username);
    } else {
        setSuccessFor(username);
    }

    if(useremailValue === '') {
        setErrorFor(useremail);
    } else if(!isEmail(useremailValue)) {
        setErrorFor(useremail);
    } else {
        setSuccessFor(useremail);
    }

    if(userphoneValue === '') {
        setErrorFor(userphone);
    } else if(!isPhone(userphoneValue)) {
        setErrorFor(userphone);
    } else {
        setSuccessFor(userphone);
    }
}

function setErrorFor(input) {
    const startInput = input.parentElement;

    startInput.className = 'start__input error';
}

function setSuccessFor(input) {
    const startInput = input.parentElement;

    startInput.className = 'start__input';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone);
}






const dropdowns = document.querySelectorAll('.start__dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open')
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});