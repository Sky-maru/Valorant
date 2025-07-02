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

