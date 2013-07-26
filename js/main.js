
var contenidos;
var activo = 0;

$(document).ready(function(){

	contenidos = new Array();

	$(".contenido").each(function(i, e){

		contenidos[i] = {};
		contenidos[i]['elem'] = $(e);
		contenidos[i]['pos'] = $(e).position().top;

		//console.log(i);
		//console.log(contenidos[i]);
	});

	document.onscroll = function(event){

		posicion_actual = $(window).scrollTop();

		n = contenidos.length;

		for ( i = 0; i < n; i++){

			if ( posicion_actual+250 >= contenidos[i]['pos'] && activo != i)
				activo = i;
		}

	}
})
