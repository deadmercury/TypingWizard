<?php
	class Config
	{
		private static $host="ec2-52-22-238-188.compute-1.amazonaws.com";
		private static $port="5432";
		private static $dbname="dae8b155jf3rje";
		private static $user="wlknjwbxqxdewv";
		private static $password="6553e207e47a87c158a2b5c95c116050306e0230a2c4c226eb8dc3f9840f0c7b";
		
		static	function getConnectionString()
		{
			$conn="host=". self::$host ." port=".self::$port." dbname= ".self::$dbname." user=".self::$user." password=".self::$password;
			return $conn;
			
		}	
	}
?>