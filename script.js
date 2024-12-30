document.addEventListener("DOMContentLoaded", function () {
    // Toggle content in Blog section
    const toggleContent = (id) => {
        const content = document.getElementById(id);
        content.style.display = content.style.display === "none" ? "block" : "none";
    };

    // Attach event listeners to blog links
    const blogLinks = document.querySelectorAll(".blog-list a");
    blogLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1); // Remove '#' from href
            toggleContent(targetId);
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1); // Remove '#' from href
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // Scroll animations for sections
    const sections = document.querySelectorAll(".section");
    const revealSections = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Initial setup for hidden sections
    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.5s ease-in-out";
    });

    // Attach scroll event listener
    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger on load
});
document.getElementById("backToTop").addEventListener("click", function () {
    if ('scrollTo' in window) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        window.scrollTop = 0; // Fallback dla starszych przeglądarek
    }
});
