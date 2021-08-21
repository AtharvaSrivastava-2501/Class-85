var canvas=new fabric.Canvas('myCanvas');
block_width=30;
block_height=30;
player_x=10;
player_y=10;
var player_image="";
var block_image="";

function player_image_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image=Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(150);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}

function block_image_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image=Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		block_image_update('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		block_image_update('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		block_image_update('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		block_image_update('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		block_image_update('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		block_image_update('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		block_image_update('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		block_image_update('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		block_image_update('cloud.jpg'); 
		console.log("c");
	}
    if(keyPressed == '66'){

        block_image_update('bb.jpg');
        console.log("b");
    }
	
}

function up(){
    if(player_y>0){
      player_y=player_y-block_height; 
      console.log("block height="+block_height);
      console.log("when up arrow is pressed x = "+player_x+" y = "+player_y);
      canvas.remove(player_image);
      player_image_update() ; 
    }
}
function down(){
    if(player_y<450){
      player_y=player_y+block_height; 
      console.log("block height="+block_height);
      console.log("when down arrow is pressed x = "+player_x+" y = "+player_y);
      canvas.remove(player_image);
      player_image_update() ; 
    }
}
function left(){
    if(player_x>0){
      player_x=player_x-block_width; 
      console.log("block width="+block_width);
      console.log("when left arrow is pressed x = "+player_x+" y = "+player_y);
      canvas.remove(player_image);
      player_image_update() ; 
    }
}
function right(){
    if(player_x<850){
      player_x=player_x+block_width; 
      console.log("block width="+block_width);
      console.log("when right arrow is pressed x = "+player_x+" y = "+player_y);
      canvas.remove(player_image);
      player_image_update() ; 
    }
}
