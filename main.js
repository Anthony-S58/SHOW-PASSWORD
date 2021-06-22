// clic  pour afficher et cacher le mdp
const input = document.getElementById("input") ;
document.getElementById('checkbox').addEventListener('click',
function() {
    
 let box = document.getElementById('display');

    if (this.checked) {

        input.setAttribute("type", "text");
        box.innerHTML = "Hide";


    }   

    else {

        input.setAttribute("type", "password");
        box.innerHTML = "Show";

    }

})

// maintien du clic pour afficher ou cacher le mdp

// const input = document.getElementById("input") ;
// document.getElementById('display').addEventListener('mousedown',
// function() {
    
//  let box = document.getElementById('display');

   

//         input.setAttribute("type", "text");
//         box.innerHTML = "Hide";

// })

// document.getElementById('display').addEventListener('mouseup',
// function() {
    
//  let box = document.getElementById('display');

   

//         input.setAttribute("type", "password");
//         box.innerHTML = "Show";

// })




