const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx)=> {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail')
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});
const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Function to remove "active" from all sections and links
function clearActive() {
  navLinks.forEach(link => link.classList.remove("active"));
  sections.forEach(sec => sec.classList.remove("active"));
}

// Click listener for each nav link
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1); // remove '#'
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      clearActive();
      link.classList.add("active");
      targetSection.classList.add("active");
    }
  });
});
