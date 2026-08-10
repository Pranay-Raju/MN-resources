const form = document.getElementById('enquiryForm');
const message = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name')?.toString().trim() || 'Not provided';
    const company = formData.get('company')?.toString().trim() || 'Not provided';
    const phone = formData.get('phone')?.toString().trim() || 'Not provided';
    const email = formData.get('email')?.toString().trim() || 'pranay01996@gmail.com';
    const address = formData.get('address')?.toString().trim() || 'Not provided';

    const materialRequirements = [
      ['M Sand (tons)', formData.get('mSandTons')?.toString().trim() || 'Not provided'],
      ['P Sand (tons)', formData.get('pSandTons')?.toString().trim() || 'Not provided'],
      ['C Sand (tons)', formData.get('cSandTons')?.toString().trim() || 'Not provided'],
      ['6mm / 12mm (tons)', formData.get('sixTwelveTons')?.toString().trim() || 'Not provided'],
      ['20mm / 40mm (tons)', formData.get('twentyFortyTons')?.toString().trim() || 'Not provided']
    ];

    const body = [
      `Contact Name: ${name}`,
      `Company Name: ${company}`,
      `Contact Number: ${phone}`,
      `Provided Email: ${email}`,
      `Delivery Address: ${address}`,
      '',
      'Material Requirements:',
      ...materialRequirements.map(([label, value]) => `${label}: ${value}`)
    ].join('%0D%0A');

    const mailtoLink = `mailto:pranay01996@gmail.com?subject=Enquiry%20Lead&body=${body}`;

    window.location.href = mailtoLink;
    message.textContent = 'Your enquiry is being prepared in your email app.';
    form.reset();
  });
}
