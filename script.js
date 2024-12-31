document.getElementById("connectBtn").addEventListener("click", function () {
  alert("Thank you for your interest! Let's connect!");
});

// Accordion toggle behavior
document.querySelectorAll(".accordion").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Toggle visibility
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
