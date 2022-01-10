const nodemailer = require("nodemailer")

class Mailer {
    static sendEmail(target, subject, body) {
        //error? success?
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })

        transporter.sendMail({
            from: 'emailscheduler.java@gmail.com',
            to: target,
            subject: subject,
            text: body
        }, function (err, info) {
            if (err) {
                //Exception
                console.error(err)
            } else {
                //Success
            }
        })
    }
}

module.exports = Mailer