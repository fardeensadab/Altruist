import React from "react";
import { useState } from "react";
import {LoginForm} from "./LoginForm/LoginForm"
import {SignUp_NGO} from "./SignUp/SignUp_NGO"

export default function LoginAndRegForms() {
    const [isLogin, setIsLogin] = useState(true);

    return <>

        {isLogin ? (
            <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
            <SignUp_NGO onSwitch={() => setIsLogin(true)} />
        )}
    </>

}