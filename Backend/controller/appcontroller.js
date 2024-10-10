const nodemailer = require('nodemailer');
const crypto = require('crypto');

// to store the code in memory
const verificationCodes = new Map();


const generateSecureVerificationCode = () => {
    return crypto.randomInt(100000, 999999); //besi secure code hmmm
};


const signup = async (req, res) => {
    try {
        const { email } = req.body; 

        
        const verificationCode = generateSecureVerificationCode();

        
        verificationCodes.set(email, verificationCode);

        setTimeout(() => {
            verificationCodes.delete(email); 
            console.log(`Verification code for ${email} expired.`);
        }, 1200000); // 20 minutes brother

        // right now its test account kosto
        let testAccount = await nodemailer.createTestAccount();

        
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // Use true for 465 (SSL), false for other ports
            auth: {
                user: testAccount.user, 
                pass: testAccount.pass, 
            },
        });

        // Define the email message
        let message = {
            from: '"Fred Foo 👻" <foo@example.com>', // Sender address
            to: "nirjon6482@gmail.com", // Send to the user's email
            subject: "Email Verification", // Subject line
            text: `Your verification code is: ${verificationCode}`, // Plain text body
            html: `<b>Your verification code is: ${verificationCode}</b> <br> Please use this code to verify your account.`, // HTML body
        };

        // Send the email
        let info = await transporter.sendMail(message);

        // Respond with a success message
        return res.status(201).json({
            msg: "Verification email sent",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
             // URL for previewing the email in Ethereal
        });
    } catch (error) {
        console.error("Error sending email:", error); 
        return res.status(500).json({ error: error.message }); 
    }
};


const verify = (req, res) => {
    const { email, code } = req.body; 

    
    const storedCode = verificationCodes.get(email);

    if (!storedCode) {
        return res.status(400).json({ msg: "No verification code found for this email or it has expired" });
    }

   
    if (parseInt(code) === storedCode) {
        
        verificationCodes.delete(email);
        return res.status(200).json({ msg: "Email verified successfully" });
    } else {
        return res.status(400).json({ msg: "Invalid verification code" });
    }
};


module.exports = {
    signup,
    verify
};
