function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var notaFinal;
	var contadorVarones;
	var varonesAprobados;

	nombre= prompt("Ingrese su nombre");

	edad = prompt("Ingrese su edad");
	edad = parseInt(edad);
	while(edad>0 || edad<110)
	{
		edad=prompt("Ingrese una edad valida");
		edad=parseInt(edad);
	}

	sexo = prompt("Ingrese su sexo F o M");
	while (sexo!= "f" && sexo!= "m")
	{
		sexo = prompt("Ingrese solo f ó m por favor.");

	}

	notaFinal = prompt("Ingrese su nota final");
	notaFinal = parseInt(notaFinal);
	while(!(IsNaN(notaFinal))
	{
		notaFinal = prompt("Ingrese su nota final");
		notaFinal = parseInt(notaFinal);
	}



	contadorVarones=0;
	varonesAprobados=0;

	if (sexo== "m" && notaFinal>5) 
	{
		contadorVarones
		document.write(varonesAprobados);
	}











}
