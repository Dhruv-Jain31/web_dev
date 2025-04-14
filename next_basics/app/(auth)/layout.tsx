import React from "react"

export default function Signin_Layout({ children }:{
    children: React.ReactNode
}){
    return (
        <div>
            <div className="border-b text-center">
            banner for signin page and signup page
            </div>
            {children}
        </div>
    )
}