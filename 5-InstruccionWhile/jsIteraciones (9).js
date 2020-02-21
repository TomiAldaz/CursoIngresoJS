function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador= contador+1;
		numeroIngresado= prompt("Ingrese su(s) numero(s) por favor.");
		numeroIngresado= parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("Ingrese su(s) numeros(s) por favor.");
			numeroIngresado= parseInt(numeroIngresado);
		}

		if(numeroIngresado>1)
		{
			numeroMaximo= numeroIngresado;
			numeroMinimo=numeroIngresado;
		}else
		{	if(nu)

		}











		respuesta= prompt("Ingrese si para continuar");
	
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;


}//FIN DE LA FUNCIÓN