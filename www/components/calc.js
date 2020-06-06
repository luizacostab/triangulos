// This is a JavaScript file

function exibirResult(){
    let ladoA = document.getElementById("ladoA")
    let ladoB = document.getElementById("ladoB")
    let ladoC = document.getElementById("ladoC")

    if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
      document.write('lado invalido')}
      else if(ladoA.value == ladoB.value && ladoA.value == ladoC.value && ladoB.value == ladoC.value){ document.write ('E Q U I L Á T E R O <br> <img src="https://s3.amazonaws.com/tinycards/image/742a6fd9a75763b896a6850b2c73905b">')}
      else if(ladoC.value >= ladoA.value && ladoC.value >= ladoB.value ){ document.write('I S O S C E L E S <br> <img src="https://www.wikihow.com/images/thumb/8/80/Construct-an-Isosceles-Triangle-Step-5Bullet1.jpg/v4-728px-Construct-an-Isosceles-Triangle-Step-5Bullet1.jpg.webp">')}
      else if(ladoA.value !== ladoB.value && ladoA.value !== ladoC.value && ladoC.value !== ladoB.value){ document.write('E S C A L E N O <br> <img src=" https://univiasecmate3.files.wordpress.com/2012/05/img032.png">')}

}