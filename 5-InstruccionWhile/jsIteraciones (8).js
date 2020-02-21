function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta== "si")
	{
		contador= contador+1;
		numeroIngresado= prompt("Ingrese su(s) numero(s) por favor.");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("Ingrese 5 numeros por favor.");
			numeroIngresado= parseInt(numeroIngresado);
		}
		
		
		if (numeroIngresado>0) 
		{
			 positivo= positivo+numeroIngresado;

		}else
		{ 
			 if (numeroIngresado<0) 
			{
			 	negativo= negativo*numeroIngresado;
			}
		}	
		
		respuesta= prompt("Ingrese si para continuar");

	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN