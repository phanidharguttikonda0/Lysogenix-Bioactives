import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';


interface FormData {
  brandName: string;
  contactPerson: string;
  email: string;
  website: string;
  phone?: string;
  shippingAddress: string;
  productInterest: string;
}

const productMap: Record<string, string> = {
  'elite-cocoons': 'Elite Grade Silk Cocoons',
  'premium-cocoons': 'Premium Grade Silk Cocoons',
  'standard-cocoons': 'Standard Grade Silk Cocoons',
  'beeswax': 'Raw Cleaned Cosmetic Beeswax',
  'elite-cocoons-beeswax': 'Elite Cocoons + Raw Beeswax',
  'premium-cocoons-beeswax': 'Premium Cocoons + Raw Beeswax',
  'standard-cocoons-beeswax': 'Standard Cocoons + Raw Beeswax',
};

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body: FormData = await request.json();

    // Validate required fields
    if (!body.brandName || !body.email || !body.contactPerson || !body.website || !body.shippingAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const productName = productMap[body.productInterest] || body.productInterest;

    // Email to sales team
    const salesEmailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Sample Request</h1>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Brand Information</h2>
          <table style="width: 100%; margin: 15px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569; width: 150px;">Brand Name:</td>
              <td style="padding: 8px 0; color: #1e293b;">${body.brandName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Contact Person:</td>
              <td style="padding: 8px 0; color: #1e293b;">${body.contactPerson}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${body.email}" style="color: #0369a1; text-decoration: none;">${body.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Website:</td>
              <td style="padding: 8px 0; color: #1e293b;"><a href="${body.website}" style="color: #0369a1; text-decoration: none;" target="_blank">${body.website}</a></td>
            </tr>
            ${body.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #1e293b;">${body.phone}</td>
            </tr>
            ` : ''}
          </table>

          <h2 style="color: #0f172a; margin-top: 25px; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Shipping Address</h2>
          <p style="color: #475569; line-height: 1.6; white-space: pre-wrap; margin: 15px 0;">${body.shippingAddress}</p>

          <h2 style="color: #0f172a; margin-top: 25px; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Product Requested</h2>
          <div style="background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px; margin: 15px 0;">
            <p style="color: #78350f; margin: 0; font-weight: 600; font-size: 16px;">${productName}</p>
          </div>

          <div style="background-color: #e0e7ff; padding: 15px; border-radius: 4px; margin-top: 25px; text-align: center;">
            <p style="color: #3730a3; margin: 0; font-weight: 600;">🎯 Action Required</p>
            <p style="color: #3730a3; margin: 5px 0 0 0; font-size: 14px;">Please contact the customer within 24 hours to confirm shipment.</p>
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">LysoGenix Bioactives • Premium Silk Cocoons & Raw Beeswax</p>
        </div>
      </div>
    `;

    // Confirmation email to customer
    const customerEmailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">✓ Request Confirmed</h1>
        </div>
        
        <div style="background-color: #f8fafc; padding: 30px; border-radius: 0;">
          <p style="color: #475569; font-size: 16px; margin-top: 0;">Dear ${body.contactPerson},</p>
          
          <p style="color: #475569; line-height: 1.6;">Thank you for your interest in LysoGenix Bioactives! We've received your sample request for:</p>
          
          <div style="background-color: #fef3c7; padding: 20px; border-left: 4px solid #f59e0b; border-radius: 4px; margin: 20px 0;">
            <p style="color: #78350f; margin: 0; font-weight: 600; font-size: 16px;">${productName}</p>
          </div>

          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <p style="color: #166534; margin: 0;"><strong>What Happens Next:</strong></p>
            <ul style="color: #166534; margin: 10px 0 0 0; padding-left: 20px;">
              <li>Our sales team will review your request</li>
              <li>We'll contact you within 24 hours to confirm details</li>
              <li>Your free sample box will ship promptly</li>
            </ul>
          </div>

          <p style="color: #475569; line-height: 1.6;">We're confident you'll love the quality of our products. If you have any questions in the meantime, feel free to reply to this email.</p>

          <p style="color: #475569; line-height: 1.6;">Best regards,<br><strong>The LysoGenix Bioactives Team</strong></p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px; text-align: center; margin: 0;">
            LysoGenix Bioactives • Premium Silk Cocoons & Raw Beeswax for Indie Cosmetic Brands
          </p>
        </div>
      </div>
    `;

    // Send email to sales team
    const { error: salesError } = await resend.emails.send({
      from: 'LysoGenix Bioactives <sales@lysogenix.in>',
      to: 'sales@lysogenix.in',
      subject: `🎯 New Sample Request: ${body.brandName}`,
      html: salesEmailHtml,
    });

    if (salesError) {
      console.error('Sales email failed to send:', salesError);
      return NextResponse.json(
        { error: `Delivery Error: ${salesError.message}` },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { error: customerError } = await resend.emails.send({
      from: 'LysoGenix Bioactives <sales@lysogenix.in>',
      to: body.email,
      subject: 'Your Sample Request Confirmed - LysoGenix Bioactives',
      html: customerEmailHtml,
    });

    if (customerError) {
      console.error('Customer email failed to send:', customerError);
      return NextResponse.json(
        { error: `Customer Delivery Error: ${customerError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
