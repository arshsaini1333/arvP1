const slider = document.getElementById("slider");

const images = [
    "url('./images/bg1.jpg')",
    "url('./images/bg2.jpg')",
    "url('./images/bg3.jpeg')"
];

let current = 0;

function changeBackground() {
    slider.style.backgroundImage = images[current];
    current = (current + 1) % images.length;
}

changeBackground(); // Initial call
setInterval(changeBackground, 3000);



const scriptURL = 'https://script.google.com/macros/s/AKfycby9S-OxukfHx1YN8E1MgfDZod1J4hx7lhRwtewhxElo9cuDI8BPXvv3JQe5ank1XETy/exec';

const form = document.getElementById('myForm');
const form2 = document.getElementById('cForm');
const message = document.getElementById('message');
const cmessage = document.getElementById('cmessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => {
            message.textContent = "Form submitted successfully!";
            form.reset(); // clears all fields
        })
        .catch(error => {
            message.textContent = "Error submitting the form. Try again.";
            message.style.color = "red";
        });
});

form2.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('cname').value,
        email: document.getElementById('cemail').value,
        phone: document.getElementById('cphone').value,
    };

    fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => {
            cmessage.textContent = "Form submitted successfully!";
            form.reset(); // clears all fields
        })
        .catch(error => {
            cmessage.textContent = "Error submitting the form. Try again.";
            cmessage.style.color = "red";
        });
});