// Cart functionality
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
        
        // Visual feedback
        const originalText = button.textContent;
        button.textContent = "Added!";
        button.style.backgroundColor = "#2ecc71";
        button.style.color = "white";
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "#1a1a1a";
        }, 1000);
    });
});
