/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparitas;
	var precio;
	var precioBruto;
	var precioFinal;
	var marca;

	precio= 35;
	cantidadLamparitas=document.getElementById('Cantidad').value;
	cantidadLamparitas= parseInt(cantidadLamparitas); 
	marca= document.getElementById('Marca').value;

	if (cantidadLamparitas==6)
		{

			precioBruto= precio * cantidadLamparitas;
			precioFinal= precioBruto - (precioBruto*0.5);
			
			document.getElementById('precioDescuento').value = precioFinal;
		 }

	if (cantidadLamparitas==5) 
	{
		if(marca="ArgentinaLuz")
		{
			precioFinal= precioBruto - (precioBruto*0.4);
			document.getElementById('precioDescuento').value = precioFinal;
		}

		else
			{
				precioFinal= precioBruto - (precioBruto*0.3);
				document.getElementById('precioDescuento').value = precioFinal;
			}

	}



}
