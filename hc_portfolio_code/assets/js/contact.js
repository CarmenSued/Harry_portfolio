/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID -templateID - #form - publicKey
    emailjs.sendForm('service_4z0bi35', 'template_4be8y9t', '#contact-form', 'JvB95EgL5aeLKbrgC')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';
        
        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset()

    }, () => {
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    });
};

contactForm.addEventListener('submit', sendEmail);


/*   7_8TYvWZ#a$8Dts  */ 