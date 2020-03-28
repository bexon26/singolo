(function () {
    var DEBOUNCE_INTERVAL = 1000; // ms

    var lastTimeout;
    window.debounce = function (cb) {
        if (lastTimeout) {
            window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
    };
})()

phoneVertical = document.querySelector('.phone-vertical');
phoneHorizontal = document.querySelector('.phone-horizontal');
var menuToggle = document.getElementById('menu__toggle');

var navigation = document.querySelector('.navigation');
var navigationItems = document.querySelectorAll('.navigation__link');
const anchors = document.querySelectorAll('a[href*="#"]')

for (var i = 0; i < navigationItems.length; i++) {
    navigationItems[i].addEventListener('click', function () {
        for (var j = 0; j < navigationItems.length; j++) {
            navigationItems[j].setAttribute('style', '');
        }
        this.style.color = '#dc655f';
    })
};

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        menuToggle.checked = false;
      
       
        
        
    })
}

// slider

var slideItems = document.querySelectorAll('.slider-block__img');
var newSliders = [];

for (var i = 0; i < slideItems.length; i++) {
    newSliders[i] = slideItems[i].src;
    slideItems[i].remove();
}

var step = 0;
let offset = -1;

var widthSliderString = getComputedStyle(document.querySelector('.slider-block')).width;
var widthSliderNumber = +widthSliderString.slice(0, widthSliderString.length - 2);


function draw(i) {
    if (i !== 'i') {
        offset = 1;
    }
    var img = document.createElement('img');
    img.src = newSliders[step];
    img.classList.add('slider-block__img');
    img.style.left = offset * widthSliderNumber + 'px';
    if (step + 1 == newSliders.length) {
        step = 0;
    } else {
        step++;
    }
    if (i === 'i') {
        offset++;
    } else { offset = 1; }
    document.querySelector('.slider-block').appendChild(img);
}

function drawRight() {
    offset = -1;
    var img = document.createElement('img');
    img.src = newSliders[step];
    img.classList.add('slider-block__img');
    img.style.left = offset * widthSliderNumber + 'px';
    if (step + 1 == newSliders.length) {
        step = 0;
    } else {
        step++;
    }

    document.querySelector('.slider-block').firstChild.before(img);
}

function left() {

    phoneVertical.style.opacity = 0;
    phoneHorizontal.style.opacity = 0;

    phoneVertical.removeEventListener('click', switchVertical);
    phoneHorizontal.removeEventListener('click', switchHorizontal);

    arrowLeft.removeEventListener('click', left);
    var slideVissableItems = document.querySelectorAll('.slider-block__img');
    var offset2 = -1;
    for (var i = 0; i < slideVissableItems.length; i++) {
        slideVissableItems[i].style.left = offset2 * widthSliderNumber - widthSliderNumber + 'px';
        if (slideVissableItems[0].src === 'file:///C:/Users/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9/Documents/GitHub/singolo/assets/images/slide1.png') {
            phoneVertical.addEventListener('click', switchVertical);
            phoneHorizontal.addEventListener('click', switchHorizontal);
        }
        offset2++;
    }
    window.debounce(function () {
        slideVissableItems[0].remove();
        draw(widthSliderNumber);
        arrowLeft.addEventListener('click', left);

    })
}
function right() {
    phoneVertical.style.opacity = 0;
    phoneHorizontal.style.opacity = 0;

    phoneVertical.removeEventListener('click', switchVertical);
    phoneHorizontal.removeEventListener('click', switchHorizontal);

    arrowLeft.removeEventListener('mousedown', right);
    var slideVissableItems = document.querySelectorAll('.slider-block__img');
    var offset2 = 1;

    for (var i = slideVissableItems.length - 1; i >= 0; i--) {
        slideVissableItems[i].style.left = offset2 * widthSliderNumber + widthSliderNumber + 'px';
        if (slideVissableItems[0].src === 'file:///C:/Users/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9/Documents/GitHub/singolo/assets/images/slide1.png') {
            phoneVertical.addEventListener('click', switchVertical);
            phoneHorizontal.addEventListener('click', switchHorizontal);
        }
        offset2--;
    }

    window.debounce(function () {
        slideVissableItems[2].remove();
        drawRight(widthSliderNumber);
        arrowRight.addEventListener('mousedown', right);
    })
}

draw("i"), draw('i'), draw("i");

var arrowLeft = document.querySelector('.arrow_left');
var arrowRight = document.querySelector('.arrow_right');


arrowLeft.addEventListener('click', left);
arrowRight.addEventListener('mousedown', right);

//Change phone background
function switchVertical() {
    phoneVertical.style.opacity = phoneVertical.style.opacity === '0' ? 1 : 0;
}
function switchHorizontal() {
    phoneHorizontal.style.opacity = phoneHorizontal.style.opacity === '0' ? 1 : 0;
}


