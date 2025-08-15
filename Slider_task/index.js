const image = document.getElementById('image');
let position = 0; 

document.getElementById('leftBtn').addEventListener('click', () => {
    position -= 50; 
    image.style.transform = `translateX(${position}px)`;
});

document.getElementById('rightBtn').addEventListener('click', () => {
    position += 50; 
    image.style.transform = `translateX(${position}px)`;
});
