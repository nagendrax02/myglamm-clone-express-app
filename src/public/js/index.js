function open_cart(){
  
   location.href = 'views/cart';
}
function create_model(){
    let container = document.querySelector('.container');
    let modal_div = document.createElement('div');
    modal_div.setAttribute('id','myModal');
    modal_div.setAttribute('class','modal');


    let modal_content_div = document.createElement('div');
    modal_content_div.setAttribute('class','model-content')



    //modal for login

    modal_content_div.innerHTML = `
    <form action= "/post_user" method="post>
    <div class="container">
        <div class="sign-up-box">
        <span id="close" class="close">&times;</span>

        <h5 class="top-text"><span>Get 15% MyGlammXO Points back on every order
        </span></h5>
        <div class="logo">
            <img src="https://www.myglamm.com/images/myglamm-logo.png" alt="" style="max-width: 280px; max-height: 12rem; width: max-content;">
        </div>
        <p class="mobile">*Mobile Number:</p>
        <hr class="black-row">
        <hr class="horizontal-row">
        <div class="input-number">
            
            <div class="select-country">
                <fieldset><legend class="leg-text">COUNTRY CODE</legend>
                    <select name="country" id="sel-cont">
                        <option value="">IND +91</option>
                        <option value="">Algeria +213</option>
                        <option value="">Serbia +381</option>
                        <option value="">Australia +81</option>
                        <option value="">Austria + 43</option>
                        <option value="">Srilanka +45</option>
                    </select></fieldset>
                
            </div>
            
            <div class='phone-number'>
                <fieldset><legend class="leg-text">*MOBILE NUMBER</legend><input type="number" class="input-number" id="number" name="phone_number"></fieldset>
                
            </div>
        </div>

        <div class="button-div">
            <input type="submit" value="Continue" name="submit" onclick="/validate" class="button">
        </div>
        <div class="hr-line">
            <p><span>or continue with</span></p>
        </div>
        <div class="login-with">
            <div class="cont-facebook">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt="">
               <p>Continue with Facebook </p></div>
            <div class="cont-gmail">
                <img src="data:image/png;base64,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" alt="">
                <p> Continue with Google </p>
            </div>
        </div>
        <p>By signing up you agree to our <a href="" style="text-decoration: none; color: black;"><b> Terms & Conditions</b> </a> </p>
    </div>
</div>
</form>
    
    
    
    `;
    


    modal_div.append(modal_content_div);
    container.append(modal_div)

    modal_div.style.display = 'block';

   
    
    modal_div.append(modal_content_div);
    container.append(modal_div)
    
    close_login_box();
   
}

function close_login_box(){
     // close login page
     let modal_div = document.getElementById('myModal');
     let span = document.getElementById('close')
     console.log(span)
     span.addEventListener('click', function(){
        modal_div.style.display = 'none';
        location.href = '/index';
     });
   
}


//user detail modal



function generator(){
    let mobile = document.getElementById("number").value;
 
    let arr = localStorage.getItem('data');
 
    if(arr == null){
        arr = [];
        arr.push(mobile);
        localStorage.setItem('data', JSON.stringify(arr));
        create_user_detail_modal();
 
    }else{
     arr = JSON.parse(localStorage.getItem("data"))
     let flag = true;
     for(let i =0; i<arr.length;i++){
        if(arr[i] == mobile){
            flag = false;
            break;
     }
    }
 
    if(flag == true){
         arr.push(mobile);
         localStorage.setItem('data', JSON.stringify(arr));
         create_user_detail_modal()
 
    }else{
     window.location.href='index.html'
    }
 
 }
 }



function create_user_detail_modal(){
    let modal_div = document.getElementById('myModal')
    let modal_content_div = document.querySelector('.model-content')

    let container = document.querySelector('.container');

    modal_content_div.innerHTML = `
    
    <div class="container">
        <div class="sign-up-box">
        <span id="close" class="close">&times;</span>
            <h5 class="top-text"><span>Verify your mobile number to complete your registration
            </span></h5>
            <div class="logo">
                <img src="https://www.myglamm.com/images/myglamm-logo.png" alt="" style="max-width: 280px; max-height: 12rem; width: max-content;">
            </div>
         <hr class="black-row" style="margin-top:20px">
            <hr class="horizontal-row">
            <div class="input-number" style="margin-top:20px">
                <form action="" id="cont-code">
                <div class="select-country">
                    <fieldset><legend class="leg-text">Name:</legend>
                    <input type="text" id="user-name" placeholder="*Full Name" style="border:none">
                    </fieldset>
                    
                </div>
                </form>
                
                <div class='phone-number'>
                    <fieldset><legend class="leg-text">*Email:</legend><input type="text" id="email" class="input-number" placeholder="*Email Address"></fieldset>
                    
                </div>
            </div>

            <div class="button-div">
                <button class="button" onclick="register_user()">SIGN UP</button>
            </div>
           
            <p>By signing up you agree to our <a href="" style="text-decoration: none; color: black;"><b> Terms & Conditions</b> </a> </p>
        </div>
    </div>


    `;

    
    modal_div.append(modal_content_div);
    container.append(modal_div)

    modal_div.style.display = 'block';

   
    
    modal_div.append(modal_content_div);
    container.append(modal_div);
    close_login_box();
}



function category(el){
    let cat = el.children[2];
   var  diff=cat.children[0].textContent;
    var name = diff
    // makerequest(diff);
    //export default cat1;
    // console.log(name)
    fun2(name);
    // makerequest(diff);
    // console.log(diff)
}