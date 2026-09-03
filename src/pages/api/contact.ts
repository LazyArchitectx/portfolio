import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Hook up your email provider here (e.g., SendGrid, Resend, Nodemailer)
    // For now, we'll log it to your server console and return success
    console.log(`New contact submission from ${name} (${email}): ${message}`);

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Something went wrong on the server.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};