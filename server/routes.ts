// server/routes.ts 

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from 'nodemailer';

// Utility function to handle newlines
const formatMessage = (text: string) => text.replace(/\n/g, '<br>');

export async function registerRoutes(app: Express): Promise<Server> {
    
    // 1. Access the Environment Variables INSIDE the function, 
    // ensuring dotenv has run in index.ts before these are accessed.
    const PORTFOLIO_OWNER_EMAIL = process.env.OWNER_EMAIL as string; 
    const SENDING_EMAIL_USER = process.env.EMAIL_USER as string; 
    const SENDING_EMAIL_PASS = process.env.EMAIL_PASS as string; 

    // 2. Define the Transporter HERE, using the loaded variables.
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 465, 
        secure: true,
        auth: {
            user: SENDING_EMAIL_USER,
            pass: SENDING_EMAIL_PASS,
        },
    });

    // Contact form submission endpoint
    app.post("/api/contact", async (req, res) => {
        try {
            // 3. Validation and Data Access
            const validatedData = insertContactMessageSchema.parse(req.body);
            const { name, email, subject, message } = validatedData;
            
            // Store the message (using your existing storage logic)
            const contactMessage = await storage.createContactMessage(validatedData);
            
            // 4. --- 📧 Email 1: Send to the Portfolio Owner (You) ---
            const ownerMailOptions = {
                from: `"Contact Form" <${SENDING_EMAIL_USER}>`,
                to: PORTFOLIO_OWNER_EMAIL,
                replyTo: `${name} <${email}>`, 
                subject: `[New Portfolio Contact] ${subject} from ${name}`,
                html: `
                    <p>You have a new message from your portfolio contact form:</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong><br/>${formatMessage(message)}</p>
                `,
            };

            // 5. --- 📧 Email 2: Send Confirmation to the User ---
            const userMailOptions = {
                from: `"Ujjwal Amrit Portfolio" <${SENDING_EMAIL_USER}>`,
                to: email, 
                subject: `✅ Confirmation: We received your message!`,
                html: `
                    <p>Hi ${name},</p>
                    <p>Thank yourself for reaching out! We've successfully received your message and will get back to you as soon as possible.</p>
                    <p>Here is a copy of your submission:</p>
                    <blockquote style="border-left: 3px solid #007bff; padding-left: 15px; margin: 15px 0; background-color: #f7f7f7; padding: 10px;">
                        <strong>Subject:</strong> ${subject}<br/>
                        <strong>Message:</strong> ${formatMessage(message)}
                    </blockquote>
                    <p>Best regards,<br/>Ujjwal Amrit</p>
                `,
            };

            // 6. Send both emails and wait for completion
            await Promise.all([
                transporter.sendMail(ownerMailOptions),
                transporter.sendMail(userMailOptions)
            ]);
            
            // 7. Final Success Response to the frontend (Status 200)
            res.json({ 
                success: true, 
                message: "Message sent successfully! I'll get back to you soon.",
                id: contactMessage.id 
            });

        } catch (error) {
            // Log the error for debugging in the server terminal
            console.error('API Error (Email or Validation Failure):', error); 
            
            if (error instanceof z.ZodError) {
                res.status(400).json({ 
                    success: false, 
                    message: "Invalid form data", 
                    errors: error.errors 
                });
            } else {
                res.status(500).json({ 
                    success: false, 
                    message: "Email sending failed or internal server error. Please check server logs." 
                });
            }
        }
    });

    const httpServer = createServer(app);
    return httpServer;
}