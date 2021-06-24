function zmienKolor()
{

	let red = Math.floor(Math.random()*255);
	let green = Math.floor(Math.random()*255);
	let blue = Math.floor(Math.random()*255);
	



	document.querySelector("#zmiana").style.backgroundColor = "rgb("+red+","+green+","+blue+")"
	
}

document.querySelector("#klik").addEventListener("click", zmienKolor);

console.log(Math.floor(Math.random()*255));