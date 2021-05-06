
function display_random_image() 
//show a random photo naming variable below
{
     var theImages = [
     {
        src: "fortunes/ori.png",
        width: "382",
        height: "92.5"

    }, {
        src: "fortunes/hannah.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/ori.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/hannah.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/ori.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/hannah.png",
         width: "382",
        height: "92.5"
    }, {
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }




   

  function getRandomInt(min,max) 
    {
      //  creating random number
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first photo  
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
document.body.appendChild(newImage);
}