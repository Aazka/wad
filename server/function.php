<?php
require "db_connection.php";
//<?php

function get_cats()
{
    global $con;
   $getCatQuerry= "select* from categories";
   $getCatResult=mysqli_query($con,$getCatQuerry);
   while($row=mysqli_fetch_assoc($getCatResult)){
       $id=$row['cat_id'];
       $title=$row['cat_title'];
       echo"<li><a class='nav-link' href='#'>title</a></li>";
   }
}
function get_brands()
{
    global $con;
    $getBrandQuerry= "select* from brands";
    $getBrandResult=mysqli_query($con,$getBrandQuerry);
    while($row=mysqli_fetch_assoc($getBrandResult)){
        $id=$row['brand_id'];
        $title=$row['Brand_title'];
        echo"<li><a class='nav-link' href='#'>title</a></li>";
    }
}
function get_product_brand()
{
    global $con;
    $getBrandQuerry= "select* from Product_brands";
    $getBrandResult=mysqli_query($con,$getBrandQuerry);
    while($row=mysqli_fetch_assoc($getBrandResult)){
        $id=$row['Pbrand_id'];
        $title=$row['Pbrand_title'];
        echo" <option>title</option>";
    }
}
function get_product_category()
{
    global $con;
    $getCATQuerry= "select* from Product_category";
    $getCATResult=mysqli_query($con,$getCATQuerry);
    while($row=mysqli_fetch_assoc($getCATResult)){
        $id=$row['PCAT_id'];
        $title=$row['PCAT_title'];
        echo" <option>title</option>";
    }
}

/**
 * Created by PhpStorm.
 * User: Muhammad Talha
 * Date: 1/1/2019
 * Time: 5:08 PM
 */