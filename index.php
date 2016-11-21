<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
	<title>Interior_Website</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="vendor/bootstrap/css/bootstrap-slider.min.css" rel="stylesheet">
	<link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="vendor/bxslider/jquery.bxslider.css">
	<link rel="stylesheet" href="css/all.css">

<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

	</footer>
	<!-- jQuery -->
	<script src="js/lib/jquery-1.11.1.min.js"></script>

	<!-- bxSlider -->
	<script src="vendor/bxslider/jquery.bxslider.js"></script>


	<!-- Bootstrap Core JavaScript -->
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/bootstrap/js/bootstrap-slider.js"></script>

	<!-- SiteMain -->
	<script src="js/app/class.SiteMain.js"></script>
	<script src="js/app/class.homepage.js"></script>

</head>
<?php
$page = $_REQUEST['page'] == '' ? 'home':$_REQUEST['page'];
?>
<body class="page-<?=$page?>">


<?php
	include('modules/includes/header.php');
	include('modules/'.$page.'.php');
	include ('modules/includes/footer.php');
?>

</body>
</html>