var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        BirthdayImage_obj = Img;
        BirthdayImage_obj.scaleToWidth(700);
        BirthdayImage_obj.scaleToHeight(510);
        BirthdayImage_obj.set({
            top: 0,
            left: 0
        });
        canvas.add(BirthdayImage_obj);
    });

}


function playSound() {
    x.play();
}