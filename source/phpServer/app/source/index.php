<?php
$DIRNAME = dirname(__FILE__).'/';
require_once $DIRNAME . '../server/router/router.php';
$router->add($DIRNAME);

$router->run();


?>  