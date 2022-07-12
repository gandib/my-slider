const images = [
    'images/pic1.JPG',
    'images/pic2.JPG',
    'images/pic3.JPG',
    'images/pic4.JPG',
    'images/pic5.JPG',
    'images/pic6.JPG',
    'images/pic7.JPG',
    'images/pic8.JPG',
    'images/pic9.JPG'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);