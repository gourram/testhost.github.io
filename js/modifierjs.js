$(document).ready(function(){

	/* Debut Scroll Top */

	$(window).scroll(function(){       //La fonction exécuté lorsque je bouge l'ascenseur de la souris
		if($(this).scrollTop()>= 800)
		{
			$(".btnScroll").fadeIn(500); // (fadeIn) quand la variable scrollTop >= 300
		}
		else
		{
			$(".btnScroll").fadeOut(500); // faire l'inverse
		}
	});

	$(".btnScroll").click(function(){
		$("body").animate({scrollTop: 0},800); // donner le scrollTop 0 si je clique sur le btnScroll
	});

	/* Debut Scroll Top */
});