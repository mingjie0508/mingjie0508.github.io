function openModal(lightbox) {
    document.getElementById(lightbox).style.display = "flex";
}

function closeModal(lightbox) {
    document.getElementById(lightbox).style.display = "none";
}

var slideIndex = 1;

function plusSlides(slide, n) {
    showSlides(slide, slideIndex += n);
}

function currentSlide(slide, n) {
    showSlides(slide, slideIndex = n);
}

function showSlides(slide, n) {
    var i;
    var slides = document.getElementsByClassName(slide);
    const len = slides.length
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = len; }
    for (i = 0; i < len; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}
