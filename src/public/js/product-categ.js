function fun2(value){

    fetch_data(value)
}


async function fetch_data(){
    let res = await fetch("http://localhost:8080/products-categ");
    let data = await res.json();
   // console.log(data)
    show_skin_products(data)
}



function show_skin_products(d) {
    let skin_products = d;
    
    let div = document.getElementById("skin_display");
    
    for(let i=0 ; i<skin_products.length ; i++){
        console.log(skin_products[i])
       append_skin_products (skin_products[i]);
    }
}


// show_skin_products(JSON.parse(localStorage.getItem("skinproducts")))

function append_skin_products(el) {
    let dis_div = document.getElementById('skin_display');
    let div = document.createElement("div");
    let s_image = document.createElement("img");
    s_image.src = el.Image;
    s_image.addEventListener('click', function () {
        let selc_pro = el.Name;
        localStorage.setItem("selected_products", JSON.stringify(selc_pro));
        location.href='selected_product.html'
    })
    let s_name = document.createElement("div");
    s_name.innerHTML = el.Name;
    s_name.setAttribute("class","skin_text1")
    let s_discription = document.createElement("div");
    s_discription = el.Discription;
    //s_discription.setAttribute('class','skin_text3')
    let s_price = document.createElement("div");
    s_price.style = 'margin-left:120px'
    s_price.innerHTML = ` ₹ ${el.Price}`;
    s_price.setAttribute("class", "skin_text2");
    let s_btn = document.createElement("button");
    s_btn.style = 'background-color:black;color:white'
    s_btn.innerText = "Add to cart";
    s_btn.setAttribute("class", "add_to_cart_btn");
    s_btn.addEventListener('click', function () {
        addtocart(el);
    })
    div.append(s_image, s_name, s_discription, s_price, s_btn);
    dis_div.append(div);
}


function addtocart(el) {
    let arr;
    arr = localStorage.getItem('cart');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    arr.push(el);
    localStorage.setItem("cart", JSON.stringify(arr));
}