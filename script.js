
/* SET THE STYLE ON THE RADIO BUTTON SELECTION 
    PULL THE STYLE VARIABLE FROM SESSION STORAGE*/

function applyStyle(style = sessionStorage.getItem("chosenStyle")) {

    const currentStyle = document.getElementById('status');

    if (style === "Dark") {
        let target = document.querySelectorAll(".normal");
        for (let i = 0; i < target.length; i++) {
            target[i].classList.remove("normal");
            target[i].classList.add("dark");

            document.querySelector("#styleChoice1").checked = false;
            document.querySelector("#styleChoice2").checked = true;
            currentStyle.innerText = `The Current Style is ${style}`;

        }
    }
    else {
        let target = document.querySelectorAll(".dark");
        for (let i = 0; i < target.length; i++) {
            target[i].classList.remove("dark");
            target[i].classList.add("normal");

            document.querySelector("#styleChoice1").checked = true;
            document.querySelector("#styleChoice2").checked = false;
            currentStyle.innerText = `The Current Style is ${style}`;
        }
    }
}

/* To grab the radio buttons */
function getUserStyleSetting(){
    myRadioSett = document.querySelectorAll('input[name="set-style"]');
    
    let i, max = myRadioSett.length;

    for(i=0; i < max; i++){
        myRadioSett[i].onclick = function() {
            let style = this.value[0].toUpperCase() + this.value.slice(1);
            /* SEND STYLE INTO SESSION STORAGE */
            sessionStorage.setItem("chosenStyle", style)
            applyStyle();
        }
    }
}

/* CHANGE THE INFO FROM THE FORM */
function updateInfo(name,email) {
    document.getElementById("myName").innerText = `My real name is ${name}`;
    document.getElementById("myEmail").innerText = `My Email is ${email}`;
}

/* CHANGE THE COLOR FROM THE FORM */
function updateColor(col) {
    document.getElementById("myName").style.color = col;
    document.getElementById("myEmail").style.color = col;
    document.querySelector(".logo").style.color = col;
}

/* HANDLE FORM FUNCTION */
function handleForm(){
    document.querySelector("#myForm").onsubmit = function(e){
        let name = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let color = document.getElementById("favColour").value;

        updateInfo(name,email);
        updateColor(color);
        e.preventDefault();
    }
}

/* GET THE BALL ROLLING */
window.onload = function() {
    applyStyle();
    getUserStyleSetting();
    handleForm();
}
