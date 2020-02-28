//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	/*var primerPrecio;
	var segundoPrecio;
	var apellido="nadie";

	apellido="Aldaz";
	alert(apellido);*/
	// Es un valor literal si esta entre ""
	//alert(" Tal cual "); literal(sabemos q va a salir) o variable(no sabemos lo q va a salir)
	//alert(apellido);
	//alert("apellido");
	//alert();//sale vacio
	//alert(primerPreco) Si la variable no existe no podemos hacer nada
	// F12-> Sources ->  Click en la linea de codigo donde esta la variable-> tocar "mostrar" -> F11 para pasar de codigo 

	// 1ra 	git clone https://github.com/TomiAldaz/CursoIngresoJS.git

	// 		git add . 
	// 		git commit -m "Mi primer commit"
	// 		git push

	// git status despues de cada comando para saber si va todo bien 




// guardarlo -> sublime index.html



	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta;
	var contador;
	var edadMasJoven;
	var edadMasVieja;
	var contadorDos;
	var temperaturaMayor;
	var contadorTres;

	contador=0;
	respuesta="Si";

	while(respuesta=="Si")
		{

		nombre=prompt("Ingrese su nombre");
		while(!(IsNaN(nombre)))
		{
			nombre=prompt("Ingrese su nombre");
		}


		edad=prompt("Ingrese su edad");
		edad=parseInt(edad);

		while (edad>0 || edad<110)
		{
			edad=prompt("Ingrese una edad valida");
		}


		sexo= prompt("ingrese su sexo F o M");
		while (sexo!= "f" && sexo!= "m")
		{
			sexo = prompt("Ingrese solo f ó m por favor.");

		}


		temperatura=prompt("Ingrese una temperatura");
		temperatura=parseInt(temperatura);

		while (temperatura>15 && temperatura<47)
		{
			temperatura=prompt("Ingrese una temperatura");
			temperatura=parseInt(temperatura);
		}

		


		if (temperatura>38) 
		{
			if (edad>0 && edad<13) 
			{
				alert("Usted esta en Riesgo " + nombre);
			}else
			{
				if (edad>17 && edad<60) 
				{
					alert("Usted esta en Riesgo " + nombre);
				}else
				{
					if(edad>59 && edad<110)
					{
						alert("Usted esta en Riesgo " + nombre);
					}
				}
			}
		}
		respuesta= prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorDos=contadorDos++;

			if (temperatura>15) 
			{
				temperatura=temperaturaMayor;
			}else
			{
				if (temperatura>temperaturaMayor) 
				{
					temperatura=temperaturaMayor;
					alert("La mayor temperatura pertenece a " + nombre + sexo);

				}
			}
		}

		respuesta= prompt("Ingrese Si para continuar");

		while(respuesta=='Si')
		{
			contador= contador++;
		

			if(edad>1)
			{
				edadMasJoven= edad;
				edadMasVieja=edad;

				document.write("Su temperatura es " + temperatura);
			}else
			{	if(edad>edadMasVieja)
				{
					edad=edadMasVieja;

					document.write("Su temperatura es " + temperatura);
				}else
				{
					if (edad<edadMasJoven) 
					{
						edad=edadMasJoven;

						document.write("Su temperatura es " + temperatura);
					}
				}
			}
		}

		respuesta= prompt("Ingrese si para continuar");

		while(respuesta=="Si")
			if () 
			{
				contadorTres=contadorTres++;

			}
	}


	


	





}

