import './img/test.jpg';

window.addEventListener('load', () => {
    let canvas = <HTMLCanvasElement> document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let img = new Image();

    img.addEventListener("load", () => {
        if(context != null) {
            context.drawImage(img,0,0,150,180);
        }
    });

    img.src = "img/test.jpg";    
});