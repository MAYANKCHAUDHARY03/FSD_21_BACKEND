import { Request, Response } from 'express';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long')
});

export const submitContact = (req: Request, res: Response) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    
    // In a real application, you'd send an email here using a service like Resend or Nodemailer
    // contactService.sendEmail(validatedData);
    
    // Log or handle the contact form submission as needed in production

    res.json({
      success: true,
      message: 'Thank you for your message. I will get back to you soon!'
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: (error as any).errors
      });
      return;
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to process contact submission'
    });
  }
};
