<?php
   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = '';
   $conn = new mysqli($dbhost, $dbuser, $dbpass);
   
   if(! $conn )
   {
      die('Could not connect: ' . mysql_error());
   }
   
   echo 'Connected successfully';
   
   $sql = 'CREATE Database maps';
   if ($conn->query($sql) === TRUE) {
	    echo "Create DB OK \n";
	} else {
	    echo "Error creating DB: " . $conn->error;
	}
   
  
   	$conn->close();
?>
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "maps";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	// sql to create table
	$sql = "CREATE TABLE shop (
	shopId INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	shopName VARCHAR(30) NOT NULL,
	lat DOUBLE,
	lang DOUBLE,
	carNum INT(6)	
	)";

	if ($conn->query($sql) === TRUE) {
	    echo "Table Shop created successfully";
	} else {
	    echo "Error creating table: " . $conn->error;
	}

	$conn->close();
?>