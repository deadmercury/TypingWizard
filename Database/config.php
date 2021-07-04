<?php
	class Config
	{
		static	function getConnectionString()
		{
			return getenv("DATABASE_URL");
		}	
	}
?>