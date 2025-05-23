// Placeholder for JavaScript functionalities
console.log("DJ Superman website script loaded.");

// Example: Smooth scrolling for anchor links (if you add them later)
// Ensure this doesn't conflict with actual page navigation if # is used for placeholder links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         // Check if the link is just a placeholder or a real anchor
//         const href = this.getAttribute('href');
//         if (href !== "#" && document.querySelector(href)) {
//             e.preventDefault();
//             document.querySelector(href).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navElement = document.querySelector('nav');

    if (hamburgerButton && navElement) {
        hamburgerButton.addEventListener('click', () => {
            // Toggle the .mobile-nav class on the nav element
            navElement.classList.toggle('mobile-nav');

            // Update aria-expanded attribute
            const isExpanded = navElement.classList.contains('mobile-nav');
            hamburgerButton.setAttribute('aria-expanded', isExpanded);

            // Optional: Change hamburger icon to an X when menu is open
            // This requires more complex CSS or changing the spans inside the button
            // For simplicity, we'll just toggle the class for now.
        });
    } else {
        console.error("Hamburger button or nav element not found.");
    }

    // Smooth scrolling for on-page anchors (if any are added for sections)
    document.querySelectorAll('a[href^="#section-"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
