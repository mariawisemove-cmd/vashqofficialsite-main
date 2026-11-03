
/* =====================================================
   VASHQ FEATURE SECTION SCROLL ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const featureRows = document.querySelectorAll(
        ".vashq-feature-row"
    );

    // Check browser support
    if ("IntersectionObserver" in window) {

        const featureObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        // Activate feature animation
                        entry.target.classList.add("is-visible");

                        // Stop observing after animation
                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        // Observe all feature sections
        featureRows.forEach((row) => {
            featureObserver.observe(row);
        });

    } else {

        // Fallback for unsupported browsers
        featureRows.forEach((row) => {
            row.classList.add("is-visible");
        });

    }

});


/* =====================================================
   VASHQ INTERACTIVE MOUSE FOLLOWING GRID EFFECT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(
        ".vashq-feature-details"
    );

    if (!section) return;

    // Enable only on mouse-based devices
    if (window.matchMedia("(hover: none)").matches) {
        return;
    }

    let animationFrame = null;

    /* ================================================
       MOUSE MOVE
    ================================================ */

    section.addEventListener("mousemove", (event) => {

        // Avoid unnecessary animation frames
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {

            // Get section position
            const rect = section.getBoundingClientRect();

            // Calculate cursor position inside section
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Update horizontal cursor position
            section.style.setProperty(
                "--vfd-mouse-x",
                `${mouseX}px`
            );

            // Update vertical cursor position
            section.style.setProperty(
                "--vfd-mouse-y",
                `${mouseY}px`
            );

            // Activate local grid and glow
            section.classList.add(
                "vfd-mouse-active"
            );

            animationFrame = null;

        });

    });


    /* ================================================
       MOUSE LEAVE
    ================================================ */

    section.addEventListener("mouseleave", () => {

        // Cancel pending animation
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }

        // Hide grid and glow
        section.classList.remove(
            "vfd-mouse-active"
        );

    });

});
