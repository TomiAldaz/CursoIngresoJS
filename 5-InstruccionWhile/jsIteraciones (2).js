function mostrar()
{
	/*var contador ;

	contador= 10 ;

	while (contador > 1 )
	{
		console.log(contador);
		contador= contador - 1;
		



	}
	console.log(contador);*/

	var nombreHuesped;
	var cantidadPersonas;
	var duracionEstadia;
	var formaDePago;
	var contadorUno;
	var contadorDos;
	var contadorTres;
	var HuespedMasPersonas;
	var personasMasDias;
	var formaDePagoMasUtilizada;
	var respuesta;

	respuesta="Si";
	contadorUno=0;
	contadorDos=0;
	contadorTres=0;

	while(respuesta=="Si")
	{
		nombre=prompt("Ingrese su nombre por favor");
		while(!(IsNan(nombreHuesped)))
		{
			nombre=prompt("Reingrese su nombre por favor");
		}
	
		cantidadPersonas=prompt("Ingrese la cantidad de personas");
		cantidadPersonas=parseInt(cantidadPersonas);
		while(IsNan(cantidadPersonas))
		{
			cantidadPersonas=prompt("Reingrese la cantidad de personas");
			cantidadPersonas=parseInt(cantidadPersonas);
		}

		duracionEstadia=prompt("Ingrese la duracion de su estadia");
		duracionEstadia=parseInt(duracionEstadia);
		while(IsNan(duracionEstadia))
		{
			duracionEstadia=prompt("Reingrese la duracion de su estadia");
			duracionEstadia=parseInt(duracionEstadia);
		}

		formaDePago=prompt("Ingrese una forma de pago: Efectivo , Tarjeta o QR ")
		while(formaDePago != "Efectivo" && formaDePago != "Tarjeta"  && formaDePago != "QR")
		{
			formaDePago=prompt("Reingrese una forma de pago: Efectivo , Tarjeta o QR ")

		}


		respuesta= prompt("Ingrese Si para continuar");


		while(respuesta=="Si")
		{
			contadorUno= contadorUno++;

			if (cantidadPersonas>1) 
			{
				cantidadPersonas=HuespedMasPersonas;
			}else
			{
				if (cantidadPersonas>HuespedMasPersonas) 
				{
					cantidadPersonas=HuespedMasPersonas;
					document.write("El huesped que trajo más personas en una sola reserva fue " + nombreHuesped);	
				}
			}
		}

		respuesta= prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorDos=contadorDos++;

			if(duracionEstadia>1)
			{
				duracionEstadia=personasMasDias;
				document.write("La cantidad personas que se quedaron mas dias fue " + personasMasDias);

			}else
			{
				if (duracionEstadia>personasMasDias) 
				{
					duracionEstadia=personasMasDias;
					document.write("La cantidad personas que se quedaron mas dias fue " + personasMasDias);


				}
			}
		}

		respuesta= prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			contadorTres=contadorTres++;
			if (formaDePago>1) 
			{
				formaDePago=formaDePagoMasUtilizada;
				document.write("La forma de pago más utilizada fue " +  formaDePagoMasUtilizada);
			}else
			{
				if (formaDePago>formaDePagoMasUtilizada) 
				{
					formaDePago=formaDePagoMasUtilizada;
					document.write("La forma de pago más utilizada fue " +  formaDePagoMasUtilizada);


				}
			}	
		}

		respuesta= prompt("Ingrese Si para continuar");

		while(respuesta=="Si")
		{
			
		}

	}





/*nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/





}//FIN DE LA FUNCIÓN