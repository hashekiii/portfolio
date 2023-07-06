var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Linking Google Sheets to Contact Form
const scriptURL =
    "https://script.google.com/macros/s/AKfycbxG_J36MEezXJGnxj7Y40amHl5ILCNOo9PDrizyGx3IYhVIosWrc_j6kH5LYM_cVZ7OLQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message was sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 2000);
        })
        .catch((error) => console.error("Error!", error.message));
});