// Poftfolio
var portfolioItems = document.querySelectorAll('.portfolio-item');
var portfolioImages = document.querySelectorAll('.portfolio-item__image');
var portfolio = document.getElementById('portfolio');

if (window.matchMedia("screen and (min-width: 376px)").matches) {
} else {
    for (var i = 0; i < portfolioItems.length; i++) {
        if (i > 7) {
            portfolioItems[i].setAttribute('hidden', true);
        }
    }
}

function setLeftPosition (){
    var slideVissableItems = document.querySelectorAll('.slider-block__img');
        for (var i = 0; i < slideVissableItems.length; i++) {
            slideVissableItems[i].style.left = (i) * widthSliderNumber - widthSliderNumber + 'px';
        }
}

window.addEventListener(`resize`, event => {



    var slederImg = document.querySelectorAll('.slider-block__img');
    slederImg.forEach(element => {
            element.style.transition = 'none';
        });
    function switchTransition() {
            slederImg.forEach(element => {
            element.style.transition = 'all ease 1s';
        });
    }
    setTimeout(switchTransition, 100);

    if (window.matchMedia("screen and (min-width: 769px)").matches) {
        widthSliderNumber=1020;
        setLeftPosition();
    } else {
        widthSliderNumber=768;
        setLeftPosition();
    }
    if (window.matchMedia("screen and (min-width: 376px)").matches) {
        portfolioItems.forEach(element => {
            element.removeAttribute('hidden');
        });
    } else {
        for (var i = 0; i < portfolioItems.length; i++) {
            if (i > 7) {
                portfolioItems[i].setAttribute('hidden', true);
            }
        }
        widthSliderNumber=375;
        setLeftPosition();
    }
  
}, false);

var newPortfolioImages = [];
portfolioImages.forEach(element => {
    newPortfolioImages.push(element.src);
});

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        let t = array[i]; array[i] = array[j]; array[j] = t;
    }
    return array;
}

var filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach(element => {
    element.addEventListener('click', function () {
        shuffle(newPortfolioImages);
        for (var i = 0; i < portfolioItems.length; i++) {
            portfolioItems[i].firstChild.src = newPortfolioImages[i];
        }
        for (var k = 0; k < filterItems.length; k++) {
            filterItems[k].setAttribute('style', '');
        }
        this.style.color = '#dedede';
        this.style.border = '1px solid #dedede';

    })
});

portfolio.addEventListener('click', (evt) => {
    portfolioImages.forEach(element => {
        element.style.outline = '';
    });
    if (evt.target.matches('img')) {
        evt.target.style.outline = '5px solid #F06C64';
    }
})

//Form

var qoute = document.getElementById('qoute');
var contact = document.getElementById('contact');

var submitButton = document.querySelector('.submit-button');
function getSubject() {
    var subjectInput = document.querySelector('input[placeholder="Subject"]').value;
    return subjectInput;
}

function getDescribe() {
    var describeInput = document.querySelector('input[placeholder="Describe your project in detail..."]').value;
    return describeInput;
}
//var contactInput = document.querySelector('.contact-section__input');
submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    var windowForm = document.createElement('div');
    windowForm.style.width = '300px';
    windowForm.style.height = '250px';
    windowForm.style.backgroundColor = 'white';
    contact.style.position = 'relative';
    windowForm.style.position = 'absolute';
    windowForm.style.top = '288px';
    windowForm.style.left = '45px';
    windowForm.style.border = '2px solid black'
    windowForm.style.fontSize = '18px';
    windowForm.style.overflow = 'hidden';

    var status = document.createElement('p');
    status.textContent = "Письмо отправлено";
    status.style.padding = '0px 15px';

    var textSubject = document.createElement('p');
    textSubject.style.padding = '0px 15px';
    textSubject.textContent = getSubject() ? "Тема: " + getSubject() : 'Без темы';

    var textDescribe = document.createElement('p');
    textDescribe.style.padding = '0px 15px';
    textDescribe.textContent = getDescribe() ? "Описание: " + getDescribe() : 'Без описания';

    var succesButton = document.createElement('button');
    succesButton.textContent = 'ОК'
    succesButton.style.padding = '7px 15px';
    succesButton.style.margin = '7px 15px';
    succesButton.addEventListener('click', function () {
        contact.removeChild(windowForm);
        qoute.reset();
    })


    var fragment = document.createDocumentFragment();
    fragment.appendChild(status);
    fragment.appendChild(textSubject);
    fragment.appendChild(textDescribe);
    fragment.appendChild(succesButton);


    windowForm.appendChild(fragment);
    contact.appendChild(windowForm);



})

