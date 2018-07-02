
    <?php
    //header("Access-Control-Allow-Origin: *");
    
    if($_SERVER['REQUEST_METHOD'] == 'POST'){  
       $lastname = $_POST["lastname"]; 
       $firstname = $_POST["firstname"];
       
       try {
          $conn = new PDO("mysql:dbname=northwind;host=127.0.0.1", "root", "");
          
          // Vrem sa vedem orice eroare. Setam nivelul de alertare maxim
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          $sql_insert = "
             INSERT INTO employees (LastName, FirstName)
             VALUES ('$lastname', '$firstname' )
             ";
          // use exec() because no results are returned
          $conn->exec($sql_insert);
          echo "New record created successfully";
       }
       catch(PDOException $e) {
          echo $sql_insert . "<br>" . $e->getMessage();
       }
    } 
    // pentru varianta cu JSON: https://codepen.io/dericksozo/post/fetch-api-json-php
    // codul normal, la un request GET
    $pdo = new PDO("mysql:dbname=northwind;host=127.0.0.1", "root", "");
    // un query SQL simplu (vs a prepared statement) 
    $sql = "
       SELECT e.EmployeeID, e.FirstName, e.LastName
       FROM employees AS e
       ORDER BY e.EmployeeID DESC        
       ";
    $state = $pdo->query($sql, PDO::FETCH_ASSOC);
    $results = $state->fetchAll();
    
    ?>
    <!doctype html>
    <html lang="en">
    <head>
       <title>Prepared statements</title>
       <!-- Required meta tags -->
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
       <!-- Bootstrap CSS -->
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">
    </head>
    <body>
       <div class="container">
          <div class="row">
             <div class="col-xs-12">
             <?php
             
             foreach ($results as $result => $value) { 
                echo '<p>' . $value["FirstName"] . ' ' . $value["LastName"] .  '</p>'; 
             }
             ?>
                   
             </div>
          </div>
       </div>
        
        
    </body>
    </html>
