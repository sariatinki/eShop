// functions for the eshopproduct page..   
//function to load product details from json onload

function loadDoc(){
    var eshop = new XMLHttpRequest();
    eshop.onreadystatechange = function(){
        if(eshop.readyState == 4 &&
          eshop.status == 200){
         var myData = JSON.parse(eshop.responseText);
            
            //locally storing the json data
                localStorage.setItem("storedData", JSON.stringify(myData.allProducts)); 
            
            // making lists of the html class element where we need to feed in data from json..
            var imgListHtml = document.getElementsByClassName("cycle-img");
            var productName = document.getElementsByClassName("prodname");
            var productPrice = document.getElementsByClassName("price");
            
            
            
            var i;  //index to loop throught the json file
            var index;   //index to loop through the list of classes
            
            
            //looping through the json list
            for(i=0; i<myData.allProducts.length; i++){            
            
                    //looping through the image class 
                for(index=0; index<imgListHtml.length; index++){                   
                    if(i==index){
                    imgListHtml[index].src = myData.allProducts[i].image_path;
                    }
                }
               
                
                    //looping through the productname class
                for(index=0; index<productName.length; index++){
                    if(i==index){
                        productName[index].innerHTML = myData.allProducts[i].name;
                    }
    
                }
                
                    //assigning image source to the coresponding index
                for(index=0; index<productPrice.length; index++){
                    if(i==index){
                        productPrice[index].innerHTML = myData.allProducts[i].price;
                    }
                }
                    
            }
    
            
                
            }   
            
        }
    eshop.open("GET", "guitar.json", "true");
    eshop.send();
}

    // for the image click.....
function imgClick(clicked_id){
    
    var source = document.getElementById(clicked_id);
    localStorage.setItem("try", source.src); // saving the image source of the clicked id
    window.location.href = "productdetail.html";
}

function divclick(idCapture){
    var total = document.getElementById(idCapture).getElementsByTagName("img");
    var i;
    for(i=0; i<total.length; i++){
        
    }
    localStorage.setItem("imgfile", total[0].src);
    console.log(localStorage.imgfile);
    window.open("productdetail.html");
}

function detailload(){
    var pimg = document.getElementById("pimg");
    pimg.src = localStorage.try;
}



    //for the buy button...


/*function buy(){
    window.location.href = ("eshopbuy.html");
}*/



function formload(){
    var i;
    i++;
    var product = document.getElementById("productbuy");
    product.src = localStorage.imagesrc[i];
}



//functions for the eshopbuy page..
// for the continue shopping button..
function productpage(){
    window.open("eshopproduct.html");
}
//for the continue payment button
function payment(){
    window.location.href = "eshopfinal.html";
}


//Locally storing the input data of the form first and last name...
var firstname = document.getElementById("fName");
var lastname = document.getElementById("lName");

function nameone(){
    localStorage.setItem("fname", firstname.value); 
    localStorage.setItem("lname", lastname.value);
}



// getting the locally stored data from the form on the last page...
function final(){
    document.getElementById("finalmsg").innerHTML = "Thankyou for shopping with us "+ localStorage.fname +" " + localStorage.lname+"." +"We look forward to serving you again in the near future."
}

//for the product detail page.


    