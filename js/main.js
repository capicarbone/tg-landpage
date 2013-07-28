
var contenidos;
var activo = -1;

function patalla_ancho(){

	return window.innerWidth;
}

function cambiar_seccion() {
		
	posicion_actual = $(window).scrollTop();

	n = contenidos.length;

	var ant = 300;

	var max_franja = 500;

	if (patalla_ancho() < '768')
		max_franja = 100;

	for ( i = 0; i < n; i++){

		if ( posicion_actual >= ant && posicion_actual < contenidos[i]['pos'] && activo != i){

			icono_actual = contenidos[i]['elem'].find('.icono');
			
			icono_actual.animate({ backgroundColor: "green"}, 500);

			franja_actual = contenidos[i]['elem'].find('.franja');

			franja_actual.animate({width: '+=' + max_franja + '%'}, 500);

			if (activo != -1 ){
				
				icono_anterior = contenidos[activo]['elem'].find('.icono');

				icono_anterior.animate({ backgroundColor: "#ffa500"}, 500);

				franja_anterior = contenidos[activo]['elem'].find('.franja');

				franja_anterior.animate({width: '-=' + max_franja + '%'}, 500);
			}
				

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

	

	$(".tarjeta").each(function(i, e){

		contenidos[i] = {};
		contenidos[i]['elem'] = $(e);
		contenidos[i]['pos'] = $(e).offset().top;		
	});

	
	cambiar_seccion();

	document.onscroll = function(event){

		cambiar_seccion();

	}
})
