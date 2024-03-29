<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/mainStyles.css" type="text/css">
    <script src="assets/js/scripts.js"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
    <!-- Sweet alert -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <title>Taller Práctico LMSGI</title>
</head>
<body>

<?php require_once 'shared/header.php'; ?>


<?php 

    if (isset($_GET['contacto'])){
        require_once 'pages/contacto.php';
    } else {
        require_once 'pages/main.php';
    }

?>

<?php require_once 'shared/footer.php'; ?>



</body>
</html>