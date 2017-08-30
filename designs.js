// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var doc = this.document;
var formSubmit = doc.getElementById('sizePicker');
var pixelCanvas = doc.getElementById('pixel_canvas');
var canvas = doc.createElement('canvas');
var ctx = canvas.getContext('2d');
var height = undefined;
var width = undefined;

formSubmit.addEventListener('submit', function(event){
	event.preventDefault();
	makeGrid();
	//return false;
});

canvas.addEventListener('click', function(ev) {
	var rect = canvas.getBoundingClientRect();
	var positionX = Math.floor((event.clientX - rect.left)/15);
	var positionY = Math.floor((event.clientY - rect.top)/15);
	var color = doc.getElementById('colorPicker').value;
	
	ctx.fillStyle = color;
	ctx.fillRect(positionX * 15, positionY * 15,15,15);
	
});

function makeGrid() {
	if((height !== undefined) && (width !== undefined)) {
		ctx.clearRect(0,0,width,height + 6);
	}
	
	height = doc.getElementById('input_height').value;
	width = doc.getElementById('input_width').value;
	
	canvas.width = width * 15;
    canvas.height = height * 15;
	var row = pixelCanvas.insertRow(0);
	var cell = row.insertCell(0);
	cell.appendChild(canvas);
	
	for(var i = 0; i< width ; i++ )
		for(var j = 0; j< height; j++)
		{
			ctx.strokeRect(i*15, j* 15 , 15, 15);
		}
}

//makeGrid();