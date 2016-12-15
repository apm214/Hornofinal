$(document).on('ready', function(){

	function moveSlider(e){
		e.preventDefault();

		var pos 	= $(e.currentTarget).offset()
		,	posX	= e.pageX - pos.left
		,	value	= posX*100/$(e.currentTarget).outerWidth();

		if(posX >= 0 && posX <= $(e.currentTarget).outerWidth()){

			$('.slider > .progress').css('width', posX+'px');
			$('.slider > .indicator').css('left', posX+'px');

			$('#valueSlider').val(value);

		}
	}

	$('.slider').on('mousedown', function(e){

		moveSlider(e);

		$(this).on('mousemove', function(e){
			moveSlider(e);
		});

	}).on('mouseup', function(){
		$(this).off('mousemove');
	});



			



			function cambiar1 () {
				var img = document.getElementById("img1");
				img.src = "azul.png";
			}

			function cambiar2 () {
				var img = document.getElementById("img2");
				img.src = "azul.png";
			}

			var estado = "rojo";
			function cambiar3 () {
				var img = document.getElementById("img3");
				if (estado == "rojo") {
					estado = "azul";
				} else {
					estado = "rojo";
				}
				img.src = estado + ".png";
			}
        

});