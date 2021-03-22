const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled-nav", window.scrollY > 250);
});

const date = new Date();
const year = date.getFullYear();
document.querySelector(".date").innerHTML= year;

const job = document.querySelector(".change-text");

job_list = [
  "Web Developer",
  "Web Designer",
  "UI/UX Developer",
  "Frontend Developer",
  "Student",
];
a = 0;
setInterval(() => {
  job.innerHTML = job_list[a];
  a++;
  console.log(a);
  if (a >= job_list.length) {
    a = 0;
  }
}, 1000);
