// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const doc = this.document;
const formSubmit = doc.getElementById('sizePicker');
const pixelCanvas = doc.getElementById('pixel_canvas');

//add listener for the submit event
formSubmit.addEventListener('submit', function(event){
	//prevent from refreshing the page
	event.preventDefault();
	makeGrid(); //call the event function
});

function changeColor(cell) {
	//select the color, directly in the event function
	var color = doc.getElementById('colorPicker').value;
	cell.bgColor = color; //change the background color
}

function makeGrid() {
	//reset the table
	pixelCanvas.innerHTML = '';
	
	//read the height and the width
	var height = doc.getElementById('input_height').value;
	var width = doc.getElementById('input_width').value;
	
	//loop throughout the cells
	for(var i = 0; i< height ; i++ )
	{
		//insert a row in the position defined by i
		var row = pixelCanvas.insertRow(i);
		for(var j = 0; j< width; j++)
		{
			//insert a cell, in the position defined by j
			var cell = row.insertCell(j);
			//add event listener for clicking on a cell
			cell.onclick = function() {
				changeColor(this);
			};
		}
	}
}