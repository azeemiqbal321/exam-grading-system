function add(){
    var num1 = parseInt(document.getElementById("eng").value);
    var num2 = parseInt(document.getElementById("urdu").value);
    var num3 = parseInt(document.getElementById("pakstud").value);
    var num4 = parseInt(document.getElementById("sci").value);
    var num5 = parseInt(document.getElementById("islamic").value);
    
    if (num1>100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100) {
        alert("Subject marks cannot be greater than 100");
      }
      else{
        var sum = num1 + num2 + num3 + num4 + num5;
        document.getElementById("sumres").innerHTML = sum;
      }
}

function avg(){
    var num1 = parseInt(document.getElementById("eng").value);
    var num2 = parseInt(document.getElementById("urdu").value);
    var num3 = parseInt(document.getElementById("pakstud").value);
    var num4 = parseInt(document.getElementById("sci").value);
    var num5 = parseInt(document.getElementById("islamic").value);
    
    if (num1>100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100) {
        alert("Subject marks cannot be greater than 100");
      }
      else{
        var sum = num1 + num2 + num3 + num4 + num5;
        var avg = sum/5;
        document.getElementById("avgres").innerHTML = avg;
      }

}

function grade(){
    var num1 = parseInt(document.getElementById("eng").value);
    var num2 = parseInt(document.getElementById("urdu").value);
    var num3 = parseInt(document.getElementById("pakstud").value);
    var num4 = parseInt(document.getElementById("sci").value);
    var num5 = parseInt(document.getElementById("islamic").value);

    var sum = num1 + num2 + num3 + num4 + num5;
    var avg = sum/5;
    
    if (num1>100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100) {
        alert("Subject marks cannot be greater than 100");
      }else{
          if (avg >=80 && avg<=100){
            document.getElementById("gradres").innerHTML = "Congratulations you got an <b>A</b> grade!";
          }
          if (avg >=75 && avg< 80){
            document.getElementById("gradres").innerHTML = "Congratulations you got an <b>B+</b> grade!";
            }
            if (avg >=70 && avg<75){
                document.getElementById("gradres").innerHTML = "Good work, you got <b>B</b> grade!";
            }
            if (avg >=65 && avg<70){
                document.getElementById("gradres").innerHTML = "You got <b>C+</b> grade!";
            }
            if (avg >=60 && avg<65){
                document.getElementById("gradres").innerHTML = "You need to work harder, you got <b>C</b> grade!";
            }
            if (avg >=55 && avg<60){
                document.getElementById("gradres").innerHTML = "Better luck next time, you got <b>D+</b> grade!";
            }
            if (avg >=50 && avg<55){
                document.getElementById("gradres").innerHTML = "You are on the brink of failure, you got <b>D</b> grade!";
            }
            if (avg < 50){
                document.getElementById("gradres").innerHTML = "Too bad, you got an <b>F</b> and failed the exam!";
            }
      }
}

function clearall(){
    document.getElementById("sumres").innerHTML = "";
    document.getElementById("avgres").innerHTML = "";
    document.getElementById("gradres").innerHTML = "";
}