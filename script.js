var navigation = document.querySelector('.navigation');
var navigationItems = document.querySelectorAll('.navigation__link');
const anchors = document.querySelectorAll('a[href*="#"]')

navigation.addEventListener('click', function () {
});
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

function draw(i) {
    if (i !== 'i') {
        offset = 1;
    }
    var img = document.createElement('img');
    img.src = newSliders[step];
    img.classList.add('slider-block__img');
    img.style.left = offset * 1020 + 'px';
    if (step + 1 == newSliders.length) {
        step = 0;
    } else {
        step++;
    }
    if (i === 'i') {
        offset++;
    } else { offset = 1; }
    console.log(img);
    document.querySelector('.slider-block').appendChild(img);
}

function drawRight() {
    offset = -1;
    var img = document.createElement('img');
    img.src = newSliders[step];
    console.log(img);
    img.classList.add('slider-block__img');
    img.style.left = offset * 1020 + 'px';
    if (step + 1 == newSliders.length) {
        step = 0;
    } else {
        step++;
    }
   
    document.querySelector('.slider-block').appendChild(img);
}



function left() {
    var slideVissableItems = document.querySelectorAll('.slider-block__img');
    
    var offset2 = -1;
    for (var i = 0; i < slideVissableItems.length; i++) {
        slideVissableItems[i].style.left = offset2 * 1020 - 1020 + 'px';
        offset2++;
    }
    setTimeout(function () {
        slideVissableItems[0].remove();
        draw();
    }, 1000);
}
function right() {

    var slideVissableItems = document.querySelectorAll('.slider-block__img');
    console.log(slideVissableItems);
    var offset2 = 1;
    for (var i = 0; i < slideVissableItems.length; i++) {
        slideVissableItems[i].style.left = offset2 * 1020 + 1020 + 'px';
        offset2--;
    }
    setTimeout(function () {
       slideVissableItems[0].remove();
        drawRight();
    }, 1000);
}
draw("i"), draw('i'), draw("i");
//document.onclick = left;

var arrowLeft = document.querySelector('.arrow_left');
var arrowRight = document.querySelector('.arrow_right');


arrowLeft.addEventListener('click', left);
arrowRight.addEventListener('click', right);


// Change phone background
// phoneVertical = document.querySelector('.phone-vertical');
// phoneHorizontal = document.querySelector('.phone-horizontal');

// phoneVertical.addEventListener('click', function(){
//     if (phoneVertical.firstChild.getAttribute('src') === "assets/images/iPhone Vertical.png"){
//         phoneVertical.firstChild.setAttribute('src', "assets/images/iPhone Vertical Black.png"); 
//     } else {phoneVertical.firstChild.setAttribute('src', "assets/images/iPhone Vertical.png");}   
// })

// phoneHorizontal.addEventListener('click', function(){
//     if (phoneHorizontal.firstChild.getAttribute('src') === "assets/images/iPhone Horizontal.png"){
//         phoneHorizontal.firstChild.setAttribute('src', "assets/images/iPhone Horizontal Black.png"); 
//     } else {phoneHorizontal.firstChild.setAttribute('src', "assets/images/iPhone Horizontal.png");}   
// })


