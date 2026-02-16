import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).allow('', null),
  firstName: Joi.string().min(2).max(50).allow('', null),
  lastName: Joi.string().min(2).max(50).allow('', null),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required'
  }),
  phone: Joi.string().pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).max(20).allow('', null).messages({
    'string.pattern.base': 'Please provide a valid phone number'
  }),
  subject: Joi.string().min(3).max(200).allow('', null),
  company: Joi.string().min(2).max(200).allow('', null),
  serviceInterest: Joi.string().max(200).allow('', null),
  platformType: Joi.string().max(200).allow('', null),
  budget: Joi.string().max(50).allow('', null),
  message: Joi.string().min(10).max(5000).required().messages({
    'string.min': 'Message must be at least 10 characters long',
    'any.required': 'Message is required'
  }),
  nda: Joi.boolean().allow(null),
  formType: Joi.string().required(),
});
