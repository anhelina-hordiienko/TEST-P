const slides = [
    {
        title: 'Full Spectrum CBD Oil',
        volume: '30 ML',
        price: '$28.95'
    },
    {
        title: 'Full Spectrum CBD Oil 50ml',
        volume: '50 ML',
        price: '$38.95'
    },
    {
        title: 'Full Spectrum CBD Oil 100ml',
        volume: '100 ML',
        price: '$58.95'
    }
]

let slideNumber = 0;
let slide = document.getElementById('slide-number');
let title = document.getElementById('title');
let volume = document.getElementById('volume');
let price = document.getElementById('price');

const slideInfo = function() {
    slide.innerText = slideNumber+1;
    title.innerText = slides[slideNumber].title;
    volume.innerText = slides[slideNumber].volume;
    price.innerText = slides[slideNumber].price;
}

const nextSlideInfo = function() {
    slideNumber++;
    if (slideNumber == slides.length) {
        slideNumber = 0;
    }
    slideInfo();
}

const prevSlideInfo = function() {
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = slides.length-1;
    }
    slideInfo();
}

document.getElementById('next').addEventListener('click', nextSlideInfo);
document.getElementById('prev').addEventListener('click', prevSlideInfo);