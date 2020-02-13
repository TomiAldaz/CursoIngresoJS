function mostrar()
{
	var edad;
	//tomo la edad  
	edad= document.getElementById('edad').value;
	edad= parseInt(edad);
	/*if (edad > 12 ) 
	{
		// mayores a 12
		if (edad<18) 
		{

			alert("Usted es adolescente");
		}
*/
	if (edad>12 && edad<18) 
	{

		alert("Usted es adolescente");
	}



	


}//FIN DE LA FUNCIÓN