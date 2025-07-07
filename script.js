const presentationBtn = document.getElementById("presentation-btn");
const skillsBtn = document.getElementById("skills-btn");
const realisationsBtn = document.getElementById("realisations-btn");
const contactBtn = document.getElementById("contact-btn");

const presentation = document.getElementById("presentation");
const skills = document.getElementById("skillset");
const realisations = document.getElementById("realisations-web");
const contact = document.getElementById("footer");

function scrollToWithOffset(element, offset = 100) {
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

presentationBtn.addEventListener("click", () => {
    scrollToWithOffset(presentation, 100);
});
skillsBtn.addEventListener("click", () => {
    scrollToWithOffset(skills, 100);
});
realisationsBtn.addEventListener("click", () => {
    scrollToWithOffset(realisations, 100);
});
contactBtn.addEventListener("click", () => {
    scrollToWithOffset(contact, 100);
});