let cart = [];

function addToCart(serviceName, price) {
    const item = { name: serviceName, price: price };
    cart.push(item);
    alert(`${serviceName} has been added to your cart.`);
    console.log(cart);
}

function bookService(serviceName, price) {
    const selectedDate = prompt(`Please enter your preferred date and time for ${serviceName}:`);
    if (selectedDate) {
        alert(`Your ${serviceName} is booked for ${selectedDate}.`);
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}. We will get back to you soon!`);
            form.reset();
        });
    }
});
