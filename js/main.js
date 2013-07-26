
var contenidos;
var activo = -1;

function cambiar_seccion() {
		
	posicion_actual = $(window).scrollTop();

	n = contenidos.length;

	var ant = 300;

	for ( i = 0; i < n; i++){

		if ( posicion_actual >= ant && posicion_actual < contenidos[i]['pos'] && activo != i){

			contenidos[i]['elem'].animate({ backgroundColor: "green"}, 500);

			if (activo != -1 )
				contenidos[activo]['elem'].animate({ backgroundColor: "#ffa500"}, 500);

			activo = i;

			break;


		}else{

			console.log( i + ": "+  posicion_actual + ", " + ant + ", " + contenidos[i]['pos']);
		}

		ant = contenidos[i]['pos'];
		
	}
}

$(document).ready(function(){

	contenidos = new Array();

	$(".franja").each(function(i, e){

		contenidos[i] = {};
		contenidos[i]['elem'] = $(e);
		contenidos[i]['pos'] = $(e).offset().top;		
	});

	
	cambiar_seccion();

	document.onscroll = function(event){

		cambiar_seccion();

	}
})
