evento = document.getElementById("caja")
evento.addEventListener("input", color, false);

function color(){
 		document.getElementById("color").style.background = this.value;
}