<?php

class DB {
    // The database connection
    protected static $connection;

    /**
     * Connect to the database
     * 
     * @return bool false on failure / mysqli MySQLi object instance on success
     */
    public function connect()
    {    
        // Try and connect to the database
        if (!isset(self::$connection))
        {
            // Load configuration as an array. Use the actual location of your configuration file
            $config = parse_ini_file('../config.ini'); 
            self::$connection = oci_connect($config['username'], $config['password'], '//oracle.cise.ufl.edu/orcl');
        }

        // If connection was not successful, handle the error
        if (!self::$connection)
        {
            die("Couldn't establish Oracle connection");
            return false;
        }
        
        return self::$connection;
    }

    /**
     * Query the database
     *
     * @param $query The query string
     * @return true on success, false otherwise
     */
    public function query($query) 
    {
        $this->connect();
        
        $stmt = oci_parse(self::$connection, $query);
        return oci_execute(stmt);
    }

    /**
     * Fetch rows from the database (SELECT query)
     *
     * @param $query The query string
     * @return bool False on failure / array Database rows on success
     */
    public function select($query) 
    {
        $this->connect();
        $stmt = oci_parse(self::$connection, $query);
        if (!oci_execute($stmt))
        {
            $error = oci_error($stmt);
            die("Query failed: ".$error['message']);
            return false;
        }
        
        $rows = array();
        while ($row = oci_fetch_array($stmt, OCI_ASSOC))
            $rows[] = $row;
        
        return $rows;
    }
}

?>