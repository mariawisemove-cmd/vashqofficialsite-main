
/* ==========================================
   VASHQ - WATCH THEIR STORY
   SCROLL REVEAL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const storyCards = document.querySelectorAll(
        ".vashq-story-card"
    );

    // Check reduced motion preference
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Show all cards immediately if reduced motion is enabled
    if (reduceMotion) {

        storyCards.forEach(function (card) {

            card.classList.add("story-visible");

        });

        return;

    }


    // Check Intersection Observer support
    if ("IntersectionObserver" in window) {

        const storyObserver = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("story-visible");

                        // Stop observing once visible
                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );


        // Observe all story cards
        storyCards.forEach(function (card) {

            storyObserver.observe(card);

        });

    } else {

        // Fallback for older browsers
        storyCards.forEach(function (card) {

            card.classList.add("story-visible");

        });

    }

});
