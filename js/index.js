/* ============= Testimonial Slider ============= */

let slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("testimonials");

    if (n >= x.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = x.length - 1;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex].style.display = "block";
}