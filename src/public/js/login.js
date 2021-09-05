// <---- Displaying Login box on click on user icon --->

function show_login(){
    let offer_display_box = document.getElementById('offer-display-box');
    offer_display_box.style.margin = 'auto';
    let login_box = document.getElementById('container-1');
    if(login_box.style.display == "none"){
        login_box.style.display = "block";
    } else{
        login_box.style.display = "none"
    }
}

//<------ Checking user  afer taking input from form ---->

function check_user(phone_number){
    console.log(phone_number)
}