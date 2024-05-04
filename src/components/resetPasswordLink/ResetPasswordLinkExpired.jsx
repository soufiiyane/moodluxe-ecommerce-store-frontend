import React from 'react';
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import {CiFaceFrown} from "react-icons/ci";
import resendResetPasswordEmail from "../../service/customerRequests/resendResetPasswordEmail";

const ResetPasswordLinkExpired = ({token}) => {
    const handleResendEmailClick = ()=>{
        resendResetPasswordEmail(token)
            .then(response=>{
                console.log("resend email success!");
            })
            .catch(error=>{
                console.log("error resending email!");
            })
    }

    return (
        <HomeLayout>
            <section className={"h-[85vh] bg-secondaryBgColor"}>
                <div className={"px-8 py-16 max-w-[700px] text-center mx-auto"}>
                    <CiFaceFrown className={"text-white text-9xl mx-auto"}/>
                    <div className={"text-white leading-8"}>
                        <h1 className={"text-3xl py-8 font-semibold"}>Password reset</h1>
                        <p>Either the link has already expired or the link was usd to change the password. we can send you the link again. </p>
                        <button className={"bg-blue-500 px-5 py-2 mt-6 rounded-lg font-semibold disabled:bg-gray-400"} onClick={handleResendEmailClick}>Resend reset password link</button>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}

export default ResetPasswordLinkExpired;