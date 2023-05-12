let layerBeforePeper = document.getElementsByClassName("layerBeforePeper")[0]
let paper = document.getElementsByClassName("paper")[0]
let PERINFO = document.getElementsByClassName("PER-INFO")[0]
let projects = document.getElementsByClassName("projects")[0]
let SKILLS = document.getElementsByClassName("SKILLS")[0]
let EXPERIENCE = document.getElementsByClassName("EXPERIENCE")[0]
let EDUCATION = document.getElementsByClassName("EDUCATION")[0]
let CONTACT = document.getElementsByClassName("CONTACT")[0]
let submit = document.getElementById("submit")


const clickeQ = (theQ) => {
    paper.style.display = "block";
    layerBeforePeper.style.backgroundColor = "#272727bd"
    switch (theQ) {
        case "PER-INFO":
            PERINFO.style.visibility = "visible";
            PERINFO.style.display = "flex";
            break;
        case "PROJECTS":
            projects.style.visibility = "visible";
            projects.style.display = "flex";
            break;
        case "SKILLS":
            SKILLS.style.visibility = "visible";
            SKILLS.style.display = "flex";
            break;
        case "EXPERIENCE":
            EXPERIENCE.style.visibility = "visible";
            EXPERIENCE.style.display = "flex";
            break;
        case "EDUCATION":
            EDUCATION.style.visibility = "visible";
            EDUCATION.style.display = "flex";
            break;
        case "CONTACT":
            CONTACT.style.visibility = "visible";
            CONTACT.style.display = "flex";
            break;

        default:
            null
            break;
    }

}
const closePaper = () => {
    paper.style.display = "none";
    layerBeforePeper.style.backgroundColor = "transparent"
    PERINFO.style.visibility = "hidden";
    PERINFO.style.display = "none";
    projects.style.visibility = "hidden";
    projects.style.display = "none";
    SKILLS.style.visibility = "hidden";
    SKILLS.style.display = "none";
    EXPERIENCE.style.visibility = "hidden";
    EXPERIENCE.style.display = "none";
    EDUCATION.style.visibility = "hidden";
    EDUCATION.style.display = "none";
    CONTACT.style.visibility = "hidden";
    CONTACT.style.display = "none";
}


// send form contact 

submit.onclick = function () {

    // valedation 
    var message = document.getElementById('textarea-message').value;
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    if (message == "" || email == "" || name == "") {
        alert(" The fields are empty!");
        return false;
    } else {
        var url = "https://wa.me/+963930722790?text="
            + "My Name is: " + name + "%0a"
            + "My Email is : " + email + "%0a"
            + "Message : " + message + "%0a";
        window.open(url, '_blank').focus();
    }


}



