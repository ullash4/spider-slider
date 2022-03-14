const images = [
    './images/img1.png',
    './images/img2.png',
    './images/img3.png',
    './images/img4.png',
    './images/img5.png',
    './images/img6.png',
    './images/img7.png',
    './images/img8.png',
];
let imgIndex = 0;
const img = document.getElementById('img');
setInterval(()=>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    img.setAttribute('src', imgUrl)
    imgIndex++
},1000)