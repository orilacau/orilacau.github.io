$(document).ready(function() {
 var entryCount = 0;
 var displayCount = 0;

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

function createElement(k) {
  var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_065D0F28-B4B4-4A63-9E27-6827891ADF67.PNG"></span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_0F300807-2E76-4E28-9AAC-88C5C064A422.PNG"></span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_1785D94F-B361-4408-9C22-B329C20D1BF0.PNG"></span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_185E9318-6A70-4BF0-805D-2E55214584D0.PNG"></span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_1B254417-7EA7-4102-B53C-03C3A8369E59.PNG"></span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_1CFCFE16-A185-4121-AD42-32F533089015.PNG"></span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_2128C093-B70B-43E2-A6EF-BBD57A34F59E.PNG"></span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_3B579CF7-52AA-46FE-9AA8-0F60C875BF6D.PNG"></span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_43543A61-CE19-4CF3-9B60-C3E0D0C7E0A2.PNG"></span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_481E2272-DC96-49BF-9C79-CD7F6CA2E8CC.PNG"></span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_58B91452-AEDF-4E48-B55F-FFBBF59AA8DA.PNG"></span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_5ADCEE4D-5ADC-43DF-8FB8-47EAD07C1561.PNG"></span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_65AC2DA4-BEE8-4773-A73D-6B07FB7753A1.PNG"></span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_BBC09BB8-E797-4CC4-A2C8-42213EB53666.PNG"></span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_C3B3CF8A-EB84-4525-B8F5-5CA085CB41BD.PNG"></span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_CE3D9806-FA29-4899-A73A-BA02495AC339.PNG"></span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_D590B7E7-CE79-4D1A-8CA7-89F0ABAEB60E.PNG"></span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_D748A134-A659-4B0C-BF2D-F411AE9D93FC.PNG"></span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_D9FAC2E2-82B3-4166-8D11-600105DB88CF.PNG"></span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_DAE3BA86-078C-4246-9946-3114580F3319.PNG"></span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_DBE49D56-DCD6-4133-BA9C-F51BE6527A62.PNG"></span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_E17771DB-B040-4BDB-A4F5-C47AA436EB20.PNG"></span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_F2B68D55-168D-482E-8785-7F9BA11A86D2.PNG"></span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/You_Doodle+_2021-05-04T23_43_17Z.PNG"></span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/SIX_3F3F24FF-8F01-49E1-B7AC-A19F178547B4.PNG"></span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/You_Doodle+_2021-05-06T01_12_26Z.PNG"></span>'); }
  if (k == " ") { elem.before('<span class="inner"><img src="https://orilacau.github.io/imagesproject42/Screen Shot 2021-05-05 at 7.51.19 PM.png"></span>') };

}

function deleteElement() {
  $(".inner").last().remove();
}
