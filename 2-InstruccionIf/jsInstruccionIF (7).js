function mostrar()
{

	var edad;
	var estado;
	//tomo la edad
	edad=document.getElementById('edad').value; 
	estado=document.getElementById('estadoCivil').value;
	edad= parseInt(edad);

	if (edad<18 & estado != "Soltero") 
	{
		
		alert("Es muy pequeño para NO ser soltero");
		console.log("Es muy pequeño para NO ser soltero");
		
	}


	


}//FIN DE LA FUNCIÓN