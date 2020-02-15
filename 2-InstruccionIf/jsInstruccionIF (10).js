function mostrar()
{
	/*//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	notaRandom= Math.floor((Math.random() * 10) + 1);
	console.log(notaRandom); 

	if (notaRandom>8 ) 
	{
		alert("EXCELENTE");
	}

	else 
		{ 
			if(notaRandom<9 && notaRandom>3) 
	
	
				{
					alert("APROBÓ");
			 	}
				

					else (notaRandom<4 ) 
						{
							alert("Vamos, la proxima se puede");
						}
       
		}	
*/

	var notaRandom;
	notaRandom= Math.floor(Math.random() * 10) + 1;
	
	if (notaRandom>8) 
	{
		alert("EXCELENTE");
	}else
	{
		if(notaRandom>3 && notaRandom<9)
		{
			alert("APROBÓ");
		}else
		{
			alert("Vamos, la proxima se puede");
		}
	}





	console.log(notaRandom);
	





}//FIN DE LA FUNCIÓN