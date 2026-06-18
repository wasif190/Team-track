import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Team track',
      link: 'https://teamtrack.com',
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  // now sending the email, above are just preparation
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: 'info@teamtrack.com',
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error('Email service failed, please check mailtrap credentials');
    console.error(error);
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our app!, we're excited to have you on board.",
      action: {
        instructions: 'To verify your email please click on the following button.',
        button: {
          color: '#22BC66',
          text: 'Verify your email',
          link: verificationUrl,
        },
      },
      outro: 'Need help, or have questions? just reply to this email.',
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: 'We got a request to reset the password of your account',
      action: {
        instructions: 'To reset your password click on the following button or link',
        button: {
          color: '#22BC66',
          text: 'Reset password',
          link: passwordResetUrl,
        },
      },
      outro: 'Need help, or have questions? just reply to this email.',
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent, sendEmail };
