"use client"

import { useRouter } from "next/navigation"
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
    const router = useRouter();
    return(
    <>
        <div>
        <button onClick={() => {
            signIn();
        }}>Signin</button>
        </div>

        <div>
        <button onClick={() => {
            signOut();
        }}>SignOut</button>
        </div>
    </>
    )
}