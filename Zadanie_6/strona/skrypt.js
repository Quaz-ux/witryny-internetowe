function obliczanie()
{

let dys = document.getElementById("dys").value;
let lit = document.getElementById("lit").value;

let wynik = dys/100*lit;
document.getElementById("wynik").innerHTML = "Potrzebujesz " + wynik +" litrów paliwa. <br>Zapraszamy na zakupy";

}
document.getElementById("oblicz").addEventListener("click", obliczanie);