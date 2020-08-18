<?php

//if($_GET["maintenance"]!="stuart")
//die("Site Down while the fixture list is being updated");

//if((file_exists(dirname(__FILE__).$_GET["page"]))&&($_GET["page"]!="index"))
//	die(dirname(__FILE__).$_GET["page"]);

var_dump($_SERVER["REQUEST_URI"]);
//initialise the page
require_once(dirname(__FILE__)."/../api/init.inc.php");

//var_dump($_GET);

//display the page
//$form->render_page("index");
if(DEVELOPER)
	$form->render_page(substr($_GET["page"],1));
else
	$form->render_page($_GET["page"]);
?>
