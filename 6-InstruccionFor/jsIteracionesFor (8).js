function mostrar()
{

	var numeroIngresado;
	var i;
	var bandera;

	bandera=0;
	numeroIngresado=prompt("Ingrese numero");
	//validar
	for(i=2;i<numeroIngresado;i++)
	{

		if(numeroIngresado%i==0)
		{
			bandera=1;
			alert("No es un numero primo el "+ numeroIngresado)
			break;
		}
	}

	if(bandera!=1)
	{
		alert("Es primo el "+ numeroIngresado)
	}

}//FIN DE LA FUNCIÓN