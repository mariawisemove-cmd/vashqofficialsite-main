/* =========================================
   VASHQ SCROLL REVEAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".vashq-why-heading, " +
        ".vashq-why-item, " +
        ".vashq-our-team > h2, " +
        ".vashq-team-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                entry.target.classList.remove("show");

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

});