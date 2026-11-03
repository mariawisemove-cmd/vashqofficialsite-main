
/* =====================================================
   VASHQ FEATURE SCROLL REVEAL SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const featureSections = document.querySelectorAll(
        ".vashq-feature-row"
    );

    // Check browser support
    if (!("IntersectionObserver" in window)) {

        featureSections.forEach(section => {
            section.classList.add("is-visible");
        });

        return;
    }

    const featureObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                const section = entry.target;

                if (entry.isIntersecting) {

                    // Start animation when section enters viewport
                    section.classList.add("is-visible");

                } else {

                    // Reset animation when section leaves viewport
                    // Animation plays again when user scrolls back

                    section.classList.remove("is-visible");

                }

            });

        },

        {
            root: null,
            threshold: 0.20,
            rootMargin: "0px 0px -5% 0px"
        }

    );

    // Observe all 15 feature sections

    featureSections.forEach(function (section) {

        featureObserver.observe(section);

    });

});
