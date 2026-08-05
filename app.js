let sun1 = document.getElementById("sun");
let moon1 = document.getElementById("moon");

moon1.style.display = "none";

sun1.addEventListener("click", function () {
    sun1.style.display = "none";
    moon1.style.display = "inline-block";
    document.body.style.backgroundColor = "black";
    document.body.classList.add("text-white");
    document.getElementById("colorchng").style.background =
        "linear-gradient(to right, #8C5607 0%, #5C340D 50%, #8E571F 100%)";
    document.getElementById("textcolor").style.color = "white";
    document.getElementById("project1").style.background = "#18181B";
    document.getElementById("project2").style.background = "#18181B";
    document.getElementById("project3").style.background = "#18181B";
    document.getElementById("project4").style.background = "#18181B";
    document.getElementById("project5").style.background = "#18181B";
    document.getElementById("project6").style.background = "#18181B";
    document.getElementById("name1").style.color = "white";
    document.getElementById("name2").style.color = "white";
    document.getElementById("name3").style.color = "white";
    document.getElementById("name4").style.color = "white";
    document.getElementById("name5").style.color = "white";
    document.getElementById("name6").style.color = "white";
    document.getElementById("form1").style.background = "purple";
    document.getElementById("form2").style.color = "white";
    document.getElementById("form3").style.color = "white";
    document.getElementById("form4").style.color = "white";
    document.getElementById("form5").style.color = "white";
    document.getElementById("form6").style.color = "white";
    document.getElementById("name").style.background = "rgba(0, 0, 0, 0.4)";
    document.getElementById("email").style.background = "rgba(0, 0, 0, 0.4)";
    document.getElementById("message").style.background = "rgba(0, 0, 0, 0.4)";
    document.getElementById("form7").style.background = "purple";

});

moon1.addEventListener("click", function () {
    moon1.style.display = "none";
    sun1.style.display = "inline-block";
    document.body.style.backgroundColor = "white";
    document.body.classList.remove("text-white");
    document.getElementById("colorchng").style.background =
        "linear-gradient(980deg, #FEDDA0 0%, #F9F7DB 45%, #F9F7DB 70%, #F7DA70 100%)";
    document.getElementById("textcolor").style.color = "gray";
    document.getElementById("project1").style.background = "#F3F4F6";
    document.getElementById("project2").style.background = "#F3F4F6";
    document.getElementById("project3").style.background = "#F3F4F6";
    document.getElementById("project4").style.background = "#F3F4F6";
    document.getElementById("project5").style.background = "#F3F4F6";
    document.getElementById("project6").style.background = "#F3F4F6";
    document.getElementById("name1").style.color = "black";
    document.getElementById("name2").style.color = "black";
    document.getElementById("name3").style.color = "black";
    document.getElementById("name4").style.color = "black";
    document.getElementById("name5").style.color = "black";
    document.getElementById("name6").style.color = "black";
    document.getElementById("form1").style.background =
        "linear-gradient(135deg, #F8CEED 0%, #EFDFFF 45%, #EFDFFF 70%, #DDDDFF 100%)";
    document.getElementById("form2").style.color = "black";
    document.getElementById("form3").style.color = "black";
    document.getElementById("form4").style.color = "black";
    document.getElementById("form5").style.color = "black";
    document.getElementById("form6").style.color = "black";
    document.getElementById("name").style.background = "white";
    document.getElementById("email").style.background = "white";
    document.getElementById("message").style.background = "white";
    document.getElementById("form7").style.background = "purple";

})

let name1 = document.getElementById("name");
let email1 = document.getElementById("email");
let message1 = document.getElementById("message");
let submit = document.getElementById("form1");
submit.addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.setItem("name", name1.value);
    localStorage.setItem("email", email1.value);
    localStorage.setItem("message", message1.value);
    document.getElementById("submitted").innerHTML = "Submit successfully!";
    alert("Form submitted successfully!");
    console.log("form submitted successfully!");

    submit.reset();
    
})