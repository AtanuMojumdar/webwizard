const USER_NAME = process.env.MAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;
import nodemailer from 'nodemailer';



async function sendMail(email){
    try{
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: USER_NAME,
            pass: APP_PASSWORD,
        },
    });
    const mailOptions = {
        from : 'atanu19mojumdar@gmail.com',
        to: email,
        subject: "WebWizard Registration",
        html: "<p>Thanks for signing up for WebWizard</p> <a href='https://docs.google.com/forms/d/e/1FAIpQLScuGijufEPYqpIBDBUbYUUESWWAzOKX2bN6NP9lIp6p_iBEzQ/viewform?usp=sf_link'>Workshop Registration Link</a> <br/> <br/> <p>Other links:</p> <a href='https://webwizard-omega.vercel.app/webwizardworkshopbrief.pdf'>Workshop Brief</a> &nbsp; </br> <a href='https://webwizard-omega.vercel.app/webwizardposter.png'>Workshop Poster</a> &nbsp; </br> <a href='https://webwizard-omega.vercel.app/howinternetworks.pdf'>Workshop Outline</a>  "
      }
    const mailresponse = await transporter.sendMail(mailOptions);
    return mailresponse;
}
catch(err){
    console.log('Mail Error!')
}

}

export default sendMail;