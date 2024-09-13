
// work experience field function

function addNewWEField(){

    let newNode = document.createElement("textarea");
    // newNode.classlist.add("form-control");
    // newNode.classlist.add("weField");
    newNode.className = "form-control weField";
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter your work experience');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

// academic qualification field function

function addNewAQField(){

    let newNode = document.createElement("textarea");
    // newNode.classlist.add("form-control");
    // newNode.classlist.add("weField");
    newNode.className = "form-control eqField";
    newNode.classList.add("mt-2");
    
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter your academic qualification');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generate cv button function

function generateCV(){

    // name field
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

     // email field
    let emailField = document.getElementById("emailField").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML = emailField;

    // phone field
    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    // address field
    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    // linkedin field
    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");  
    linkedT.innerHTML = linkedField;

    // github field
    let githubField = document.getElementById("githubField").value;
    let githubT = document.getElementById("githubT");
    githubT.innerHTML = githubField;

    //instagram field
    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instaField;

    // objective field
    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    // work experience fields
    let weFields = document.getElementsByClassName("weField");
    let str = "" ;
    for(let e of weFields) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    // academic qualification fields
    let aqFields = document.getElementsByClassName("eqField");
    let str1 = "" ;
    for(let e of aqFields) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    // Display form
    
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

    //image input field
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //display image in template
    reader.onloadend = function(){
        document.getElementById("imgTemplate").src = reader.result;
    };
}

//print cv button function

function printCV(){
    window.print();
}