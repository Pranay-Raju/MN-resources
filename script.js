const form = document.getElementById('enquiryForm');
const message = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'Not provided';
    const business = formData.get('business')?.toString().trim() || 'Not provided';
    const phone = formData.get('phone')?.toString().trim() || 'Not provided';
    const email = formData.get('email')?.toString().trim() || 'pranay01996@gmail.com';
    const messageText = formData.get('message')?.toString().trim() || 'No message provided';

    const body = [
      `Contact Name: ${name}`,
      `Business Name: ${business}`,
      `Contact Number: ${phone}`,
      `Provided Email: ${email}`,
      '',
      `Message: ${messageText}`
    ].join('%0D%0A');

    const mailtoLink = `mailto:pranay01996@gmail.com?subject=Enquiry%20Lead&body=${body}`;

    window.location.href = mailtoLink;
    message.textContent = 'Your enquiry is being prepared in your email app.';
    form.reset();
  });
}
