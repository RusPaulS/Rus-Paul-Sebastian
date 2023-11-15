var buton = document.getElementById("buton")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var educatie = document.getElementById("educatie")
var body = document.getElementById("body")
var ani = document.getElementById("ani")
const d= new Date()
var anCurent= d.getFullYear()

buton.addEventListener("click" , MaiMulte)
ani.addEventListener("mouseover",displayAge)
function MaiMulte()
{
	nume.innerHTML = "Functie: Student"
	prenume.innerHTML = "Loc de munca: Somer"
	educatie.innerHTML = "Experienta: <ol><li>15 anii de gaming</li><li>13 anii de scoala</li><li></li></ol>"
	img.src ="monk.jpg"
	body.style.backgroundColor= "#f2ef94"
	img.style.opacity="0.6"
	img.style.width="20%"
	img.style.border="10px solid #555"

}

function displayAge() {
	ani.innerHTML = anCurent - ani.innerHTML;
}