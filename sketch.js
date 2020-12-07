var ball;
var data;
var pos;

function setup(){
    createCanvas(500,500);
    data=firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var bp=data.ref('ball/position')
    bp.on("value",changePosition)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
         write(1,0);
    }
    else if(keyDown(UP_ARROW)){
write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,+1);
    }
    drawSprites();
}
function write(x,y){
data.ref('ball/position').set({
    'x':pos.x+x, 
    'y':pos.y+y
})
}



function changePosition(data){
    pos=data.val()
    ball.x =pos.x;
    ball.y =pos.y;
}
