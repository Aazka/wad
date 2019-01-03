<?php
require_once "db_connection.php";
if(isset($_POST['insert_pro']))
{
    // global $con;
    $pro_title= $_POST['pro_title'];
    $pro_cat=$_POST['pro_cat'];
    $pro_brand=$_POST['pro_brand'];
    $pro_price=$_POST['pro_price'];
    $pro_desc=$_POST['pro_desc'];
    $pro_keyword=$_POST['pro_kw'];

    $insertQ="insert into product(pro_title,pro_cat,pro_brand,pro_price,pro_desc,pro_keyords)
    values('$pro_title','$pro_cat','$pro_brand','$pro_price','$pro_desc','$pro_keyword');";
    $result=mysqli_query($con,$insertQ);

    if(!$result)
    {
        echo"not execute";
    }
}
function getCats(){
    global $con;
    $getCatsQuery = "select * from categories";
    $getCatsResult = mysqli_query($con,$getCatsQuery);
    while($row = mysqli_fetch_assoc($getCatsResult)){
        $cat_id = $row['cat_id'];
        $cat_title = $row['cat_title'];
        echo "<option value='$cat_id'>$cat_title</option>";
    }
}
function getBrands(){
    global $con;
    $getBrandsQuery = "select * from brands";
    $getBrandsResult = mysqli_query($con,$getBrandsQuery);
    while($row = mysqli_fetch_assoc($getBrandsResult)){
        $brand_id = $row['brand_id'];
        $brand_title = $row['brand_title'];
        echo "<option value='$brand_id'>$brand_title</option>";
    }
}
function display_item()
{
    global $con;
    $getres="select * from (categories join product on cat_id=product.pro_cat) join brands on product.pro_brand=brands.brand_id";//"select * from product";
    $getConnection=mysqli_query($con,$getres);
    while($row = mysqli_fetch_assoc( $getConnection)){
   // $row = mysqli_fetch_assoc( $getConnection);
        $brand_id = $row['pro_id'];
        $PRO_title = $row['pro_title'];
        $PRO_category=$row['cat_title'];
        $PRO_Btitle=$row['brand_title'];
        echo $PRO_title,' ',$PRO_Btitle,' ',$PRO_category;//"<option value='$brand_id'>$brand_title</option>";
    }
}