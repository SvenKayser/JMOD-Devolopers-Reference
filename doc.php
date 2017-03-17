<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/jmod/style.css" />
		<script type="text/javascript" src="/jmod/doc.js"></script>
		
	</head>
	<body>
	


<?php
	
	

	$basedir = dirname(__FILE__);
	
	
	function lister($directory,$depth)
	{
		global $basedir;
		$darr = scandir($basedir.$directory);
		foreach($darr as $dir)
		{
			if((substr($dir,0,1) != ".") && is_dir($basedir.$directory."/".$dir))
			{
				echo '<div class="direntry"><span href="'.$directory."/".$dir.'">'.$dir.'</span>';
				 
					lister($directory."/".$dir,$depth++);
					
				echo "</div>";
			}
		}
	}




	
	$path = urldecode($basedir.substr($_SERVER['REQUEST_URI'],5));
	
	
	
	echo '<div class="sidebar">';
	echo '<div class="direntry"><span href="">JMOD Home</span></div><br><br>';
	
	lister("",0);

	
	echo '</div><div class="doc">';
		
	$xml = file_get_contents($path."/doc.xml");
	if(!$xml) $xml = "No documentation found";
	
	echo $xml;
	
	
	
	
?>
</body></html>