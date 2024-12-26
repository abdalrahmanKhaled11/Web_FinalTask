document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Greeting Function
    const greetings = [
        "Welcome to Snak Restaurant!",
        "Taste the Difference!",
        "Culinary Adventures Await!",
        "Fresh Flavors, Happy Moments!"
    ];
    const greetingElement = document.getElementById('dynamic-greeting');

    function changeGreeting() {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingElement.textContent = randomGreeting;
    }

    // Change greeting every 4 seconds
    if (greetingElement) {
        setInterval(changeGreeting,2000);
    }

    // Menu Page Interactions
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        const priceElement = card.querySelector('.price');
        const buyButton = card.querySelector('.buy-btn');
        const mealImage = card.querySelector('.meal-image');

        // Price hover effect
        priceElement.addEventListener('mouseover', function() {
            this.style.fontSize = '1.2em';
        });

        priceElement.addEventListener('mouseout', function() {
            this.style.fontSize = '1em';
        });

        // Buy button image swap
        if (buyButton && mealImage) {
            buyButton.addEventListener('click', function() {
                const originalSrc = mealImage.src;
                mealImage.src = 'selected-meal.jpg'; // Replace with your selected meal image

                // Optional: Revert back after a few seconds
                setTimeout(() => {
                    mealImage.src = originalSrc;
                }, 2000);
            });
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate inputs
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                    
                    // Optional: Uppercase transformation
                    if (input.type !== 'email' && input.type !== 'textarea') {
                        input.value = input.value.toUpperCase();
                        input.style.color = 'blue';
                    }
                }
            });

            // If form is valid
            if (isValid) {
                // Create submission notification
                const notificationDiv = document.createElement('div');
                notificationDiv.classList.add('alert', 'alert-success', 'mt-3');
                notificationDiv.textContent = 'Form submitted successfully!';
                
                contactForm.appendChild(notificationDiv);
                contactForm.reset();
            }
        });
    }
});