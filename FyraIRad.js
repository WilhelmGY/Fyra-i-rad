function placeranod(x) {
  for (var y = 5; y >= 0; y--) {
    var a = document.getElementById("Rutnat").rows[y].cells[x];
    //setAttribute("class", "gulruta");
    if (a.innerHTML == "") {//style.backgroundColor == none
      a.innerHTML = "Gul";//Ta bort när funktionen fungerar
      var s = document.getElementById("Spelare").style.color;
      if (s == yellow) {
        a.innerHTML = "Gul";
        //a.style.backgroundColor = yellow;
        document.getElementById("Spelare").text = "Gul spelare";
        s = blue;
        break;
      }else if (s == blue) {
        a.innerHTML = "Blå";
        document.getElementById("Spelare").text = "Blå spelare";
        s = yellow;
        break;
      }
    }
  }
}
