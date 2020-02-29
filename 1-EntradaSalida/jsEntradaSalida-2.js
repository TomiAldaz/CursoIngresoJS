/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*var nombre;

	nombre = prompt("Please enter your name", "Harry Poter"); // reotrna algo. lo voy a tener q asignar a una variable EJ(var nombre = prompt() siempre el igual )
	console.log ( nombre ); // reotrna algo. lo voy a tener q asignar a una variable EJ(var nombre = prompt() siempre el igual )
	console.log("Su nombre es: " + nombre    );
 // CONCATENAR= Unir un mensaje literal con una o mas variables 
*/
	/* 
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva*/


	var nombre;
	var cantidadPersonas;
	var cantidadDias;
	var formaDePago;
	var respuesta;
	var masPersonasUnaReserva;
	var masPersonasUnaReservaHuesped;
	var maximoDeDias;
	var maximoDeDiasCantidadPersonas;
	var contador;
	var contadorReservas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var acumuladorDeDias;
	var promedio;
	var formaPagoMasUsada;


	respuesta="Si";
	contadorReservas=0;
	contadorEfectivo=0;
	contadorTarjeta=0;
	contadorQR=0;
	acumuladorDeDias=0;

	while(respuesta=="Si")
	{
		contador= contador++;


		nombre=prompt("Ingrese su nombre ");
		while(!isNaN(nombre))
		{
			nombre=prompt("Ingrese su nombre ");
		}

		cantidadPersonas=prompt("Ingrese la cantidad de personas");
		cantidadPersonas=parseInt(cantidadPersonas);
		while(isNaN(cantidadPersonas)|| cantidadPersonas<1)
		{
			cantidadPersonas=prompt("Ingrese la cantidad de personas");
		cantidadPersonas=parseInt(cantidadPersonas);
		}

		cantidadDias=prompt("Ingrese la cantidad de dias");
		cantidadDias=parseInt(cantidadDias);
		while(isNaN(cantidadDias)|| cantidadDias<1)
		{
			cantidadDias=prompt("Ingrese la cantidad de dias");
		cantidadDias=parseInt(cantidadDias);
		}

		formaDePago=prompt("Ingrese su forma de pago");
		while(!isNaN(formaDePago)|| formaDePago!= "Efectivo"&& formaDePago!="Tarjeta"&&formaDePago!= "QR")
		{
			formaDePago=prompt("Ingrese su forma de pago");
		}

		if (cantidadPersonas>masPersonasUnaReserva || contadorReservas==1) 
		{
			cantidadPersonas=masPersonasUnaReserva;
			masPersonasUnaReservaHuesped=nombre;
			
		}

		if (cantidadDias>maximoDeDias|| contadorReservas==1) 
		{
			cantidadDias=maximoDeDias;
			maximoDeDiasCantidadPersonas=cantidadPersonas;	
			
		}

		switch(formaDePago)
		{
			case "Efectivo":
			contadorEfectivo=contadorEfectivo++;
				break;
			case "Tarjeta":
			contadorTarjeta++;
				break;
			default:
			contadorQR++;
				break;

		}

		acumuladorDeDias=acumuladorDeDias+cantidadDias;
		respuesta=prompt("Ingrese Si para continuar");

	}

	if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
	{
		formaPagoMasUsada="Efectivo";
		document.write("La forma de pago más utilizada fue el Efectivo");
	}else
	{
		if (contadorTarjeta>contadorQR) 
		{
			formaPagoMasUsada="Tarjeta";
			document.write("La forma de pago más utilizada fue la Tarjeta");

		}else
		{
			formaPagoMasUsada="QR";
			document.write("La forma de pago más utilizada fue el QR");

		}
	}



	promedio=cantidadDias/contadorReservas;

	document.write("El huésped que trajo más personas en una sola reserva fue " + masPersonasUnaReservaHuesped);
	document.write("La cantidad de personas que se quedaron más días fue " + cantidadPersonasMasDias);
	






}

