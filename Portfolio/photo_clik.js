// get element
let port_pict = document.getElementById("personal_pic");
let text_pict = document.getElementById("personal_text");
//console.log(port_pict)

function hide_display_text(event){
    
    if(text_pict.style.display === "block"){
        console.log(text_pict.style.display)
        text_pict.style.display = "none";
    }else{
        text_pict.style.display = "block";  
    }
    
}

//get event listener
port_pict.addEventListener('click', hide_display_text)
