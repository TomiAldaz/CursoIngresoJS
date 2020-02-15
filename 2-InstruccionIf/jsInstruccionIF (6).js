function mostrar()
{
	var edad;
	//tomo la edad  
	edad= document.getElementById('edad').value;
	edad= parseInt(edad);
	
	if(edad<17)
	{
		alert("Usted es mayor");
	}
	else
	{
		if(edad>12)
		{
			alert("Usted es menor");
		}

			else
			{
				alert("Usted es adolescente");
			}





	}



}//FIN DE LA FUNCIÓN