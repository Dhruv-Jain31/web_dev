import { Appbar } from "@/components/Appbar";

import { NEXT_AUTH } from "@/app/lib/auth"

import { getServerSession } from "next-auth"; // it is there to render session details on a server component

export default async function page () {
    const session = await getServerSession(NEXT_AUTH);

    return(
        <>
            <div>
                <Appbar />
            </div>

            <div>
                {JSON.stringify(session)}
            </div>
        </>
    )
}