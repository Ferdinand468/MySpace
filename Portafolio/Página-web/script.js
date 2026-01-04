const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
import emailjs from 'emailjs-com';


let currentIndex = 0;

function showItem(index) {
    carouselInner.style.transform = `translateX(${-index * 100}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Validación para el formulario de contacto
emailjs.init("WrDcjgk7D9Cz8h1dD");

// Asumimos que hay un formulario con id="contact-form" en tu HTML
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío tradicional del formulario

    // Obtén los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message'); // Mensaje de respuesta en el formulario

    // Validación básica
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "" || !emailPattern.test(email) || message.length < 10) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Configura los parámetros para la plantilla de EmailJS
    const templateParams = {
        from_name: name,
        to_name: 'Christian',    // Puedes poner tu propio nombre o el destinatario del correo
        message: message,
        reply_to: email          // Correo del remitente
    };

    // Enviar el formulario usando EmailJS
    emailjs.send("service_ym4ulc5", "template_gno4pc8", templateParams)
    .then(response => {
        console.log("Mensaje enviado con éxito!", response.status, response.text);
        formMessage.classList.remove('hidden'); // Muestra el mensaje de éxito
        formMessage.textContent = `Gracias por contactarme, ${name}. Pronto me pondré en contacto contigo.`;
        document.getElementById('contact-form').reset(); // Limpia el formulario
    })
    .catch(error => {
        console.error("Error al enviar el mensaje:", error);
        formMessage.classList.remove('hidden'); // Muestra el mensaje de error
        formMessage.textContent = "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
    });
});
