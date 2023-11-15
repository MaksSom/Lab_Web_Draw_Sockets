var socket;

function setup()
{
    createCanvas(2000, 2000);
    background(51);

    socket = io.connect('http://localhost:8000');
    socket.on('mouse_line', newDraw);
}

function newDraw(data) {

    stroke(255, 0, 100);
    line(data.x, data.y, data.px, data.py);
}


function draw()
{
    stroke(255);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        var data = {x: mouseX, y: mouseY, px: pmouseX, py: pmouseY};
        socket.emit('mouse_line', data);
    }
}
