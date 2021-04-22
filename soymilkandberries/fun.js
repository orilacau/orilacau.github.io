// 1) get a reference to the page elements

var dropZone = document.getElementById('drop-zone');
var image = document.getElementById('drop-image');
var message = document.getElementById('message');

/*
there are several events we can listen for in order
to monitoring entire drag and drop process:

dragstart
drag
dragenter
dragleave
dragover
drop
dragend
*/

// 2) listen for any of the Drag'n'Drop events

image.addEventListener('dragstart', onDragStart);
image.addEventListener('dragend', onDragEnd);

dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragover', onDragOver);
dropZone.addEventListener('dragleave', onDragLeave);

dropZone.addEventListener('drop', onDrop);

// 3) provide functions to handle each event

function onDragStart(event) {
    /*We use a DataTransfer object to temporarily hold information
    about the element being dragged during the drag and drop operation.
    In this case we store the element's ID, which is just text*/
    event.dataTransfer.setData("Text",event.target.id);
    
    document.body.style.cursor = 'move';
}

function onDragEnter(event) {  
  //highlight the drop-zone by changing it's background
  dropZone.style.background = 'rgba(255,255,0,.2)';   
}

function onDragOver(event) {
    /*
    In the case of dragging something like a link, we need to prevent 
    the browser's default behavior, which is to navigate to that link. 
    To do this, call e.preventDefault() in the dragover event. Another 
    good practice is to return false in that same handler. 
    Browsers are somewhat inconsistent about needing these, 
    but they don't hurt to add.
    */
    
    event.preventDefault(); //important, this allows us to drop! 
    return false;
}

function onDragLeave(event) {
    //change  background color of the drop-zone to white
    dropZone.style.background = 'rgba(255,255,255,1)';
}

function onDrop(event) {
  event.preventDefault();
    
  //retrieve text "id" of dragged element using the DataTransfer Object*/
  var data = event.dataTransfer.getData("Text");
    
  event.target.appendChild(document.getElementById(data));

  return false;
}

function onDragEnd(event) {
    message.innerHTML = "the eagle has landed!";
    document.body.style.background = "lightgreen";
}