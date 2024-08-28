document.addEventListener('DOMContentLoaded', function () {
    // Scroll to section smoothly when a button is clicked
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll('.learn-more-button');
    
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
    
                if (targetSection.style.display === "none" || !targetSection.style.display) {
                    // Hide all other sections first
                    document.querySelectorAll('.product-details').forEach(section => {
                        section.style.display = "none";
                    });
    
                    // Show the selected section
                    targetSection.style.display = "block";
                } else {
                    targetSection.style.display = "none";
                }
            });
        });
    });
    
    // Example: Simple cart functionality (requires more detailed implementation)
});
