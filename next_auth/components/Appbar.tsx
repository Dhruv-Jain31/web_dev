"use client"

import { useRouter } from "next/navigation"
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const router = useRouter();
    const session = useSession();
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

        <div>
            {JSON.stringify(session)} {/*we can see the details of session easily*/}
        </div>
    </>
    )
}