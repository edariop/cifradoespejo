window.onload = function()
{
	

/*alert("este codigo es con el fin de realizar el cifrado de espejo");
*/
inicio();
}

function inicio()
{
	
	function codifica(descifrar)
	{
	
		var textoOpera = nom_div("caja_1").value;	//identifica el valor ingresado en text
		nom_div("tabla").innerHTML = realizaespejo(textoOpera); //identifica y evalua con el metodo Cod
;
	}
	
	
	
	function realizaespejo(texto)
	{
		texto = texto.toLowerCase();
		var salida = " ";
		for (var i = 0; i < texto.length; i++) 
		{
			
		if(texto.charAt(i) != " ")
			{
		    var j = texto.charCodeAt(i);
			var resta= j-97;
			var total=122-resta;
			
			salida += String.fromCharCode(total);
			}
			else
			{
				salida +=""
			}
		}
		return salida; 
	}

	nom_div("caja_1").addEventListener('keyup', function(event)
	{

		codifica(true);

	});


	
	function nom_div(id)
{
		return document.getElementById(id);
	}
}			