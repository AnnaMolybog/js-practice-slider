let slideIndex = 1,
    sliders = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlide(slideIndex);

function showSlide(index) {
    slideIndex = index > sliders.length ? 1 : (index < 1 ? sliders.length : index);
    sliders.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('dot-active'));

    sliders[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlide(index) {
    showSlide(slideIndex +=index);
}

function currentSlide(index) {
    showSlide(slideIndex = index);
}

prev.addEventListener('click', () => {
    plusSlide(-1);
});

next.addEventListener('click', () => {
    plusSlide(1);
})

dotsWrap.addEventListener('click', (event) => {
    dots.forEach((dot, index) => {
        if (event.target && 
            event.target.classList.contains('dot') && 
            event.target == dot
        ) {
            currentSlide(index+1);
        }
    })
});
