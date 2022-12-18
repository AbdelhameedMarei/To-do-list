// Set Items
const content = document.getElementById("task-content");
const input = document.getElementById("task-input");
const btn = document.getElementById("add-btn");
const form = document.querySelector("form");



//Add event submit on form
form.addEventListener("submit", function(e) {

    e.preventDefault(); //To prevent submit button to send any data

    //Create element content the task
    const task = `
    <div class="task">
        <i class="fa-solid fa-star"></i>
        <p>${input.value}</p>
        <i class="fa-regular fa-trash-can"></i>
    </div>`

    if ( input.value != "" ){
        //Add Created Element to content
        content.innerHTML += task;
        //Empety value after submit
        input.value = "";
    }
    

})


content.addEventListener("click", (e) => { 

    switch (e.target.className) {

        case "fa-regular fa-trash-can":
            e.target.parentElement.remove();
            break;
    
        case "fa-solid fa-star":
            e.target.classList.add("active");
            content.prepend(e.target.parentElement);
            break;
    
        case "fa-solid fa-star active":
            e.target.classList.remove("active");
            break;

    }

})


// content.addEventListener("click", (e) => {

//     //delete element
//     if( e.target.className == "fa-regular fa-trash-can" ){

//         e.target.parentElement.remove();
    
//     //Add favorite task up to all element and add active class
//     } else if( e.target.className == "fa-solid fa-star" ) {
        
//         e.target.classList.add("active");
        
//         content.prepend(e.target.parentElement);

//     //Remove active class from start icon
//     } else if ( e.target.className == "fa-solid fa-star active" ) {

//         e.target.classList.remove("active");

//     }

// })