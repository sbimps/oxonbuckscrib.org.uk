<?php
//defined("SYSPATH") OR die();
if(!isset($_GET["token"])) die("invalid token");

require_once(dirname(__FILE__)."/../../../api/conf/config.inc.php");

require(BASE."smarty/source/libs/Smarty.class.php");
require(BASE."api/helpers/SESSION.class.php");
require(BASE."api/helpers/INIT.class.php");
require(BASE."api/helpers/VALIDATOR.class.php");
require(BASE."api/helpers/ERROR.class.php");
require(BASE."api/helpers/GENERAL.class.php");

require_once(BASE."api/lib/FORM.class.php");

$form = new FORM();

//if(!isset($_GET["action"]))
//	die(header("location:".LOCATION));

if(strrpos($_GET["action"],"/"))
	$action = strtolower(substr($_GET["action"],strrpos($_GET["action"],"/")+1));
else
	$action = strtolower($_GET["action"]);

require_once(BASE."api/helpers/JSON.class.php");
$json = new Services_JSON();

if(!array_key_exists($action,$valid_ajax_action_list))
	ERROR::handler("invalid action: ".$action);
else{
	$actions = explode(",",$valid_ajax_action_list[$action]);
	foreach($actions as $k => $v){
		require_once(BASE."api/lib/".strtoupper($v).".class.php");
		eval("\$".$v." = new ".strtoupper($v)."();");
	}

	//TODO: session handling across domains
	//TODO: session handling with Safari
	//if (the URL and the LOCATION are the same) and (the session token doesn't match the submitted token) and (the browser isn't Safari)
	//if((((strcmp(URL,LOCATION))==0)&&($form->session->get_session("token")!=$_GET["token"]))&&(strpos($_SERVER["HTTP_USER_AGENT"],"Safari")!==false))
	//if($form->session->get_session("token")!=$_GET["token"])
		//ERROR::handler("Invalid Token. Wanted: ".$form->session->get_session("token").", Got: ".$_GET["token"]);
	//else
		require_once(AJAX.$action.".php");
}
?>
