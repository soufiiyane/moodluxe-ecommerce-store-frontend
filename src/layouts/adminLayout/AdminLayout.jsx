import React from 'react'
import AdminHeader from "../../components/adminHeader/AdminHeader";
import AdminFooter from "../../components/adminFooter/AdminFooter";

const AdminLayout = ({children})=>{

    return(
        <>
            <div className={"flex flex-row-reverse w-full relative"}>
                <div
                    className={`w-screen`}>
                    <AdminHeader/>
                    <main>{children}</main>
                    <AdminFooter/>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
