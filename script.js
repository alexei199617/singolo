// КОНСТАНТЫ
const navigation = document.getElementById("navigation");
const button = document.getElementById("btn");
const exit_button = document.getElementById("exit_btn");
const portfolio_icon = document.getElementById("portfolio_text_icon");
const portfolio_pictures = document.getElementById("portfolio_pictures");
const form = document.getElementById("myform");


// header
navigation.addEventListener('click', (event) => {
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('navigation_active'));
    event.target.classList.add('navigation_active');
});



// phone
document.querySelectorAll('.body_phone').forEach(element => {
    element.addEventListener('click', () => {
        let screen = element.parentElement.querySelector('.phone_screen');
        if (screen.style.opacity === "0") {
            screen.style.opacity = "1";
        } else {
            screen.style.opacity = "0";
        }
    });
});



//slider
let arrow_slider = document.querySelectorAll('.sl_p');
let arrow_index = 0;
let arrow_status = true;

function change_arrow_index(n) {
    arrow_index = (n + arrow_slider.length) % arrow_slider.length;
}

function hideItem(direction) {
    arrow_status = false;
    arrow_slider[arrow_index].classList.add(direction);
    arrow_slider[arrow_index].addEventListener('animationend', function() { //animationend - время анимации
        this.classList.remove('picture_active', direction);
    });
}

function showItem(direction) {
    arrow_slider[arrow_index].classList.add('next', direction);
    arrow_slider[arrow_index].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('picture_active');
        arrow_status = true;
    });
}

function previosItem(n) {
    hideItem('to-right');
    change_arrow_index(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    change_arrow_index(n + 1);
    showItem('from-right');
}

document.querySelector('.slider__arrow_left').addEventListener('click', function() {
    if (arrow_status) {
        previosItem(arrow_index);
    }
});
document.querySelector('.slider__arrow_right').addEventListener('click', function() {
    if (arrow_status) {
        nextItem(arrow_index);
    }
});



// portfolio_menu
document.getElementById('portfolio_text_icon').addEventListener('click', portfolio_menu);

function portfolio_menu(event) {
    if (event.target.parentElement.classList.contains('portfolio_text_icon')) {
        this.querySelectorAll('.portfolio_active').forEach(element => {
            element.classList.remove('portfolio_active');
        });
        event.target.classList.add('portfolio_active');
    }
}



//portfolio_img_border
document.getElementById('portfolio_pictures').addEventListener('click', click_img);

function click_img(event) {
    if (event.target.parentElement.classList.contains('portfolio_img')) {
        this.querySelectorAll('.portfolio_pictures_active').forEach(element => {
            element.classList.remove('portfolio_pictures_active');
        });
        event.target.classList.add('portfolio_pictures_active');
    }
}



// message
form.addEventListener('submit', sendInfo);
function sendInfo(event) {
    event.preventDefault();
    document.getElementById("message_block").classList.remove('hidden');
    let subject = document.getElementById('subject').value.toString();
    let describe = document.getElementById('describe').value.toString();
    if (subject === '' && describe !== '') {
        subject = 'Без темы';
        document.getElementById('theme').innerText = subject;
        document.getElementById('description').innerText = `Описание: ${describe}`;
    } else if (describe === '' && subject !== '') {
        describe = 'Без описания';
        document.getElementById('description').innerText = describe;
        document.getElementById('theme').innerText = `Тема: ${subject}`;
    } else if (subject === '' && describe === '') {
        subject = 'Без темы';
        describe = 'Без описания';
        document.getElementById('theme').innerText = subject;
        document.getElementById('description').innerText = describe;
    } else {
        document.getElementById('theme').innerText = `Тема: ${subject}`;
        document.getElementById('description').innerText = `Описание: ${describe}`;
    }
}


// exit_message
exit_button.addEventListener('click', () => {
    document.getElementById("theme").innerText = '';
    document.getElementById("message_block").classList.add('hidden');
    document.getElementById('myform').reset();
});
