<?php

  
// Creating Connection  
$con = new MongoDB\Client("mongodb://localhost:27017");  

// Creating Database  
$db = $con->inotebook;  

// Creating Document  
$collection = $db->users; 
$collection = $db->notes; 






?>