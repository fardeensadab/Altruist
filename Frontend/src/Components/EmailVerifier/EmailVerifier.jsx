import React, { useState, useEffect, useRef } from "react";
import "./EmailVerifier.css";

export default function EmailVerifier({ email }) {
    const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
    const inputsRef = useRef([]);

    const handleInputChange = (e, index) => {
        const { value } = e.target;

        // limit input to single digit
        if (value.length > 1) {
            return;
        }

        const newVerificationCode = [...verificationCode];
        newVerificationCode[index] = value;

        setVerificationCode(newVerificationCode);

        // Move to the next input box if a digit is entered
        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }

        // Move to the previous input box if backspace is pressed
        if (!value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert the array of digits into a single string
        const code = verificationCode.join("");
        console.log("Verification Code Submitted:", code);
        // verification logic here
    };

    return (
        <div className="container" id="emailVerifierContainer">
            <form className="email-verifier" onSubmit={handleSubmit}>
                <h1>Enter 6-digit Verification Code</h1>
                <p>A 6-digit code has been sent to {email}</p>
                <div className="input-container">
                    {verificationCode.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleInputChange(e, index)}
                            ref={(el) => (inputsRef.current[index] = el)}
                            className="verification-input"
                            aria-label={`Digit ${index + 1}`}
                        />
                    ))}
                </div>
                <button type="submit" className="button">Verify</button>
            </form>
        </div>
    );
}
