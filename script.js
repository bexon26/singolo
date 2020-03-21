var navigation = document.querySelector('.navigation');
var navigationItems = document.querySelectorAll('.navigation__link');
const anchors = document.querySelectorAll('a[href*="#"]')

navigation.addEventListener('click', function(){
});
for (var i = 0; i < navigationItems.length; i++){
    navigationItems[i].addEventListener('click', function(){
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
  arrows = document.querySelectorAll('.arrow');
  sliderItem = document.querySelector('.Slider-item');
  sliderItem1 = document.querySelector('.Slider-item-2');

  arrows.forEach(function(element) {
    element.addEventListener('click', function(){
      if (sliderItem.style.display === 'flex' ){
          sliderItem.style.display = 'none';
          sliderItem1.style.display = 'flex'
      } else { 
          sliderItem.style.display = 'flex';
          sliderItem1.style.display = 'none'
     }
  })
})

// Change phone background
phoneVertical = document.querySelector('.phone-vertical');
phoneHorizontal = document.querySelector('.phone-horizontal');

phoneVertical.addEventListener('click', function(){
    if (phoneVertical.firstChild.getAttribute('src') === "assets/images/iPhone Vertical.png"){
        phoneVertical.firstChild.setAttribute('src', "assets/images/iPhone Vertical Black.png"); 
    } else {phoneVertical.firstChild.setAttribute('src', "assets/images/iPhone Vertical.png");}   
})

phoneHorizontal.addEventListener('click', function(){
    if (phoneHorizontal.firstChild.getAttribute('src') === "assets/images/iPhone Horizontal.png"){
        phoneHorizontal.firstChild.setAttribute('src', "assets/images/iPhone Horizontal Black.png"); 
    } else {phoneHorizontal.firstChild.setAttribute('src', "assets/images/iPhone Horizontal.png");}   
})


