import nodemailer from 'nodemailer';
import { mailConfig } from '../config/mailConfig.js';
import { contactEmailTemplate } from '../templates/contactEmail.js';

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.auth.user,
        pass: mailConfig.auth.pass,
      },
    });
  }

  async sendContactEmail(contactData) {
    const html = contactEmailTemplate(contactData);
    const mailOptions = {
      from: mailConfig.from,
      to: mailConfig.to,
      subject: `New Contact Submission: ${contactData.subject || 'No Subject'}`,
      html: html,
      replyTo: contactData.email,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}

export default new MailService();
