# Email Configuration Setup Guide

## Gmail Setup for Distributor Applications

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings
- Enable 2-Factor Authentication if not already enabled

### 2. Generate App Password
- Go to Google Account > Security > 2-Step Verification
- Scroll down to "App passwords"
- Select "Mail" and your device
- Copy the generated 16-character password

### 3. Environment Variables
Create a `.env.local` file in your project root with:

\`\`\`env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PETO_GROUP_EMAIL=distributors@petogroup.com
\`\`\`

### 4. Security Notes
- Never commit `.env.local` to version control
- Use app-specific passwords, not your regular Gmail password
- Consider using a dedicated business Gmail account
- For production, use environment variables in your hosting platform

### 5. Testing
- Test the form submission in development
- Check both the recipient email and sender confirmation
- Verify emails don't go to spam folder

### 6. Production Deployment
For Vercel deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the same variables as in your `.env.local`

### 7. Alternative Email Services
If you prefer other email services:
- Update the transporter configuration in `actions/distributor-action.ts`
- Supported services: Gmail, Outlook, Yahoo, SendGrid, etc.
