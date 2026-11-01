
/* ==========================================
   VASHQ CIRCUIT TOGGLE
========================================== */

const vashqSection = document.getElementById("vashqCircuit");
const vashqToggle = document.getElementById("vashqToggle");

const vashqStatus = vashqSection.querySelector(".vashq-status");

const vashqPoints = vashqSection.querySelectorAll(
    ".vashq-circuit-point"
);


/* FALSE = DISABLED */

let vashqEnabled = false;


/* DISABLED CONTENT */

const disabledContent = [
    "Billing Confusion",
    "No Job Status Visibility",
    "Manual Report Analysis",
    "No Multi Branch Visibility",
    "Employee Accountability Issues",
    "Customer Dispute Management",
    "No Real-time Business Visibility",
    "No Quality Control"
];


/* ENABLED CONTENT */

const enabledContent = [
    "Fast Vehicle Check-in",
    "Live Job Tracking",
    "Daily Revenue Dashboard",
    "Before & After Vehicle Inspections",
    "Complete Customer & Vehicle History",
    "Digital Invoices & Online Payments",
    "Quality Control Tracking",
    "AI Assistance"
];


/* INITIAL CONTENT */

function updateVashqContent() {

    const content = vashqEnabled
        ? enabledContent
        : disabledContent;

    vashqPoints.forEach((point, index) => {

        const text = point.querySelector(".vashq-point-text");

        text.textContent = content[index];

    });

}


/* TOGGLE FUNCTION */

vashqToggle.addEventListener("click", () => {

    // Change state

    vashqEnabled = !vashqEnabled;


    // Update theme

    vashqSection.classList.toggle(
        "is-enabled",
        vashqEnabled
    );


    // Update status

    vashqStatus.textContent = vashqEnabled
        ? "VASHQ ENABLED"
        : "VASHQ DISABLED";


    // Update accessibility

    vashqToggle.setAttribute(
        "aria-pressed",
        String(vashqEnabled)
    );

    vashqToggle.setAttribute(
        "aria-label",
        vashqEnabled ? "Disable VASHQ" : "Enable VASHQ"
    );


    // Start content transition

    vashqPoints.forEach(point => {
        point.classList.add("is-changing");
    });


    // Change content after fade-out

    setTimeout(() => {

        updateVashqContent();

        vashqPoints.forEach(point => {
            point.classList.remove("is-changing");
        });

    }, 250);

});


/* INITIAL PAGE LOAD */

updateVashqContent();

requestAnimationFrame(() => {

    vashqSection.classList.add("is-loaded");

});
