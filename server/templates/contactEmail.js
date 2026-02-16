export const contactEmailTemplate = (data) => {
  const { 
    name, firstName, lastName, email, phone, subject, 
    message, budget, nda, formType, company, serviceInterest, platformType 
  } = data;

  const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background-color: #001fcc; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #001fcc; }
        .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
        .value { background-color: #f4f7ff; padding: 10px; border-radius: 5px; margin-top: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Form Type: ${formType || 'General'}</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${fullName || 'N/A'}</div>
          </div>
          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value">${email}</div>
          </div>
          ${company ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company}</div>
          </div>` : ''}
          ${phone ? `
          <div class="field">
            <div class="label">Phone Number:</div>
            <div class="value">${phone}</div>
          </div>` : ''}
          ${subject ? `
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${subject}</div>
          </div>` : ''}
          ${serviceInterest ? `
          <div class="field">
            <div class="label">Service Interest:</div>
            <div class="value">${serviceInterest}</div>
          </div>` : ''}
          ${platformType ? `
          <div class="field">
            <div class="label">Platform Type:</div>
            <div class="value">${platformType}</div>
          </div>` : ''}
          ${budget ? `
          <div class="field">
            <div class="label">Project Budget:</div>
            <div class="value">${budget}</div>
          </div>` : ''}
          ${nda !== undefined ? `
          <div class="field">
            <div class="label">NDA Requested:</div>
            <div class="value">${nda ? 'Yes' : 'No'}</div>
          </div>` : ''}
          <div class="field">
            <div class="label">Message:</div>
            <div class="value" style="white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the MindManthan contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
