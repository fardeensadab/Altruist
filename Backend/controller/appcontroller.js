const nodemailer = require('nodemailer');
//const Mailgen = require('mailgen');



const signup = async(req, res) => {

    // for now using testing account
    // real mail pore dekha jabe
        let testAccount=await nodemailer.createTestAccount();
    
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });
    
        let message = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Thanks for registering", // Subject line
            text: "Successfully Register with us.", // plain text body
            html: "<b>Successfully Register with us.</b> <br> Hope you have a good time with us", // html body
          }

          transporter.sendMail(message).then((info) => {
            return res.status(201)
            .json({ 
                msg: "you should receive an email",
                info : info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            })
        }).catch(error => {
            return res.status(500).json({ error })
        })
    
        // res.status(201).json("Signup Successfully...!");
    }

const getbill = (req, res) => {
    res.status(201).json("bill has been sent");
}

module.exports = {
    signup,
    getbill
}
