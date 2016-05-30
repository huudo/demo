<?php
	
	$test = array(
        array(
                "first_name" =>"a",
                "last_name" => "Brown",
                "age" => "28",
                "email" => "darianbr@example.com"
        ),
        array(
                "first_name" => "John",
                "last_name" => "Doe",
                "age" => "47",
                "email" => "john_doe@example.com"
        )
	);
	echo json_encode($test);
	
?>
