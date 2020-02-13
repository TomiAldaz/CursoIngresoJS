function mostrar()
{
	var edad;
	//tomo la edad  
	edad= document.getElementById('edad').value;
	edad= parseInt(edad);
	
	if(edad<12)
	{
		alert("Usted es menor");
	}
	else
	{
		if(edad>18)
		{
			alert("Usted es mayor");
		}

			else
			{
				alert("Usted es adolescente");
			}





	}



}//FIN DE LA FUNCIÓN