
function zamowCzapke()
{
	let jakaCzapka = document.getElementById("czapka").value;

	let ileCzapek = document.getElementById("ile").value;
	let stalyKlient = document.getElementById("klient").checked;

	let dostawaK = document.getElementById("kurier").checked;
	let dostawaP = document.getElementById("paczkomat").checked;

	let dostawa = document.getElementsByName("dost")
	//let dostawa = document.querySelectorAll('input=[name="dost"]')

	//console.log(dostawa)

	let cena = jakaCzapka*ileCzapek; 

	if(stalyKlient==true)
		cena = cena*0.8;
	if(dostawaP)
		cena = cena+10;
	if(dostawaK)
		cena = cena+30;



	document.getElementById("wypisz").innerHTML = cena+"zł";
}


document.getElementById("klik").addEventListener("click", zamowCzapke);