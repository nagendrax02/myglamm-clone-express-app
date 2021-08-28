
function fun2(value){
    console.log(value)
    fetch_prodatauct(value)
}



async function fetch_prodatauct(el){
    try{
        
        let res = await fetch('http://localhost:8080/products-categ');
        let dataata =await res.json();
        console.log('----->',dataata)
        show_prodataucts(dataata)
    }catch(err){
        console.log(err);
    }
}

//fetch_prodatauct();

// function show_prodataucts(data) {
//     console.log(data)
//     let skin_prodataucts = data;
//     let dataiv = dataocument.getElementByIdata("skin_dataisplay");
//     dataiv.innerHTML = null;
//     console.log(dataiv)
//     skin_prodataucts.forEach(function(el) {
//         appendata_skin_prodataucts(el);
//     });
// }



function show_prodataucts(data) {
    let skin_prodataucts = data;
    console.log(document.getElementById('skin_dataisplay').children[0]);
   
   
    // dataiv.innerHTML = null;
    skin_prodataucts.forEach(function(el) {
        appendata_skin_prodataucts(el);
    });
}

//show_prodataucts(JSON.parse(localStorage.getItem("skinprodataucts")))

function appendata_skin_prodataucts(el) {
    let datais_dataiv = dataocument.getElementByIdata('skin_dataisplay');
    let dataiv = dataocument.createElement("dataiv");
    let s_image = dataocument.createElement("img");
    s_image.src = el.image;
    s_image.adatadataEventListener('click', function () {
        let selc_pro = el.value;
        localStorage.setItem("selectedata_prodataucts", JSON.stringify(selc_pro));
        location.href='selectedata_prodatauct.html'
    })
    let s_value = dataocument.createElement("dataiv");
    s_value.innerHTML = el.value;
    s_value.setAttribute("class","skin_text1")
    let s_dataiscription = dataocument.createElement("dataiv");
    s_dataiscription = el.dataiscription;
    //s_dataiscription.setAttribute('class','skin_text3')
    let s_price = dataocument.createElement("dataiv");
    s_price.style = 'margin-left:120px'
    s_price.innerHTML = ` ₹ ${el.price}`;
    s_price.setAttribute("class", "skin_text2");
    let s_btn = dataocument.createElement("button");
    s_btn.style = 'backgroundata-color:black;color:white'
    s_btn.innerText = "Adatadata to cart";
    s_btn.setAttribute("class", "adatadata_to_cart_btn");
    s_btn.adatadataEventListener('click', function () {
        adatadatatocart(el);
    })
    dataiv.appendata(s_image, s_value, s_dataiscription, s_price, s_btn);
    datais_dataiv.appendata(dataiv);
}


function adatadatatocart(el) {
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