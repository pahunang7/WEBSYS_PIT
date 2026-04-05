document.addEventListener("DOMContentLoaded", () => {
  let userName = prompt("What's your name?");
  if (userName) {
    alert(`Hi, ${userName}! Welcome to my resume!`);
  }
});

const toggleBtn = document.getElementById("toggle-projects-btn");
const moreprojects = document.getElementById("moreprojects");

toggleBtn.addEventListener("click", () => {
  if (moreprojects.style.display === "none") {
    moreprojects.style.display = "block";
    toggleBtn.innerText = "View Less";
  } else {
    moreprojects.style.display = "none";
    toggleBtn.innerText = "View More";
  }
});

const addSkillBtn = document.getElementById("skillbtn");
const skillsList = document.getElementById("skills-list");
let newSkills = $();

addSkillBtn.addEventListener("click", () => {
  let newSkill = prompt("Enter a new skill:");
  if (newSkill) {
    let li = document.createElement("li");
    li.innerText = newSkill;
    skillsList.appendChild(li);
    newSkills = newSkills.add($(li));
    alert(`New skill added: ${newSkill}`);
  }
});

$("#highlight-new-btn").on("click", function () {
  newSkills.addClass("highlight");
});

$("#remove-highlight-btn").on("click", function () {
  newSkills.removeClass("highlight");
});

$(document).ready(function () {
  $("#togglebtn").on("click", function () {
    $("#skills-list").toggle();
  });
});

$(document).ready(function () {
  $("#darkmodebtn").on("click", function () {
    $("body").toggleClass("darkmode");
  });
});
