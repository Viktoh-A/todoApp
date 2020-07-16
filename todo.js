// Element Selector Expressions
    let adder = document.querySelector("#adder");
    let button = document.querySelector("#btn");
    let ul = document.querySelector("#ul");
    let btndel = document.querySelector("#btndel");
    let btnedit = document.querySelector("#btnedit");

// Array of Items
    let items = [];


// Function to Remove Done Task
    const del = (e) => {
       event.srcElement.parentElement.style.display = "none"  
    }
// Function to Edit Task
    const editer = (e) => {
       console.log(event.srcElement.parentElement.firstChild)
       event.srcElement.parentElement.style.display = "none" 
       adder.value = event.srcElement.parentElement.firstChild.textContent;
    }
// Function to Mark-out Finished Task
    const done = (e) => {
       event.srcElement.parentElement.style.textDecoration = "line-through red";
    }

// Event to Add Item to List
    button.addEventListener("click",(g)=>{
        console.log("opi")
        g.preventDefault();
        if(adder.value != ""){

        // let li = document.createElement("li");
        // let t = document.createTextNode(adder.value)
        // li.appendChild(t)
        // ul.appendChild(li)

        items.push(adder.value);
        items.reverse();
        console.log(items)
        ul.innerHTML += "<li>"+items[0]+"<span id='btndel'onclick='del()' >&#x2718</span><span id='btnedit' onclick='editer()'>&#x270E</span><span id='btndone' onclick='done()'>&#x2714</span></li>"
        adder.value = ""
        }
    })
