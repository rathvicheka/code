/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const prodouct=[
    {
        id:1,
        img:'https://th.bing.com/th/id/OIP.Wmh_JFD9GKiGSvsI2iZ9pwHaKG?pid=ImgDet&w=196&h=267&c=7&dpr=1.5',
        title:'001',
        minprice:13,
        maxpriice:18,
       
    },
    {
        id:2,
        img:'https://th.bing.com/th/id/OIP.todlu14XCZFUpyLa4B5rMQHaJ4?pid=ImgDet&w=192&h=255&c=7&dpr=1.5',
        title:'002',
        minprice:10,
        maxpriice:14,
       
    },
]
var column='';
prodouct.forEach((val,i,arr)=>
{
    column+=`
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="${val.img}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${val.title}</h5>
                    <!-- Product reviews-->
            
                    <!-- Product price-->
                    <span class="text-muted ">$${val.minprice} - $${val.maxpriice}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
            </div>
        </div>
    </div>`;
});

document.getElementById("demo").innerHTML= column;
