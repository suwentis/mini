
function replaceName() {
    let name = prompt("Siapakah Nama Anda?","");
    document.getElementById("name").innerHTML = name
}

replaceName();

var showIndex = 1

setInterval(function()
{
    plusIndex(1)
},2000 )


function plusIndex(index) {
    showImage(showIndex += index )
}


function showImage(index) {
    var ImgList = document.getElementsByClassName("sliders")
    var i;
    if (index > ImgList.length) {showIndex = 1}
    if (index < 1) {showIndex = ImgList.length}

    for (i=0; i < ImgList.length; i++) {
        ImgList[i].style.display = "none"
    }
    ImgList[showIndex -1].style.display = "block"
}   


function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;   
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == ""|| birthDate == ""|| gender == "" || messages =="") {
        alert("Tidak Boleh Kosong");
        return false;
    }

    setSenderUI (name, birthDate, gender, messages);

        return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    

}