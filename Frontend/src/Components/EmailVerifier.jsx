import React from "react";
import { useState } from "react";

export default function EmailVerifier({ email }) {

    const [verificationCode, setVerificationCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
        <form className="email-verifier" onSubmit={(e) => handleSubmit(e)}>
            <h1>Enter 6-digit verification code</h1>
            <p>A 6-digit code has been sent to {email}</p>
            <input
                type="number"
                value={verificationCode}
                onInput={(e) => setVerificationCode(e.target.value)}
            />
        </form>
        </div>
    )
}