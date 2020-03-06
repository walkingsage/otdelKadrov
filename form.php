<?php
require 'connect.php'; // подключаем скрипт
 
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
 
// выполняем операции с базой данных
$name = $_REQUEST['classics_name'];
$familya = $_REQUEST['classics_familya'];
$birthday = $_REQUEST['classics_birthday'];
$age = $_REQUEST['classics_age'];
$plaseofbirth = $_REQUEST['classics_placeofbirtch'];
$grazjdanstvo = $_REQUEST['classics_grazjdanstvo'];
$english = $_REQUEST['classics_english'];
$obrazovanie = $_REQUEST['classics_obrazovanie'];

$insert_sql = "INSERT INTO classics (name, familya, birthday, age, placeofbirth, citizenship, englsihlanguage, Obrazovanie)" . "VALUES('{$name}', '{$familya}', '{$birthday}', '{$age}', '{$plaseofbirth}', '{$grazjdanstvo}', '{$english}', '{$obrazovanie}');";
mysqli_query($link,$insert_sql);    
// закрываем подключение
mysqli_close($link);
echo("hello");
?>