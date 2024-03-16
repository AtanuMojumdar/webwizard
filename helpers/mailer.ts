const USER_NAME = process.env.MAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;
import nodemailer from 'nodemailer';



async function sendMail(email: String){
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
        subject: "Testing",
        html: "<p>Test is for testing purpose</p><br/> <a href='http://localhost:3000/howinternetworks.pdf'>Workshop Outline</a>"
      }
    const mailresponse = await transporter.sendMail(mailOptions);
    return mailresponse;
}
catch(err){
    console.log('Mail Error!')
}

}

export default sendMail;