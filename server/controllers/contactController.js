import contactRepository from '../repositories/contactRepository.js';
import mailService from '../services/mailService.js';

class ContactController {
  async submitForm(req, res) {
    try {
      const contactData = req.body;

      // Save to repository (for future admin panel)
      const savedSubmission = await contactRepository.save(contactData);

      // Send email
      await mailService.sendContactEmail(contactData);

      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!',
        data: savedSubmission
      });
    } catch (error) {
      console.error('Controller Error:', error);
      res.status(500).json({
        success: false,
        message: 'There was an error processing your request. Please try again later.'
      });
    }
  }
}

export default new ContactController();
