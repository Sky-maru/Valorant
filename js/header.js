let Btn = document.getElementById("header_riot_btn");
let Box = document.getElementById("header_riot_wrap");

// Btn.addEventListener("click", function(){
//     Box.style.display = "block";
// })

// Box.addEventListener("click", function(){
//     Box.style.display = "none";
// })

let a = 1;
Btn.addEventListener("click", function(){

    if(a){
        Box.style.display = "block";
        a--;
    }else{
        Box.style.display = "none";
        a++;
    }
})



let btn2 = document.getElementById("header_w_s_lang_w");
let box2 = document.getElementById("header_w_s_lang_arr");

let A = 1;

btn2.addEventListener("click", function(){
    if(A){
        box2.style.display = "block";
        A--;
    }else{
        box2.style.display = "none";
        A++;
    }
})

box2.addEventListener("click", function(){
    box2.style.display = "none";
})



let btn = document.getElementById("menu_btn");
let box = document.getElementById("header_w_s_m_menu_w");
let esc = document.getElementById("header_w_s_m_menu_esc");

btn.addEventListener("click", function(){
    box.style.display = "block";
})
esc.addEventListener("click", function(){
    box.style.display = "none";
})

let btn3 = document.getElementById("M_Game_info");
let box3 = document.getElementById("M_Game_info_w");

let b = 1;
btn3.addEventListener("click", function(){
    if(b){
        box3.style.display = "block";
        b--;
    }else{
        box3.style.display = "none";
        b++;
    }
})

let btn4 = document.getElementById("M_News");
let box4 = document.getElementById("M_News_w");

let b2 = 1;
btn4.addEventListener("click", function(){
    if(b2){
        box4.style.display = "block";
        b2--;
    }else{
        box4.style.display = "none";
        b2++;
    }
})

let btn5 = document.getElementById("M_Client");
let box5 = document.getElementById("M_Client_w");

let b3 = 1;
btn5.addEventListener("click", function(){
    if(b3){
        box5.style.display = "block";
        b3--;
    }else{
        box5.style.display = "none";
        b3++;
    }
})

let btn6 = document.getElementById("M_Social");
let box6 = document.getElementById("M_Social_w");

let b4 = 1;
btn6.addEventListener("click", function(){
    if(b4){
        box6.style.display = "block";
        b4--;
    }else{
        box6.style.display = "none";
        b4++;
    }
})

