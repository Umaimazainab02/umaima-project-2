let sun1 = document.getElementById("sun");
let moon1 = document.getElementById("moon");
moon1.style.display = "none";

sun1.addEventListener("click", function () {
    sun1.style.display = "none";
    moon1.style.display = "inline-block";
    document.body.classList.remove("from-emerald-50", "via-white", "to-teal-50");
    document.body.classList.add("bg-gradient-to-b", "from-zinc-900", "via-black", "to-zinc-900", "text-white");

    document.body.classList.add("text-white");

    document.getElementById("project1").style.background = "#18181B";
    document.getElementById("project2").style.background = "#18181B";
    document.getElementById("project3").style.background = "#18181B";
    document.getElementById("project4").style.background = "#18181B";
    document.getElementById("project5").style.background = "#18181B";
    document.getElementById("project6").style.background = "#18181B";

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
    document.body.style.backgroundColor = "";
    document.body.classList.remove("from-zinc-900", "via-black", "to-zinc-900", "text-white");
    document.body.classList.add("bg-gradient-to-b", "from-emerald-50", "via-white", "to-teal-50");

    starfield.classList.add("hidden");

    document.getElementById("project1").style.background = "#F3F4F6";
    document.getElementById("project2").style.background = "#F3F4F6";
    document.getElementById("project3").style.background = "#F3F4F6";
    document.getElementById("project4").style.background = "#F3F4F6";
    document.getElementById("project5").style.background = "#F3F4F6";
    document.getElementById("project6").style.background = "#F3F4F6";

    document.getElementById("form2").style.color = "black";
    document.getElementById("form3").style.color = "black";
    document.getElementById("form4").style.color = "black";
    document.getElementById("form5").style.color = "black";
    document.getElementById("form6").style.color = "black";
    document.getElementById("name").style.background = "white";
    document.getElementById("email").style.background = "white";
    document.getElementById("message").style.background = "white";
    document.getElementById("form7").style.background = "purple";
});

// let name1 = document.getElementById("name");
// let email1 = document.getElementById("email");
// let message1 = document.getElementById("message");
// let submit = document.getElementById("form1");
// submit.addEventListener("submit", function (e) {
//     e.preventDefault();
//     localStorage.setItem("name", name1.value);
//     localStorage.setItem("email", email1.value);
//     localStorage.setItem("message", message1.value);
//     document.getElementById("submitted").innerHTML = "Submit successfully!";
//     alert("Form submitted successfully!");
//     console.log("form submitted successfully!");

//     submit.reset();

// })














const hireForm = document.getElementById("hire");
const submitted = document.getElementById("submitted");

hireForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(hireForm);
    formData.append("access_key", "196bd2f6-60cb-467d-813b-cb44fb5e847f");
    submitted.textContent = "Sending...";
    submitted.classList.remove("text-red-500");
    submitted.classList.add("text-gray-600");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            submitted.textContent = "Message sent successfully! ✅";
            submitted.classList.remove("text-gray-600");
            submitted.classList.add("text-green-600");
            hireForm.reset();
        } else {
            submitted.textContent = "Something went wrong. Please try again.";
            submitted.classList.add("text-red-500");
        }
    } catch (error) {
        submitted.textContent = "Error sending message. Check your connection.";
        submitted.classList.add("text-red-500");
    }
});






const typingText = document.getElementById("typing-text");
const words = ["< Frontend Developer />", "< React Learner />", "< UI/UX Designer />"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


const testimonials = [
    { text: "Great work ethic and creative designs!", author: "— Sir Ahmed, Instructor" },
    { text: "Delivered the project on time with clean code.", author: "— Client A" },
    { text: "Very responsive and detail-oriented developer.", author: "— Client B" }
];
let testIndex = 0;
const testText = document.getElementById("testimonial-text");
const testAuthor = document.getElementById("testimonial-author");

setInterval(() => {
    testIndex = (testIndex + 1) % testimonials.length;
    document.getElementById("testimonial-box").style.opacity = 0;
    setTimeout(() => {
        testText.textContent = `"${testimonials[testIndex].text}"`;
        testAuthor.textContent = testimonials[testIndex].author;
        document.getElementById("testimonial-box").style.opacity = 1;
    }, 400);
}, 4000);


const fadeElements = document.querySelectorAll(".fade-left, .fade-right");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

fadeElements.forEach(el => fadeObserver.observe(el));