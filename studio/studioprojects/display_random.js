
var playBtn = document.getElementByClass('play');


var playSound = function() {
    audio.play();
};

playBtn.addEventListener('click', playSound, false);
stopBtn.addEventListener('click', function(){audio.pause()}, false);




























function display_random_image() 
//show a random photo naming variable below
{
     var theImages = [{
        src: "fortunes/01.png",
        width: "382",
        height: "92.5"

    }, {
        src: "fortunes/02.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/03.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/04.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/05.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/06.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/07.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/08.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/09.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/10.png",
        width: "382",
        height: "92.5"
        }, {
        src: "fortunes/11.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/12.png",
        width: "382",
        height: "92.5"
    
    }, {
        src: "fortunes/13.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/14.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/15.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/16.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/17.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/18.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/19.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/20.png",
        width: "382",
        height: "92.5"
     }, {

        src: "fortunes/21.png",
        width: "382",
        height: "92.5"
     }, {
        src: "fortunes/22.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/23.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/24.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/25.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/26.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/27.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/28.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/29.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/30.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/31.png",
        width: "382",
        height: "92.5"
     }, {
        src: "fortunes/32.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/33.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/34.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/35.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/36.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/37.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/38.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/39.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/40.png",
        width: "382",
        height: "92.5"
        }, {
        src: "fortunes/42.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/43.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/44.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/45.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/46.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/47.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/48.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/49.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/41.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/50.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/51.png",
        width: "382",
        height: "92.5"
     }, {
        src: "fortunes/52.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/53.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/54.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/55.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/56.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/57.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/58.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/59.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/60.png",
        width: "382",
        height: "92.5"
    }, {
         }, {
        src: "fortunes/61.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/62.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/63.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/ 64.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/65.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/66.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/67.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/68.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/69.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/70.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/71.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/72.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/73.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/74.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/75.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/76.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/77.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/78.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/79.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/80.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/81.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/82.png",
         width: "382",
        height: "92.5"
    }, {
        src: "fortunes/83.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/84.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/85.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/86.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/87.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/88.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/89.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/90.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/91.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/92.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/93.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/94.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/95.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/96.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/97.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/98.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/99.png",
        width: "382",
        height: "92.5"
    }, {
        src: "fortunes/100.png",
        width: "382",
        height: "92.5"

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