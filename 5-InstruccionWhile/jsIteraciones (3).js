function mostrar()
{
	/*var clave;
	clave = prompt("ingrese el número clave.");

	while (clave != "utn750")
	{
		clave = prompt("Por favor intente de nuevo.");

	}

	alert("Bienvenido");*/


	var marca;
	var kgBolsa;
	var cantidadBolsa;
	var importeBolsa;
	var respuesta;
	var contenedor;
	var masKgContenedor;
	var masBolsaContenedor;
	var mayorImporteBolsa;
	var importeBolsaMenosPesada;
	var marcaBolsaMenosPesada;
	var contadorUno;
	var contadorDos;
	var contadorTres;
	var contadorCuatro;
	var contadorCinco;


	contadorUno=0;
	contadorDos=0;
	contadorTres=0;
	contadorCuatro=0;
	contadorCinco=0;
	respuesta="Si";

	while(respuesta=="Si")
	{
		marca=prompt("Ingrese la marca de alimento canino deseada");
		while(!(IsNaN(marca)))
		{
			marca=prompt("Reingrese la marca de alimento canino deseada");
		}

		kgBolsa=prompt("Ingrese la cantidad de kilos por bolsa deseada");
		kgBolsa=parseInt(kgBolsa);
		while(IsNaN(kgBolsa))
		{
			kgBolsa=prompt("Reingrese la cantidad de kilos por bolsa deseada");
			kgBolsa=parseInt(kgBolsa);
		}

		cantidadBolsa=prompt("Ingrese la cantidad de bolsas deseada");
		cantidadBolsa=parseInt(cantidadBolsa);
		while(IsNaN(cantidadBolsa))
		{
			cantidadBolsa=prompt("Reingrese la cantidad de bolsas deseada");
			cantidadBolsa=parseInt(cantidadBolsa);
		}
	
		importeBolsa=prompt("Ingrese el importe por bolsa");
		importeBolsa=parseInt(importeBolsa);
		while(IsNaN(importeBolsa))
		{
			importeBolsa=prompt("Reingrese el importe por bolsa");
			importeBolsa=parseInt(importeBolsa);
		}



		respuesta=prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{	
			contadorUno=contadorUno++;

			if(kgBolsa>1)
			{
				kgBolsa=masKgContenedor;
				document.write("La marca que tiene más kilos en el contenedor es " + marca);
			}else
			{
				if (kgBolsa>masKgContenedor) 
				{
					kgBolsa=masKgContenedor;
					document.write("La marca que tiene más kilos en el contenedor es " + marca);

				}
			}
		}

		respuesta=prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorDos=contadorDos++;

			if(cantidadBolsa>1)
			{
				cantidadBolsa=masBolsaContenedor;
				document.write("La marca que tiene más bolsas de alimento en el contenedor es " + marca);
			}else
			{
				if (cantidadBolsa>masBolsaContenedor) 
				{
					cantidadBolsa=masBolsaContenedor;
					document.write("La marca que tiene más bolsas de alimento en el contenedor es " + marca);

				}
			}
		}

		respuesta=prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorTres=contadorTres++;

			if(importeBolsa>1)
			{
				importeBolsa=mayorImporteBolsa;
				document.write("La marca que tiene el mayor importe por bolsa de alimento" + marca);
			}else
			{
				if (importeBolsa>mayorImporteBolsa) 
				{
					importeBolsa=mayorImporteBolsa;
					document.write("La marca que tiene el mayor importe por bolsa de alimento" + marca);

				}
			}
		}

		respuesta=prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorCuatro=contadorCuatro++;

			if (kgBolsa>1) 
			{
				kgBolsa=importeBolsaMenosPesada;
				document.write("El importe de la bolsa de alimento menos pesada es de " + importe);
			}else
			{
				if(kgBolsa>importeBolsaMenosPesada)
				{
					kgBolsa=importeBolsaMenosPesada;
					document.write("El importe de la bolsa de alimento menos pesada es de " + importe);
				}
			}
		}

		respuesta=prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorCinco=contadorCinco++;

			if (kgBolsa>1) 
			{
				kgBolsa=marcaBolsaMenosPesada;
				document.write("La marca de la bolsa de alimento menos pesada es de " + marca);
			}else
			{
				if(kgBolsa>marcaBolsaMenosPesada)
				{
					kgBolsa=marcaBolsaMenosPesada;
					document.write("La marca de la bolsa de alimento menos pesada es de " + marca);
				}
			}
		}
	}	

/*c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:
marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.*/



}//FIN DE LA FUNCIÓN
