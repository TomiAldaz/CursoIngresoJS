function mostrar()
{
	var edad;
	var estadoCivil;
	//tomo la edad
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	edad= parseInt(edad);

	if (edad<17 && estadoCivil=="Soltero") 
	{
		alert("Es soltero y no es menor.");
	}  

	


}//FIN DE LA FUNCIÓN