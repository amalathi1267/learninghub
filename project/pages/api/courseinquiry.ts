import type { NextApiRequest, NextApiResponse } from 'next';
import db from '@/lib/db';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("API hit!");

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, course, message } = req.body;

  if (!name || !email || !phone || !course || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // ✅ Step 1: Save to database
    const [result]: any = await db.execute(
      'INSERT INTO coursesinquiries (name, email, phone, course_title, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, course, message]
    );

    const insertId = result.insertId;
    const [rows]: any = await db.execute('SELECT * FROM coursesinquiries WHERE id = ?', [insertId]);
    const enquiry = rows[0];

    // ✅ Step 2: Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'amalathi1267@gmail.com',             // ✅ Your Gmail
        pass: 'erxi ffsx hliw ruvo'                 // ✅ Your Gmail App Password
      },
      debug: true,   // ✅ Show detailed logs (for debugging)
      logger: true
    });

    const mailOptions = {
      from: 'amalathi1267@gmail.com',
      to: 'malathirajas1996@gmail.com',             // ✅ Admin Email to Receive
      subject: 'New Enquiry Received',
      html: `
        <h3>New Course Enquiry</h3>
        <p><strong>Name:</strong> ${enquiry.name}</p>
        <p><strong>Email:</strong> ${enquiry.email}</p>
        <p><strong>Phone:</strong> ${enquiry.phone}</p>
        <p><strong>Course:</strong> ${enquiry.course_title}</p>
        <p><strong>Message:</strong><br>${enquiry.message}</p>
      `
    };

    // ✅ Step 3: Send email
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');

    res.status(200).json({ message: 'Inquiry submitted and email sent successfully' });

  } catch (err: any) {
    console.error('Server Error:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}
