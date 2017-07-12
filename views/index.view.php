<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>IngPlantae</title>
	<?php require 'includes/includes.php'; ?>
</head>
<body onresize="location.reload();">
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Sistema de Riego</h2>
    </div>
    <div class="modal-body">
      <p>El sistema de riego ha sido activado.</p>
    </div>
  </div>

</div>

	<div class="container-fluid">
		<nav>
			<!-- UN LOGO -->
		</nav>
	</div>
	<div class="container-fluid">
		<div class="color-uno">
			<div class="nameIP">IngPlantae </div><br><br><br>
			<div class="titleIP">Pompona 1.0</div> 
			<div class="descriptionIP">Tecnología agrícola para el trópico</div> 
			<div class="btns">
				<button class="btn btn-success btn-lg activar-riego" id='riego'>Activar riego</button>
				<button class="btn btn-success btn-lg activar-riego">Apagar sistema</button>
				<button class="btn btn-success btn-lg activar-riego">Obtener variables</button>
				<button class="btn btn-success btn-lg activar-riego">Reiniciar sistema</button>
				<button class="btn btn-success btn-lg activar-riego">Abrir electroválvula</button>
				<button class="btn btn-success btn-lg activar-riego">Cerrar electroválvula</button>
			</div>
		</div> 
		<div class="line"></div>
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
				<li data-target="#myCarousel" data-slide-to="4"></li>				
			</ol>
			
			<!-- Wrapper for slides -->
			<div class="carousel-inner">
				 <div class="color-dos item active"  id="chart1"></div>
			 	 <div class="color-dos item"  id="chart2"></div>
			 	 <div class="color-dos item"  id="chart3"></div>		 
		  		 <div class="color-dos item"  id="chart4"></div>		 
			 	 <div class="color-dos item"  id="chart5"></div>		 
			</div>
			
			<!-- Left and right controls -->
			<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" href="#myCarousel" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Next</span>
			</a>
		</div>
		<div class="line"></div>

	</div>
	<div class="container-fluid">
		<footer>
			<!-- LOGO -->
		</footer>
	</div>
</body>
</html>